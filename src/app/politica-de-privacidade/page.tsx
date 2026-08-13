import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";
import { breadcrumbJsonLd, jsonLdString } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description:
    "Como a GSC Advocacia trata os seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD).",
  alternates: { canonical: "/politica-de-privacidade" },
  robots: { index: true, follow: true },
};

export default function PoliticaDePrivacidade() {
  return (
    <div className="bg-surface">
      <Container className="max-w-3xl pt-10 pb-16 sm:pt-14 sm:pb-24">
        <nav aria-label="Você está em" className="text-legenda text-text-muted">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="underline-offset-4 hover:underline">
                Início
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-graphite font-medium">
              Política de privacidade
            </li>
          </ol>
        </nav>

        <h1 className="text-display text-graphite mt-8">Política de privacidade</h1>
        <p className="text-legenda text-text-muted mt-4">Última atualização: agosto de 2026</p>

        <div className="prose-gsc text-corpo text-text-muted mt-8 space-y-6">
          <section>
            <h2 className="text-entre text-graphite">Quem somos</h2>
            <p className="mt-3">
              Este site pertence à {site.nomeCompleto} ({site.nome}), CNPJ {site.cnpj}, com sede na{" "}
              {site.endereco.rua}, {site.endereco.complemento}, {site.endereco.cidade}/
              {site.endereco.uf}, CEP {site.endereco.cep}. Somos os controladores dos dados pessoais
              tratados neste site, nos termos da Lei nº 13.709/2018 (Lei Geral de Proteção de Dados
              — LGPD).
            </p>
          </section>

          <section>
            <h2 className="text-entre text-graphite">Quais dados coletamos e para quê</h2>
            <p className="mt-3">
              <strong className="text-graphite">Dados de navegação (Google Analytics).</strong> Com
              o seu consentimento — dado no aviso exibido na primeira visita — coletamos dados
              estatísticos de navegação (páginas visitadas, tempo de permanência, tipo de aparelho,
              região aproximada) para entender como o site é usado e melhorá-lo. Se você recusar,
              nenhuma ferramenta de medição é carregada. Você pode mudar de ideia limpando os dados
              do site no seu navegador.
            </p>
            <p className="mt-3">
              <strong className="text-graphite">Dados enviados por você no WhatsApp.</strong> Ao
              clicar em um botão de contato, você é levado ao WhatsApp com uma mensagem sugerida. As
              informações e os documentos que você decidir enviar são usados exclusivamente para a
              análise do seu caso e a prestação dos serviços jurídicos, sob sigilo profissional
              (base legal: execução de contrato e exercício regular de direitos, art. 7º, V e VI, da
              LGPD).
            </p>
          </section>

          <section>
            <h2 className="text-entre text-graphite">Com quem compartilhamos</h2>
            <p className="mt-3">
              Não vendemos nem compartilhamos seus dados com terceiros para fins comerciais. Dados
              do seu caso são utilizados apenas perante os órgãos necessários ao processo (INSS,
              Poder Judiciário) e prestadores essenciais ao serviço, sempre com o dever de sigilo.
            </p>
          </section>

          <section>
            <h2 className="text-entre text-graphite">Por quanto tempo guardamos</h2>
            <p className="mt-3">
              Dados de navegação seguem os prazos de retenção do Google Analytics. Dados de casos
              jurídicos são mantidos pelo tempo exigido pela legislação e pelas normas da OAB para a
              guarda de documentos profissionais.
            </p>
          </section>

          <section>
            <h2 className="text-entre text-graphite">Seus direitos</h2>
            <p className="mt-3">
              A LGPD garante a você, entre outros, os direitos de confirmação, acesso, correção,
              anonimização, portabilidade e eliminação de dados, além da revogação do consentimento
              a qualquer momento. Para exercê-los, fale com a gente pelo e-mail{" "}
              <a href={`mailto:${site.email}`} className="underline underline-offset-4">
                {site.email}
              </a>{" "}
              ou pelo WhatsApp {site.whatsapp.numeroExibicao}.
            </p>
          </section>

          <section>
            <h2 className="text-entre text-graphite">Canal do titular</h2>
            <p className="mt-3">
              Dúvidas sobre esta política ou sobre o tratamento dos seus dados podem ser enviadas ao
              nosso canal de privacidade: {site.email}. Respondemos nos prazos previstos na LGPD.
            </p>
          </section>
        </div>
      </Container>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(
            breadcrumbJsonLd([
              { nome: "Início", caminho: "/" },
              { nome: "Política de privacidade", caminho: "/politica-de-privacidade" },
            ]),
          ),
        }}
      />
    </div>
  );
}
