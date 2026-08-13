import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { ArcDivisor } from "@/components/ui/Arc";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { site } from "@/content/site";
import { breadcrumbJsonLd, jsonLdString } from "@/lib/seo";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import fotoMural from "../../../public/img/gisele-mural.jpg";
import fotoLaptop from "../../../public/img/gisele-laptop.jpg";
import fotoTablet from "../../../public/img/gisele-tablet.jpg";

export const metadata: Metadata = {
  title: "Sobre Gisele dos Santos e a GSC Advocacia",
  description:
    "Conheça a advogada previdenciária Gisele dos Santos e a GSC Advocacia: escritório de Petrópolis/RJ com atendimento 100% online contra negativas do INSS em todo o Brasil.",
  alternates: { canonical: "/sobre" },
};

export default function PaginaSobre() {
  return (
    <>
      <div className="bg-surface">
        <Container className="pt-10 pb-14 sm:pt-14 sm:pb-20">
          <nav aria-label="Você está em" className="text-legenda text-text-muted">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="underline-offset-4 hover:underline">
                  Início
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-graphite font-medium">
                Sobre
              </li>
            </ol>
          </nav>

          <div className="mt-8 grid items-start gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
            <div>
              <h1 className="text-display text-graphite">
                Advocacia que fala a sua língua e luta pelo seu direito
              </h1>
              <div className="text-corpo text-text-muted mt-6 max-w-[62ch] space-y-5">
                <p>
                  Sou Gisele dos Santos, advogada previdenciária e fundadora da GSC Advocacia.
                  Trabalho com um único foco: pessoas que pediram um benefício ao INSS e receberam
                  um não — ou que tiveram cortado um benefício do qual dependiam.
                </p>
                <p>
                  Quem chega até nós costuma chegar cansado. Mães com o salário-maternidade negado,
                  famílias que perderam o BPC de uma hora para outra, trabalhadores da roça cujo
                  tempo ninguém quis contar, gente doente carimbada como “apta” numa perícia de
                  minutos. Em comum, todos ouviram um não que não conseguiram entender.
                </p>
                <p>
                  Foi por essas pessoas que o escritório nasceu — e é por elas que ele funciona do
                  jeito que funciona: atendimento pelo WhatsApp, explicação em linguagem simples,
                  documentos por foto, procuração digital e atualização constante do processo. De
                  Petrópolis, acompanhamos famílias de todas as regiões do Brasil.
                </p>
                <p>
                  Aqui, nenhum caso é número. Antes de qualquer medida, você recebe uma análise
                  honesta: se existe caminho, mostramos qual é; se não existe, dizemos com a mesma
                  clareza. É assim que construímos a confiança que aparece nas centenas de
                  avaliações públicas do escritório no Google.
                </p>
              </div>

              <p className="font-display text-entre text-graphite mt-7">
                {site.advogada.tratamento}
                <span className="font-texto text-legenda text-text-muted mt-1 block">
                  OAB {site.advogada.oab} · Direito Previdenciário
                </span>
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={buildWhatsAppUrl({ context: "sobre" })} waContext="sobre" externo>
                  Conversar com a equipe
                </ButtonLink>
                <ButtonLink href="/#areas" variante="secundario">
                  Ver áreas de atuação
                </ButtonLink>
              </div>
            </div>

            <div className="mx-auto w-full max-w-[380px]">
              <div className="janela-arco bg-brand-100 relative aspect-[3/4] overflow-hidden">
                <Image
                  src={fotoMural}
                  alt={`${site.advogada.tratamento} no escritório da GSC Advocacia`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 380px, 84vw"
                  className="object-cover"
                  placeholder="blur"
                />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="canto-arco bg-brand-100 relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={fotoLaptop}
                    alt="Gisele atendendo em seu escritório, ao computador"
                    fill
                    sizes="(min-width: 1024px) 190px, 42vw"
                    className="object-cover"
                    placeholder="blur"
                  />
                </div>
                <div className="canto-arco-inverso bg-brand-100 relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={fotoTablet}
                    alt="Gisele acompanhando processos pelo tablet"
                    fill
                    sizes="(min-width: 1024px) 190px, 42vw"
                    className="object-cover"
                    placeholder="blur"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 flex justify-center" aria-hidden="true">
            <ArcDivisor />
          </div>

          {/* O escritório em três compromissos */}
          <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-3">
            {[
              {
                titulo: "Linguagem simples",
                texto: "Você entende cada etapa do seu processo, sem precisar traduzir juridiquês.",
              },
              {
                titulo: "Análise honesta",
                texto: "Só seguimos com o caso quando existe caminho jurídico de verdade.",
              },
              {
                titulo: "Acompanhamento real",
                texto:
                  "Atualizações pelo WhatsApp do início ao fim, sem sumir depois da procuração.",
              },
            ].map((item) => (
              <div
                key={item.titulo}
                className="canto-arco border-borda shadow-card border bg-white p-6 text-center"
              >
                <h2 className="text-entre text-graphite">{item.titulo}</h2>
                <p className="text-legenda text-text-muted mt-2">{item.texto}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <CtaFinal />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(
            breadcrumbJsonLd([
              { nome: "Início", caminho: "/" },
              { nome: "Sobre", caminho: "/sobre" },
            ]),
          ),
        }}
      />
    </>
  );
}
