import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { servicos } from "@/content/servicos";

// exigido pelo export estático da prévia (output: "export")
export const dynamic = "force-static";

/** Gerado a partir do conteúdo: nova página de serviço entra sozinha aqui. */
export default function sitemap(): MetadataRoute.Sitemap {
  const agora = new Date();
  return [
    { url: site.dominio, lastModified: agora, changeFrequency: "monthly", priority: 1 },
    { url: `${site.dominio}/sobre`, lastModified: agora, changeFrequency: "yearly", priority: 0.7 },
    ...servicos.map((s) => ({
      url: `${site.dominio}/servicos/${s.slug}`,
      lastModified: agora,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    {
      url: `${site.dominio}/politica-de-privacidade`,
      lastModified: agora,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
