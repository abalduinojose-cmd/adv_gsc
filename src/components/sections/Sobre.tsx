import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";
import fotoEstante from "../../../public/img/gisele-estante.jpg";

export function Sobre() {
  return (
    <Section id="sobre" tom="tintado" labelledBy="titulo-sobre">
      <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="relative mx-auto w-full max-w-[320px] lg:max-w-[380px]" data-reveal>
          <div className="janela-arco bg-brand-100 relative aspect-[3/4] overflow-hidden">
            <Image
              src={fotoEstante}
              alt={`${site.advogada.tratamento} na biblioteca do escritório, em Petrópolis`}
              fill
              sizes="(min-width: 1024px) 380px, (min-width: 640px) 320px, 320px"
              className="object-cover"
              placeholder="blur"
            />
          </div>
          {/* eco do arco atrás da foto */}
          <svg
            viewBox="0 0 100 60"
            aria-hidden="true"
            className="text-brand absolute -bottom-6 -left-8 -z-10 w-40 opacity-60"
          >
            <path
              d="M6 56 A 44 44 0 0 1 94 56"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div data-reveal>
          <p className="text-legenda text-text-muted flex items-center gap-2.5 font-medium">
            <svg width="22" height="12" viewBox="0 0 22 12" aria-hidden="true">
              <path
                d="M1 11a10 10 0 0 1 20 0"
                fill="none"
                stroke="var(--color-brand)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Quem cuida do seu caso
          </p>
          <h2 id="titulo-sobre" className="text-titulo mt-3">
            “Eu vi de perto o que uma negativa do INSS faz com uma família.”
          </h2>
          <div className="text-corpo text-text-muted mt-5 space-y-4">
            <p>
              Sou Gisele dos Santos, advogada previdenciária. Escolhi essa área porque é onde o
              Direito encosta na vida real: no salário-maternidade de quem acabou de ter um filho,
              no BPC de quem mais precisa, na aposentadoria de quem trabalhou a vida inteira.
            </p>
            <p>
              À frente da GSC Advocacia, em Petrópolis, atendo famílias de todo o Brasil de forma
              100% digital, com uma regra que não abro mão: você entende cada passo do seu processo,
              em linguagem simples, sem juridiquês.
            </p>
          </div>
          <p className="font-display text-entre text-graphite mt-5">
            {site.advogada.tratamento}
            <span className="font-texto text-legenda text-text-muted mt-1 block">
              OAB {site.advogada.oab} · Direito Previdenciário
            </span>
          </p>
          <Link
            href="/sobre"
            className="text-corpo text-petrol-deep hover:text-graphite mt-6 inline-flex min-h-11 items-center gap-1.5 font-semibold underline-offset-4 transition-colors duration-150 hover:underline"
          >
            Conhecer a Gisele e o escritório
            <ArrowRight className="size-4" strokeWidth={2} aria-hidden />
          </Link>
        </div>
      </div>
    </Section>
  );
}
