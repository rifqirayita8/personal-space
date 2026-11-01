# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, confirmed together: recruiters and hiring managers evaluating Rifqi for a job, and prospective freelance clients deciding whether to hire him for a project. Both arrive with a link (LinkedIn, a CV, an email signature) and give the site seconds to answer who this is, whether the work is credible, and how to get in touch.

## Product Purpose

A personal website for Rifqi Rayita Dhiyaulhaq, a software engineer, whose purpose is personal branding. Success: a visitor understands who he is and what he is good at, sees proof of real work, and contacts him (email or LinkedIn) or downloads his CV.

## Positioning

Confirmed: the thing to be remembered is a full-stack engineer who is tidy and dependable, work that is readable, easy to maintain, and complete from the data model to the screen. The specific, differentiating proof behind that claim (which systems, which outcomes) is not yet supplied and stays open until the real projects arrive.

## Operating Context

Visitors reach the site from outside links and often compare it against a CV or LinkedIn profile. The site is static, in English only, with no blog and no backend. Contact is by `mailto:` and a LinkedIn link only; there is no contact form.

## Capabilities and Constraints

- Surfaces in scope for the revamp (confirmed): the home page (hero, selected work, about with skills, experience and education, contact), the project detail pages at `/projects/[slug]`, the 404 and error pages, and the shared header and footer.
- Three projects, each with a detail page. A downloadable CV (PDF).
- Stack is fixed by the existing codebase: Next.js 16.4.3 (App Router, `cacheComponents` and `partialPrefetching` enabled), React 19.3, Tailwind CSS 4, TypeScript. No `new Date()`/`Date.now()`/`Math.random()` during render; no `dynamicParams` segment config; `error.tsx` takes a `retry` prop. Read `node_modules/next/dist/docs/` before changing framework-level code (see AGENTS.md).
- All site content lives in `content/*.ts` and `lib/seo.ts`; the visual layer lives in `app/` and `components/`.
- Terminology: the person is "Rifqi Rayita Dhiyaulhaq"; the short mark is "RRD".
- Undecided: the real LinkedIn profile URL (the current one is a guess), the production domain (`NEXT_PUBLIC_SITE_URL`), and whether to ship a dark mode at all.

## Brand Commitments

- Name: Rifqi Rayita Dhiyaulhaq, software engineer.
- Public contact: `rifqirrd8@gmail.com` and LinkedIn only, no other social accounts.
- No visual commitments have been made binding.

## Evidence on Hand

The user states they have real projects, real work and education history, a publishable profile photo, and a real CV. None of these are in the repository yet. Everything currently shown (projects, employers, dates, skills, the "open to full-time roles and freelance projects" line, the CV PDF) is synthetic placeholder, flagged by the placeholder notice bar. Future work must not invent real-looking projects, employers, metrics, or testimonials, and must make the swap to real material easy when the user supplies it.

## Product Principles

1. Proof over claims: a visitor should see evidence of dependable engineering before reading an assertion of it.
2. A recruiter must be able to scan the page in seconds; a client must always have an obvious way to reach Rifqi.
3. Honesty about placeholders: synthetic content stays labelled until replaced, and nothing is fabricated to fill a gap.
4. Keep it simple to operate: static, no backend, content edited in one place.
5. One clear contact path (email, then LinkedIn) rather than many.

## Accessibility & Inclusion

No product-specific requirement has been stated. The earlier build targeted WCAG AA contrast, keyboard focus, a skip link, and reduced-motion support; that is a working baseline, not a user-confirmed standard.
