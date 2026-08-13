import { cn } from "@/lib/utils";
import { site } from "@/content/site";

/**
 * Lâminas do monograma: três crescentes finos, cada um afinando nas pontas.
 * O feixe é desenhado uma vez e repetido girado 180° — é assim que a marca
 * forma o "S" curvo.
 */
const LAMINAS = [
  "M75 6C45 13 28 26 30 40c0 4 3 8 8 11-4-5-5-10-4-14C37 25 52 15 75 6Z",
  "M75 6C50 16 37 28 38 40c0 4 3 7 7 9-3-4-3-8-2-12C46 27 57 17 75 6Z",
  "M75 6C56 19 47 30 48 39c0 4 2 6 5 8-2-4-2-7-1-10C55 29 62 20 75 6Z",
];

/**
 * Logotipo recriado fielmente ao arquivo da marca:
 * "GSC" em serifada + ADVOCACIA espaçado + barra vertical + monograma "S"
 * de linhas curvas fluidas. Recriado em SVG/CSS para nitidez em qualquer
 * tamanho e para herdar a cor do contexto (claro/escuro).
 */
export function Logo({
  className,
  tom = "escuro",
}: {
  className?: string;
  /** "escuro" = letras grafite (fundo claro); "claro" = letras gelo (fundo escuro). */
  tom?: "escuro" | "claro";
}) {
  const corLetra = tom === "escuro" ? "text-graphite" : "text-ice";
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span className="flex flex-col items-center leading-none">
        <span
          className={cn(
            "font-display text-[1.72em] leading-none font-medium tracking-[0.02em]",
            corLetra,
          )}
        >
          GSC
        </span>
        <span
          className={cn(
            "[margin-inline-end:-0.42em] mt-[0.32em] text-[0.52em] font-light tracking-[0.42em]",
            tom === "escuro" ? "text-petrol" : "text-mist",
          )}
        >
          ADVOCACIA
        </span>
      </span>
      <svg viewBox="0 0 78 96" className="h-[2.7em] w-auto" fill="none" aria-hidden="true">
        {/* barra divisória */}
        <line
          x1="5"
          y1="4"
          x2="5"
          y2="92"
          stroke="currentColor"
          strokeWidth="1.6"
          className={corLetra}
        />
        {/* monograma: feixe de lâminas + o mesmo feixe girado 180° */}
        <g fill="var(--color-brand)">
          {LAMINAS.map((d, i) => (
            <path key={`cima-${i}`} d={d} opacity={1 - i * 0.28} />
          ))}
        </g>
        <g fill="var(--color-brand)" transform="rotate(180 39 48)">
          {LAMINAS.map((d, i) => (
            <path key={`baixo-${i}`} d={d} opacity={1 - i * 0.28} />
          ))}
        </g>
      </svg>
      <span className="sr-only">{site.nome} — página inicial</span>
    </span>
  );
}
