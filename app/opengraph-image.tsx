import { ImageResponse } from "next/og";

export const alt = "Rifqi Rayita Dhiyaulhaq, Software engineer";
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
          justifyContent: "flex-end",
          padding: 80,
          background: "#e9f0ea",
          color: "#0d3b32",
        }}
      >
        <div
          style={{
            width: 160,
            height: 18,
            background: "#f0c93b",
            marginBottom: 36,
          }}
        />
        <div
          style={{
            fontSize: 112,
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: -4,
          }}
        >
          Rifqi Rayita Dhiyaulhaq
        </div>
        <div style={{ fontSize: 44, marginTop: 28, color: "#476b62" }}>
          Software engineer
        </div>
      </div>
    ),
    { ...size },
  );
}
