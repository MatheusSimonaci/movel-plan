# PREA-299 Design-System Intake Handoff

**Issue:** PREA-299 Redesign  
**Prepared by:** IntakeDesigner  
**Date:** 2026-05-25  
**Status:** Ready for UXDesigner review, not final visual design

## Scope Note

The client request is to copy the design-system feel of Florense and adapt the colors to Móvel Plan's logo. Final visual design-system decisions belong to UXDesigner. This document provides source-linked intake evidence, asset status, design cues, copy implications, risks, and open questions so UXDesigner and WebsiteCopywriter can proceed without re-researching the client.

## Source Inventory

| Source | Link / path | Status | Intake use |
| --- | --- | --- | --- |
| Client inspiration site | https://www.florense.com.br/?hl=pt-BR | Public. Redirects to Florense language variants in some contexts. | Reference for luxury furniture IA, sparse copy, full-bleed image panels, uppercase navigation, and premium product/category taxonomy. |
| Florense home crawl | https://www.florense.com.br/ | Public crawl observed 2026-05-25. | Shows navigation groups: kitchens, closets, wall units, systems, furniture, room dividers, wall panels, corporate; home modules include Casa Florense, Design by Pininfarina, Since 1953, Florense Inside, High-end, finishes, stores. |
| Florense finishes | https://www.florense.com.br/acabamentos | Public crawl observed 2026-05-25. | Useful reference for material-led vocabulary and finish taxonomy; not a license to copy images or exact UI. |
| Móvel Plan Instagram source | https://www.instagram.com/movel.plan/ | Public account; assets already extracted in repo. | First-party social proof and project media source. Web reuse still needs client rights confirmation. |
| Existing asset inventory | `docs/movel-plan-asset-inventory.md` | Complete for V1 extracted batch. | Source of truth for local files, Instagram permalinks, media readiness, and rights caveats. |
| Existing UX brief | `MOVEL-PLAN-UX-BRIEF.md` | Existing V1 portfolio-first direction. | Defines portfolio-first constraints: sparse copy, completed projects as proof, no testimonials or fake stats. |
| Existing design note | `DESIGN.md` | Existing V1 system note. | Current repo design direction. Needs UXDesigner decision if Florense reference supersedes this. |
| Logo asset | `public/assets/movel-plan/profile-logo.webp` | 320x320 WebP, black background, yellow roof mark, white text. | Temporary brand evidence only; not production-grade logo source. |
| Asset manifest | `public/assets/movel-plan/manifest.json` | Machine inventory present. | Confirms local image/video dimensions and file sizes for web-readiness decisions. |

## Client Profile

| Field | Current intake value | Source / verification |
| --- | --- | --- |
| Business name | Móvel Plan | Instagram profile logo and `docs/movel-plan-asset-inventory.md`. |
| Category | Móveis planejados / custom planned furniture | Instagram bio and project captions summarized in asset inventory. |
| Service area | Niterói, Barra, Zona Sul | Instagram bio in asset inventory. Treat exact service boundaries as client-provided social copy, not independently verified. |
| Core offer | Projetos planejados sob medida; orçamento via contact path | Instagram bio and existing brief. |
| Audience | Homeowners seeking planned rooms such as living rooms, kitchens, bedrooms/closets, bathrooms/lavabos | Inferred from extracted assets and captions. |
| Differentiators | Real completed environments, material/finish detail, space optimization | Supported by local portfolio assets; avoid unverified claims like years in market, rating, or project count. |
| Contact channels | Instagram and site contact/WhatsApp path in current build | Exact phone/WhatsApp number should be verified before publication. |

## Florense Reference: Usable Design Evidence

**Brand evidence / information architecture:** Florense's public site is organized around product/category navigation and editorial brand modules rather than dense sales copy. The home crawl exposes category-led navigation such as kitchens, closets, wall units, systems, furniture, room dividers, wall panels, and corporate, plus prestige modules such as "Design by Pininfarina," "Since 1953," "High-end," "Finishes," and "Stores." For Móvel Plan, use the category-led structure but keep categories limited to verified assets: salas, quartos/closets, cozinhas, banheiros/lavabos.

**Conversion relevance:** Florense supports trust through heritage, design partnerships, finish taxonomy, and store discovery. Móvel Plan does not currently have verified equivalent proof for heritage or ratings, so conversion proof should come from real project media, material labels, service areas, and a clear quote CTA.

**Media readiness:** Florense relies on large banner imagery. Móvel Plan can echo the full-bleed, editorial rhythm using its own local videos/posters, especially `DYPtgxORg-Q.mp4` for the first viewport. Do not copy Florense images, layout assets, code, or proprietary media.

**Plain-language synthesis:** The practical ask is not "clone Florense." The safe brief is: create a restrained, high-end, material-aware portfolio experience inspired by Florense's sparse luxury furniture presentation, using Móvel Plan's verified yellow/black/white identity and own project media.

## Móvel Plan Brand Cues

| Cue | Evidence | Design implication |
| --- | --- | --- |
| Primary accent | Logo color sampling from `profile-logo.webp` shows a saturated yellow cluster around `#F8E058` / `#F0E060`. | Use yellow sparingly for active states, CTAs, focus rings, thin rules, and small brand accents. Avoid flooding the UI with yellow. |
| Base palette | Logo is black background with white text and yellow roof mark. | Premium dark base is compatible with Florense-style editorial presentation. Use black/near-black surfaces with controlled white typography. |
| Typography cue | Logo text is compact uppercase sans-serif. Florense navigation/content also reads as sparse uppercase labels. | Favor uppercase labels/chips and restrained headings. Do not overuse large marketing copy. |
| Visual motif | Roof/house mark, planned interiors, material finishes. | Use simple geometric dividers, project category labels, finish/material chips, and room-based navigation. |
| Photo/video style | Vertical reels and 4:5 social imagery, mostly interiors and project details. | Build a responsive system that handles portrait media intentionally instead of cropping everything into landscape hero cards. |

## Asset Inventory For Redesign Decisions

| Asset group | Best available assets | Status | Recommended use |
| --- | --- | --- | --- |
| Logo | `profile-logo.webp` | Usable placeholder only; low-res, non-transparent, not vector. | Header/footer placeholder, favicon/social avatar if needed. Request vector logo before final brand system. |
| Hero proof | `DYPtgxORg-Q.mp4`, `DYPtgxORg-Q-poster.webp` | Strongest current local reel; 2026-05-12 Instagram source. | First viewport hero or lead portfolio reel. |
| Living rooms | `DYPtgxORg-Q.mp4`, `DOOaavrDSEE.mp4` | Strong project-led material proof. | Portfolio category and secondary motion strip. |
| Bedrooms/closets | `DN6JZ30j4nC.mp4` | Good but 640x800 poster; not ideal for full-screen hero. | Card/detail modal media. |
| Bathrooms/lavabos | `DOHXUTIknN5.mp4`, `DNWuNiPp41Z.webp` | Real reel plus support/idea image. | Category card; label `DNWuNiPp41Z` carefully as support/ideas unless carousel proves finished project. |
| Kitchens | `DNRSw3zSElq.webp` | Cover/ideas asset, not enough proof for a deep kitchen portfolio by itself. | Category cover only; request more kitchen finished-project photos if kitchen is prominent. |
| Educational/process content | `DNeIFtqMFZT.webp`, `DNHI6JYynUW.webp`, `CuKvDcMtPUc.mp4` | Useful support, not primary proof. | Optional short support near CTA or FAQ; do not let it compete with portfolio. |
| Testimonials/reviews | None verified in current source inventory. | Missing. | Do not add testimonials, ratings, or customer quotes unless client supplies source. |

## Design Brief Handoff For UXDesigner

Use these as design constraints, not final design commands:

- Build from Móvel Plan's evidence, not Florense assets. Cite lens: **Source provenance**.
- Preserve portfolio-first V1: completed projects are the proof; copy labels the work instead of selling around it. Cite lenses: **Conversion relevance**, **Information architecture**.
- Adapt Florense's high-end restraint through spacing, editorial panels, uppercase taxonomy, material/finish labels, and a quiet dark base. Avoid copying proprietary layout or imagery.
- Recommended palette direction: near-black `#050505` or `#0B0B0A`, warm off-white `#F5F2EA`, muted graphite `#272727`, brand yellow around `#F8E058`, and a softer disabled/line tone from logo grays. UXDesigner should validate contrast and adjust tokens.
- Recommended UI rhythm: full-bleed hero reel, slim header, category index, project grid, project detail modal/sheet, optional finish/detail strip, restrained contact CTA.
- Keep cards and controls sharp or subtly rounded, matching a premium interior portfolio. Avoid playful rounded pills unless needed for small category chips.
- Do not introduce unverified proof modules based on Florense's heritage sections. Móvel Plan does not currently have verified equivalents for "since," awards, rating, or partnerships.
- Treat portrait video as a first-class format: reserve stable aspect ratios and poster fallbacks to avoid layout shift.

## Copywriter Handoff

Use these claim-safe raw materials:

- Headline baseline: "Móveis Planejados Personalizados" from existing content.
- Support line: "Projetos únicos feitos para você" from existing content.
- Service area language: "Niterói, Barra e Zona Sul" from Instagram bio, pending client confirmation.
- Category labels: Salas, Quartos / Closets, Cozinhas, Banheiros / Lavabos.
- Material labels from existing inventory: MDF Ares, Off White, Itapuã, Freijó, Ares.
- Customer-language themes from social captions: dream home, custom-made projects, request a quote, lack of space/functionality, compact bathrooms, finish/material choices.
- Avoid: testimonials, star ratings, project counts, "10+ anos," "500+ projetos," guarantees, or "premium/high-end" as a factual claim unless client verifies.

## Open Questions / Blockers Before Final Design

1. Client or account owner: provide original Móvel Plan logo in SVG/PDF/AI/EPS or transparent high-resolution PNG.
2. Client or account owner: confirm website usage rights for Instagram-derived project videos/images, including customer interiors and any audio/music rights. The site should use muted video and not rely on Instagram audio.
3. Client or account owner: confirm official brand colors, if any, or approve extracted yellow/black/white direction.
4. Client or WebsiteCopywriter: verify contact channel details, including WhatsApp number, phone number, email, Instagram link, and service areas.
5. Client or WebsiteCopywriter: provide any verified reviews/testimonials if desired. Otherwise, the redesign should remain project-proof only.
6. Client or IntakeDesigner follow-up: provide more finished kitchen assets if kitchens need equal visual weight to living rooms/bedrooms/bathrooms.

## Verification Checklist

- Source links are present for Florense, Instagram, local asset inventory, and local files.
- Asset statuses are labeled by readiness and risk.
- Unverified facts are marked as unverified or pending confirmation.
- UXDesigner handoff is explicit and avoids final visual design decisions.
- WebsiteCopywriter handoff is explicit and separates safe claims from missing proof.
