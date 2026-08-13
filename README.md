# GSC Advocacia — site institucional

Site da **GSC Advocacia — Aposentadorias e Benefícios do INSS** (Dra. Gisele dos Santos,
Petrópolis/RJ). Next.js 16 (App Router) + React 19 + TypeScript strict + Tailwind CSS v4.
Mobile-first, 100% estático, pronto para deploy na Vercel.

## Como rodar

```bash
npm install
npm run dev        # http://localhost:5218
npm run build      # build de produção
npm run start      # serve o build em :5218
npm run lint       # ESLint
npx tsc --noEmit   # checagem de tipos
```

## Como editar textos e contatos

**Todo o conteúdo vive em `src/content/` — nenhum texto, telefone ou link está
hardcoded em componente.**

| Arquivo | O que contém |
|---|---|
| `src/content/site.ts` | Nome, WhatsApp, e-mail, endereço, horário, redes, OAB, CNPJ, frases das seções "Isso aconteceu com você?" e "Como funciona" |
| `src/content/servicos.ts` | As 6 áreas de atuação (cada objeto vira a página `/servicos/[slug]`) |
| `src/content/faq.ts` | Perguntas frequentes da home |
| `src/content/depoimentos.ts` | 25 avaliações reais do Google (reproduzidas na íntegra — não editar os textos) |
| `src/content/reels.ts` | Vídeos do Instagram da seção "No dia a dia" |

### Trocar o vídeo do hero

São dois arquivos em `public/video/`, um para cada formato de tela:

| Arquivo | Formato | Onde aparece |
|---|---|---|
| `hero-desktop.mp4` + `hero-desktop.jpg` | 16:9 (1280px) | telas ≥ 768px |
| `hero-mobile.mp4` + `hero-mobile.jpg` | 9:16 (608px) | celular |

O `.jpg` é o primeiro frame do respectivo vídeo — mantenha os dois em sincronia,
senão haverá um salto visível quando o vídeo entrar. Os vídeos rodam **mudos e em
looping** (sem faixa de áudio no arquivo, o que já economiza peso). Se o
enquadramento não ficar bom, ajuste o `object-position` em
`src/components/sections/Hero.tsx`.

### Trocar um vídeo do Instagram

1. Baixe o vídeo e coloque em `public/video/` como `reel-N.mp4`.
2. Gere o poster (primeiro frame) com o mesmo nome, `reel-N.jpg`.
3. Ajuste título, descrição e duração em `src/content/reels.ts`.

Os vídeos atuais foram recomprimidos para web (540px de largura, CRF 30, áudio
mono 64 kbps). Cada card é uma **fachada**: só a imagem carrega no início; o
vídeo é baixado quando a pessoa aperta play, já com play/volume/tela cheia
nativos do navegador.

Trocar o número de WhatsApp = editar **um** campo em `site.ts`. As mensagens
pré-preenchidas de cada botão estão em `src/lib/whatsapp.ts`.

## Variáveis de ambiente

Copie `.env.example` para `.env.local`:

- `NEXT_PUBLIC_GA_ID` — ID do Google Analytics 4 (ex.: `G-XXXXXXXXXX`). **Opcional**:
  sem ele, o site funciona normalmente, sem tracking e sem banner de consentimento.
  Com ele, o GA só carrega após o aceite no banner (LGPD), e cada clique de WhatsApp
  gera o evento `whatsapp_click` com o parâmetro `context`.

## Pendências — placeholders no código

Estes dados **não foram fornecidos** e estão como `{{PLACEHOLDER}}` em `src/content/site.ts`:

- [ ] `{{OAB_NUMERO}}` — inscrição da Dra. Gisele (ex.: "OAB/RJ 000.000"). **Bloqueante para publicar.**
- [ ] `{{EMAIL}}` — e-mail do escritório (aparece no footer e na política de privacidade)
- [ ] `{{CNPJ}}` — CNPJ (footer e política de privacidade)
- [ ] Domínio: usado `https://www.gsc.adv.br` (domínio atual do escritório; o site antigo está
  fora do ar com erro de SSL). Confirmar antes de publicar e ajustar `site.dominio` se preciso.

Dados confirmados pelo perfil do Google (12/08/2026): endereço (Rua Marechal Deodoro, 79,
salas 605/606/611, Petrópolis/RJ), horário (seg–sex 10h–19h), telefone/WhatsApp
(24) 99216-6665, nota 5,0 com 405 avaliações.

Observação: o Instagram do brief é `@gscadvparamaes`; o perfil do Google aponta
`@gscadvocacia`. O site usa o do brief — confirmar com a cliente qual é o principal.

## Checklist pré-publicação

- [ ] Preencher OAB, e-mail e CNPJ em `src/content/site.ts`
- [ ] Substituir o logotipo recriado em SVG (`src/components/ui/Logo.tsx`) pelo arquivo vetorial oficial, se houver
- [ ] Confirmar domínio (`site.dominio`) — afeta canonical, sitemap, robots e OG
- [ ] Criar a propriedade GA4 e definir `NEXT_PUBLIC_GA_ID` na Vercel
- [x] Favicon com o monograma da marca (`src/app/icon.svg`)
- [ ] Testar a OG image em produção (`/opengraph-image`)
- [ ] Apontar o domínio na Vercel e conferir redirect www/apex
- [ ] **Validação OAB** (ver abaixo)

## Conformidade OAB — leia antes de publicar

O conteúdo foi escrito dentro dos limites do Código de Ética e do **Provimento 205/2021
do CFOAB**: caráter informativo, sem promessa de resultado, sem valores/honorários, sem
superlativos, sem urgência de e-commerce.

**Recomendação: submeter o texto final à análise da seccional da OAB (OAB/RJ) antes de
publicar.** Dois pontos merecem atenção especial:

1. **Depoimentos de clientes** — o site exibe avaliações públicas do Google, reproduzidas
   na íntegra, a pedido da cliente. A publicidade com depoimentos pode ser interpretada
   como captação/mercantilização pela seccional. Se a orientação for removê-los, basta
   excluir a seção `<Depoimentos />` em `src/app/page.tsx` — a prova social continua no
   selo "5,0 · 405 avaliações" que aponta para o perfil do Google (formato mais seguro).
2. **Impulsionamento pago** de conteúdo jurídico tem restrições próprias (Provimento
   205/2021, art. 3º) — não impulsionar páginas com depoimentos.

## Arquitetura

```
src/
  app/                     # rotas (App Router, Server Components por padrão)
    servicos/[slug]/       # template único alimentado por content/servicos.ts
    sobre/  politica-de-privacidade/  not-found.tsx
    sitemap.ts  robots.ts  opengraph-image.tsx   # gerados do conteúdo
  components/
    layout/   # Header, Footer, WhatsAppFab, MenuMobile
    sections/ # Hero, Servicos, Situacoes, ComoFunciona, Sobre, Depoimentos,
              # Instagram (+ ReelCard), Brasil, Faq, CtaFinal
    ui/       # Logo (SVG), Arc (assinatura), Button, Container, Section, ícones
    analytics/ # Consentimento (LGPD + GA4 + eventos), Revelador (fades no scroll)
  content/    # fonte única de textos e dados
  lib/        # whatsapp.ts, seo.ts (JSON-LD tipado), utils.ts
```

Ilhas com JavaScript (`"use client"`): menu mobile, botão flutuante, consentimento/GA,
o observador de fades e a fachada dos vídeos. Todo o resto é estático — CTAs são links
reais, o FAQ usa `<details>` nativo e os carrosséis do mobile são scroll-snap puro
(funcionam sem JavaScript).

