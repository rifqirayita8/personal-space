import type { Motif } from "@/lib/types";

type VignetteProps = {
  motif: Motif;
  className?: string;
};

// Engraved line-work, authored here as placeholder art. Strokes use currentColor,
// so each stamp prints its vignette in one ink via the `color` it sits in.
// All geometry is computed from fixed formulas, so output is identical on every build.

const WAVE_ROWS = Array.from({ length: 13 }, (_, row) => {
  const baseline = 14 + row * 8.5;
  const amplitude = 1.5 + 9 * Math.sin(((row + 0.5) / 13) * Math.PI);
  const points = Array.from({ length: 29 }, (_, step) => {
    const x = 4 + step * 4;
    const y = baseline + amplitude * Math.sin(x * 0.19 + row * 0.55);
    return `${step === 0 ? "M" : "L"}${x},${y.toFixed(1)}`;
  });
  return points.join(" ");
});

const CALENDAR_CELLS = Array.from({ length: 30 }, (_, index) => ({
  x: 9 + (index % 6) * 17,
  y: 24 + Math.floor(index / 6) * 17,
  filled: [3, 8, 14, 19, 22, 27].includes(index),
}));

// Diagonal crosshatch clipped to the frame: x + y = c and x - y = d, step 12.
const LATTICE_LINES = [
  ...Array.from({ length: 17 }, (_, i) => {
    const c = 12 + i * 12;
    return c <= 120
      ? `M2,${c - 2} L${c - 2},2`
      : `M${c - 118},118 L118,${c - 118}`;
  }),
  ...Array.from({ length: 17 }, (_, i) => {
    const d = -108 + i * 12;
    return d >= 0
      ? `M${d + 2},2 L118,${118 - d}`
      : `M2,${2 - d} L${118 + d},118`;
  }),
];

export function Vignette({ motif, className }: VignetteProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {motif === "rosette" ? (
        <>
          <circle cx="60" cy="60" r="58" strokeWidth="2" />
          {Array.from({ length: 12 }, (_, k) => (
            <ellipse
              key={k}
              cx="60"
              cy="60"
              rx="52"
              ry="17"
              transform={`rotate(${k * 15} 60 60)`}
            />
          ))}
          <circle cx="60" cy="60" r="7" />
        </>
      ) : null}
      {motif === "waveform" ? (
        <>
          <rect x="2" y="2" width="116" height="116" strokeWidth="2" />
          {WAVE_ROWS.map((d) => (
            <path key={d} d={d} />
          ))}
        </>
      ) : null}
      {motif === "lattice" ? (
        <>
          <rect x="2" y="2" width="116" height="116" strokeWidth="2" />
          {LATTICE_LINES.map((d) => (
            <path key={d} d={d} />
          ))}
        </>
      ) : null}
      {motif === "calendar" ? (
        <>
          <rect x="2" y="2" width="116" height="116" strokeWidth="2" />
          <path d="M2 18H118" strokeWidth="2" />
          {CALENDAR_CELLS.map((cell) => (
            <rect
              key={`${cell.x}-${cell.y}`}
              x={cell.x}
              y={cell.y}
              width="14"
              height="14"
              fill={cell.filled ? "currentColor" : "none"}
            />
          ))}
        </>
      ) : null}
    </svg>
  );
}
