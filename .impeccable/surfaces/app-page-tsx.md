---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: ["app/projects/[slug]/page.tsx","app/not-found.tsx","app/error.tsx"]
---

# Surface brief: Rifqi's portfolio (home, project detail, 404, error)

## Scope and visitor mode

Persuade. The visitor (recruiter or freelance client, arriving from a LinkedIn link or a CV) decides whether to contact Rifqi. Redesign: the previous solder-mask green and gilt look is replaced; copy, section order, features, and contact stay.

## Audience, job, action, proof, constraints

- Audience and job: recruiters and clients skimming several candidates; they need role, proof, and a contact path in seconds.
- Action: email Rifqi, open LinkedIn, or download the CV. Contact is `mailto:` and LinkedIn only.
- Proof: three projects with detail pages. All project, employer, and skill content is synthetic placeholder until the user supplies real material; the placeholder notice bar stays until then.
- Constraints: Next.js 16 static site, no backend, English only, one light theme (no dark mode: the sheet is one object), keyboard focus visible, reduced motion respected, no new dependencies.

## Chosen direction and memorable moment

Stamp Sheet. The memorable moment is the opening sheet: the name is a definitive stamp, the three projects are stamps beside it, and the colour passes print onto a fixed keyline, registering one after another on load.

## Direction contract

THESIS: Rifqi's work issued as a sheet of postage stamps, with contact as the postmark: delivery as the proof of dependability. It refuses the developer-portfolio default of a headline over a row of equal project cards.

OWN-WORLD: A flat ultramarine sheet (#1C2C8C) carrying paper-white stamps (#F4F5F2) with real perforated edges (CSS mask), inks fixed at ultramarine, carmine (#D6001C), and deep ink (#0E1440). Hard edges only: no shadows, no colour gradients, depth by overlap (the postmark and cancellation lines lie over the contact panel; stamps themselves sit side by side). Big Shoulders for stamp lettering and numerals, Atkinson Hyperlegible Next for reading text. Authored engraved line-work vignettes per project. Round carmine-ring postmarks, wavy cancellation lines, an airmail stripe border on the contact panel.

STORY: The visitor sees a name and "Software engineer", three projects they can open, and a visible way to write, then reads about, history, and contact. They believe: this is a tidy, dependable engineer. They email or open the CV.

FIRST VIEWPORT: Ultramarine sheet, thin selvage nav on top. Left seven columns: the name stamp (name in three lines filling the stamp, the availability note, an engraved rosette, and a carmine band reading "Software engineer"), with the headline and the two stamp-buttons (Email me as the carmine primary, View projects as the paper secondary) beneath it on the sheet. Right five columns: three project stamps stacked, separated from the name stamp by a sheet gutter, each a link with vignette, title, year, stack.

FORM: Candidate 7 of the ordered grounded list (philatelic sheet), assigned by the roll; seed: 1661590e4137b7a4.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved decisions

- Production domain and final LinkedIn URL (see PRODUCT.md).
- Real project vignettes: the engraved line-work is authored placeholder art and can be replaced by real project imagery.
