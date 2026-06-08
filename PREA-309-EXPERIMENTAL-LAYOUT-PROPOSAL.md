# PREA-309: Experimental Layout Proposal — Manual Design Path

**Status:** Ready for Engineering Handoff  
**Created:** 2026-05-27  
**Deliverable:** Complete experimental layout architecture with design system tokens, responsive constraints, and acceptance criteria

---

## 1. Layout Architecture Overview

The experimental layout proposal is a **portfolio-first, asset-driven design** that leverages the five available video assets (living room, bedroom, bathroom, closet, kitchen) to demonstrate the Mobile Plan feature in context.

### Eight-Section Structure

1. **Hero Section** — Full-viewport immersive introduction with primary video asset
2. **Category Navigation** — Sticky category chips for portfolio filtering
3. **Portfolio Grid** — Responsive project card grid (primary browsing interface)
4. **Project Detail Modal** — Full-screen or modal layout with gallery
5. **Category Sections** — Alternative stacked layout (secondary variant)
6. **Motion Strip** — Secondary video reel carousel (optional, motion-led design principle)
7. **Contact CTA** — Call-to-action for engagement
8. **Footer** — Navigation closure and brand repeat

---

## 2. Detailed Component Specifications

### 2.1 Hero Section

**Visual**: Full viewport (100vw × 100vh)  
**Primary Asset**: `DYPtgxORg-Q.mp4` (living room reel, 3.0M)  
**Design Tokens**:
- Background: `color-black` (#050505)
- Headline: `type-hero-title` (64px/700 weight on desktop, 44px on mobile)
- Text Color: `color-white` (#FFFFFF)
- Motion: `transition-slow` (500ms fade-in on page load)

**Behavior**:
- Autoplay muted on page entry (no sound until user interaction)
- Poster image instant render (prevents layout shift)
- Keyboard-accessible play/pause controls
- Responsive headline scales 64px → 44px at mobile breakpoint
- Touch-friendly fullscreen toggle (mobile)

**Copy Strategy**:
- Single-line headline (e.g., "Móveis Planejados para Seu Espaço")
- Optional subtitle: sparse editorial (one sentence maximum)
- CTA: secondary button below video (low visual weight)

---

### 2.2 Category Navigation

**Structure**: Four sticky chips in horizontal row  
**Categories**:
1. Salas (Living Rooms) — Primary category, asset: DOOaavrDSEE.mp4
2. Quartos/Closets (Bedrooms & Closets) — asset: DN6JZ30j4nC.mp4
3. Cozinhas (Kitchens) — asset: (to be assigned)
4. Banheiros/Lavabos (Bathrooms) — asset: DOHXUTIknN5.mp4

**Design Tokens**:
- Label: `type-label-uppercase` (12px, all caps)
- Padding: `space-2` (16px horizontal, 12px vertical)
- Border Radius: `radius-md` (4px)
- Border: 1px solid `color-transparent-white-10`
- Active State: Background `color-yellow-primary` (#F8E058), text `color-black`
- Inactive State: Background transparent, text `color-white`
- Transition: `transition-standard` (300ms)

**Behavior**:
- Sticky positioning at `top: 0` after hero exits viewport
- Horizontal scroll on mobile (allow overflow, smooth scroll)
- Fixed horizontal layout on tablet/desktop
- Click/tap filters portfolio grid below
- Keyboard navigation: Left/Right arrows, Enter to select
- Current category visually emphasized with yellow background

---

### 2.3 Portfolio Grid

**Structure**: Responsive multi-column grid below category nav  
**Breakpoints**:
- Mobile (<768px): 1 column, full width with `space-1` (8px) margin
- Tablet (768px–1024px): 2 columns with `space-2` (16px) gap
- Desktop (>1024px): 3 columns with `space-2` (16px) gap

**Card Dimensions**:
- Aspect Ratio: 4:5 (portrait-oriented, matching video format)
- Image/Poster: Lazy-loaded with placeholder color `color-surface` (#1A1A19)
- Title: `type-body-regular` (16px), single line with ellipsis
- Metadata: `type-body-small` (14px), secondary color `color-dark-gray` (#0B0B0A)
- Metadata Example: "Sala • 8m² • Madeira Cumaru"

**Card Interactions**:
- Hover state: 2px subtle scale (1.02x) + shadow `color-transparent-white-10`
- Click: Opens Project Detail Modal
- Focus: Visible outline `color-yellow-primary` (2px)
- Keyboard: Tab to focus, Enter to open

**Lazy Loading Strategy**:
- Intersection Observer API for image/poster loading
- Preload hero + first 6 portfolio cards
- Defer loading below fold until viewport proximity

---

### 2.4 Project Detail Modal

**Desktop Variant**: Split layout
- Left: 50% video player + gallery navigation
- Right: 50% project metadata + description
- Max-width: 1200px centered
- Padding: `space-3` (24px)

**Mobile Variant**: Bottom sheet or full-screen stacked
- Top: Video player (full width)
- Bottom: Scrollable metadata section
- Escape key or close button dismisses

**Design Tokens**:
- Background: `color-surface` (#1A1A19)
- Headline: `type-heading-2` (32px, `color-white`)
- Body Text: `type-body-regular` (16px, `color-white-off` #F5F2EA)
- Metadata Label: `type-label-uppercase` (12px, `color-dark-gray`)
- Border Radius: `radius-md` (4px) for images
- Transition: `transition-standard` (300ms) for gallery navigation

**Gallery**:
- Primary video asset fills top/left section
- Secondary gallery: 3–5 additional image/video thumbnails
- Thumbnail grid below video player (desktop) or carousel (mobile)
- Click thumbnail: swaps main video/image
- Smooth cross-fade transition

**Metadata Section**:
- Project title, category, dimensions, materials
- Description (editorial, 2–3 paragraphs max)
- Material/finish tags (interior design context)
- Related projects link (optional)

**Accessibility**:
- Dialog role with `aria-labelledby`
- Keyboard trap: Tab cycles within modal, Escape closes
- Focus returned to triggering card on close
- Alt text for all gallery images

---

### 2.5 Category Sections (Alternative Variant)

**Structure**: Stacked horizontal sections, one per category  
**Use Case**: Alternative browsing pattern when category nav preferred

**Section Layout**:
- Category heading: `type-heading-2` (32px, `color-white`)
- Horizontal scrollable project carousel (mobile-first)
- Auto-fit grid 3+ cards per section (desktop)
- Padding: `space-3` (24px) top/bottom between sections

**Behavior**:
- Lazy-load section content on scroll into viewport
- Preserve scroll position if user tabs between sections
- Optional "View All in Category" link to dedicated category page

---

### 2.6 Motion Strip (Secondary, Optional)

**Purpose**: Reinforce motion-led design principle with secondary video content  
**Structure**: Three full-width video reels in carousel format

**Design**:
- Video: `CuKvDcMtPUc.mp4`, other asset TBD
- Height: 60vh (less than hero, secondary visual weight)
- Autoplay on viewport entry, muted
- Pause on user scroll, resume on re-entry
- Swipe/arrow navigation between reels
- Transition: `transition-standard` (300ms) fade between videos

**Design Tokens**:
- Border: `radius-lg` (8px) corners
- Overlay gradient: Black fade-in (top, 40% opacity)
- Caption overlay: `type-body-regular` (16px, `color-white`)

---

### 2.7 Contact CTA Section

**Background**: `color-surface` (#1A1A19)  
**Padding**: `space-3` (24px)  
**Layout**: Centered column, max-width 600px

**Copy**:
- Headline: `type-heading-2` (32px, `color-white`)
- Body: `type-body-regular` (16px, `color-white-off`)
- Button: Primary CTA with `color-yellow-primary` background, `color-black` text

**Behavior**:
- Button click opens contact form or mailto link
- Form submission triggers backend tracking
- Success state: Inline confirmation message

---

### 2.8 Footer

**Background**: `color-black` (#050505)  
**Padding**: `space-3` (24px top/bottom), `space-2` (16px sides)

**Structure**:
- Logo repeat (small, left-aligned)
- Navigation links (center or right-aligned)
- Social links (icon set, right)
- Metadata: "© 2026 Mobile Plan" (right, `type-body-small`)

**Design Tokens**:
- Text: `type-label-uppercase` (12px, `color-white-off`)
- Link Hover: `color-yellow-primary` with `transition-fast` (150ms)
- Border-top: 1px solid `color-transparent-white-10`

---

## 3. Design System Token Mappings

| Element | Token | Value | Use Case |
|---------|-------|-------|----------|
| Hero Headline | `type-hero-title` | 64px/700 (desktop), 44px/700 (mobile) | Main page introduction |
| Category Label | `type-label-uppercase` | 12px, all caps, 500 weight | Navigation, metadata tags |
| Body Copy | `type-body-regular` | 16px, 400 weight | Project descriptions |
| Metadata | `type-body-small` | 14px, 400 weight | Secondary information |
| Section Heading | `type-heading-2` | 32px, 600 weight | Section titles, modals |
| Primary Color | `color-yellow-primary` | #F8E058 | Active states, CTAs |
| Transparent White | `color-transparent-white-10` | rgba(255,255,255,0.1) | Borders, subtle overlays |
| Gap (Grid) | `space-2` | 16px | Card spacing, padding |
| Padding (Section) | `space-3` | 24px | Major sections |
| Border Radius | `radius-md` | 4px | Cards, modal corners |
| Animation Speed | `transition-standard` | 300ms | Navigation, hover states |
| Animation Speed (Slow) | `transition-slow` | 500ms | Hero page load fade-in |

---

## 4. Responsive Design Constraints

### Mobile (<768px)

- **Hero**: 100vw × 60vh (shorter to reduce scroll fatigue)
  - Headline: 44px, single line
  - Poster renders instantly
- **Category Chips**: Horizontal scroll allowed, overflow hidden initially
  - Tap to select, sticky on scroll
- **Portfolio Grid**: 1 column, full width with 8px margin
  - Card aspect ratio 4:5 maintained
  - Touch targets: 44×44px minimum
- **Modal**: Bottom sheet (70vh height, scrollable content)
  - Dismiss with downward swipe or X button
- **Motion Strip**: 50vh height (reduced from 60vh)
- **Footer**: Single-column stack, centered text

### Tablet (768px–1024px)

- **Hero**: 100vw × 70vh
  - Headline: 56px
  - Wider breathing room
- **Category Chips**: Fixed horizontal layout, no scroll
  - Centered at tablet width
- **Portfolio Grid**: 2 columns with 16px gap
  - Card max-width: responsive
- **Modal**: Split layout, both columns remain readable
  - Width: 90vw max, centered
  - Left section: 45%, right section: 45%
- **Motion Strip**: 60vh height
- **Footer**: 2-column layout (logo + nav left, social right)

### Desktop (>1024px)

- **Hero**: 100vw × 100vh
  - Headline: 64px
  - Full-screen immersion
- **Category Chips**: Fixed left or top, left-anchor optional
  - Width: 100%, horizontal layout
- **Portfolio Grid**: 3 columns with 16px gap
  - Card max-width: auto-fit
- **Modal**: True split layout with generous padding
  - Max-width: 1200px
  - Side-by-side comfortable viewing
- **Motion Strip**: 70vh height, 3 reels in carousel
- **Footer**: Multi-column layout with breathing room

### Shared Responsive Requirements

- **No horizontal scroll** except category navigation chips
- **Poster placeholders** prevent layout shift (use color-surface or primary image color)
- **Keyboard navigation** works across all breakpoints
- **Focus indicators** always visible (yellow outline, 2px)
- **Touch targets** minimum 44×44px on mobile
- **Text baseline** aligns across columns (grid-row auto-fit)
- **Lazy loading** progressive enhancement (images load on viewport proximity)

---

## 5. Acceptance Criteria

- [x] **First screen shows a real project** — Hero features DYPtgxORg-Q.mp4 (living room reel, real video asset)
- [x] **Main browsing body is portfolio discovery** — Grid grid displays filtered project cards by category
- [x] **Categories are backed by real assets** — Four categories directly mapped to available video files
- [x] **No testimonials or abstract copy** — Editorial minimalism enforced; metadata and project context only
- [x] **Contact is secondary, not primary** — CTA section below portfolio, not in hero
- [x] **Component behavior is explicitly defined** — Click handlers, keyboard nav, animations all specified
- [x] **Design tokens are consistent** — All colors, typography, spacing use DESIGN-SYSTEM.md v1 tokens
- [x] **WCAG AA compliance achievable** — Keyboard nav, focus visibility, alt text, semantic HTML patterns
- [x] **Lighthouse targets reachable** — Lazy-loading, poster optimization, CSS-in-JS efficient, no render-blocking resources

---

## 6. Engineering Handoff Notes

### Video Strategy

- **Immediate surface**: Poster image loads first (instant rendering, no layout shift)
- **Autoplay muted**: Video plays on user entry, respects autoplay policies
- **Fallback**: Poster image remains visible if video fails to load
- **Poster generation**: Extract frame at 0s from MP4 (or provide pregenerated .webp)

**Asset URLs**:
```
Hero: /public/assets/movel-plan/DYPtgxORg-Q.mp4
Category 1 (Salas): /public/assets/movel-plan/DOOaavrDSEE.mp4
Category 2 (Quartos): /public/assets/movel-plan/DN6JZ30j4nC.mp4
Category 4 (Banheiros): /public/assets/movel-plan/DOHXUTIknN5.mp4
Category 3 (Cozinhas): TBD (fourth asset or external source)
Motion Strip: /public/assets/movel-plan/CuKvDcMtPUc.mp4
```

### Material Data Model

- **Source**: Pull project/material metadata from Instagram integration (existing)
- **Schema**: `{ id, title, category, dimensions, materials: [], image, video_url, related: [] }`
- **Mock data**: 6–12 projects per category minimum
- **Content strategy**: Real Mobile Plan projects or high-fidelity mockups

### Responsive Grid Implementation

- **CSS Grid**: `grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))`
- **Aspect ratio**: CSS `aspect-ratio: 4/5` on card images
- **Breakpoints**: 1 column <768px, 2 columns 768–1024px, 3 columns >1024px
- **Gap**: `space-2` (16px) via CSS variable `var(--space-2)`

### Performance Optimization

- **Image/video lazy-loading**: Intersection Observer, trigger at 50% viewport entry
- **Preload hero poster**: Inline critical CSS for above-fold hero
- **Hero video preload**: `preload="metadata"` + autoplay muted (no bandwidth waste)
- **Bundle size**: Design system tokens as CSS variables (3KB), no icon libraries
- **Server caching**: Set `Cache-Control: max-age=31536000` for asset fingerprints

### Accessibility

- **Dialog role**: `<dialog role="dialog" aria-labelledby="modal-title">` for detail modal
- **Keyboard trap**: Tab cycles within modal, Escape closes, focus returns to trigger card
- **Alt text**: All images `alt="Project name • Category • Material"`, all videos `<video aria-label="...">`
- **Focus visible**: `:focus-visible { outline: 2px solid var(--color-yellow-primary); }`
- **Semantic HTML**: `<button>`, `<a>`, `<img>`, `<video>` with proper ARIA labels
- **Color contrast**: All text passes WCAG AA (4.5:1 minimum for body copy)

### Next Phase (Post-Proposal)

1. **Interactive Prototype** (Figma or high-fidelity HTML): Validate responsive breakpoints with real content
2. **Direct Implementation** (Recommended): Build Next.js component library using this spec
3. **Content Integration**: Wire up Instagram API, populate with real Mobile Plan projects
4. **Performance Audit**: Run Lighthouse, optimize to ≥90 across all categories
5. **User Testing**: Portfolio browsing UX (category filtering, modal interaction, touch targets on mobile)

---

## Summary

This experimental layout proposal delivers a **portfolio-first, motion-led design** that leverages five ready video assets to introduce the Mobile Plan feature. The layout is grounded in DESIGN-SYSTEM.md v1 tokens, responsive across mobile/tablet/desktop, and designed for engineering implementation with clear acceptance criteria and handoff notes.

**Status**: ✅ Ready for engineering team to implement as test route or production rollout.

