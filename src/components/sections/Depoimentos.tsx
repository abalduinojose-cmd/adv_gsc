import { MoveHorizontal } from "lucide-react";
import { Section, TituloSecao } from "@/components/ui/Section";
import { IconeGoogle } from "@/components/ui/IconeGoogle";
import { depoimentos, type Depoimento } from "@/content/depoimentos";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

function Estrelas() {
  return (
    <span className="flex gap-0.5" role="img" aria-label="5 de 5 estrelas">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="size-4" aria-hidden="true">
          <path
            fill="#FBBC05"
            d="M10 1.7 12.6 7l5.8.6-4.3 3.9 1.2 5.7-5.3-3-5.3 3 1.2-5.7L1.6 7.6 7.4 7Z"
          />
        </svg>
      ))}
    </span>
  );
}

function CardDepoimento({ depoimento, className }: { depoimento: Depoimento; className?: string }) {
  return (
    <figure
      className={cn(
        "card-depoimento canto-arco border-borda shadow-card flex flex-col border bg-white p-5",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <Estrelas />
        <IconeGoogle className="size-4 shrink-0 opacity-80" />
      </div>
      <blockquote className="text-legenda text-text mt-3 flex-1">
        <p className="whitespace-pre-line">{depoimento.texto}</p>
      </blockquote>
      <figcaption className="mt-4 flex items-center gap-3">
        {/* Foto pública do autor, servida pelo Google */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={depoimento.foto}
          alt=""
          width={44}
          height={44}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="bg-brand-100 size-11 shrink-0 rounded-full object-cover"
        />
        <span className="min-w-0">
          <span className="text-legenda text-graphite block truncate font-semibold">
            {depoimento.nome}
          </span>
          <span className="text-text-muted block text-[0.8125rem]">
            {depoimento.quando} · no Google
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

/** Distribui os depoimentos em N colunas, preservando a ordem. */
function emColunas(lista: readonly Depoimento[], colunas: number): Depoimento[][] {
  const resultado: Depoimento[][] = Array.from({ length: colunas }, () => []);
  lista.forEach((item, i) => resultado[i % colunas].push(item));
  return resultado;
}

export function Depoimentos() {
  const colunas = emColunas(depoimentos, 3);
  const duracoes = ["96s", "120s", "108s"];

  // Mobile: os depoimentos de leitura rápida abrem o trilho; os textões vêm depois.
  const ordemMobile = [...depoimentos].sort((a, b) => {
    const curto = (t: string) => (t.length <= 320 ? 0 : 1);
    return curto(a.texto) - curto(b.texto);
  });

  return (
    <Section id="depoimentos" labelledBy="titulo-depoimentos">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <TituloSecao
          id="titulo-depoimentos"
          rotulo="Avaliações no Google"
          titulo="Quem já passou por isso conta melhor do que nós"
        />
        <a
          href={site.googlePerfil}
          target="_blank"
          rel="noopener noreferrer"
          data-reveal
          className="border-borda hover:border-petrol inline-flex min-h-11 shrink-0 items-center gap-3 self-start rounded-full border bg-white px-5 py-2.5 transition-colors duration-150 md:self-auto"
        >
          <span className="font-display text-titulo text-graphite leading-none">
            {site.google.nota}
          </span>
          <span className="text-legenda text-text-muted">
            <Estrelas />
            {site.google.totalAvaliacoes} avaliações
          </span>
        </a>
      </div>

      {/* Desktop: mural de três colunas em deslize lento (pausa ao passar o mouse). */}
      <div className="mural mt-10 hidden gap-5 lg:grid lg:grid-cols-3" data-reveal>
        {colunas.map((coluna, i) => (
          <div key={i} className="mural-viewport">
            <div
              className="mural-coluna flex flex-col gap-5 pb-5"
              style={{ "--mural-dur": duracoes[i] } as React.CSSProperties}
            >
              {coluna.map((d) => (
                <CardDepoimento key={d.nome} depoimento={d} />
              ))}
              {/* segunda passagem para o laço contínuo — decorativa */}
              <div className="mural-copia contents" aria-hidden="true">
                {coluna.map((d) => (
                  <CardDepoimento key={`copia-${d.nome}`} depoimento={d} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile e tablet: trilho arrastável (scroll-snap nativo, sem JavaScript). */}
      <div className="mt-8 lg:hidden">
        {/* tabIndex: quem navega por teclado precisa alcançar o trilho para rolá-lo */}
        <ul
          className="trilho"
          tabIndex={0}
          aria-label={`${depoimentos.length} avaliações do Google, role para o lado`}
        >
          {ordemMobile.map((d) => (
            <li key={d.nome} className="w-[80vw] max-w-[330px]">
              {/* altura uniforme: textos longos desvanecem no fim do card,
                  mas seguem íntegros no HTML e no perfil do Google */}
              <CardDepoimento depoimento={d} className="card-trilho h-[23rem]" />
            </li>
          ))}
        </ul>
        <div className="text-text-muted mt-3 flex items-center gap-2 text-[0.8125rem]">
          <MoveHorizontal className="size-4 shrink-0" strokeWidth={1.8} aria-hidden />
          Arraste para o lado para ler as {depoimentos.length} avaliações.
        </div>
      </div>
    </Section>
  );
}
