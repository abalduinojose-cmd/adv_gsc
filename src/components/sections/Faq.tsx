import { Plus } from "lucide-react";
import { Section, TituloSecao } from "@/components/ui/Section";
import type { PerguntaResposta } from "@/content/servicos";

/**
 * Accordion 100% nativo (<details>/<summary>): funciona sem JavaScript,
 * é acessível por teclado e o chevron gira só com CSS.
 */
export function Faq({
  perguntas,
  titulo = "As dúvidas de quem recebeu um não do INSS",
  rotulo = "Perguntas frequentes",
}: {
  perguntas: readonly PerguntaResposta[];
  titulo?: string;
  rotulo?: string;
}) {
  return (
    <Section id="faq" labelledBy="titulo-faq">
      <TituloSecao id="titulo-faq" rotulo={rotulo} titulo={titulo} />
      <div className="divide-borda border-borda mt-10 max-w-3xl divide-y border-y">
        {perguntas.map((item) => (
          <details key={item.pergunta} className="faq-item group">
            <summary className="text-corpo text-graphite hover:text-petrol-deep flex min-h-14 items-center justify-between gap-4 py-4 font-semibold transition-colors duration-150">
              {item.pergunta}
              <span className="faq-seta border-borda text-petrol-deep flex size-8 shrink-0 items-center justify-center rounded-full border">
                <Plus className="size-4" strokeWidth={2} aria-hidden />
              </span>
            </summary>
            <p className="text-corpo text-text-muted max-w-[62ch] pb-6">{item.resposta}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
