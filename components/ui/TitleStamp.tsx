import { Vignette } from "@/components/ui/Vignette";
import { INK_VAR } from "@/lib/ink";
import type { Ink, Motif } from "@/lib/types";

type TitleStampProps = {
  title: string;
  value: string;
  band: string;
  motif: Motif;
  ink?: Ink;
};

// A full stamp whose face carries a page title: used on the project, 404, and error pages.
export function TitleStamp({
  title,
  value,
  band,
  motif,
  ink = "ultra",
}: TitleStampProps) {
  return (
    <div
      className="stamp perf name-stamp name-stamp--compact"
      style={{ ["--engrave" as string]: INK_VAR[ink] }}
    >
      <h1 className="name-stamp__name name-stamp__name--title">{title}</h1>
      <p
        aria-hidden="true"
        className="name-stamp__value print-carmine"
        style={{ color: INK_VAR[ink] }}
      >
        {value}
      </p>
      <Vignette motif={motif} className="name-stamp__art print-ultra" />
      <p className="name-stamp__band print-carmine">{band}</p>
    </div>
  );
}
