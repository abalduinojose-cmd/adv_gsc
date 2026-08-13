/**
 * Gera a prévia estática em docs/ para o GitHub Pages.
 *
 *   npm run build:pages
 *
 * O GitHub Pages só publica da raiz do repositório ou de /docs, e o Jekyll
 * ignora pastas com underscore — por isso o .nojekyll é obrigatório, senão o
 * site sobe sem CSS nem JS (_next/).
 */
import { execSync } from "node:child_process";
import {
  cpSync,
  existsSync,
  readdirSync,
  rmSync,
  writeFileSync,
  mkdirSync,
  copyFileSync,
} from "node:fs";
import { join } from "node:path";

const raiz = process.cwd();
const distDir = join(raiz, ".next-pages");
const docs = join(raiz, "docs");
const REPO = "adv_gsc";

process.env.PAGES = "1";
process.env.NEXT_PUBLIC_BASE_PATH = `/${REPO}`;

console.log(`> build estático com basePath /${REPO}`);
execSync("npx next build", { stdio: "inherit", env: process.env });

// Com distDir customizado o Next escreve o export dentro do próprio distDir.
const exportado = existsSync(join(distDir, "index.html"))
  ? distDir
  : existsSync(join(raiz, "out"))
    ? join(raiz, "out")
    : null;

if (!exportado) {
  console.error("Não encontrei o site exportado (nem .next-pages nem out).");
  process.exit(1);
}

rmSync(docs, { recursive: true, force: true });
mkdirSync(docs, { recursive: true });
cpSync(exportado, docs, { recursive: true });
writeFileSync(join(docs, ".nojekyll"), "");

/**
 * O export grava o payload de prefetch das rotas dinâmicas em pastas
 * (`__next.servicos/$d$slug/__PAGE__.txt`), mas o cliente o pede com o nome
 * achatado (`__next.servicos.$d$slug.__PAGE__.txt`). Num servidor estático puro
 * como o GitHub Pages isso vira 404 no console — então espelhamos o arquivo.
 */
function espelharPrefetch(dir) {
  for (const item of readdirSync(dir, { withFileTypes: true })) {
    const caminho = join(dir, item.name);
    if (!item.isDirectory()) continue;
    if (item.name.startsWith("__next.")) {
      const achatar = (sub, prefixo) => {
        for (const filho of readdirSync(sub, { withFileTypes: true })) {
          const dele = join(sub, filho.name);
          if (filho.isDirectory()) achatar(dele, `${prefixo}.${filho.name}`);
          else copyFileSync(dele, join(dir, `${prefixo}.${filho.name}`));
        }
      };
      achatar(caminho, item.name);
    } else {
      espelharPrefetch(caminho);
    }
  }
}
espelharPrefetch(docs);

console.log(`> docs/ pronto a partir de ${exportado}`);
