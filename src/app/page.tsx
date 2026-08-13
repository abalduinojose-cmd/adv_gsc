import { Hero } from "@/components/sections/Hero";
import { Servicos } from "@/components/sections/Servicos";
import { Situacoes } from "@/components/sections/Situacoes";
import { ComoFunciona } from "@/components/sections/ComoFunciona";
import { Sobre } from "@/components/sections/Sobre";
import { Depoimentos } from "@/components/sections/Depoimentos";
import { Instagram } from "@/components/sections/Instagram";
import { Brasil } from "@/components/sections/Brasil";
import { Faq } from "@/components/sections/Faq";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { faq } from "@/content/faq";
import { faqJsonLd, jsonLdString } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <Hero />
      <Servicos />
      <Situacoes />
      <ComoFunciona />
      <Sobre />
      <Depoimentos />
      <Instagram />
      <Brasil />
      <Faq perguntas={faq} />
      <CtaFinal />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(faqJsonLd(faq)) }}
      />
    </>
  );
}
