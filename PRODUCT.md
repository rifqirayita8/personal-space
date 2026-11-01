# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, confirmed together: recruiters and hiring managers evaluating Rifqi for a job, and prospective freelance clients deciding whether to hire him for a project. Both arrive with a link (LinkedIn, a CV, an email signature) and give the site seconds to answer who this is, whether the work is credible, and how to get in touch.

## Product Purpose

A personal website for Rifqi Rayita Dhiyaulhaq, a software engineer, whose purpose is personal branding. Success: a visitor understands who he is and what he is good at, sees proof of real work, and contacts him (email or LinkedIn) or downloads his CV.

## Positioning

Chosen in the first interview: to be remembered as a tidy, dependable engineer whose work is readable and easy to maintain. The LinkedIn profile supplied afterwards fixes the factual basis: a mobile developer (Flutter) who also builds REST back ends (Express.js), working in Agile (Scrum) teams, currently a software engineer at ADAMLabs in Surabaya. The earlier "full-stack, from the data model to the screen" wording was an assumption and is superseded by this; do not claim web front-end or other stacks the profile does not state. The differentiating proof (outcomes, metrics) is still not supplied.

## Operating Context

Visitors reach the site from outside links and often compare it against a CV or LinkedIn profile. The site is static, in English only, with no blog and no backend. Contact is by `mailto:` and a LinkedIn link only; there is no contact form.

## Capabilities and Constraints

- Surfaces in scope for the revamp (confirmed): the home page (hero, selected work, about with skills, experience and education, contact), the project detail pages at `/projects/[slug]`, the 404 and error pages, and the shared header and footer.
- Three projects, each with a detail page. A downloadable CV (PDF).
- Stack is fixed by the existing codebase: Next.js 16.4.3 (App Router, `cacheComponents` and `partialPrefetching` enabled), React 19.3, Tailwind CSS 4, TypeScript. No `new Date()`/`Date.now()`/`Math.random()` during render; no `dynamicParams` segment config; `error.tsx` takes a `retry` prop. Read `node_modules/next/dist/docs/` before changing framework-level code (see AGENTS.md).
- All site content lives in `content/*.ts` and `lib/seo.ts`; the visual layer lives in `app/` and `components/`.
- Terminology: the person is "Rifqi Rayita Dhiyaulhaq"; the short mark is "RRD".
- Undecided: the production domain (`NEXT_PUBLIC_SITE_URL`), the real project write-ups, whether the two AdamExpertise v2 mentions on the profile (ADAMLabs 2025 and PT Wahana Meditek 2024) describe one project or two, and whether to show GitHub.

## Brand Commitments

- Name: Rifqi Rayita Dhiyaulhaq, software engineer.
- Public contact: `rifqirrd8@gmail.com` and LinkedIn (`https://www.linkedin.com/in/mobiledeveloper-rifqi-rayita-dhiyaulhaq`, confirmed from the profile PDF) only. The profile also lists a GitHub, github.com/rifqirayita8; the user chose LinkedIn only, so it is not shown unless they ask.
- No visual commitments have been made binding.

## Evidence on Hand

Real, from the user's LinkedIn profile PDF (supplied in the conversation): name, headline, summary, location (Surabaya), work history (ADAMLabs 2026 to now and 2025; PT Winnicode Garuda Indonesia 2025 to 2026; PT Wahana Meditek Indonesia 2024), education (Politeknik Elektronika Negeri Surabaya; SMA Negeri 1 Ponorogo), top skills, and certifications (TOEFL ITP, EF SET English B2 59/100, JLPT with no level stated). Named projects on the profile: News Portal App (Winnicode) and AdamLIS / AdamExpertise v2 (Flutter). Two webinar moderator roles are listed but not shown on the site.

Still synthetic placeholder: the three project write-ups (titles, problems, outcomes) and the CV PDF, flagged by the placeholder notice bar. The user also says they have a publishable profile photo and a real CV that are not in the repository. No availability status is stated, so none is shown. Future work must not invent projects, employers, metrics, outcomes, or testimonials, and must not add claims the profile does not make.

## Product Principles

1. Proof over claims: a visitor should see evidence of dependable engineering before reading an assertion of it.
2. A recruiter must be able to scan the page in seconds; a client must always have an obvious way to reach Rifqi.
3. Honesty about placeholders: synthetic content stays labelled until replaced, and nothing is fabricated to fill a gap.
4. Keep it simple to operate: static, no backend, content edited in one place.
5. One clear contact path (email, then LinkedIn) rather than many.

## Accessibility & Inclusion

No product-specific requirement has been stated. The earlier build targeted WCAG AA contrast, keyboard focus, a skip link, and reduced-motion support; that is a working baseline, not a user-confirmed standard.
