import Link from "next/link";
import { MapPin, Clock, Mail } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { IconeInstagram } from "@/components/ui/IconeInstagram";
import { site } from "@/content/site";
import { servicos } from "@/content/servicos";

/* Glifo do Facebook (o lucide removeu ícones de marca): herda currentColor. */
function IconeFacebook({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-7h2.4l.45-3H13.5V9.1c0-.87.28-1.6 1.66-1.6h1.34V4.8c-.64-.09-1.4-.17-2.15-.17-2.24 0-3.85 1.36-3.85 3.97V11H8v3h2.5v7h3Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer id="contato" className="bg-graphite text-ice">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Logo tom="claro" className="text-[14px]" />
            <p className="text-legenda text-mist mt-5 max-w-sm">
              {site.nomeCompleto}. {site.slogan} Atendimento 100% online para todo o Brasil.
            </p>
            <p className="text-legenda text-mist mt-4">
              {site.advogada.tratamento} — OAB {site.advogada.oab}
            </p>
            <p className="text-legenda text-mist mt-1">CNPJ {site.cnpj}</p>
          </div>

          <div>
            <h2 className="font-display text-entre">Áreas de atuação</h2>
            <ul className="mt-4 space-y-2.5">
              {servicos.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/servicos/${s.slug}`}
                    className="text-legenda text-mist hover:text-ice transition-colors duration-150"
                  >
                    {s.titulo}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-entre">Contato</h2>
            <ul className="text-legenda text-mist mt-4 space-y-3">
              <li className="flex gap-2.5">
                <MapPin
                  size={18}
                  strokeWidth={1.8}
                  className="text-brand mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <span>
                  {site.endereco.rua}, {site.endereco.complemento} — {site.endereco.cidade}/
                  {site.endereco.uf}, CEP {site.endereco.cep}
                </span>
              </li>
              <li className="flex gap-2.5">
                <Clock
                  size={18}
                  strokeWidth={1.8}
                  className="text-brand mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <span>{site.horario}</span>
              </li>
              <li className="flex gap-2.5">
                <Mail
                  size={18}
                  strokeWidth={1.8}
                  className="text-brand mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-ice transition-colors duration-150"
                >
                  {site.email}
                </a>
              </li>
            </ul>
            <ul className="mt-5 flex items-center gap-2">
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da GSC Advocacia"
                  className="border-petrol/50 text-mist hover:border-brand hover:text-ice flex size-11 items-center justify-center rounded-full border transition-colors duration-150"
                >
                  <IconeInstagram className="size-5" />
                </a>
              </li>
              <li>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook da GSC Advocacia"
                  className="border-petrol/50 text-mist hover:border-brand hover:text-ice flex size-11 items-center justify-center rounded-full border transition-colors duration-150"
                >
                  <IconeFacebook className="size-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-petrol/30 text-mist mt-12 flex flex-col items-center gap-3 border-t pt-6 text-center text-[0.8125rem] leading-relaxed sm:flex-row sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} {site.nome}. Conteúdo informativo, em conformidade com o
            Código de Ética da OAB e o Provimento 205/2021 do CFOAB.
          </p>
          <Link
            href="/politica-de-privacidade"
            className="hover:text-ice shrink-0 underline underline-offset-4 transition-colors duration-150"
          >
            Política de privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}
