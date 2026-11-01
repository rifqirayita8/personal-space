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
          padding: 56,
          background: "#1c2c8c",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 28,
            background: "#f4f5f2",
            color: "#0e1440",
          }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: 36,
              border: "4px solid #1c2c8c",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: 120,
                  fontWeight: 900,
                  lineHeight: 0.92,
                  letterSpacing: -2,
                }}
              >
                <span>Rifqi</span>
                <span>Rayita</span>
                <span>Dhiyaulhaq</span>
              </div>
              <div
                style={{
                  fontSize: 72,
                  fontWeight: 800,
                  color: "#d6001c",
                }}
              >
                RRD
              </div>
            </div>
            <div
              style={{
                display: "flex",
                padding: "10px 24px",
                background: "#d6001c",
                color: "#f4f5f2",
                fontSize: 44,
                fontWeight: 700,
              }}
            >
              Software engineer
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
