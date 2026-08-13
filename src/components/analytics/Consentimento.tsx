"use client";

import { useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import { GoogleAnalytics } from "@next/third-parties/google";

const CHAVE = "gsc-consentimento";
const EVENTO = "gsc-consentimento-mudou";

type Estado = "pendente" | "aceito" | "recusado" | "carregando";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function assinar(notificar: () => void) {
  window.addEventListener(EVENTO, notificar);
  return () => window.removeEventListener(EVENTO, notificar);
}

function lerEstado(): Estado {
  const salvo = window.localStorage.getItem(CHAVE);
  return salvo === "aceito" || salvo === "recusado" ? salvo : "pendente";
}

function decidir(valor: "aceito" | "recusado") {
  window.localStorage.setItem(CHAVE, valor);
  window.dispatchEvent(new Event(EVENTO));
}

/**
 * LGPD: nenhum script de medição carrega antes do aceite.
 * Recusar é tão fácil quanto aceitar, e a escolha fica guardada no aparelho.
 * Sem NEXT_PUBLIC_GA_ID o site funciona normalmente, sem tracking e sem banner.
 */
export function Consentimento() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  // "carregando" no servidor evita flash do banner para quem já decidiu.
  const estado = useSyncExternalStore(assinar, lerEstado, () => "carregando" as const);

  // Conversão: todo clique em link de WhatsApp vira evento, com o contexto
  // de onde a pessoa clicou. Delegado no documento para manter os CTAs
  // como links puros (funcionam sem JavaScript).
  useEffect(() => {
    if (estado !== "aceito") return;
    const aoClicar = (e: MouseEvent) => {
      const alvo = (e.target as HTMLElement).closest<HTMLAnchorElement>("a[data-wa-context]");
      if (!alvo || !window.gtag) return;
      window.gtag("event", "whatsapp_click", {
        context: alvo.dataset.waContext,
        link_url: alvo.href,
      });
    };
    document.addEventListener("click", aoClicar);
    return () => document.removeEventListener("click", aoClicar);
  }, [estado]);

  if (!gaId) return null;

  return (
    <>
      {estado === "aceito" && <GoogleAnalytics gaId={gaId} />}
      {estado === "pendente" && (
        <div
          role="region"
          aria-label="Aviso de privacidade"
          className="border-borda shadow-flutuante fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl rounded-2xl border bg-white p-5"
        >
          <p className="text-legenda text-text">
            Usamos o Google Analytics para entender como o site é usado e melhorá-lo. Nenhum dado é
            coletado antes da sua escolha.{" "}
            <Link href="/politica-de-privacidade" className="underline underline-offset-4">
              Saiba mais
            </Link>
            .
          </p>
          <div className="mt-4 flex gap-3">
            <button
              type="button"
              onClick={() => decidir("recusado")}
              className="border-petrol/60 text-legenda text-graphite hover:bg-brand-50 min-h-11 flex-1 cursor-pointer rounded-full border px-4 font-semibold transition-colors duration-150"
            >
              Recusar
            </button>
            <button
              type="button"
              onClick={() => decidir("aceito")}
              className="bg-graphite text-legenda text-ice hover:bg-graphite-hover min-h-11 flex-1 cursor-pointer rounded-full px-4 font-semibold transition-colors duration-150"
            >
              Aceitar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
