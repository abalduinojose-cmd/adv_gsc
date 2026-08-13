import type { Metadata } from "next";
import { Newsreader, Public_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import { Consentimento } from "@/components/analytics/Consentimento";
import { Revelador } from "@/components/analytics/Revelador";
import { site } from "@/content/site";
import { jsonLdString, legalServiceJsonLd } from "@/lib/seo";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.dominio),
  title: {
    default: `${site.nome} — O INSS negou? A negativa não é a palavra final`,
    template: `%s | ${site.nome}`,
  },
  description: site.descricao,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.nome,
    title: `${site.nome} — Aposentadorias e Benefícios do INSS`,
    description: site.descricao,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.nome} — Aposentadorias e Benefícios do INSS`,
    description: site.descricao,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${newsreader.variable} ${publicSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#conteudo"
          className="focus:bg-graphite focus:text-ice sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:px-5 focus:py-3"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFab />
        <Consentimento />
        <Revelador />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdString(legalServiceJsonLd()) }}
        />
      </body>
    </html>
  );
}
