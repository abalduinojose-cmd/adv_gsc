import { Section, TituloSecao } from "@/components/ui/Section";
import { ArcPasso } from "@/components/ui/Arc";
import { ButtonLink } from "@/components/ui/Button";
import { passos } from "@/content/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

/**
 * O arco que se fecha a cada passo (¼ → ½ → ¾ → inteiro) é a assinatura da
 * marca aplicada a uma sequência real: quando o círculo completa, o caso
 * está encaminhado.
 */
export function ComoFunciona() {
  return (
    <Section id="como-funciona" labelledBy="titulo-como-funciona">
      <TituloSecao
        id="titulo-como-funciona"
        rotulo="Como funciona"
        titulo="Do primeiro oi no WhatsApp ao processo encaminhado"
      />

      <ol className="mt-10 grid gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {passos.map((passo, i) => (
          <li key={passo.titulo} data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
            <ArcPasso numero={i + 1} total={passos.length} />
            <h3 className="text-entre text-graphite mt-4">{passo.titulo}</h3>
            <p className="text-legenda text-text-muted mt-2">{passo.texto}</p>
          </li>
        ))}
      </ol>

      <div className="mt-10" data-reveal>
        <ButtonLink
          href={buildWhatsAppUrl({ context: "como-funciona" })}
          waContext="como-funciona"
          externo
        >
          Começar pelo passo 1
        </ButtonLink>
      </div>
    </Section>
  );
}
