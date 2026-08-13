import { Section, TituloSecao } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { situacoes } from "@/content/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

/**
 * "Isso aconteceu com você?" — a seção de identificação.
 * Frases na linguagem de quem vive o problema, não no juridiquês da resposta.
 */
export function Situacoes() {
  return (
    <Section id="situacoes" tom="escuro" labelledBy="titulo-situacoes">
      <TituloSecao
        id="titulo-situacoes"
        tom="escuro"
        rotulo="Isso aconteceu com você?"
        titulo="Histórias que chegam todos os dias ao nosso WhatsApp"
      />

      <ul className="mt-10 grid gap-3.5 md:grid-cols-2">
        {situacoes.map((frase, i) => (
          <li
            key={frase}
            data-reveal
            style={{ transitionDelay: `${(i % 2) * 80}ms` }}
            className="canto-arco-inverso border-petrol/40 bg-graphite-deep flex gap-4 border p-5"
          >
            {/* aspas em arco: a marca pontuando cada voz */}
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
            <p className="text-corpo text-ice/90">{frase}</p>
          </li>
        ))}
      </ul>

      <div
        className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
        data-reveal
      >
        <ButtonLink
          href={buildWhatsAppUrl({ context: "situacoes" })}
          waContext="situacoes"
          externo
          variante="primario-claro"
        >
          Me identifiquei, quero entender meu caso
        </ButtonLink>
        <p className="text-legenda text-mist">
          Cada situação dessas tem um caminho jurídico. A resposta começa com uma conversa.
        </p>
      </div>
    </Section>
  );
}
