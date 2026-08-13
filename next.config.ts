import type { NextConfig } from "next";

/**
 * PAGES=1 gera a prévia estática para o GitHub Pages, que serve o site em um
 * subcaminho (/adv_gsc) e não tem servidor para otimizar imagens sob demanda.
 * O site de produção (Vercel) não usa nada disso.
 */
const paraPages = process.env.PAGES === "1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Esconde o selo "N" do Next no canto da tela durante o desenvolvimento.
  devIndicators: false,
  images: {
    // qualidades usadas no site (o Next 16 exige declará-las)
    qualities: [70, 72, 75],
    ...(paraPages ? { unoptimized: true } : {}),
  },
  ...(paraPages
    ? {
        output: "export" as const,
        distDir: ".next-pages",
        basePath,
        assetPrefix: basePath,
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
