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
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#e9f0ea",
          color: "#0d3b32",
        }}
      >
        <div style={{ fontSize: 36, fontWeight: 700, color: "#476b62" }}>
          Rifqi Rayita Dhiyaulhaq
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
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
              fontSize: 92,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: -3,
            }}
          >
            {project?.title ?? "Project"}
          </div>
          <div style={{ fontSize: 36, marginTop: 28, color: "#476b62" }}>
            {project?.stack.join(", ") ?? ""}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
