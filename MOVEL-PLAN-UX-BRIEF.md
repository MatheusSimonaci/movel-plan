# Móvel Plan — V1 UX Brief

**Status:** Ready for CTO/Dev handoff  
**Revision:** V1 portfolio-only redesign  
**Date:** 2026-05-19

## Goal

Redesign the Móvel Plan site as a **portfolio-first experience**. The page should feel like a curated showcase of completed interiors, not a general service brochure.

The board direction is strict:
- completed projects are the proof
- copy stays sparse and functional
- contact exists, but does not dominate
- no testimonials
- no generic trust-stat claims
- no long about/services/process storytelling unless it directly supports the portfolio

Source of truth for media: [docs/movel-plan-asset-inventory.md](/paperclip/instances/default/projects/cfa2ceb8-a67a-4588-b076-ea65678dd355/7b424623-6f78-4260-83c5-f0fcb3d3b479/movel-plan/docs/movel-plan-asset-inventory.md:1)

## V1 Content Principles

1. The first screen must show a real completed project immediately.
2. Every major section must help the visitor browse projects or request a similar project.
3. Text should label and clarify the work, not sell around the work.
4. Only show categories backed by real assets from the inventory.
5. Educational/process/support content is secondary and should stay short or be omitted.

## Asset Direction

Use these assets first:
- Hero reel: `public/assets/movel-plan/DYPtgxORg-Q.mp4`
- Hero poster: `public/assets/movel-plan/DYPtgxORg-Q-poster.webp`
- Living room support: `public/assets/movel-plan/DOOaavrDSEE.mp4`
- Bedroom support: `public/assets/movel-plan/DN6JZ30j4nC.mp4`
- Bathroom support: `public/assets/movel-plan/DOHXUTIknN5.mp4`
- Kitchen category cover: `public/assets/movel-plan/DNRSw3zSElq.webp`
- Logo placeholder: `public/assets/movel-plan/profile-logo.webp`

Do not invent office projects, before/after stories, or verified-looking proof that is not present in the asset inventory.

## Page Structure

### 1. Hero

Purpose: establish credibility with real project media in the first viewport.

Structure:
- full-viewport hero using the 2026-05-12 living room reel
- darkened media overlay for legibility
- compact logo in header, not centered as a giant brand lockup
- minimal text only:
  - headline: `Móveis Planejados Personalizados`
  - subhead: `Projetos únicos feitos para você`
  - primary action: `Ver Projetos`
- no secondary hero CTA competing with the portfolio

Behavior:
- muted autoplay
- loop
- poster visible instantly
- no controls unless autoplay fails
- `prefers-reduced-motion` disables autoplay and uses poster only

Desktop note:
- keep the media immersive, but preserve text readability with a left or bottom anchored content block
- avoid turning the hero into a wide empty banner

### 2. Portfolio Navigation

Purpose: move directly from hero into browsing.

Structure:
- a compact filter row or anchored category chips
- categories only from verified inventory:
  - Salas
  - Quartos / Closets
  - Cozinhas
  - Banheiros / Lavabos

Behavior:
- filters update visible cards in place
- selected state must be obvious
- if filters add too much complexity, use stacked category sections instead of JS filtering

### 3. Portfolio Grid

Purpose: make browsing the main activity of the page.

Structure:
- project cards led by real imagery or reel posters
- each card contains only:
  - category
  - short project label
  - material/finish tags when known
- no long card paragraphs

Card content pattern:
- `Sala planejada | MDF Ares + Off White + Itapuã`
- `Quarto planejado | marcenaria sob medida`
- `Banheiro planejado | compacto + funcional`

Behavior:
- hover on desktop reveals a subtle overlay and `Ver Detalhes`
- tap on mobile opens the project detail view
- maintain fast scroll; do not autoplay multiple videos in-grid at once

### 4. Project Detail View

Purpose: let the visitor inspect a single project without leaving the page.

Pattern:
- modal or slide-up detail panel
- lead with the strongest image or reel for that project
- include:
  - project category
  - one short descriptive sentence
  - material/finish labels when available from caption data
  - optional secondary gallery, max 3 to 5 items
  - CTA: `Quero um Projeto Como Este`

Rules:
- keep the modal editorial and visual
- no dense spec sheet
- no unrelated marketing copy
- if only one strong asset exists for a category, show it cleanly rather than padding with weak media

### 5. Secondary Motion Strip

Purpose: reinforce that Móvel Plan has multiple completed environments without creating another generic section.

Structure:
- 2 to 3 short reels below the main portfolio grid
- use living room, bedroom, and bathroom reels
- title should be functional, for example `Mais Ambientes`

Behavior:
- posters first
- muted autoplay only when each reel enters the viewport
- one reel can autoplay at a time on mobile

This section is optional if the main portfolio grid already carries enough motion.

### 6. Contact CTA

Purpose: convert interest after the portfolio has done the heavy lifting.

Structure:
- one restrained contact block near the bottom
- short headline, one-line support copy, primary WhatsApp/orcamento action
- optional phone link as secondary action

Rules:
- visually connected to the portfolio, not a separate campaign banner
- no oversized copy block
- no testimonial, guarantee, or urgency language
- form can be omitted for V1 if a direct WhatsApp CTA is faster and cleaner

## Logo Placement

- Header: small brand mark at top-left or centered in a slim header bar
- Footer: simple repeat of logo plus Instagram/WhatsApp links
- Use the extracted profile image only as a temporary placeholder
- Do not build the visual system around the low-resolution logo asset

## What To Remove From V0

Remove entirely:
- testimonials
- fake or unverified trust metrics
- generic services section
- broad about/mission text
- long explanation blocks about quality, excellence, or custom service

Minimize heavily:
- process content
- differentiator cards
- educational material guides
- extra CTA repetition

If a non-portfolio section remains, it must be short and obviously in service of browsing or conversion.

## Responsive Requirements

### Mobile

Prioritize:
- hero media fills the screen without hiding the opening text
- category navigation remains thumb-reachable
- grid reads as 2 columns when possible; fall back to 1 column if cards become cramped
- project detail opens as a bottom sheet or full-screen modal
- primary CTA stays easy to hit, minimum 44x44 target

### Desktop

Prioritize:
- hero feels cinematic, not boxed in
- portfolio grid expands to 3 columns
- detail modal uses a split layout: media first, text second
- filters/chips remain visible without pushing the portfolio too far down

### Shared

- no horizontal scroll
- poster/image placeholders must prevent layout shift
- keyboard-accessible modal and close control
- visible focus states
- all visible media optimized and lazy-loaded below the fold

## Implementation Notes

- Prefer real asset labels pulled from Instagram caption metadata where available.
- Keep Instagram permalinks in data for internal provenance, not visible UI.
- Use poster images as the default surface for reel-backed cards.
- Avoid playing more than one non-hero video at once.
- If a category lacks enough strong media, reduce the category count instead of adding filler.

## Acceptance Checklist

- The first screen shows a real Móvel Plan completed project.
- The main body of the page is portfolio browsing, not brand storytelling.
- Every visible category is backed by real inventory assets.
- No testimonials or unverified stats appear in the UI.
- Contact is present but secondary to the project showcase.
- Mobile and desktop behaviors are clearly defined enough for implementation without design guesswork.
