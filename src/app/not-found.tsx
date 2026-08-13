import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function NotFound() {
  return (
    <div className="bg-surface">
      <Container className="flex flex-col items-center py-24 text-center sm:py-32">
        <svg width="120" height="64" viewBox="0 0 120 64" aria-hidden="true">
          <path
            d="M10 62 A 50 50 0 0 1 110 62"
            fill="none"
            stroke="var(--color-brand)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M34 62 A 26 26 0 0 1 86 62"
            fill="none"
            stroke="var(--color-mist)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <h1 className="text-display text-graphite mt-6">Página não encontrada</h1>
        <p className="text-corpo text-text-muted mt-4 max-w-md">
          O endereço que você digitou não existe ou mudou de lugar. O caminho de volta é simples.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/">Voltar para o início</ButtonLink>
          <ButtonLink
            href={buildWhatsAppUrl({ context: "geral" })}
            waContext="404"
            externo
            variante="secundario"
          >
            Falar no WhatsApp
          </ButtonLink>
        </div>
        <p className="text-legenda text-text-muted mt-10">
          Procurando uma área específica?{" "}
          <Link href="/#areas" className="underline underline-offset-4">
            Veja as áreas de atuação
          </Link>
          .
        </p>
      </Container>
    </div>
  );
}
