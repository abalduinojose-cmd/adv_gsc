import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variante?: "primario" | "secundario" | "primario-claro" | "contorno-claro";
  className?: string;
  /** Contexto de WhatsApp para o evento de conversão (data attribute). */
  waContext?: string;
  ariaLabel?: string;
  externo?: boolean;
  /** Ícone à esquerda do rótulo (ex.: WhatsApp). */
  icone?: React.ReactNode;
  /** Some com a seta que desliza no hover. */
  semSeta?: boolean;
};

/**
 * Pílula com elevação sutil no hover e brilho diagonal que atravessa o botão
 * (só no primário, e só quando o usuário aceita movimento). O toque afunda
 * levemente — feedback tátil sem deslocar o layout.
 */
const base =
  "group/btn relative inline-flex min-h-12 cursor-pointer items-center justify-center gap-2.5 overflow-hidden rounded-full px-6 py-3 text-corpo font-semibold " +
  "transition-[background-color,color,border-color,box-shadow,translate] duration-200 ease-arco " +
  "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.985] motion-reduce:hover:translate-y-0";

const variantes = {
  primario: "bg-graphite text-ice shadow-botao hover:bg-graphite-hover hover:shadow-botao-hover",
  "primario-claro": "bg-ice text-graphite shadow-botao hover:bg-white hover:shadow-botao-hover",
  secundario:
    "border border-petrol/50 bg-transparent text-graphite hover:border-graphite hover:bg-brand-50",
  "contorno-claro":
    "border border-ice/35 bg-ice/10 text-ice backdrop-blur hover:border-ice/70 hover:bg-ice/20",
} as const;

/**
 * CTA em forma de link real: funciona sem JavaScript.
 * O rastreamento de clique é delegado (ver Consentimento) via data-wa-context.
 */
export function ButtonLink({
  href,
  children,
  variante = "primario",
  className,
  waContext,
  ariaLabel,
  externo,
  icone,
  semSeta,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={cn(base, variantes[variante], className)}
      data-wa-context={waContext}
      aria-label={ariaLabel}
      {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {/* brilho que atravessa no hover */}
      {(variante === "primario" || variante === "primario-claro") && (
        <span aria-hidden="true" className="btn-brilho" />
      )}
      {icone}
      <span className="relative">{children}</span>
      {!semSeta && (
        <ArrowRight
          className="ease-arco relative size-4 shrink-0 transition-transform duration-200 group-hover/btn:translate-x-1 motion-reduce:transition-none"
          strokeWidth={2.2}
          aria-hidden
        />
      )}
    </a>
  );
}
