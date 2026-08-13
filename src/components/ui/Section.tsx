import { cn } from "@/lib/utils";
import { Container } from "./Container";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  /** Fundo da seção: claro (padrão), tintado ou escuro. */
  tom?: "claro" | "tintado" | "escuro";
  /** aria-labelledby do heading interno, quando houver. */
  labelledBy?: string;
};

const tons = {
  claro: "bg-surface",
  tintado: "bg-surface-alt",
  escuro: "bg-surface-dark text-text-inverse",
} as const;

export function Section({ id, children, className, tom = "claro", labelledBy }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("py-16 sm:py-24", tons[tom], className)}
    >
      <Container>{children}</Container>
    </section>
  );
}

/** Cabeçalho padrão de seção: rótulo com meio-arco + título. */
export function TituloSecao({
  rotulo,
  titulo,
  id,
  tom = "claro",
  className,
}: {
  rotulo: string;
  titulo: string;
  id: string;
  tom?: "claro" | "tintado" | "escuro";
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)} data-reveal>
      <p
        className={cn(
          "text-legenda flex items-center gap-2.5 font-medium",
          tom === "escuro" ? "text-mist" : "text-text-muted",
        )}
      >
        {/* meio-arco: a assinatura da marca em miniatura */}
        <svg width="22" height="12" viewBox="0 0 22 12" aria-hidden="true" className="shrink-0">
          <path
            d="M1 11a10 10 0 0 1 20 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className={tom === "escuro" ? "text-brand" : "text-brand"}
          />
        </svg>
        {rotulo}
      </p>
      <h2 id={id} className="text-titulo mt-3">
        {titulo}
      </h2>
    </div>
  );
}
