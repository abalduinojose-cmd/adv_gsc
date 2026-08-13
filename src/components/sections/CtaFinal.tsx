import { MessageCircle, Clock, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { IconeInstagram } from "@/components/ui/IconeInstagram";
import { site } from "@/content/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const garantias = [
  { icone: MessageCircle, texto: "Conversa direta pelo WhatsApp" },
  { icone: Clock, texto: site.horario },
  { icone: MapPin, texto: "Atendemos todo o Brasil" },
] as const;

/**
 * Fecho da página: painel escuro com a mesma gramática do resto (arco,
 * matriz de pontos, canto assimétrico) e um único caminho — o WhatsApp.
 */
export function CtaFinal() {
  return (
    <div id="cta-final" className="bg-surface pb-16 sm:pb-24">
      <Container>
        <div
          className="canto-arco from-graphite via-graphite to-graphite-deep relative isolate overflow-hidden bg-gradient-to-br px-6 py-16 text-center sm:px-12 sm:py-20"
          data-reveal
        >
          {/* matriz de pontos no canto, ecoando o mapa */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute -top-6 -right-6 -z-10 size-64 opacity-[0.18]"
          >
            <defs>
              <pattern id="cta-pontos" width="14" height="14" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.6" fill="var(--color-brand)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-pontos)" />
          </svg>

          {/* halo atrás do botão + arco de fundo */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 mx-auto h-72 w-[36rem] max-w-full rounded-full opacity-60 blur-3xl"
            style={{
              background:
                "radial-gradient(circle at 50% 100%, rgb(130 162 175 / 0.5), transparent 65%)",
            }}
          />
          <svg
            viewBox="0 0 560 280"
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 mx-auto w-[560px] max-w-full opacity-25"
          >
            <path
              d="M40 278 A 240 240 0 0 1 520 278"
              stroke="var(--color-brand)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M96 278 A 184 184 0 0 1 464 278"
              stroke="var(--color-mist)"
              strokeWidth="1.2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          <h2 className="text-titulo text-ice mx-auto max-w-2xl">
            Conte o que aconteceu. <span className="text-mist">A gente cuida do resto.</span>
          </h2>
          <p className="text-corpo text-mist mx-auto mt-4 max-w-xl">
            Sem juridiquês e sem compromisso: você explica o seu caso com as suas palavras e recebe
            uma análise honesta do que dá para fazer.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink
              href={buildWhatsAppUrl({ context: "cta-final" })}
              waContext="cta-final"
              externo
              variante="primario-claro"
              className="w-full sm:w-auto"
            >
              Chamar no WhatsApp — {site.whatsapp.numeroExibicao}
            </ButtonLink>
            <ButtonLink
              href={site.instagram}
              externo
              variante="contorno-claro"
              semSeta
              className="w-full sm:w-auto"
              icone={<IconeInstagram className="size-5 shrink-0" />}
            >
              Ver o Instagram
            </ButtonLink>
          </div>

          {/* três garantias em pílulas de vidro */}
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
            {garantias.map((g) => (
              <li
                key={g.texto}
                className="border-petrol/50 bg-ice/5 text-mist text-legenda flex items-center gap-2 rounded-full border px-4 py-2 backdrop-blur"
              >
                <g.icone className="text-brand size-4 shrink-0" strokeWidth={1.8} aria-hidden />
                {g.texto}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}
