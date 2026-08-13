import { MessageCircle, FileSignature, MonitorSmartphone } from "lucide-react";
import { Section, TituloSecao } from "@/components/ui/Section";
import { site } from "@/content/site";

/**
 * Mapa do Brasil em matriz de pontos: a silhueta recorta um padrão de pontos
 * (clipPath + pattern), e as rotas partem de Petrópolis em arcos — a assinatura
 * da marca contando a história do atendimento a distância. Sem biblioteca.
 */
const CONTORNO =
  "M67 2 L92 17 L113 5 L123 25 L151 40 L181 46 L198 55 L199 69 L181 94 L172 131 L157 145 L141 150 L130 169 L116 181 L105 200 L84 180 L99 158 L93 143 L83 125 L70 111 L46 81 L1 65 L21 49 L37 21 Z";

const DESTINOS = [
  { x: 67, y: 8, nome: "Norte" },
  { x: 21, y: 49, nome: "Noroeste" },
  { x: 181, y: 46, nome: "Nordeste" },
  { x: 181, y: 94, nome: "Leste" },
  { x: 116, y: 181, nome: "Sul" },
];
const ORIGEM = { x: 156, y: 142 }; // Petrópolis/RJ

function MapaBrasil() {
  return (
    <svg
      viewBox="-8 -8 216 218"
      role="img"
      aria-label="Mapa do Brasil com rotas de atendimento partindo de Petrópolis para todas as regiões"
      className="w-full max-w-md overflow-visible"
    >
      <defs>
        <clipPath id="mapa-br">
          <path d={CONTORNO} />
        </clipPath>
        <pattern id="mapa-pontos" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="1.15" fill="var(--color-brand)" opacity="0.5" />
        </pattern>
        <radialGradient id="mapa-brilho" cx="78%" cy="70%" r="55%">
          <stop offset="0%" stopColor="var(--color-brand)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="var(--color-brand)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* silhueta preenchida pela matriz de pontos + brilho perto do RJ */}
      <g clipPath="url(#mapa-br)">
        <rect x="-8" y="-8" width="216" height="218" fill="url(#mapa-pontos)" />
        <rect x="-8" y="-8" width="216" height="218" fill="url(#mapa-brilho)" />
      </g>

      {/* contorno fino, só para dar borda à nuvem de pontos */}
      <path
        d={CONTORNO}
        fill="none"
        stroke="var(--color-brand)"
        strokeWidth="1"
        strokeLinejoin="round"
        opacity="0.45"
      />

      {/* rotas: arcos que se desenham uma vez, escalonados */}
      {DESTINOS.map((d, i) => {
        const mx = (ORIGEM.x + d.x) / 2;
        const my = Math.min(ORIGEM.y, d.y) - 26 - i * 5;
        return (
          <g key={d.nome}>
            <path
              d={`M${ORIGEM.x} ${ORIGEM.y} Q ${mx} ${my} ${d.x} ${d.y}`}
              fill="none"
              stroke="var(--color-petrol)"
              strokeWidth="1.1"
              strokeLinecap="round"
              opacity="0.55"
              pathLength={1}
              className="rota"
              style={{ animationDelay: `${0.25 + i * 0.16}s` }}
            />
            <circle cx={d.x} cy={d.y} r="4.5" fill="var(--color-brand)" opacity="0.28" />
            <circle cx={d.x} cy={d.y} r="2.1" fill="var(--color-petrol)" />
          </g>
        );
      })}

      {/* pino de Petrópolis com halo pulsante */}
      <circle
        cx={ORIGEM.x}
        cy={ORIGEM.y}
        r="9"
        fill="none"
        stroke="var(--color-graphite)"
        strokeWidth="1.2"
        opacity="0.3"
        className="pino-halo"
      />
      <circle cx={ORIGEM.x} cy={ORIGEM.y} r="5.5" fill="var(--color-graphite)" />
      <circle cx={ORIGEM.x} cy={ORIGEM.y} r="1.8" fill="var(--color-ice)" />
      <text
        x={ORIGEM.x + 13}
        y={ORIGEM.y + 4}
        className="fill-text-muted text-[8px] font-medium"
        style={{ fontFamily: "var(--font-texto)" }}
      >
        Petrópolis
      </text>
    </svg>
  );
}

const pilares = [
  {
    icone: MessageCircle,
    titulo: "Tudo pelo WhatsApp",
    texto: "Documentos por foto, dúvidas respondidas e atualizações do processo no seu celular.",
  },
  {
    icone: FileSignature,
    titulo: "Procuração digital",
    texto: "Você assina de casa, com validade jurídica, sem cartório e sem deslocamento.",
  },
  {
    icone: MonitorSmartphone,
    titulo: "Processo eletrônico",
    texto:
      "As ações contra o INSS correm de forma eletrônica em todo o país. A distância não muda nada.",
  },
] as const;

export function Brasil() {
  return (
    <Section id="brasil" labelledBy="titulo-brasil">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <TituloSecao
            id="titulo-brasil"
            rotulo="Atendimento em todo o Brasil"
            titulo="De Petrópolis para qualquer cidade do país"
          />
          <p className="text-corpo text-text-muted mt-5 max-w-[56ch]" data-reveal>
            O escritório fica em {site.endereco.cidade}/{site.endereco.uf}, mas o atendimento é 100%
            digital: hoje acompanhamos famílias de todas as regiões do Brasil sem que ninguém
            precise viajar.
          </p>
          <ul className="mt-8 space-y-5">
            {pilares.map((pilar, i) => (
              <li
                key={pilar.titulo}
                className="flex gap-4"
                data-reveal
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <span className="text-petrol-deep bg-brand-50 border-borda/70 flex size-11 shrink-0 items-center justify-center rounded-full border">
                  <pilar.icone className="size-5" strokeWidth={1.7} aria-hidden />
                </span>
                <span>
                  <h3 className="text-corpo text-graphite font-semibold">{pilar.titulo}</h3>
                  <p className="text-legenda text-text-muted mt-1">{pilar.texto}</p>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-auto w-full max-w-md" data-reveal>
          <MapaBrasil />
        </div>
      </div>
    </Section>
  );
}
