# Móvel Plan — V1 Portfolio-First Design System

## Overview

A high-performance, cinematic portfolio experience for **Móvel Plan**. The V1 architecture is designed to establish immediate authority through real project proof, minimizing generic marketing copy in favor of immersive media.

## Design Principles

- **Portfolio-First** — Projects are the primary proof. The site opens directly into a project reel.
- **Cinematic & Immersive** — Full-viewport media with minimal overlays.
- **Minimalist Copy** — Text is functional and brief, used only to label work and provide contact paths.
- **Motion-Led** — Muted autoplay reels provide "living" proof of completed environments.
- **Responsive & Accessible** — Optimized for 90+ Lighthouse scores on mobile and desktop.

## Visual Language

### Typography
- **Headlines:** Sans-serif, bold, tracking-tight (e.g., `text-8xl` on desktop).
- **Body:** Sans-serif, light/regular, high readability.
- **Accent:** Uppercase, tracking-widest for categories and labels.

### Color Palette
- **Background:** `bg-black` (#000000) for a premium, gallery-like feel.
- **Primary:** `bg-primary` (Accent color, typically gold/yellow per brand assets).
- **Surface:** `bg-zinc-900` for modals and cards.
- **Text:** `text-white` (High contrast) and `text-zinc-400` (Secondary).

## Component Architecture

### 1. Hero (`HeroMovelPlan`)
- **Media:** Full-screen muted autoplay video (`DYPtgxORg-Q.mp4`).
- **Layout:** Content anchored to bottom-left (desktop) or bottom-center (mobile).
- **Behavior:** Parallax scale on scroll; smooth fade-in.

### 2. Portfolio Grid (`PortfolioMovelPlan`)
- **Structure:** Filterable grid (Salas, Quartos, Cozinhas, Banheiros).
- **Cards:** 4:5 aspect ratio; hover reveals category and material tags.
- **Modal:** Detail view with high-res media (image/video), description, and material chip tags.

### 3. Contact (`Contact`)
- **Structure:** Restrained block with large headline and dual WhatsApp/Phone CTAs.
- **Visuals:** Subtle gradient border; high-contrast primary button.

### 4. Navigation (`Header` & `Footer`)
- **Header:** Sticky, backdrop-blur, compact logo + simple links.
- **Footer:** Minimalist, social links, brand repeat.

## Technical Standards

- **Next.js 16 (App Router):** Modern framework for speed and SEO.
- **Tailwind CSS 4:** Design token discipline via CSS variables.
- **Framer Motion:** Declarative animations for layouts and modals.
- **Asset Optimization:** WebP posters for all videos; lazy-loaded images.

## Performance Budget

- **Lighthouse Performance:** ≥ 90
- **Lighthouse Accessibility:** ≥ 90
- **Lighthouse SEO:** ≥ 90
- **Build Strategy:** Fully static generation (SSG) for instant loads.

---

## Handoff Checklist (V1)

- [x] Hero uses real 2026 living room reel.
- [x] Portfolio contains 6 real projects with category filters.
- [x] Testimonials and generic trust stats removed.
- [x] Contact leads directly to verified WhatsApp.
- [x] Production build verified (`npm run build`).
