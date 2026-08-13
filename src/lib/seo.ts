import { site } from "@/content/site";
import type { PerguntaResposta } from "@/content/servicos";

/**
 * JSON-LD tipado à mão (sem `any`): apenas os campos que realmente usamos,
 * seguindo o vocabulário do schema.org.
 */

type PostalAddress = {
  "@type": "PostalAddress";
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: "BR";
};

type Attorney = {
  "@type": "Attorney";
  name: string;
  jobTitle: string;
  worksFor: { "@type": "LegalService"; name: string };
};

export type LegalServiceJsonLd = {
  "@context": "https://schema.org";
  "@type": "LegalService";
  "@id": string;
  name: string;
  alternateName: string;
  description: string;
  url: string;
  telephone: string;
  address: PostalAddress;
  areaServed: "BR";
  availableLanguage: "pt-BR";
  knowsAbout: string[];
  sameAs: string[];
  employee: Attorney;
  slogan: string;
};

export function legalServiceJsonLd(): LegalServiceJsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${site.dominio}/#escritorio`,
    name: site.nome,
    alternateName: site.nomeCompleto,
    description: site.descricao,
    url: site.dominio,
    telephone: `+${site.whatsapp.numeroInternacional}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.endereco.rua}, ${site.endereco.complemento}`,
      addressLocality: site.endereco.cidade,
      addressRegion: site.endereco.uf,
      postalCode: site.endereco.cep,
      addressCountry: "BR",
    },
    areaServed: "BR",
    availableLanguage: "pt-BR",
    knowsAbout: [
      "Direito Previdenciário",
      "Salário-maternidade",
      "BPC/LOAS",
      "Aposentadorias",
      "Auxílio por incapacidade",
      "Pensão por morte",
      "Revisão de benefício do INSS",
    ],
    sameAs: [site.instagram, site.facebook, site.googlePerfil],
    employee: {
      "@type": "Attorney",
      name: site.advogada.nome,
      jobTitle: "Advogada previdenciária",
      worksFor: { "@type": "LegalService", name: site.nome },
    },
    slogan: site.slogan,
  };
}

export type FaqPageJsonLd = {
  "@context": "https://schema.org";
  "@type": "FAQPage";
  mainEntity: Array<{
    "@type": "Question";
    name: string;
    acceptedAnswer: { "@type": "Answer"; text: string };
  }>;
};

export function faqJsonLd(perguntas: readonly PerguntaResposta[]): FaqPageJsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: perguntas.map((p) => ({
      "@type": "Question",
      name: p.pergunta,
      acceptedAnswer: { "@type": "Answer", text: p.resposta },
    })),
  };
}

export type BreadcrumbJsonLd = {
  "@context": "https://schema.org";
  "@type": "BreadcrumbList";
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }>;
};

export function breadcrumbJsonLd(
  trilha: Array<{ nome: string; caminho: string }>,
): BreadcrumbJsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trilha.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.nome,
      item: `${site.dominio}${item.caminho}`,
    })),
  };
}

/** Serializa o JSON-LD para uso em <script type="application/ld+json">. */
export function jsonLdString(dados: LegalServiceJsonLd | FaqPageJsonLd | BreadcrumbJsonLd): string {
  return JSON.stringify(dados).replace(/</g, "\\u003c");
}
