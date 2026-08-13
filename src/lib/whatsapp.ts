import { site } from "@/content/site";

/**
 * Contextos de conversa: cada CTA do site abre o WhatsApp com uma mensagem
 * pré-preenchida coerente com o lugar de onde a pessoa veio.
 */
const mensagens = {
  geral: "Olá, vim pelo site. O INSS negou meu benefício e preciso de ajuda.",
  hero: "Olá, vim pelo site. O INSS negou meu benefício e preciso de ajuda.",
  situacoes: "Olá, vim pelo site. Me identifiquei com uma das situações e quero entender meu caso.",
  "como-funciona": "Olá, vim pelo site. Quero começar a análise do meu caso.",
  sobre: "Olá, vim pelo site e gostaria de falar com a equipe da Dra. Gisele.",
  "cta-final": "Olá, vim pelo site. Quero conversar sobre o meu caso.",
  "salario-maternidade": "Olá, vim pelo site. Preciso de ajuda com salário-maternidade.",
  "bpc-loas": "Olá, vim pelo site. Preciso de ajuda com BPC/LOAS.",
  aposentadorias: "Olá, vim pelo site. Preciso de ajuda com aposentadoria.",
  "auxilio-por-incapacidade": "Olá, vim pelo site. Preciso de ajuda com auxílio por incapacidade.",
  "pensao-por-morte": "Olá, vim pelo site. Preciso de ajuda com pensão por morte.",
  "revisao-de-beneficio": "Olá, vim pelo site. Quero revisar o valor do meu benefício.",
} as const;

export type WhatsAppContext = keyof typeof mensagens;

/** Monta o link wa.me com a mensagem contextual codificada. */
export function buildWhatsAppUrl({
  context = "geral",
}: { context?: WhatsAppContext } = {}): string {
  const texto = encodeURIComponent(mensagens[context] ?? mensagens.geral);
  return `https://wa.me/${site.whatsapp.numeroInternacional}?text=${texto}`;
}
