"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type ConexaoLenta = {
  saveData?: boolean;
  effectiveType?: string;
};

/**
 * O vídeo de fundo do hero só entra depois que a página terminou de carregar:
 * assim a imagem (o LCP) não disputa banda com ele. Quando chega, aparece num
 * fade sobre a mesma cena, então a troca é imperceptível.
 *
 * Ele roda SEMPRE em looping, a pedido da cliente — inclusive para quem tem
 * "reduzir movimento" ligado no sistema. A única exceção é conexão em economia
 * de dados ou 2G, onde baixar o vídeo prejudicaria quem está com internet ruim.
 */
export function VideoFundo({
  src,
  poster,
  className,
}: {
  src: string;
  poster: string;
  className?: string;
}) {
  const [entrar, setEntrar] = useState(false);

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

  if (!entrar) return null;

  return (
    <video
      className={cn("video-hero video-hero-entra absolute inset-0 size-full", className)}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={poster}
      tabIndex={-1}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
