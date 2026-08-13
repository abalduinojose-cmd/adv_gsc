"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { MenuMobile } from "./MenuMobile";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#areas", rotulo: "Áreas de atuação" },
  { href: "/#como-funciona", rotulo: "Como funciona" },
  { href: "/sobre", rotulo: "Sobre Gisele" },
  { href: "/#depoimentos", rotulo: "Depoimentos" },
  { href: "/#faq", rotulo: "Dúvidas" },
];

/**
 * Na home o cabeçalho começa transparente, sobreposto ao vídeo do hero, e
 * assume o fundo claro assim que a pessoa rola. Nas demais páginas é sempre
 * sólido.
 */
export function Header() {
  const naHome = usePathname() === "/";
  const [rolou, setRolou] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    if (!naHome) return;
    const aoRolar = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        setRolou(window.scrollY > 40);
        ticking.current = false;
      });
    };
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, [naHome]);

  const sobreposto = naHome && !rolou;

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-colors duration-300",
        // na home o hero passa por trás do cabeçalho
        naHome && "-mb-16",
        sobreposto
          ? "border-b border-transparent bg-transparent"
          : "border-borda/60 bg-surface/90 border-b backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="shrink-0">
          <Logo tom={sobreposto ? "claro" : "escuro"} className="text-[13px] sm:text-[14px]" />
        </Link>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "text-legenda py-2 font-medium transition-colors duration-200",
                    sobreposto
                      ? "text-ice/85 hover:text-ice [text-shadow:0_1px_10px_rgb(15_25_28/0.5)]"
                      : "text-text-muted hover:text-graphite",
                  )}
                >
                  {link.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={buildWhatsAppUrl({ context: "geral" })}
            data-wa-context="header"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "text-legenda hidden min-h-11 items-center rounded-full px-5 font-semibold transition-colors duration-200 sm:inline-flex",
              sobreposto
                ? "bg-ice/15 text-ice border-ice/30 hover:bg-ice hover:text-graphite border backdrop-blur"
                : "bg-graphite text-ice hover:bg-graphite-hover",
            )}
          >
            Falar no WhatsApp
          </a>
          <MenuMobile claro={sobreposto} />
        </div>
      </div>
    </header>
  );
}
