type PostmarkProps = {
  period: string;
};

// A round paper postmark carrying a period of time, used as the marker for timeline entries.
export function Postmark({ period }: PostmarkProps) {
  const [first, ...rest] = period.split(" ");
  const lines = rest.length > 0 ? [first, rest.join(" ")] : [first];

  return (
    <>
      <span className="sr-only">{period}</span>
      <svg
        viewBox="0 0 112 112"
        aria-hidden="true"
        focusable="false"
        className="h-24 w-24 shrink-0 -rotate-6 sm:h-28 sm:w-28"
      >
        <circle cx="56" cy="56" r="54" className="fill-paper" />
        <circle
          cx="56"
          cy="56"
          r="49"
          className="fill-none stroke-carmine"
          strokeWidth="3"
        />
        <circle
          cx="56"
          cy="56"
          r="43"
          className="fill-none stroke-carmine"
          strokeWidth="1.5"
        />
        {lines.map((line, index) => (
          <text
            key={line}
            x="56"
            y={lines.length === 1 ? 65 : 52 + index * 24}
            textAnchor="middle"
            className={`fill-ink font-display font-bold ${lines.length > 1 ? "text-[20px]" : "text-[24px]"}`}
          >
            {line}
          </text>
        ))}
      </svg>
    </>
  );
}

type CancelProps = {
  ringText: string;
  className?: string;
};

// Round cancellation mark with wavy bars, as stamped across a stamp or an envelope.
export function Cancel({ ringText, className }: CancelProps) {
  return (
    <svg
      viewBox="0 0 300 170"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <defs>
        <path
          id="cancel-ring"
          d="M 96,85 m -47,0 a 47,47 0 1,1 94,0 a 47,47 0 1,1 -94,0"
        />
      </defs>
      <circle
        cx="96"
        cy="85"
        r="66"
        className="fill-none stroke-carmine"
        strokeWidth="4"
      />
      <circle
        cx="96"
        cy="85"
        r="33"
        className="fill-none stroke-carmine"
        strokeWidth="1.5"
      />
      <text
        className="fill-carmine font-display text-[13px] font-bold"
        letterSpacing="1"
      >
        <textPath
          href="#cancel-ring"
          textLength="290"
          lengthAdjust="spacing"
        >
          {ringText}
        </textPath>
      </text>
      <text
        x="96"
        y="94"
        textAnchor="middle"
        className="fill-carmine font-display text-[28px] font-extrabold"
      >
        RRD
      </text>
      {[30, 60, 90, 120, 150].map((y) => (
        <path
          key={y}
          d={`M 166 ${y} q 8 -9 16 0 t 16 0 t 16 0 t 16 0 t 16 0 t 16 0 t 16 0 t 16 0`}
          className="fill-none stroke-carmine"
          strokeWidth="4"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}
