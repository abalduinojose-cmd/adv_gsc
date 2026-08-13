import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.nome} — Aposentadorias e Benefícios do INSS`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// exigido pelo export estático da prévia (output: "export")
export const dynamic = "force-static";

/**
 * OG image gerada no build, com a paleta e o arco da marca.
 * Os arcos são divs com borda + border-radius (satori não processa <svg> inline
 * nesta plataforma).
 */
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        backgroundColor: "#F7FFFF",
        position: "relative",
        fontFamily: "Georgia, serif",
        overflow: "hidden",
      }}
    >
      {/* arcos da marca: semicírculos de borda */}
      <div
        style={{
          position: "absolute",
          right: -180,
          bottom: -370,
          width: 740,
          height: 740,
          borderRadius: 999,
          border: "5px solid #82A2AF",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: -80,
          bottom: -290,
          width: 540,
          height: 540,
          borderRadius: 999,
          border: "3px solid #AEBFC5",
          display: "flex",
        }}
      />

      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ fontSize: 64, color: "#34464D", letterSpacing: 2 }}>GSC</div>
          <div style={{ fontSize: 19, color: "#587783", letterSpacing: 12, marginTop: 4 }}>
            ADVOCACIA
          </div>
        </div>
        <div style={{ width: 2, height: 96, backgroundColor: "#34464D", display: "flex" }} />
        <div style={{ fontSize: 26, color: "#587783", maxWidth: 280, lineHeight: 1.3 }}>
          Aposentadorias e Benefícios do INSS
        </div>
      </div>

      <div
        style={{
          marginTop: 64,
          fontSize: 58,
          color: "#34464D",
          maxWidth: 860,
          lineHeight: 1.15,
        }}
      >
        O INSS negou? A negativa não é a palavra final.
      </div>

      <div style={{ marginTop: 40, fontSize: 27, color: "#587783", display: "flex" }}>
        Atendimento 100% online · todo o Brasil · 5,0 no Google (405 avaliações)
      </div>
    </div>,
    { ...size },
  );
}
