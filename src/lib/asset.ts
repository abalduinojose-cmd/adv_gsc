/**
 * Prefixa caminhos escritos à mão para arquivos de `public/`.
 *
 * `next/image` e `next/link` resolvem o basePath sozinhos, mas atributos como
 * `src` de <video> e `poster` não — sem isso a prévia em subcaminho
 * (GitHub Pages: /adv_gsc) serviria os vídeos do lugar errado.
 */
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(caminho: string): string {
  return `${base}${caminho}`;
}
