"use client";

import { useEffect, useRef, useState } from "react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

/** Ícone oficial do WhatsApp (o verde da marca só aparece aqui). */
function IconeWhatsApp({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12.04 2a9.9 9.9 0 0 0-8.4 15.13L2.05 22l5-1.55A9.9 9.9 0 1 0 12.04 2Zm5.83 14.13c-.25.7-1.45 1.37-2 1.42-.54.05-1.05.26-3.53-.73-2.98-1.18-4.86-4.23-5-4.43-.15-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.27-.3.59-.37.79-.37.2 0 .39 0 .56.01.18.01.42-.07.66.5.25.6.84 2.06.92 2.21.07.15.12.32.02.52-.1.2-.15.32-.29.5-.15.17-.31.39-.44.52-.15.14-.3.3-.13.6.17.3.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.34 1.45.29.15.46.12.63-.07.17-.2.73-.85.92-1.14.2-.3.39-.25.66-.15.27.1 1.71.8 2 .95.29.15.49.22.56.35.07.12.07.72-.18 1.42Z" />
    </svg>
  );
}

/**
 * Botão flutuante de WhatsApp:
 * aparece após ~400px de rolagem e se recolhe quando o footer entra em cena,
 * para nunca cobrir o conteúdo de contato.
 */
export function WhatsAppFab() {
  const [passouDobra, setPassouDobra] = useState(false);
  const [footerVisivel, setFooterVisivel] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const aoRolar = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        setPassouDobra(window.scrollY > 400);
        ticking.current = false;
      });
    };
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const observer = new IntersectionObserver(([entry]) => setFooterVisivel(entry.isIntersecting), {
      rootMargin: "0px 0px -40px 0px",
    });
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const visivel = passouDobra && !footerVisivel;

  return (
    <a
      href={buildWhatsAppUrl({ context: "geral" })}
      data-wa-context="fab"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a GSC Advocacia no WhatsApp"
      aria-hidden={!visivel}
      tabIndex={visivel ? 0 : -1}
      className={`bg-graphite text-ice shadow-flutuante ease-arco hover:bg-graphite-hover fixed right-4 bottom-4 z-40 flex min-h-12 items-center gap-2.5 rounded-full py-2.5 pr-5 pl-3 font-semibold transition-all duration-300 sm:right-6 sm:bottom-6 ${
        visivel ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-16 opacity-0"
      }`}
    >
      <span className="bg-ice flex size-8 items-center justify-center rounded-full">
        <IconeWhatsApp className="text-whatsapp size-5" />
      </span>
      WhatsApp
    </a>
  );
}
