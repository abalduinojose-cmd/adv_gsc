"use client";

import { useEffect } from "react";

/**
 * Fades sutis no scroll. Um único IntersectionObserver para a página toda.
 * Sem JavaScript, o atributo data-anima nunca é definido no <html> e todo o
 * conteúdo permanece visível — progressão graciosa de verdade.
 */
export function Revelador() {
  useEffect(() => {
    const html = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    html.setAttribute("data-anima", "");
    const alvos = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("revelado");
            observer.unobserve(entrada.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );
    alvos.forEach((alvo) => observer.observe(alvo));
    return () => {
      observer.disconnect();
      html.removeAttribute("data-anima");
    };
  }, []);

  return null;
}
