---
name: Rifqi Rayita Dhiyaulhaq, Software Engineer
description: A portfolio issued as a sheet of perforated postage stamps on an ultramarine ground, with contact as the postmark.
colors:
  ultramarine: "#1c2c8c"
  carmine: "#d6001c"
  deep-ink: "#0e1440"
  stamp-paper: "#f4f5f2"
  paper-soft: "#c9cdde"
  ink-soft: "#4a4f6e"
typography:
  display:
    fontFamily: "Big Shoulders, Arial Narrow, sans-serif"
    fontSize: "6rem"
    fontWeight: 900
    lineHeight: 0.9
  headline:
    fontFamily: "Big Shoulders, Arial Narrow, sans-serif"
    fontSize: "4.5rem"
    fontWeight: 800
    lineHeight: 0.95
  title:
    fontFamily: "Big Shoulders, Arial Narrow, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 800
    lineHeight: 1
  body:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  body-large:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 700
    lineHeight: 1.1
rounded:
  none: "0px"
spacing:
  gutter: "1.75rem"
  stamp-inset: "0.7rem"
  perforation-pitch: "14px"
  section-sm: "4rem"
  section-lg: "6rem"
components:
  stamp:
    backgroundColor: "{colors.stamp-paper}"
    textColor: "{colors.deep-ink}"
    rounded: "{rounded.none}"
    padding: "1.5rem 1.75rem"
  button-primary:
    backgroundColor: "{colors.carmine}"
    textColor: "{colors.stamp-paper}"
    rounded: "{rounded.none}"
    padding: "0 1.75rem"
    height: "3rem"
  button-secondary:
    backgroundColor: "{colors.stamp-paper}"
    textColor: "{colors.deep-ink}"
    rounded: "{rounded.none}"
    padding: "0 1.75rem"
    height: "3rem"
  button-ink:
    backgroundColor: "{colors.deep-ink}"
    textColor: "{colors.stamp-paper}"
    rounded: "{rounded.none}"
    padding: "0 1.75rem"
    height: "3rem"
  home-mark:
    backgroundColor: "{colors.carmine}"
    textColor: "{colors.stamp-paper}"
    rounded: "{rounded.none}"
    padding: "0.35rem 0.9rem"
  value-band:
    backgroundColor: "{colors.carmine}"
    textColor: "{colors.stamp-paper}"
    typography: "{typography.title}"
    padding: "0.4rem 1rem"
  ink-band:
    backgroundColor: "{colors.deep-ink}"
    textColor: "{colors.stamp-paper}"
    padding: "3.5rem 0"
---

# Design System: Rifqi Rayita Dhiyaulhaq, Software Engineer

## Overview

**Creative North Star: "The Stamp Sheet"**

The site is one flat ultramarine sheet carrying paper-white stamps. Everything that is content sits on a stamp, a band, or a postmark; the sheet itself only holds them. The idea is delivery as proof of dependability: work issued, perforated, and cancelled, like mail that arrived. The three inks are fixed, and nothing outside them is printed.

It is a single light theme with no dark mode, because the sheet is one object. Surfaces are hard-edged and flat. Detail comes from perforated edges, an engraved keyline inside each stamp, and line-work vignettes, not from shadow, blur, or colour blending.

**Key Characteristics:**
- Three inks (ultramarine, carmine, deep ink) on one stamp paper, plus two derived tints for secondary text.
- Perforated edges made with CSS masks; no border radius anywhere.
- Narrow, heavy display lettering (Big Shoulders) for anything stamped; a humane reading face (Atkinson Hyperlegible Next) for anything read.
- Flat: no shadows, no colour gradients. Depth by overlap and by the lift of hover.
- One motion moment: colour passes registering onto a fixed keyline on load.

## Colors

Three saturated inks on a cool off-white paper; the ground is the darkest saturated ink, so paper reads as the lit object.

### Primary
- **Ultramarine Ground** (`ultramarine`): the sheet itself (html, body background, scrollbar track), the airmail border keyline, and the default engraving ink on the name stamp and title stamps.
- **Carmine Seal** (`carmine`): the "value" ink. Buttons (primary), the home mark, the value bands under stamp titles, the placeholder notice bar, the postmark rings and cancellation, text selection, scrollbar thumb, the skip link, and hover frame on stamp links.

### Secondary
- **Deep Ink** (`deep-ink`): text on paper, the 2px engraved frame inside every stamp, the full-bleed Experience band, the ink button, and the third project ink.

### Neutral
- **Stamp Paper** (`stamp-paper`): stamp and panel faces, text on ultramarine, ink, and carmine, and the secondary button.
- **Selvage Paper** (`paper-soft`, 80% paper mixed with ultramarine, derived): secondary text on the ultramarine ground (footer text) and the hairline rules under the header and above the footer.
- **Soft Ink** (`ink-soft`, 74% deep ink mixed with paper, derived): secondary text inside stamps (project summaries, stack lines).

### Named Rules
**The Three Inks Rule.** Only ultramarine, carmine, and deep ink print. Tints exist only as the two derived mixes above, for secondary text and hairlines; a fourth hue is never introduced.

**The Ground Is Ultramarine Rule.** Reading text on the sheet is paper; reading text on paper is deep ink. Carmine is never body text on the ultramarine ground.

**The One Ink Per Stamp Rule.** A project keeps one engraving ink (`--engrave`: ultramarine, carmine, or deep ink) for its vignette and year on every page it appears.

## Typography

**Display Font:** Big Shoulders (with Arial Narrow, sans-serif), loaded with the optical size axis.
**Body Font:** Atkinson Hyperlegible Next (with system-ui, sans-serif).

**Character:** Big Shoulders is the stamp engraver's lettering: condensed, heavy, tightly leaded. Atkinson keeps long reading easy. Numerals (years, values, periods) are always display.

### Hierarchy
- **Display** (900, `clamp(2.75rem, 7.2vw, 6rem)`, 0.9): the name on the definitive stamp; on the home stamp sized from the stamp's own width (`min(6rem, 20cqi)`). Display is capped at 6rem.
- **Headline** (800, `clamp(2.75rem, 6vw, 4.5rem)`, 0.95): section headings (About, Experience and education, Get in touch); page title on title stamps is `clamp(2.5rem, 7vw, 4.5rem)` at 900.
- **Title** (800, `clamp(1.5rem, 2vw, 1.875rem)`, 1): stamp titles; years at 700 and 1.5rem; subheadings at 1.875rem (`text-3xl`); value bands at 700, `clamp(1.5rem, 3vw, 2rem)`.
- **Body** (400, 1.0625rem, 1.65): default text; About paragraphs at 1.125rem, 1.7, capped at 66ch; other prose at 52-56ch.
- **Label** (600-700, 0.9375rem): nav links, button text, stamp stack lines (0.875rem).

### Named Rules
**The Stamped Words Rule.** Anything lettered onto a stamp, band, or postmark (names, titles, years, periods, values) is Big Shoulders; anything a visitor reads in sentences is Atkinson.

**The Case As Written Rule.** Display lettering is set in the case of the content; no uppercase transforms and no letter-spacing tracking are used on text. Ring text on the cancellation mark is written in capitals in its content.

## Layout

A single centered column (`max-w-6xl`, 4 on small, 8 from 640px side padding) on the ultramarine sheet. The opening is a two-column sheet from 64rem: name stamp and intro at 7fr, three project stamps stacked at 5fr, gutters 1.75rem by 2.25rem; below that it is one column. Later sections use a 12-column grid (4 for the heading, 8 for content) from 1024px. Sections are separated by 4rem to 6rem of sheet. Stamp interiors pad 1.5rem to 3.5rem. The home stamp's internal layout follows its own width through a container query (switches at 36rem), not the viewport.

Header and footer are thin selvage strips with a paper-soft hairline. Anchors use `scroll-mt-4`.

## Elevation & Depth

No shadows and no colour gradients. Depth is overlap and edge: the cancellation postmark lies across the contact panel, stamps carry an engraved inner frame, and the Experience band is cut by perforation. The only gradient functions are structural: the repeating hard-stop airmail stripe and the radial alpha masks that cut perforations.

### Named Rules
**The Flat Sheet Rule.** Surfaces are flat at rest. The only response to state is a small vertical lift (-4px on stamp links, -2px on buttons) and a colour change of the frame, never a shadow.

## Shapes

Rectangles with no radius. Every stamp, button, mark, and the Experience band has real perforated edges: circular notches of 4px radius on a 14px pitch (stamp-buttons 3px on 10px, the home mark 2.5px on 8px, the About stamp 4.5px on 16px). The Experience band is perforated top and bottom only. Inside every stamp sits a 2px deep-ink frame inset 0.7rem. Circles appear only as postmarks (double carmine ring, rotated about -6 degrees) and the cancellation mark (rings plus five wavy bars, rotated -8 degrees). The airmail border is a 2px ultramarine line around a 0.875rem band of 135-degree stripes in carmine, paper, ultramarine, paper.

## Components

### Stamp (surface)
Paper face, deep-ink text, perforated edge, 2px ink frame inset 0.7rem. Used for the home name stamp, project stamps, the About panel, and title stamps. The `--engrave` property sets the colour of its vignette and year.

### Definitive Name Stamp
Name set in display at up to 6rem in a grid with the availability note and an engraved rosette; a carmine value band closes it with the role. Below 36rem of its own width the name spans the full row; above it the art moves to the right at 10rem.

### Project Stamp (link)
Vignette column (5rem, 7rem from 640px), title, year in the engraving ink, soft-ink summary and a three-item stack line. Hover or focus lifts 4px, turns the frame carmine, and puts a wavy underline on the title.

### Title Stamp
Full stamp carrying a page title, a value numeral, an engraved vignette, and a carmine band. Used on project detail, 404, and error pages.

### Buttons (stamp-shaped)
- **Shape:** perforated rectangle, no radius, 3rem tall, 1.75rem side padding, bold text.
- **Primary:** carmine with paper text. **Secondary:** paper with ink text. **Ink:** deep ink with paper text.
- **Hover / Focus:** lift 2px, wavy 2px underline on the label. Focus outline: 3px paper at 4px offset on the ultramarine ground; deep ink inside paper panels.

### Navigation
Selvage strip: carmine perforated home mark ("RRD") on the left; four links (Work, About, Experience, Contact) in 0.9375rem semibold, with a wavy cancellation underline on hover and focus. It wraps; no hamburger.

### Postmark (timeline marker)
Round paper disc, double carmine ring, period in deep-ink display type on one or two lines, 6rem (7rem from 640px), rotated about -6 degrees. Marks each Experience entry.

### Experience Band
Full-bleed deep-ink band with perforated top and bottom edges, paper text, a 4/8 column split, and postmarks as list markers.

### Contact Panel
Airmail-stripe border around a paper panel with ink text, a display-size email link with wavy underline on hover, an ink LinkedIn button and a primary CV button, and a cancellation mark overlaid at the top right from the xl breakpoint.

### Motion
One load moment: the carmine pass (900ms, 140ms delay) and ultramarine pass (900ms, 380ms delay) register from small offsets (8px/-6px and -7px/5px) onto a fixed keyline, easing `cubic-bezier(0.16, 1, 0.3, 1)`. Hover lifts take 160ms on the same easing. All of it is disabled under `prefers-reduced-motion`.

## Do's and Don'ts

### Do:
- **Do** put every piece of content on a stamp, a band, or the sheet in paper text; give stamp, button, and mark edges real perforation masks.
- **Do** keep to ultramarine `#1c2c8c`, carmine `#d6001c`, deep ink `#0e1440`, and stamp paper `#f4f5f2`.
- **Do** letter names, years, titles, and periods in Big Shoulders and set sentences in Atkinson Hyperlegible Next; cap display at 6rem.
- **Do** use the wavy cancellation underline as the hover and focus signal for links.
- **Do** draw vignettes as line-work in the stamp's single `--engrave` ink.
- **Do** keep a visible focus outline: paper on the ultramarine ground, deep ink inside `.on-paper` panels.

### Don't:
- **Don't** add shadows, blur, or colour gradients; the airmail stripe and perforation masks are the only gradient functions.
- **Don't** round corners; circles belong to postmarks only.
- **Don't** add a dark theme or a fourth ink.
- **Don't** set carmine as small text on the ultramarine ground.
- **Don't** return to a headline over a row of equal cards: the opening is a sheet of different-sized stamps.
