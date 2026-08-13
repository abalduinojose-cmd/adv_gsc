import { cn } from "@/lib/utils";

/**
 * <Arc /> — o elemento-assinatura do site.
 *
 * O arco do monograma da GSC reaparece em escalas diferentes:
 * - "hero": arco amplo que se desenha uma vez no carregamento
 * - "divisor": meio-arco discreto entre blocos de conteúdo
 * - "passo": círculo que se fecha progressivamente nos passos do processo
 */

export function ArcHero({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 560"
      fill="none"
      aria-hidden="true"
      className={cn("pointer-events-none select-none", className)}
    >
      {/* arco principal: desenha-se no load (única coreografia da página) */}
      <path
        d="M40 540 A 240 240 0 0 1 520 540"
        stroke="var(--color-brand)"
        strokeWidth="2.5"
        strokeLinecap="round"
        pathLength={1}
        className="arco-desenha"
      />
      {/* eco interno, estático e mais sutil */}
      <path
        d="M96 540 A 184 184 0 0 1 464 540"
        stroke="var(--color-mist)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

export function ArcDivisor({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 26"
      width="120"
      height="26"
      fill="none"
      aria-hidden="true"
      className={cn("select-none", className)}
    >
      <path
        d="M10 24 A 68 68 0 0 1 110 24"
        stroke="var(--color-brand)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M34 24 A 36 36 0 0 1 86 24"
        stroke="var(--color-mist)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

/**
 * Círculo que se fecha conforme o passo avança: ¼, ½, ¾ e inteiro.
 * A numeração aqui é sequência real do atendimento, não decoração.
 */
export function ArcPasso({
  numero,
  total,
  className,
}: {
  numero: number;
  total: number;
  className?: string;
}) {
  const fracao = numero / total;
  const raio = 26;
  const circunferencia = 2 * Math.PI * raio;
  return (
    <span className={cn("relative inline-flex size-16 items-center justify-center", className)}>
      <svg viewBox="0 0 60 60" className="absolute inset-0 size-full -rotate-90" aria-hidden="true">
        <circle
          cx="30"
          cy="30"
          r={raio}
          stroke="var(--color-brand-100)"
          strokeWidth="2.5"
          fill="none"
        />
        <circle
          cx="30"
          cy="30"
          r={raio}
          stroke="var(--color-brand)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${circunferencia * fracao} ${circunferencia}`}
        />
      </svg>
      <span className="font-display text-entre text-graphite" aria-hidden="true">
        {numero}
      </span>
    </span>
  );
}
