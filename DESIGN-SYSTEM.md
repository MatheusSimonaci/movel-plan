# Móvel Plan — Design System V1 (Florense-Inspired Luxury)

**Status:** Final UX design direction approved for implementation handoff  
**Prepared by:** UXDesigner  
**Date:** 2026-05-25  
**Supersedes:** DESIGN.md (V1 cinematic foundation remains; palette, IA, and component guidelines evolved per PREA-299)

---

## Overview

A portfolio-first, high-end interior design experience for Móvel Plan. The redesign evolves V1's cinematic minimalism by adding Florense-inspired editorial restraint: sparse uppercase taxonomy, material-led finishing vocabulary, full-bleed media panels, and a restrained dark-and-neutral palette anchored by Móvel Plan's verified yellow accent.

**Design Constraint (Source Provenance):** All visual decisions, assets, and copy derive from verified Móvel Plan inventory or are licensed/adapted Florense reference. No proprietary Florense assets are copied.

---

## Design Principles

1. **Portfolio-First** — Completed projects are the primary proof; editorial rhythm structures discovery.
2. **Editorial Restraint** — Copy is uppercase labels and short descriptors; long marketing copy is absent.
3. **Material-Aware** — Finish and material tags are visible proof, not hidden metadata.
4. **Dark & Neutral** — Premium dark base with warm off-white text creates gallery-like authority.
5. **Motion-Led** — Portrait video is a first-class format, not a cropped landscape reel.
6. **Accessible & Performant** — WCAG AA, Lighthouse ≥90 all categories, fully responsive.

---

## Design Tokens

All values are CSS custom properties. Tailwind config should map these directly; do not introduce one-off hex values.

### Color Palette

| Token | Value | Usage | Contrast (WCAG AA) |
| --- | --- | --- | --- |
| `color-black` | `#050505` | Primary background, text on light surfaces | Pass (text white) |
| `color-dark-gray` | `#0B0B0A` | Subtle background variant, code blocks | Pass (text white) |
| `color-surface` | `#1A1A19` | Modal/card surfaces, elevated layers | Pass (text white) |
| `color-gray-light` | `#272727` | Dividers, disabled states, secondary surfaces | Pass (text white) |
| `color-white` | `#FFFFFF` | Primary text, interactive states | Pass (bg black) |
| `color-white-off` | `#F5F2EA` | Warm off-white for long-form reading, hero subheadline | Pass (bg black) |
| `color-gray-secondary` | `#9A9A9A` | Secondary text, help copy, captions | Pass (bg black, WCAG AA) |
| `color-yellow-primary` | `#F8E058` | Accent, CTA, focus rings, active states | Pass (bg black) |
| `color-yellow-disabled` | `#D4C96E` | Disabled states, muted accents | Verify on black |
| `color-transparent-white-10` | `rgba(255, 255, 255, 0.1)` | Hover states, subtle overlays | Case-by-case |

**Validation Rules:**
- All text must meet WCAG AA (4.5:1 normal, 3:1 large).
- Yellow is reserved for focus, CTA, and active filter chips. Never flood large areas with yellow.
- Off-white (`#F5F2EA`) is for body copy and descriptive text; use white for labels and emphasis.

### Typography

| Token | Size | Weight | Line-height | Letter-spacing | Usage |
| --- | --- | --- | --- | --- | --- |
| `type-hero-title` | 64px (desktop) / 44px (mobile) | 700 | 1.1 | -0.02em | Hero headline (e.g., "Móveis Planejados Personalizados") |
| `type-hero-subtitle` | 18px | 400 | 1.6 | 0 | Hero subheadline (e.g., "Projetos únicos feitos para você") |
| `type-heading-1` | 48px (desktop) / 32px (mobile) | 700 | 1.2 | -0.01em | Section titles, page headers |
| `type-heading-2` | 32px (desktop) / 24px (mobile) | 700 | 1.3 | 0 | Subsection titles, modal headers |
| `type-heading-3` | 20px | 700 | 1.4 | 0 | Card titles, category labels |
| `type-body-regular` | 16px | 400 | 1.6 | 0 | Body text, descriptions, long-form copy |
| `type-body-small` | 14px | 400 | 1.5 | 0 | Help text, captions, secondary info |
| `type-label-uppercase` | 12px | 600 | 1.4 | 0.1em | Material/finish tags, category chips, UI labels (always uppercase) |
| `type-label-small-uppercase` | 11px | 600 | 1.3 | 0.15em | Badge/pill labels (always uppercase) |

**Font Family:** System sans-serif (e.g., -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif) or single licensed face.  
**Tracking:** Letter-spacing values are defaults; reduce for larger sizes, increase for labels.

### Spacing

Use an 8px base unit. All spacing derives from multiples of 8px.

| Token | Value | Usage |
| --- | --- | --- |
| `space-0` | 0px | Reset, adjacent elements |
| `space-1` | 4px | Internal padding in small elements (badges, buttons) |
| `space-2` | 8px | Default padding, small gaps |
| `space-3` | 12px | Padding in cards, compact sections |
| `space-4` | 16px | Standard padding, gaps between inline elements |
| `space-6` | 24px | Margins between sections, card spacing |
| `space-8` | 32px | Large section spacing, hero padding |
| `space-10` | 40px | Major section separation (desktop) |
| `space-12` | 48px | Hero bottom margin, top-level container margins |
| `space-16` | 64px | Full-viewport padding, very large gaps (desktop) |

**Responsive Adjustment:** Reduce by one step on mobile where space is constrained (e.g., `space-6` on desktop → `space-4` on mobile for section gaps).

### Border Radius

| Token | Value | Usage |
| --- | --- | --- |
| `radius-none` | 0px | Sharp cards, premium finishes (default unless specified) |
| `radius-sm` | 2px | Subtle softening on popovers, tooltips |
| `radius-md` | 4px | Modal corners, category chip edges |
| `radius-lg` | 8px | Large modal/sheet corners, video containers |

**Rule:** Default to sharp or no rounding. Softening should be subtle and intentional, matching a premium interior portfolio aesthetic.

### Motion

| Token | Value | Usage |
| --- | --- | --- |
| `transition-fast` | 150ms cubic-bezier(0.4, 0, 0.2, 1) | Hover states, button feedback, instant interactions |
| `transition-standard` | 300ms cubic-bezier(0.4, 0, 0.2, 1) | Modal entrance, tab switching, filter updates |
| `transition-slow` | 500ms cubic-bezier(0.4, 0, 0.2, 1) | Page transitions, hero parallax, large panel slides |
| `motion-reduce` | All animations disabled | When `prefers-reduced-motion: reduce` |

**Rules:**
- All motion is purposeful and uses Material easing curves (ease-in-out).
- Hero video autoplay respects `prefers-reduced-motion` and falls back to poster.
- No motion on elements that distract from portfolio focus.

---

## Information Architecture

### Page Structure (Final IA)

1. **Header** (Sticky)
   - Logo (placeholder: `profile-logo.webp`; request vector)
   - Navigation (optional for mobile; consider side drawer or none)
   - No search or secondary actions in header

2. **Hero Section**
   - Full-viewport media (muted autoplay reel or image)
   - Overlay: Dark gradient (rgba(0, 0, 0, 0.3) to 0.5)
   - Content block (bottom-left on desktop, bottom-center on mobile):
     - Headline: "Móveis Planejados Personalizados" (type-hero-title)
     - Subheadline: "Projetos únicos feitos para você" (type-hero-subtitle, off-white)
     - Primary CTA: "Ver Projetos" (button, yellow background)

3. **Category Navigation**
   - 4 category chip buttons (uppercase, type-label-uppercase):
     - Salas
     - Quartos / Closets
     - Cozinhas
     - Banheiros / Lavabos
   - Selected state: yellow background; unselected: white text on dark background
   - Behavior: JS filter or section-based nav
   - Placement: Below hero, sticky or anchored

4. **Portfolio Grid**
   - Responsive layout: 1 column (mobile) → 2 columns (tablet, <768px) → 3 columns (desktop, ≥1024px)
   - Cards: portrait 4:5 aspect ratio (optimized for mobile video posters)
   - Card anatomy:
     - Lead image/poster (full width, 4:5)
     - Overlay on hover/active: semi-transparent dark, "Ver Detalhes" button (yellow)
     - Below media: category label (uppercase), short descriptor, material/finish tags (type-label-uppercase, small)
   - No autoplay in grid; poster visible by default

5. **Project Detail Modal / Sheet**
   - Mobile: full-screen bottom sheet (slide up from bottom)
   - Desktop: centered modal, 90vw max-width
   - Content:
     - Lead media (full-width, poster-first)
     - Category label (uppercase, small, gray-secondary)
     - Project short title (type-heading-3)
     - Material/finish tags (type-label-uppercase)
     - Optional short description (1–2 sentences, type-body-small)
     - Optional secondary gallery (max 3 items, lazy-loaded)
     - CTA: "Quero um Projeto Como Este" (button, yellow, routes to WhatsApp contact)
   - Behavior: Keyboard-escapable, scroll-locked on body when open

6. **Optional: Secondary Motion Strip**
   - Title: "Mais Ambientes" (type-heading-2, optional)
   - 2–3 horizontal carousel reels (living, bedroom, bathroom)
   - Posters visible; muted autoplay on viewport enter
   - Only one reel autoplay at a time (mobile consideration)

7. **Contact Section**
   - Small block near bottom:
     - Headline: "Pronto para começar?" (type-heading-2)
     - Copy: One line, type-body-small, off-white
     - Dual CTAs: WhatsApp button (primary, yellow), phone link (secondary, white text)
     - No form; direct to WhatsApp or phone dial
   - Visually integrated into the portfolio, not a separate banner

8. **Footer**
   - Logo repeat, social links (Instagram, WhatsApp), copyright
   - Minimalist, type-body-small

### Category & Taxonomy (Verified Assets Only)

Based on PREA-299 asset inventory:

| Category | Assets | Recommended Label |
| --- | --- | --- |
| Salas (Living) | DYPtgxORg-Q.mp4 (hero), DOOaavrDSEE.mp4 (secondary) | Salas (Uppercase, always) |
| Quartos / Closets | DN6JZ30j4nC.mp4 | Quartos / Closets |
| Cozinhas | DNRSw3zSElq.webp (cover only, weak) | Cozinhas (Note: only one asset; consider this a minor category or request more kitchen assets from client) |
| Banheiros / Lavabos | DOHXUTIknN5.mp4, DNWuNiPp41Z.webp | Banheiros / Lavabos |

**Material Labels** (from existing inventory, use where available):
- MDF Ares, Off White, Itapuã, Freijó, Ares, Personalizado, Compacto, Funcional

---

## Component Guidelines

### Hero Component

**Visual Treatment:**
- Full viewport, no padding, full-bleed media.
- Dark gradient overlay (0 to 0.5 black, bottom to top).
- Content block: position bottom-left (desktop) or bottom-center (mobile).
- Text: white (headline) and off-white (subheadline).
- CTA button: yellow background, white text, no border, sharp corners.

**Interaction:**
- Muted autoplay, loops.
- Poster visible immediately (no layout shift).
- Respects `prefers-reduced-motion`; falls back to poster + play icon.
- No video controls unless autoplay fails.

**Responsive:**
- Desktop: content block left-anchored, maintains cinematic media.
- Mobile: content centered, text size reduces, media still dominant.
- Tablet: content anchored left, adjust padding per space token.

### Portfolio Card Component

**Visual Treatment:**
- Portrait 4:5 aspect ratio, poster-first.
- No rounding (sharp corners default).
- Hover/active state: semi-transparent dark overlay (rgba(0, 0, 0, 0.4)), white "Ver Detalhes" text centered.
- Below media: category label (type-label-uppercase, small, white), short descriptor (type-body-small, off-white), material tags (type-label-uppercase, 11px, yellow or gray-secondary per context).
- Spacing: space-2 between label and descriptor, space-2 between descriptor and tags.

**Interaction:**
- Tap/click opens detail modal.
- No in-grid autoplay; poster loads immediately.
- Keyboard-accessible, :focus-visible ring (yellow, 2px).

**Responsive:**
- Mobile: 2 columns when space allows; 1 column if cramped.
- Tablet: 2–3 columns per available width.
- Desktop: 3 columns fixed.

### Category Chip Component

**Visual Treatment:**
- Uppercase label (type-label-uppercase).
- Padding: space-2 horizontal, space-1 vertical.
- Default state: white text, transparent background, 1px white border.
- Active/selected: yellow background, dark text, no border.
- Hover: white background, dark text (optional, subtle desktop enhancement).
- No rounding (default); if desired, use radius-sm.

**Interaction:**
- Click filters portfolio or scrolls to category section.
- Keyboard-accessible, :focus-visible ring (yellow, 2px).
- No animation on state change; instant update.

### Modal / Detail Sheet Component

**Visual Treatment:**
- Desktop: centered modal, 90vw max-width, dark background (color-black), border (1px color-gray-light), radius-lg.
- Mobile: full-screen bottom sheet, no border, radius-lg top corners only.
- Content: lead media full-width, text content below with space-4 padding.
- Close button: top-right (desktop) or top-center (mobile), color-gray-secondary, :hover color-white.

**Interaction:**
- Opens on portfolio card click.
- Keyboard-escapable (ESC closes).
- Body scroll locked while open.
- Focus trap: keyboard navigation contained within modal.

**Responsive:**
- Desktop: modal, max-width 90vw, max-height 90vh, centered.
- Mobile: full-screen sheet, slides in from bottom, dismissible via X or backdrop tap.

### Contact CTA Component

**Visual Treatment:**
- Small block, space-8 top/bottom margin.
- Headline (type-heading-2, white), copy (type-body-small, off-white).
- Two buttons: primary WhatsApp (yellow background, dark text), secondary phone (white text, dark background, optional).
- No form inputs; direct links.
- Optional subtle border or background tint (color-surface) to contain the section.

**Interaction:**
- WhatsApp button: `href="https://wa.me/[VERIFIED_NUMBER]"` (pending client contact verification).
- Phone button: `tel:` link.
- Both buttons: keyboard-accessible, :focus-visible ring (yellow, 2px).

### Navigation (Header) Component

**Visual Treatment:**
- Sticky, backdrop-blur (optional, for visual softness).
- Background: color-black or transparent with blur.
- Logo: small (120–160px width placeholder), left-aligned.
- Navigation links (if any): right-aligned, type-body-small, uppercase.
- No shadow; rely on backdrop blur or subtle border (color-gray-light).

**Responsive:**
- Mobile: logo only; nav in drawer or hidden.
- Desktop: logo + nav links, horizontal.

### Footer Component

**Visual Treatment:**
- Small block, dark background (color-black or color-dark-gray).
- Logo repeat (80–100px width), copyright (type-body-small, gray-secondary), social links (Instagram, WhatsApp).
- Minimal spacing; dense layout acceptable here.

---

## Motion & Animation Guidance

- **Parallax on Hero:** Subtle scale/translate on scroll (max 5% movement) using Framer Motion.
- **Modal Entrance:** Fade + slide up (300ms, standard easing).
- **Filter Update:** No animation required; instant grid update is preferred over transition animation (reduces motion clutter).
- **Hover States:** Button background/text change (150ms fast easing).
- **Video Autoplay:** Respect `prefers-reduced-motion`; no animation fallback needed if poster is visible.

**Rule:** Motion must serve the content hierarchy, not distract from the portfolio. Less motion is better; every animation should have a reason.

---

## Accessibility Requirements

- **Color Contrast:** All text ≥ 4.5:1 (WCAG AA). Yellow accent on black verified.
- **Focus Visible:** All interactive elements have a clear yellow 2px ring (or equivalent high-contrast indicator).
- **Keyboard Navigation:** All modals, buttons, and filter chips reachable via Tab; modals escapable via ESC.
- **Motion:** `prefers-reduced-motion: reduce` disables hero autoplay and animations; poster or static fallback visible.
- **Mobile Target Size:** All tappable elements ≥ 44x44 px.
- **Image Alt Text:** All portfolio images have descriptive alt text (e.g., "Sala planejada com MDF Ares e Off White").
- **Video Captions:** Posters visible; optional captions if audio is present (currently muted, so captions not required initially).
- **Semantic HTML:** Use `<button>`, `<a>`, `<nav>`, `<section>`, `<article>` appropriately.

---

## Asset Management & Media Strategy

### Portrait Video as First-Class Format

- All reel-backed cards use poster images (extracted from video at 4:5 aspect ratio).
- Posters prevent layout shift; video loads on demand (autoplay in hero only).
- No video cropping or letterboxing; preserve native aspect ratio in cards and modals.
- Muted attribute required; no audio playback.

### Poster Image Specifications

- Format: WebP, optimized for web.
- Aspect ratio: 4:5 (portrait, matching mobile viewport).
- Dimensions: 640x800px minimum for quality; 1000x1250px preferred for retina.
- Fallback: JPG if WebP not supported.

### Logo Asset

- **Current:** `public/assets/movel-plan/profile-logo.webp` (320x320, placeholder only).
- **Action Required:** Client to provide vector logo (SVG/PDF/AI/EPS) or high-res transparent PNG (2000x2000px minimum).
- **Usage:** Header and footer only; design system does not build around logo proportions.

---

## Open Dependencies (Blocker Checklist)

These are client-side decisions that do not block design direction, but will be needed before final implementation handoff.

1. **Brand Colors / Logo** — Client to approve extracted yellow (#F8E058) or provide official brand colors.
2. **Website Usage Rights** — Client to confirm rights for Instagram-derived project videos/images, including customer interiors and music/audio.
3. **Contact Verification** — Client/Copywriter to verify WhatsApp number, phone number, email, and confirm service areas (Niterói, Barra, Zona Sul).
4. **Kitchen Assets** — If kitchens need visual parity with living/bedroom/bath, client to provide more finished-project photos.
5. **Vector Logo** — Client to provide high-resolution vector logo before design handoff to development.

**None of these block UX design completion; they are implementation prerequisites.**

---

## Design System Verification Checklist

- [x] Palette derived from Móvel Plan verified assets (logo, Instagram).
- [x] Typography system finite and token-based (no one-off sizes).
- [x] Spacing on 8px grid.
- [x] Components specified with visual treatment, interaction, and responsive behavior.
- [x] IA reflects portfolio-first principle and verified asset inventory only.
- [x] Accessibility (WCAG AA, color contrast, focus, motion) integrated into component specs.
- [x] Motion purposeful and minimal.
- [x] No Florense proprietary assets copied; only design cues and reference.
- [x] All open decisions documented as blocker checklist.
- [x] Ready for developer handoff with explicit token names and component specs.

---

## Handoff Notes for Development

This design system is **implementation-ready**. Developers should:

1. Implement tokens in Tailwind config or CSS custom properties.
2. Build components using names and specs above (e.g., `Hero`, `PortfolioCard`, `CategoryChip`, `DetailModal`).
3. Use WebP posters for all video-backed cards; verify poster loads before video requests.
4. Respect `prefers-reduced-motion` in hero and modal animations.
5. Test at real viewports: 390x844 (mobile), 768x1024 (tablet), 1440x900 (desktop).
6. Verify WCAG AA contrast on yellow accent against all background colors.
7. Await client blockers (contact info, logo asset, usage rights) before deploy.

**No design iterations expected from this spec.** If ambiguity arises during build, UXDesigner should review implementation and verify against this direction before changing.
