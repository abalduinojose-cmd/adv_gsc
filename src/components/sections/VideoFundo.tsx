"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

type ConexaoLenta = {
  saveData?: boolean;
  effectiveType?: string;
};

type Fontes = {
  desktop: string;
  mobile: string;
  posterDesktop: string;
  posterMobile: string;
};

const CONSULTA_DESKTOP = "(min-width: 768px)";

/** Largura da tela como estado externo (evita setState dentro de efeito).
 *  O nome precisa começar com `use`: é a convenção que o React exige de hooks. */
function useEhDesktop() {
  return useSyncExternalStore(
    (avisar) => {
      const mq = window.matchMedia(CONSULTA_DESKTOP);
      mq.addEventListener("change", avisar);
      return () => mq.removeEventListener("change", avisar);
    },
    () => window.matchMedia(CONSULTA_DESKTOP).matches,
    () => true, // no servidor não há tela; o vídeo só monta no cliente
  );
}

/**
 * Vídeo de fundo do hero: roda sozinho, mudo e em looping, sem nenhum controle.
 *
 * É UM único <video> — a fonte (16:9 ou 9:16) é escolhida pela largura da tela.
 * Renderizar dois e esconder um por CSS não serve: o navegador baixa os dois e
 * o que fica em container oculto nem chega a tocar.
 *
 * Entra depois do `load` para não disputar banda com a imagem (o LCP), e não
 * entra em economia de dados nem em 2G.
 */
export function VideoFundo({ desktop, mobile, posterDesktop, posterMobile }: Fontes) {
  const [entrar, setEntrar] = useState(false);
  const ehDesktop = useEhDesktop();
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const conexao = (navigator as Navigator & { connection?: ConexaoLenta }).connection;
    if (conexao?.saveData || /(^|-)2g/.test(conexao?.effectiveType ?? "")) return;

    let timer: number | undefined;
    const agendar = () => {
      timer = window.setTimeout(() => setEntrar(true), 300);
    };
    if (document.readyState === "complete") agendar();
    else window.addEventListener("load", agendar, { once: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("load", agendar);
    };
  }, []);

  // Alguns navegadores adiam o autoplay: insistimos assim que há imagem.
  const tocar = () => {
    ref.current?.play().catch(() => {});
  };

  if (!entrar) return null;

  return (
    <video
      // key força um <video> novo ao trocar de fonte (ex.: girar o aparelho)
      key={ehDesktop ? "d" : "m"}
      ref={ref}
      className={`video-hero video-hero-entra absolute inset-0 size-full object-cover ${
        ehDesktop ? "object-[62%_35%]" : "object-[50%_22%]"
      }`}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={ehDesktop ? posterDesktop : posterMobile}
      tabIndex={-1}
      onLoadedData={tocar}
      onCanPlay={tocar}
    >
      <source src={ehDesktop ? desktop : mobile} type="video/mp4" />
    </video>
  );
}
