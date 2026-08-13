"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { IconeInstagram } from "@/components/ui/IconeInstagram";
import { asset } from "@/lib/asset";
import type { Reel } from "@/content/reels";

/**
 * Fachada de vídeo: enquanto ninguém aperta play, o card é só uma imagem
 * otimizada (lazy). No clique, entra o <video> nativo — com play, volume e
 * tela cheia do próprio navegador — e já começa a tocar.
 *
 * Isso evita baixar megabytes de vídeo (e o poster em tamanho cheio) de quem
 * está apenas passando pela página.
 */
export function ReelCard({ reel }: { reel: Reel }) {
  const [tocando, setTocando] = useState(false);

  return (
    <figure className="canto-arco border-borda shadow-card h-full overflow-hidden border bg-white">
      <div className="bg-graphite relative aspect-[9/16] w-full">
        {tocando ? (
          <video
            controls
            autoPlay
            playsInline
            preload="auto"
            className="size-full object-cover"
            aria-label={`Vídeo: ${reel.titulo}`}
          >
            <source src={asset(reel.arquivo)} type="video/mp4" />
          </video>
        ) : (
          <button
            type="button"
            onClick={() => setTocando(true)}
            // a duração aparece no botão, então precisa constar no nome acessível
            aria-label={`Assistir ao vídeo: ${reel.titulo} (${reel.duracao})`}
            className="group/reel absolute inset-0 cursor-pointer"
          >
            <Image
              src={reel.poster}
              alt=""
              fill
              sizes="(min-width: 640px) 320px, 80vw"
              className="object-cover"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"
            />
            <span
              aria-hidden="true"
              className="bg-ice/90 text-graphite ease-arco absolute top-1/2 left-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full backdrop-blur transition-transform duration-200 group-hover/reel:scale-110 motion-reduce:transition-none"
            >
              <Play className="ml-0.5 size-6 fill-current" strokeWidth={1.5} />
            </span>
            <span className="text-ice absolute right-3 bottom-3 rounded-full bg-black/50 px-2.5 py-1 text-[0.75rem] font-medium">
              {reel.duracao}
            </span>
          </button>
        )}
      </div>
      <figcaption className="p-5">
        <h3 className="text-entre text-graphite">{reel.titulo}</h3>
        <p className="text-legenda text-text-muted mt-1.5">{reel.descricao}</p>
        <p className="text-text-muted mt-3 flex items-center gap-2 text-[0.8125rem]">
          <IconeInstagram className="text-brand size-4" />
          @gscadvparamaes
        </p>
      </figcaption>
    </figure>
  );
}
