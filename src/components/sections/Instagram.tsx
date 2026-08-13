import { Section, TituloSecao } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { IconeInstagram } from "@/components/ui/IconeInstagram";
import { ReelCard } from "./ReelCard";
import { reels } from "@/content/reels";
import { site } from "@/content/site";

/**
 * "No dia a dia" — os vídeos reais do Instagram, com play e volume sob controle
 * do visitante (nada toca sozinho). No mobile o trilho arrasta para o lado;
 * no desktop vira grade de três.
 *
 * Cada card é uma fachada (ver ReelCard): o vídeo só é baixado no clique.
 */
export function Instagram() {
  return (
    <Section id="instagram" tom="tintado" labelledBy="titulo-instagram">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <TituloSecao
          id="titulo-instagram"
          rotulo="No dia a dia"
          titulo="Dúvidas de verdade, respondidas em vídeo"
        />
        <ButtonLink
          href={site.instagram}
          externo
          variante="secundario"
          semSeta
          className="self-start md:self-auto"
          icone={<IconeInstagram className="size-5 shrink-0" />}
        >
          Seguir @gscadvparamaes
        </ButtonLink>
      </div>

      <p className="text-corpo text-text-muted mt-5 max-w-[58ch]" data-reveal>
        Toda semana a Dra. Gisele responde no Instagram as perguntas que mais chegam pelo WhatsApp.
        Assista abaixo e siga o perfil para acompanhar o dia a dia do escritório.
      </p>

      {/* Mobile: trilho arrastável. Desktop: grade. */}
      <ul
        className="trilho mt-8 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 lg:grid-cols-3"
        tabIndex={0}
        aria-label="Vídeos do Instagram do escritório, role para o lado"
      >
        {reels.map((reel, i) => (
          <li
            key={reel.arquivo}
            className="w-[78vw] max-w-[300px] sm:mx-auto sm:w-full sm:max-w-[320px]"
            data-reveal
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <ReelCard reel={reel} />
          </li>
        ))}
      </ul>

      <p className="text-text-muted mt-4 text-[0.8125rem] sm:hidden" aria-hidden="true">
        Arraste para o lado para ver mais vídeos.
      </p>
    </Section>
  );
}
