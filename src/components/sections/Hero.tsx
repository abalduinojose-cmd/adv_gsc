import Image from "next/image";
import { ArcHero } from "@/components/ui/Arc";
import { ButtonLink } from "@/components/ui/Button";
import { IconeGoogle } from "@/components/ui/IconeGoogle";
import { VideoFundo } from "./VideoFundo";
import { site } from "@/content/site";
import { asset } from "@/lib/asset";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import posterDesktop from "../../../public/video/hero-desktop.jpg";
import posterMobile from "../../../public/video/hero-mobile.jpg";

/**
 * Hero com vídeo de fundo: 16:9 no desktop, 9:16 no mobile, sempre mudo e em
 * looping. Por baixo de cada vídeo fica a mesma imagem otimizada (o LCP), de
 * modo que a troca para o vídeo é imperceptível — e quem pede menos movimento
 * (prefers-reduced-motion) fica só com a imagem.
 */
export function Hero() {
  return (
    <header className="bg-graphite text-ice relative flex min-h-[92svh] overflow-hidden">
      {/* Imagem de fundo (o LCP): 16:9 no desktop, 9:16 no celular */}
      <div className="absolute inset-0 hidden md:block" aria-hidden="true">
        <Image
          src={posterDesktop}
          alt=""
          fill
          priority
          sizes="100vw"
          quality={70}
          className="object-cover object-[62%_35%]"
          placeholder="blur"
        />
      </div>
      <div className="absolute inset-0 md:hidden" aria-hidden="true">
        <Image
          src={posterMobile}
          alt=""
          fill
          priority
          sizes="100vw"
          quality={70}
          className="object-cover object-[50%_22%]"
          placeholder="blur"
        />
      </div>

      {/* Vídeo por cima da imagem: um só, escolhido pela largura da tela */}
      <div className="absolute inset-0" aria-hidden="true">
        <VideoFundo
          desktop={asset("/video/hero-desktop.mp4")}
          mobile={asset("/video/hero-mobile.mp4")}
          posterDesktop={asset("/video/hero-desktop.jpg")}
          posterMobile={asset("/video/hero-mobile.jpg")}
        />
      </div>

      {/* Véus: diagonal no desktop, vertical no mobile */}
      <div className="veu-hero-desktop absolute inset-0 hidden md:block" aria-hidden="true" />
      <div className="veu-hero-mobile absolute inset-0 md:hidden" aria-hidden="true" />

      {/* Arco-assinatura desenhando sobre a cena */}
      <ArcHero className="pointer-events-none absolute -top-32 -right-24 hidden w-[620px] opacity-45 lg:block" />

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col justify-end px-5 pt-28 pb-16 sm:px-8 md:justify-center md:pb-24">
        <a
          href={site.googlePerfil}
          target="_blank"
          rel="noopener noreferrer"
          className="border-ice/25 bg-ice/10 text-ice hover:border-ice/50 hover:bg-ice/20 inline-flex min-h-11 w-fit items-center gap-2.5 rounded-full border py-2 pr-5 pl-2.5 backdrop-blur transition-colors duration-200"
        >
          <span className="bg-ice flex size-7 shrink-0 items-center justify-center rounded-full">
            <IconeGoogle className="size-4" />
          </span>
          <span className="text-legenda">
            <strong className="font-semibold">{site.google.nota}</strong>
            <span aria-hidden="true"> ★★★★★ </span>· {site.google.totalAvaliacoes} avaliações no
            Google
          </span>
        </a>

        <h1 className="text-display mt-6 max-w-[16ch] [text-shadow:0_2px_26px_rgb(15_25_28/0.5)]">
          O INSS negou seu benefício?{" "}
          <em className="text-mist block font-medium not-italic">
            A negativa não é a palavra final.
          </em>
        </h1>

        <p className="text-corpo text-ice/85 mt-6 max-w-[50ch] [text-shadow:0_1px_16px_rgb(15_25_28/0.45)]">
          Salário-maternidade, BPC/LOAS, aposentadorias e auxílios. Analisamos o motivo da recusa e
          lutamos pelo seu direito, tudo pelo WhatsApp, de qualquer lugar do Brasil.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink
            href={buildWhatsAppUrl({ context: "hero" })}
            waContext="hero"
            externo
            variante="primario-claro"
          >
            Falar no WhatsApp agora
          </ButtonLink>
          <ButtonLink href="#areas" variante="contorno-claro">
            Ver áreas de atuação
          </ButtonLink>
        </div>

        <p className="text-legenda text-ice/70 mt-8">
          {site.advogada.tratamento} · OAB {site.advogada.oab} · atendimento 100% online
        </p>
      </div>
    </header>
  );
}
