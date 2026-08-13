"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const links = [
  { href: "/#areas", rotulo: "Áreas de atuação" },
  { href: "/#como-funciona", rotulo: "Como funciona" },
  { href: "/sobre", rotulo: "Sobre Gisele" },
  { href: "/#depoimentos", rotulo: "Depoimentos" },
  { href: "/#faq", rotulo: "Dúvidas" },
];

/** Ilha interativa: só o menu do mobile precisa de JavaScript. */
export function MenuMobile({ claro = false }: { claro?: boolean }) {
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = aberto ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [aberto]);

  useEffect(() => {
    if (!aberto) return;
    const fechar = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAberto(false);
    };
    window.addEventListener("keydown", fechar);
    return () => window.removeEventListener("keydown", fechar);
  }, [aberto]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setAberto(true)}
        aria-expanded={aberto}
        aria-controls="menu-mobile"
        aria-label="Abrir menu"
        className={`flex size-11 cursor-pointer items-center justify-center rounded-full transition-colors ${
          claro ? "text-ice hover:bg-ice/15" : "text-graphite hover:bg-brand-50"
        }`}
      >
        <Menu size={24} strokeWidth={1.8} aria-hidden="true" />
      </button>

      {aberto && (
        <div
          id="menu-mobile"
          className="bg-surface fixed inset-0 z-50 flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="flex h-16 items-center justify-between px-5">
            <span className="font-display text-entre text-graphite">Menu</span>
            <button
              type="button"
              onClick={() => setAberto(false)}
              aria-label="Fechar menu"
              className="text-graphite hover:bg-brand-50 flex size-11 cursor-pointer items-center justify-center rounded-full transition-colors"
            >
              <X size={24} strokeWidth={1.8} aria-hidden="true" />
            </button>
          </div>
          <nav
            aria-label="Navegação principal"
            className="flex flex-1 flex-col justify-center px-8"
          >
            <ul className="flex flex-col gap-1">
              {links.map((link, i) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setAberto(false)}
                    className="group font-display text-titulo text-graphite flex min-h-12 items-center gap-4 py-2"
                  >
                    <span
                      className="text-legenda font-texto text-petrol tabular-nums"
                      aria-hidden="true"
                    >
                      0{i + 1}
                    </span>
                    {link.rotulo}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="px-8 pb-10">
            <a
              href={buildWhatsAppUrl({ context: "geral" })}
              data-wa-context="menu"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-graphite text-ice flex min-h-12 items-center justify-center rounded-full px-6 font-semibold"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
