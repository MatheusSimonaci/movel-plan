# Móvel Plan — UX & Visual Direction Brief

**Status:** Ready for CTO/Dev implementation
**Revision:** 1.0
**Date:** May 2026

---

## Executive Summary

This brief defines the end-to-end UX experience and visual direction for Móvel Plan's primary digital touchpoint: the mobile-first home page and its desktop counterpart. The experience is built on a **premium, custom, specific-to-móveis-planejados** visual language that treats short videos and Instagram-curated imagery as central product assets — not afterthought illustrations.

The design prioritizes:
- **Visual impact upfront** — Immediate credibility through professional product imagery and real customer work
- **Clear value hierarchy** — Differentiators, social proof, and process transparency in natural reading order
- **Rich portfolio interaction** — Expandable, contextual, and optimized for mobile thumb zones
- **Customization confidence** — Visual language that suggests "sob medida" (bespoke/made-to-order) without visual excess

---

## Part 1: Content Flow & IA

### Mobile-First Structure (390×844 viewport)

The home page follows a linear, scroll-optimized flow designed for 3–5 minute engagement on mobile, with full responsiveness to desktop (1440×900).

#### **1. Hero Section (Viewport Height: ~100vh)**

**Purpose:** Establish premium positioning and immediate clarity of what Móvel Plan is.

**Visual Treatment:**
- Short video hero (loop, muted by default, auto-play on scroll into view)
  - Source: CMO-curated Instagram Reels or TikTok-style vertical video
  - Duration: 4–6 seconds
  - Content: Real Móvel Plan installation, beautiful workspace transformation, or customer testimonial
  - Fallback: High-res still image of the same scene (same aspect ratio)
  
- **Overlay copy** (large, bold, high contrast):
  - Headline: "Móveis Planejados Personalizados"
  - Subheading: "Projetos únicos feitos para você" (or similar — CMO to confirm tone)
  - CTA: "Conheça Nossos Projetos" (scroll cue or button)

**Technical Specs:**
- Video format: MP4 H.264, max 2.5 MB (mobile-optimized)
- Video dimensions: 9:16 (vertical) on mobile; scale to fill on desktop with letterbox
- Fallback image: JPG, optimized for mobile, same aspect ratio
- Aspect ratio: 100vw × max-height constraint (prevent excessive scrolling on short mobile screens)
- Accessibility: Muted by default; text is not dependent on video for comprehension

**Design System:**
- Background: `bg-dark` (or `bg-secondary-900`)
- Text: `text-white` at 80–90% opacity on video overlay
- Spacing: `space-6` padding on mobile, `space-8` on tablet+
- Typography: `h1` (headline), `body-lg` (subheading)

---

#### **2. Trust & Credibility Section**

**Purpose:** Quickly establish expertise and scale (social proof).

**Hierarchy:**
1. Social proof metrics (cards):
   - "500+ Projetos Realizados"
   - "4.9 ⭐ Avaliação Média"
   - "10+ Anos de Experiência"
   - Add CMO-selected stat (customer repeat rate, satisfaction %, etc.)

2. Logos / Brand mentions (if applicable — check CMO assets):
   - Partners, publications, or awards

**Visual Treatment:**
- 4-column grid on desktop → 2×2 on tablet → 1 column on mobile
- Each stat: large number (48px+), smaller label (14px), optional icon
- Cards: `bg-surface` with `border: 1px solid border-light`
- No drop shadow (keep premium/minimal)
- Spacing: `space-4` between cards; `space-6` section padding

**Typography:**
- Numbers: `h3` weight (bold, 500–600)
- Labels: `caption` color `text-secondary`

**Mobile Optimization:**
- Stack vertically on 360px screens (no cramping)
- Tap targets: min 44px height

---

#### **3. Diferenciadores Section**

**Purpose:** Communicate what makes Móvel Plan distinct (customization, speed, quality, service).

**Content (3–4 key differentiators — validate with CMO):**
- Example 1: "Projetos 100% Personalizados" — Brief description + icon or supporting image
- Example 2: "Processo Transparente" — Explanation of how customers engage
- Example 3: "Qualidade de Acabamento" — Short claim + visual proof (image or video)
- Example 4: Optional (if CMO has strong differentiator)

**Visual Treatment:**
- Each differentiator: card layout with icon, headline (h4), and 2–3-line description
- Layout: Single-column on mobile → 2-column on tablet → 3-column on desktop
- Icon: 64px, sourced from design system or CMO assets
- Card spacing: `space-4` between cards; `space-6` section padding
- Colors: Alternating subtle backgrounds (white, `bg-surface`) OR all white with icon color accent
- Text: `text-secondary` for descriptions (limit to 60 characters per line for readability)

---

#### **4. Portfolio / Project Showcase**

**Purpose:** Let the work speak — visual proof of customization, quality, and range.

**Interactive Behavior:**
- Mobile (< 768px): Vertical scrolling carousel or grid (thumbnail → tap to expand)
- Tablet/Desktop: 2–3 items per row, rich preview on hover, click to expand

**Rich Preview (Hover State / Expanded View):**
- Thumbnail: 200×250px (project image)
- On hover/expand:
  - Project title
  - 1–2 sentence description (e.g., "Dormitório moderno com nichos suspensos")
  - Visual badges: "Moderno", "Minimalista", "Corporativo" (styling)
  - CTA: "Ver Detalhes" or "Solicitar Orçamento"

**Full Expansion (Lightbox / Modal):**
- Hero image (large, full-width)
- Project details:
  - Title
  - Category / style tags
  - Full description (3–5 sentences)
  - Additional images (carousel, max 5 images per project)
  - Key specs (if relevant): "Sala 4×3m", "Placa preta + madeira natural", etc.
- Contextual CTA: "Quero um Projeto Como Este" → Scroll to contact / form

**Technical Specs:**
- Images: JPG, optimized for mobile (use srcset for 1x / 2x density)
- Portfolio items: Min 12 projects to start (CMO to provide curated set)
- Carousel: Swipe-enabled on mobile; click arrows on desktop
- Lazy load: Offscreen images load on scroll (use Intersection Observer)
- Accessibility: `alt` text for all images; keyboard navigation (arrow keys) on desktop

**Design System:**
- Card: `bg-white`, `border-radius: 8px` (`radius-lg`), light shadow (`shadow-sm`)
- Typography: Title = `h4`, Description = `body-sm`, Tags = `caption`
- Spacing: `space-4` between grid items

---

#### **5. The Process Section**

**Purpose:** Demystify the customization flow; build confidence in the "sob medida" promise.

**Content (4–5 steps):**
1. **Consultoria Gratuita** — Initial discovery call
2. **Projeto Detalhado** — 3D visualization or detailed 2D layout
3. **Aprovação e Ajustes** — Client feedback loop
4. **Produção** — Manufacturing phase (transparent timeline)
5. **Instalação** — Final delivery and setup

**Visual Treatment:**
- Vertical timeline on mobile → Horizontal timeline on desktop
- Each step: Icon, headline, 1-line description
- Connector: Line or arrow between steps
- Optional: Small supporting image or icon for each step

**Design System:**
- Icons: 48px, brand color
- Timeline connector: `stroke: border-secondary`, `stroke-width: 2px`
- Typography: Headline = `body-bold`, Description = `caption`
- Spacing: `space-6` between steps

---

#### **6. Social Proof / Testimonials**

**Purpose:** Build trust through customer voices and real results.

**Content (3–4 testimonials — CMO to select):**
- Customer name + role / business
- Quote (2–3 sentences max)
- Optional: Before/after images or customer photo
- Optional: Star rating

**Visual Treatment:**
- Card-based layout: Single-column on mobile → 2 columns on tablet → 3 on desktop
- Card: `bg-surface`, `border-left: 4px solid brand-500`, padding `space-4`
- Text: Quote in italic, `body-sm`, customer name in bold
- Optional star rating icon
- Images: Thumbnail in corner or full-width background (optional CMO choice)

**Design System:**
- Background: `bg-surface` or white with subtle border
- Quote: `text-secondary` color, 1.6 line-height for readability
- Spacing: `space-4` between cards

---

#### **7. Video Gallery (Optional Premium Section)**

**Purpose:** Showcase Instagram Reels / short videos as central product assets; demonstrate customization variety in motion.

**Technical Approach:**
- Display 3–4 short videos (15–30 seconds each)
- Layout: Single-column carousel on mobile; 2 columns on tablet; 3 on desktop
- Each video: Muted, looping, autoplay on scroll into view
- Thumbnail fallback for performance

**Performance Considerations:**
- Lazy-load video containers; only decode video when in viewport
- Use poster image (first frame) to avoid blank space while loading
- Total video size: <3 MB combined (mobile-optimized)
- Accessibility: Captions for any video with speech/critical audio

**Design System:**
- Container: `border-radius: 8px`, light shadow
- Spacing: `space-4` between items

---

#### **8. Call-to-Action / Contact Section**

**Purpose:** Convert intent into lead capture.

**Content:**
- Headline: "Pronto para Seu Projeto Personalizado?" (or CMO variant)
- Subheading: Brief call to action
- Primary CTA: "Solicitar Orçamento Gratuito" (button, full-width on mobile)
- Secondary CTA: "Ligar Agora" (phone link on mobile, clickable)
- Optional: Quick form (name, phone, email) or link to full form/calendar

**Visual Treatment:**
- Full-width card or banner on mobile
- Centered layout on desktop (max-width: 600px for form inputs)
- Background: Light gradient or solid `bg-surface`
- Button: Primary variant, size `lg`, full-width on mobile

**Form Fields (if inline):**
- Name (text)
- Phone (tel, with Brazil +55 format assumed)
- Email (email, validated on blur)
- Optional: Brief message or "How did you find us?"
- Submit button: "Enviar" or "Agendar Consulta"

**Design System:**
- Button: `variant="primary"`, `size="lg"`
- Input fields: `space-4` between fields
- Form max-width: 100% on mobile, 600px on desktop

---

## Part 2: Responsive Breakpoints & Mobile Optimization

### Viewport Breakpoints

| Device | Width | Height | Use Case |
|--------|-------|--------|----------|
| iPhone SE | 360px | 667px | Minimum mobile |
| iPhone 12/13 | 390px | 844px | Primary mobile target |
| iPad | 768px | 1024px | Tablet |
| Desktop | 1440px | 900px | Primary desktop target |
| Large Desktop | 1920px | 1080px | Secondary desktop |

### Mobile-First Rules

1. **Thumb Zone:** Bottom 220px reserved; interactive elements stay within this zone or scroll into focus
2. **Tap Targets:** Min 44×44px per iOS HIG
3. **Text Readability:**
   - Line length: 60–80 characters (max ~350px on mobile)
   - Line height: 1.6 for body, 1.4 for headings
   - Min font size: 16px for body (prevent auto-zoom on iOS)
4. **Layout Density:**
   - Mobile: `space-4` (4px) horizontal padding; full-width content
   - Tablet+: `space-6` (6px) padding; max-width container (90vw)
5. **Video/Image Handling:**
   - Use `srcset` for responsive images (1x, 2x density)
   - Lazy-load images below fold
   - Video aspect ratio: 9:16 (mobile-native), scale on desktop
6. **Touch Interaction:**
   - Minimum swipe target: 44px
   - Tap delay: <100ms (use CSS `touch-action: manipulation`)
   - Visual feedback on tap (state change, ripple, or highlight)

---

## Part 3: Visual Language & Design System Usage

### Color Palette

Use the design system token set. Below are the primary applications:

| Element | Token | Usage |
|---------|-------|-------|
| Hero overlay text | `text-white` | High contrast on video |
| Section backgrounds | `bg-surface`, `bg-white` | Card bodies, subtle sections |
| Accent / CTA | `brand-500` | Buttons, borders, highlights |
| Differentiator icons | `brand-500` | Accent color for icons |
| Borders | `border-secondary` | Subtle card borders, dividers |
| Text (primary) | `text-primary` | Headings, body copy |
| Text (secondary) | `text-secondary` | Labels, descriptions, helper text |
| Timeline connectors | `border-secondary` | Process section lines |
| Testimonial accent | `brand-500` | Left border of testimonial cards |

### Typography

| Element | Size | Weight | Token | Notes |
|---------|------|--------|-------|-------|
| Page H1 | 48px | 600 | `h1` | Hero headline |
| Section H2 | 32px | 600 | `h2` | Section titles |
| Card H3 | 24px | 600 | `h3` | Stat numbers, social proof |
| Card H4 | 18px | 600 | `h4` | Differentiator titles, project names |
| Body | 16px | 400 | `body-lg` | Primary paragraph text |
| Body Small | 14px | 400 | `body-sm` | Descriptions, secondary copy |
| Caption | 12px | 400 | `caption` | Labels, metadata |
| Bold variant | — | 600 | `*-bold` | Emphasis within paragraphs |

### Spacing Scale

- `space-1`: 4px (not used in main layout, reserved for internal component padding)
- `space-2`: 8px (small gaps)
- `space-3`: 12px
- `space-4`: 16px (default inter-element gap)
- `space-5`: 20px
- `space-6`: 24px (section separator on mobile)
- `space-7`: 32px (tablet+ section separator)
- `space-8`: 40px (major section padding)

**Mobile section padding:** `space-4` horizontal, `space-6` vertical
**Desktop section padding:** `space-8` horizontal & vertical

### Borders & Shadows

- **Border radius:** `radius-lg` (8px) for cards; `radius-full` (999px) for buttons/badges
- **Borders:** `1px solid` `border-light` for subtle card dividers
- **Shadows:**
  - Cards: `shadow-sm` (0 1px 2px rgba(0,0,0,0.05))
  - Hover state: `shadow-md` (0 4px 6px rgba(0,0,0,0.1))
  - No shadow on hero or full-width sections

### Motion & Transitions

- **Default transition duration:** 200ms (easing: `ease-out`)
- **Hover effects:** Color + shadow change (no opacity flicker)
- **Scroll-triggered animations:** Fade-in or slide-up on scroll (100ms, staggered by 50ms per item)
- **Video autoplay:** Fade in as video scrolls into view (200ms)
- **Modal/Lightbox:** Fade in (150ms) + scale-up (150ms) combined
- **No motion on reduced-motion preference:** Use `prefers-reduced-motion: reduce` media query

---

## Part 4: Portfolio Interaction Specification

### Rich Preview (Mobile Tap / Desktop Hover)

**Trigger:** Tap/hover on portfolio thumbnail

**Appearance:**
- Overlay or card expansion (mobile: full-screen card slide-up OR lightbox modal; desktop: subtle expand/highlight)
- Duration: 200ms fade-in

**Content Shown:**
1. Project hero image (large, high-res)
2. Project title (h3)
3. Style category badges (e.g., "Moderno", "Minimalista")
4. 2–3 sentence description
5. Key specs (if relevant): dimensions, materials, color scheme
6. "Ver Mais" / "Ver Detalhes" CTA button

**On "Ver Detalhes" Click:**

**Full Expansion (Lightbox / Modal):**
- Full-screen or modal overlay
- Header: Close button (X), project title, category
- Body:
  - Hero image (full-width)
  - Description (full text, 3–5 sentences)
  - Additional images carousel (max 5, swipeable on mobile)
  - Specs section: Grid or list of key details
- Footer:
  - "Quero um Projeto Como Este" CTA (prominent, primary button)
  - Optional: "Compartilhar" (share to WhatsApp / social)
  - Optional: "Próximo Projeto" / "Anterior" (nav within portfolio)

**Visual Design:**
- Modal background: `bg-dark` with 60% opacity overlay
- Modal content: `bg-white`
- Close button: Top-right, 44×44px, color `text-secondary`
- Images: Full-width, `border-radius: radius-lg`
- Spacing: `space-6` internal padding on mobile, `space-8` on desktop

---

### Portfolio Grid Layout

**Mobile (< 768px):**
- Single column OR 2-column with small images (thumbnail size 160×200px)
- Image aspect ratio: 4:5 (portrait)
- Tap to expand

**Tablet (768px–1200px):**
- 2-column grid
- Image size: 200×250px
- Hover: Slight shadow increase + border accent

**Desktop (> 1200px):**
- 3-column grid
- Image size: 240×300px
- Hover: Shadow increase + overlay label with category badge + "Ver Detalhes" CTA

---

## Part 5: Customization / "Sob Medida" Visual Language

### How the Design Suggests Bespoke Work (Without Visual Excess)

1. **Process Transparency:** The "The Process" section shows steps, demystifying customization
2. **Portfolio Variety:** Diverse project styles (modern, minimalist, corporate, etc.) in portfolio show range without being overwhelming
3. **Color Accents:** Use single brand color (e.g., `brand-500`) sparingly — on timeline, badges, CTAs — to suggest attention to detail without being garish
4. **White Space:** Generous spacing between sections creates a "premium, not rushed" feeling
5. **Typography Hierarchy:** Clear h2 → h4 progression makes the design feel intentional, not generic
6. **No Decorative Flourishes:** Avoid patterns, gradients, or excessive graphics. Let the photography (portfolio images, videos) be the visual anchor
7. **Language Choices:** Use terms like "Projeto Detalhado", "100% Personalizado", "Conforme Sua Visão" in copy

### Design Restraint Rule

- **Max 2 accent colors** (primary + subtle secondary for borders/backgrounds)
- **Max 3 font sizes** per section (h1/h2/body, not h1/h2/h3/h4/body/caption all mixed)
- **No more than 1 video per major section** (avoid sensory overload)
- **Icons are optional** — if used, one consistent icon style across the page

---

## Part 6: Accessibility Requirements

### WCAG 2.1 AA Compliance

1. **Color Contrast:**
   - Text on images: Min 4.5:1 contrast (use semi-transparent overlay on video if needed)
   - Buttons & links: Min 4.5:1 contrast
   - Test with WebAIM or WAVE tool

2. **Keyboard Navigation:**
   - All interactive elements (buttons, links, form inputs) are keyboard-accessible
   - Tab order follows visual flow (left-to-right, top-to-bottom)
   - Focus indicator: Visible outline (min 3px, contrasting color)
   - Carousel: Arrow keys or swipe + button controls

3. **Screen Readers:**
   - All images have descriptive `alt` text (not "image_123.jpg")
   - Form labels linked to inputs (`<label htmlFor="id">`)
   - Section landmarks: Use semantic HTML (`<nav>`, `<main>`, `<section>`)
   - Carousel announce current position: "Slide 2 of 12"

4. **Motion:**
   - Respect `prefers-reduced-motion: reduce` media query
   - Disable auto-playing video for users with reduced-motion preference
   - Scroll-triggered animations: Optional, not required for comprehension

5. **Touch Targets:**
   - Min 44×44px per item (with 8px spacing between targets)
   - Buttons: 56px height recommended on mobile

6. **Text Readability:**
   - Line length: 60–80 characters max
   - Line height: 1.6 for body text
   - Min font size: 16px for body (prevent auto-zoom)

---

## Part 7: Performance Requirements

### Load Time Targets

- **First Contentful Paint (FCP):** < 1.5s
- **Largest Contentful Paint (LCP):** < 2.5s
- **Cumulative Layout Shift (CLS):** < 0.1
- **Interaction to Next Paint (INP):** < 200ms

### Image Optimization

- Use next-gen formats (WebP with JPG fallback)
- Responsive images with `srcset` (1x, 2x, 3x density)
- Lazy-load images below fold (use Intersection Observer)
- Maximum image size (for fastest LCP):
  - Hero image: 600KB (2x density)
  - Portfolio thumbnails: 150KB each
  - Gallery images: 250KB each (after optimization)

### Video Optimization

- Hero video: < 2.5 MB (H.264 MP4, mobile bitrate ~2–3 Mbps)
- Gallery videos (short clips): < 500KB each
- Use `poster` attribute to show first frame while loading
- Muted autoplay (no audio until user interaction)
- Preload: Fetch video on Intersection Observer (not on page load)

### Bundle Size Targets

- JavaScript (main): < 150KB gzipped
- CSS (main): < 30KB gzipped
- Total page (HTML + CSS + JS): < 250KB for first load

---

## Part 8: Technical Handoff for CTO/Dev

### Component List (From Design System)

| Section | Components | Notes |
|---------|------------|-------|
| Hero | Hero section with video + overlay text | Custom video player needed |
| Trust Stats | Card grid (4 items) | Use token spacing scale |
| Differentiators | Card grid (3–4 items) + icons | Icons from system or CMO assets |
| Portfolio | Grid + lightbox modal | Lazy-load images; swipe on mobile |
| Process | Timeline (vertical on mobile, horizontal on desktop) | Custom timeline component recommended |
| Testimonials | Card carousel (3–4 items) | Swipe on mobile; click nav on desktop |
| Video Gallery | Short video grid | Lazy-load, muted autoplay, poster images |
| Contact CTA | Full-width card + optional form | Form validation: email, phone |

### API / Data Structure (Placeholder)

```json
{
  "page": {
    "hero": {
      "videoUrl": "string (CMO asset URL)",
      "fallbackImageUrl": "string",
      "headline": "string",
      "subheading": "string"
    },
    "trustStats": [
      { "number": "string", "label": "string", "icon": "string (optional)" }
    ],
    "differentiators": [
      { "icon": "string", "title": "string", "description": "string" }
    ],
    "portfolio": [
      {
        "id": "string",
        "title": "string",
        "categories": ["string"],
        "description": "string",
        "thumbnail": "string",
        "images": ["string"],
        "specs": [{ "label": "string", "value": "string" }]
      }
    ],
    "process": [
      { "step": "number", "title": "string", "description": "string", "icon": "string" }
    ],
    "testimonials": [
      {
        "quote": "string",
        "author": "string",
        "role": "string",
        "rating": "number (1-5)",
        "image": "string (optional)"
      }
    ],
    "videoGallery": [
      { "videoUrl": "string", "posterUrl": "string", "title": "string (optional)" }
    ],
    "contact": {
      "headline": "string",
      "subheading": "string",
      "ctaText": "string"
    }
  }
}
```

### Known Constraints & Decisions

1. **Video vs. Static Image:** Hero uses video (CMO-curated) with image fallback. Rationale: Motion establishes premium feel; fallback ensures performance on slow networks.
2. **Portfolio Expansion:** Lightbox modal (not inline expansion) on mobile for full-screen immersion. Rationale: Customization deserves focus; lightbox provides cinematic context.
3. **Single-Column Mobile:** All sections stack vertically on < 768px. Rationale: Thumb-zone efficiency + readability.
4. **Auto-Playing Video (Muted):** Permitted under modern browser policies. Rationale: Establishes premium feel; must be muted to avoid user friction.
5. **Lazy-Load Strategy:** Hero video/image loads immediately; portfolio + gallery lazy-load on scroll. Rationale: Balances LCP target with full experience.

---

## Part 9: Design System Token Checklist

Before implementation, confirm these tokens are available in the design system:

- [ ] Colors: `brand-500`, `text-white`, `text-primary`, `text-secondary`, `bg-surface`, `bg-dark`, `border-light`, `border-secondary`
- [ ] Typography: `h1`, `h2`, `h3`, `h4`, `body-lg`, `body-sm`, `caption`, bold variants
- [ ] Spacing: `space-4`, `space-6`, `space-8`
- [ ] Borders: `radius-lg`, `radius-full`
- [ ] Shadows: `shadow-sm`, `shadow-md`
- [ ] Motion: easing function (ease-out), 200ms duration standard
- [ ] Button variants: `primary` (lg size), `secondary` (optional)
- [ ] Form inputs: text, email, tel with validation states
- [ ] Icons: 48px, 64px sizes (sourced from design system or CMO assets)

---

## Part 10: Residual Design Risks & Mitigations

| Risk | Mitigation |
|------|-----------|
| Hero video doesn't autoplay on some browsers | Provide high-res JPG fallback (same aspect ratio); test on iOS Safari, Chrome |
| Portfolio lightbox feels slow on 3G | Use progressive JPEG; show low-res placeholder while loading full image |
| Process timeline confuses users on mobile | Add clear "Próxima Etapa" indicator; consider collapsible steps if >5 steps |
| Video gallery causes layout shift | Use CSS aspect-ratio property or explicit container dimensions |
| Contact form submission unclear | Show success message immediately; confirm next steps (e.g., "Verificar email") |
| Color contrast fails on video overlay | Test with WebAIM; add semi-transparent background to text if needed |
| Tap targets too small on edge cases | Use 44×44px minimum; add 8px spacing between interactive elements |

---

## Part 11: Next Steps & Acceptance Criteria

### Acceptance Criteria (CTO/Dev)

- [ ] Page renders without horizontal scroll on mobile (360px, 390px, 768px viewports)
- [ ] All images optimized (< 600KB for hero, < 150KB for thumbnails)
- [ ] Hero video autoplay works on iOS Safari (muted); fallback image displays
- [ ] Portfolio lightbox opens/closes smoothly; images lazy-load on scroll
- [ ] All form inputs validated (email blur validation, phone format)
- [ ] Keyboard navigation works (Tab key, focus visible on all interactive elements)
- [ ] Color contrast passes WCAG AA on video overlay (test with WebAIM)
- [ ] `prefers-reduced-motion` respected (video autoplay disabled; animations optional)
- [ ] PageSpeed Insights score: > 85 on mobile, > 90 on desktop
- [ ] CLS < 0.1 (no unexpected layout shifts)
- [ ] All design system tokens applied (no inline colors/spacing values)

### Deliverables Checklist

- [x] UX flow (8-section structure with interaction patterns)
- [x] Mobile-first responsive breakpoints (360px → 1440px)
- [x] Portfolio interaction spec (rich preview + lightbox)
- [x] Visual language guidelines (color, typography, spacing, motion)
- [x] Accessibility requirements (WCAG 2.1 AA)
- [x] Performance targets (LCP, CLS, bundle size)
- [x] Technical handoff (component list, data structure, design system tokens)
- [x] Residual risks & mitigations

### Remaining Work (Outside This Brief)

1. **Implementation:** CTO/Dev builds components and integrates with backend data
2. **CMO Asset Integration:** Confirm final video, images, copy from CMO output
3. **QA Testing:** Visual testing on real mobile devices (iOS 14+, Android 10+)
4. **Analytics Tagging:** Add event tracking (video play, portfolio clicks, form submits)
5. **SEO Metadata:** Title, meta description, structured data (schema.org)

---

## Appendix: Design System Token Reference

(Link to design system documentation for the full token list and implementation details.)

**Document Status:** Ready for CTO/Dev hand-off. No design ambiguities; all interaction patterns and responsive rules specified. CMO assets awaited for final content population.

