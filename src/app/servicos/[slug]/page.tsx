import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { ArcDivisor } from "@/components/ui/Arc";
import { Faq } from "@/components/sections/Faq";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { servicos, servicoPorSlug } from "@/content/servicos";
import { breadcrumbJsonLd, faqJsonLd, jsonLdString } from "@/lib/seo";
import { buildWhatsAppUrl, type WhatsAppContext } from "@/lib/whatsapp";

export function generateStaticParams() {
  return servicos.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps<"/servicos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const servico = servicoPorSlug(slug);
  if (!servico) return {};
  return {
    title: servico.tituloLongo,
    description: servico.metaDescricao,
    alternates: { canonical: `/servicos/${servico.slug}` },
    openGraph: { title: servico.tituloLongo, description: servico.metaDescricao },
  };
}

export default async function PaginaServico({ params }: PageProps<"/servicos/[slug]">) {
  const { slug } = await params;
  const servico = servicoPorSlug(slug);
  if (!servico) notFound();

  const relacionados = servicos.filter((s) => s.slug !== servico.slug).slice(0, 3);
  const waContext = servico.slug as WhatsAppContext;

  return (
    <>
      {/* Abertura */}
      <div className="bg-surface relative overflow-hidden">
        <Container className="relative pt-10 pb-12 sm:pt-14 sm:pb-16">
          <nav aria-label="Você está em" className="text-legenda text-text-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="underline-offset-4 hover:underline">
                  Início
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/#areas" className="underline-offset-4 hover:underline">
                  Áreas de atuação
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-graphite font-medium">
                {servico.titulo}
              </li>
            </ol>
          </nav>

          <div className="mt-8 max-w-3xl">
            <h1 className="text-display text-graphite">{servico.tituloLongo}</h1>
            <p className="text-corpo text-text-muted mt-5 max-w-[54ch]">{servico.resumo}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href={buildWhatsAppUrl({ context: waContext })}
                waContext={waContext}
                externo
              >
                Analisar meu caso no WhatsApp
              </ButtonLink>
            </div>
          </div>
        </Container>
      </div>

      {/* Você se reconhece? */}
      <div className="bg-surface-alt py-12 sm:py-16">
        <Container>
          <h2 className="text-titulo text-graphite">Você se reconhece em alguma dessas frases?</h2>
          <ul className="mt-8 grid gap-3.5 md:grid-cols-2">
            {servico.sintomas.map((sintoma) => (
              <li
                key={sintoma}
                className="canto-arco-inverso border-borda shadow-card flex gap-4 border bg-white p-5"
              >
                <svg
                  width="26"
                  height="20"
                  viewBox="0 0 26 20"
                  aria-hidden="true"
                  className="mt-1 shrink-0"
                >
                  <path
                    d="M2 18C2 8 8 3 12 2"
                    fill="none"
                    stroke="var(--color-brand)"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M14 18C14 8 20 3 24 2"
                    fill="none"
                    stroke="var(--color-brand)"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    opacity="0.55"
                  />
                </svg>
                <p className="text-corpo text-text">{sintoma}</p>
              </li>
            ))}
          </ul>
        </Container>
      </div>

      {/* Entenda o direito */}
      <div className="bg-surface py-12 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <article>
              <h2 className="text-titulo text-graphite">Entenda o seu direito</h2>
              <div className="text-corpo text-text-muted mt-6 max-w-[66ch] space-y-5">
                {servico.entenda.map((paragrafo) => (
                  <p key={paragrafo.slice(0, 40)}>{paragrafo}</p>
                ))}
              </div>

              <div className="mt-10 flex justify-start" aria-hidden="true">
                <ArcDivisor className="opacity-70" />
              </div>

              <h2 className="text-titulo text-graphite mt-8">Como ajudamos</h2>
              <div className="text-corpo text-text-muted mt-6 max-w-[66ch] space-y-5">
                {servico.comoAjudamos.map((paragrafo) => (
                  <p key={paragrafo.slice(0, 40)}>{paragrafo}</p>
                ))}
              </div>
            </article>

            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="canto-arco border-borda shadow-card border bg-white p-6">
                <h2 className="text-entre text-graphite flex items-center gap-2.5">
                  <FileText className="text-petrol-deep size-5" strokeWidth={1.7} aria-hidden />
                  Documentos que ajudam
                </h2>
                <p className="text-legenda text-text-muted mt-2">
                  Não precisa ter todos: enviamos a lista certa para o seu caso e orientamos onde
                  conseguir cada um.
                </p>
                <ul className="mt-4 space-y-2.5">
                  {servico.documentos.map((doc) => (
                    <li key={doc} className="text-legenda text-text flex gap-2.5">
                      <Check
                        className="text-petrol mt-0.5 size-4 shrink-0"
                        strokeWidth={2.2}
                        aria-hidden
                      />
                      {doc}
                    </li>
                  ))}
                </ul>
                <ButtonLink
                  href={buildWhatsAppUrl({ context: waContext })}
                  waContext={`${servico.slug}-aside`}
                  externo
                  className="mt-6 w-full"
                >
                  Enviar meus documentos
                </ButtonLink>
              </div>
            </aside>
          </div>
        </Container>
      </div>

      {/* FAQ específico */}
      <Faq
        perguntas={servico.faq}
        rotulo="Dúvidas sobre o tema"
        titulo={`Perguntas frequentes sobre ${servico.titulo.toLowerCase()}`}
      />

      {/* Outras áreas */}
      <div className="bg-surface pb-12 sm:pb-16">
        <Container>
          <h2 className="text-entre text-graphite">Outras áreas que podem interessar</h2>
          <ul className="mt-5 grid gap-4 sm:grid-cols-3">
            {relacionados.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/servicos/${r.slug}`}
                  className="canto-arco group border-borda shadow-card hover:border-petrol flex h-full flex-col border bg-white p-5 transition-colors duration-150"
                >
                  <h3 className="text-corpo text-graphite font-semibold">{r.titulo}</h3>
                  <p className="text-legenda text-text-muted mt-1.5 flex-1">{r.resumo}</p>
                  <span className="text-legenda text-petrol-deep group-hover:text-graphite mt-3 inline-flex items-center gap-1.5 font-semibold">
                    Ver página
                    <ArrowRight className="size-4" strokeWidth={2} aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>

      <CtaFinal />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(faqJsonLd(servico.faq)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(
            breadcrumbJsonLd([
              { nome: "Início", caminho: "/" },
              { nome: "Áreas de atuação", caminho: "/#areas" },
              { nome: servico.titulo, caminho: `/servicos/${servico.slug}` },
            ]),
          ),
        }}
      />
    </>
  );
}
