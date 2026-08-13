import Link from "next/link";
import {
  Baby,
  HeartHandshake,
  Sun,
  Stethoscope,
  Flower2,
  FileSearch,
  ArrowRight,
} from "lucide-react";
import { Section, TituloSecao } from "@/components/ui/Section";
import { servicos, type Servico } from "@/content/servicos";

const icones: Record<
  Servico["icone"],
  React.ComponentType<{ className?: string; strokeWidth?: number; "aria-hidden"?: boolean }>
> = {
  baby: Baby,
  helpingHand: HeartHandshake,
  sun: Sun,
  stethoscope: Stethoscope,
  flower: Flower2,
  fileSearch: FileSearch,
};

export function Servicos() {
  return (
    <Section id="areas" tom="tintado" labelledBy="titulo-areas">
      <TituloSecao
        id="titulo-areas"
        rotulo="Áreas de atuação"
        titulo="O benefício que o INSS negou tem nome. Encontre o seu."
      />

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {servicos.map((servico, i) => {
          const Icone = icones[servico.icone];
          return (
            <li key={servico.slug} data-reveal style={{ transitionDelay: `${(i % 3) * 70}ms` }}>
              <Link
                href={`/servicos/${servico.slug}`}
                className="canto-arco group border-borda shadow-card hover:border-petrol flex h-full flex-col border bg-white p-6 transition-colors duration-150"
              >
                <span className="bg-brand-100 text-petrol-deep flex size-12 items-center justify-center rounded-full">
                  <Icone className="size-6" strokeWidth={1.7} aria-hidden />
                </span>
                <h3 className="text-entre text-graphite mt-5">{servico.titulo}</h3>
                <p className="text-legenda text-text-muted mt-2 flex-1">{servico.resumo}</p>
                <span className="text-legenda text-petrol-deep group-hover:text-graphite mt-5 inline-flex items-center gap-1.5 font-semibold transition-colors duration-150">
                  Entenda seu direito
                  <ArrowRight
                    className="size-4 transition-transform duration-150 group-hover:translate-x-0.5"
                    strokeWidth={2}
                    aria-hidden
                  />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
