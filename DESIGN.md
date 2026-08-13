# Plano de design — GSC Advocacia

## Conceito

**"O arco que se completa."** O monograma curvo da marca vira o sistema visual inteiro:
o arco desenha-se uma vez no hero, emoldura as fotos (janela em arco), pontua as vozes
dos clientes (aspas em arco), fecha-se progressivamente nos passos do processo
(¼ → ½ → ¾ → círculo completo) e assina os divisores. Estética: institucional serena,
fundo claro, tipografia como protagonista — confiança, não urgência.

## Tokens

| Token | Valor | Papel |
|---|---|---|
| `--color-brand` | `#82A2AF` | arcos, superfícies, ícones decorativos — nunca texto pequeno |
| `--color-ice` | `#F7FFFF` | fundo claro / texto sobre escuro |
| `--color-petrol` | `#587783` | bordas, secundários grandes (4,78:1 sobre ice) |
| `--color-petrol-deep` | `#4A6570` | texto muted pequeno (≥ 4,5:1 em fundos tintados) |
| `--color-mist` | `#AEBFC5` | divisores, texto secundário sobre grafite |
| `--color-graphite` | `#34464D` | texto e superfícies escuras (~9:1 sobre ice) |
| `--color-graphite-hover` | `#263539` | hover do botão primário |
| `--color-brand-50/100` | `#EEF4F6` / `#DFEAEE` | fundos suaves |

Tipografia: **Newsreader** (display serifada) + **Public Sans** (texto), via `next/font`.
Body 17→18px, lh 1,65, leitura máx. 66ch. H1 `clamp(34→64px)`.

## Wireframe (mobile-first)

```
[Header sobreposto ao hero (transparente → sólido ao rolar)]
[HERO em vídeo full-bleed 92svh (16:9 desktop / 9:16 mobile, mudo em loop)
 · véu diagonal/vertical · selo Google 5,0/405 no topo · H1 dor real
 · CTA WA + CTA áreas · assinatura OAB · arco desenhando]
[ÁREAS: 6 cards canto-arco → /servicos/slug]
[ISSO ACONTECEU COM VOCÊ? — grafite: 6 vozes com aspas-arco + CTA]
[COMO FUNCIONA: 4 passos, arco fechando ¼→1]
[SOBRE: foto janela-arco + 1ª pessoa + OAB]
[DEPOIMENTOS: mural 3 colunas deslizando (desktop) /
 trilho arrastável scroll-snap (mobile) — 25 reais c/ foto]
[INSTAGRAM "No dia a dia": 3 reels reais, fachada c/ play →
 vídeo nativo (play/volume/tela cheia); trilho no mobile]
[BRASIL: mapa em matriz de pontos, rotas em arco saindo de Petrópolis]
[FAQ: <details> nativo, 10 perguntas]
[CTA FINAL grafite + Footer: OAB, CNPJ, redes, política]
```

## Autocrítica aplicada (o que caiu por ser genérico ou repetido)

Estudo dos 9 sites anteriores do estúdio identificou 30+ padrões gastos. Decisões:

- ~~**Sem hero full-bleed com foto + véu escuro**~~ — **revisto a pedido da cliente
  (13/08/2026)**: o hero passou a ter vídeo de fundo no formato do site da Quesia
  (16:9 no desktop, 9:16 no mobile, véu diagonal/vertical). Para não pagar o preço
  de LCP desse padrão, a imagem otimizada é quem pinta primeiro e o vídeo entra
  depois do `load`, num fade — quem pede menos movimento ou está em economia de
  dados só vê a imagem.
- **Sem navy + dourado** (logo antigo da GSC e clichê jurídico) — a paleta nova da marca
  já resolve a diferenciação.
- **Sem balança, martelo, mármore ou colunas gregas.** As fotos são da advogada real.
- **Sem Fraunces** (2× no lote) → Newsreader. **Sem Inter** (Quesia) → Public Sans.
- **Sem gradiente clipado em texto, numeral-fantasma, selo girando, grão de papel,
  blobs blurados** — assinaturas de outros projetos do estúdio.
- **Depoimentos sem carrossel de arrastar com setas** (5× no lote): mural vertical em
  deslize lento no desktop (pausa no hover; vira grade com `prefers-reduced-motion`)
  e lista com `<details>` no mobile — sem JavaScript.
- **Eyebrow sem uppercase + tracking largo** (7× no lote): rótulo em caixa normal
  precedido do meio-arco da marca.
- **Easing próprio** `cubic-bezier(0.33,1,0.68,1)` (o lote inteiro usa `0.16,1,0.3,1`).
- H1 fala a dor do usuário ("O INSS negou seu benefício?"), não "excelência jurídica".

## Botões

Pílula com elevação de 2px no hover, sombra que abre junto, seta que desliza 4px e um
brilho diagonal que atravessa o primário em 650ms. No toque, afunda 1,5% (sem mexer no
layout). Tudo desligado sob `prefers-reduced-motion`.

## Movimento

Uma coreografia principal: o arco do hero desenha-se em 700ms no load; as rotas do mapa
seguem a mesma gramática (arcos que se desenham, escalonados). Resto: fades de 550ms no
scroll e hovers de 150–200ms. `prefers-reduced-motion` desliga tudo (arco, mural, brilho
dos botões e halo do mapa).
