import { ImageResponse } from "next/og";
import { getProject, projects } from "@/content/projects";

export const alt = "Rifqi Rayita Dhiyaulhaq, project";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

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
                fontSize: 40,
                fontWeight: 700,
                color: "#1c2c8c",
              }}
            >
              <span>Rifqi Rayita Dhiyaulhaq</span>
              <span style={{ color: "#d6001c" }}>{project?.year ?? ""}</span>
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 100,
                fontWeight: 900,
                lineHeight: 0.98,
                letterSpacing: -2,
              }}
            >
              {project?.title ?? "Project"}
            </div>
            <div
              style={{
                display: "flex",
                padding: "10px 24px",
                background: "#d6001c",
                color: "#f4f5f2",
                fontSize: 38,
                fontWeight: 700,
              }}
            >
              {project?.stack.slice(0, 3).join(", ") ?? ""}
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
