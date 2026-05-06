import { ImageResponse } from "next/og";

export const alt = "4 Pixels — Agência Digital. Criamos sites e aplicativos que convertem.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#0a0a0f",
          color: "white",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -200,
            left: -200,
            width: 700,
            height: 700,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(245,166,35,0.18), transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -180,
            right: -180,
            width: 600,
            height: 600,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(45,137,239,0.18), transparent 70%)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 36,
              height: 36,
              transform: "rotate(45deg)",
              background: "linear-gradient(135deg, #F5A623, #E8472F)",
              display: "flex",
            }}
          />
          <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: -0.5 }}>4 Pixels</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 980,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Criamos sites</span>
            <span
              style={{
                background: "linear-gradient(135deg, #2D89EF, #27AE60)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              que convertem.
            </span>
          </div>
          <div style={{ fontSize: 30, color: "#a1a1aa", maxWidth: 900, display: "flex" }}>
            Desenvolvimento de sites e aplicativos com foco em resultado.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#71717a",
          }}
        >
          <span>ad4pixels.com.br</span>
          <span style={{ letterSpacing: 4, textTransform: "uppercase" }}>Agência Digital</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
