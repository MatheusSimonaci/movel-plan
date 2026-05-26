# Móvel Plan V1 Asset Inventory

Source account: https://www.instagram.com/movel.plan/

Extraction date: 2026-05-19

Source method: Instagram public web profile endpoint (`i.instagram.com/api/v1/users/web_profile_info/?username=movel.plan`). Apify was suggested in the issue, but no Apify token was available in the workspace; the public endpoint returned the needed real profile, media, caption, permalink, and download fields.

## Summary

- Profile at extraction: 1,019 followers, 189 following, 166 posts.
- Bio: "Seu lar dos sonhos: Niterói, Barra e Zona Sul! Projetos planejados sob medida. Fale conosco! Peça seu orçamento!!"
- Local asset pack: `public/assets/movel-plan/`
- Machine manifest: `public/assets/movel-plan/manifest.json`
- Rights caveat: these are first-party Instagram assets from Móvel Plan's own public account, but website reuse should still be confirmed with the client because Instagram publication does not automatically grant web-production usage rights for every project image, music track, collaborator image, or customer home interior.

## Logo

| Asset | Local file | Source | Quality | Use |
| --- | --- | --- | --- | --- |
| Instagram profile logo | `public/assets/movel-plan/profile-logo.webp` | https://www.instagram.com/movel.plan/ | 320x320 WebP extracted from profile image. Black background, yellow roof mark, white "MOVEL PLAN" text. Not transparent and not vector. | Temporary header/footer/social avatar/favicon source only. |

Logo resolution: resolved for V1 placeholder use, not final brand production.

Client request needed for final: ask Móvel Plan for the original logo in SVG, PDF, AI, EPS, or high-resolution transparent PNG, plus any brand color values and preferred accent/background usage.

## Recommended Portfolio Groups

### Hero / Reels

Use these as motion-led proof. Prefer muted autoplay with poster fallback. Avoid relying on audio because some Instagram audio may be unavailable or rights-restricted.

| Category | Local video | Poster | Instagram source | Date | Placement | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Living room | `public/assets/movel-plan/DYPtgxORg-Q.mp4` | `public/assets/movel-plan/DYPtgxORg-Q-poster.webp` | https://www.instagram.com/p/DYPtgxORg-Q/ | 2026-05-12 | Primary hero candidate or first portfolio reel | Caption references sala, MDF Ares/Off White/Itapuã by Duratex; current/freshest project-led reel. |
| Living room | `public/assets/movel-plan/DOOaavrDSEE.mp4` | `public/assets/movel-plan/DOOaavrDSEE-poster.webp` | https://www.instagram.com/p/DOOaavrDSEE/ | 2025-09-05 | Secondary reel gallery | Caption references sala, MDF Ares/Freijó by Guararapes; good for finish/material story. |
| Bathroom | `public/assets/movel-plan/DOHXUTIknN5.mp4` | `public/assets/movel-plan/DOHXUTIknN5-poster.webp` | https://www.instagram.com/p/DOHXUTIknN5/ | 2025-09-02 | Bathroom portfolio tile or reel gallery | Caption references banheiro, Ares/Freijó; useful for compact-space proof. |
| Bedroom | `public/assets/movel-plan/DN6JZ30j4nC.mp4` | `public/assets/movel-plan/DN6JZ30j4nC-poster.webp` | https://www.instagram.com/p/DN6JZ30j4nC/ | 2025-08-28 | Bedroom/closet portfolio tile | Caption references quarto; 640x800 rather than vertical full-height, so use as card media rather than full-screen hero. |
| Brand/process explainer | `public/assets/movel-plan/CuKvDcMtPUc.mp4` | `public/assets/movel-plan/CuKvDcMtPUc-poster.webp` | https://www.instagram.com/p/CuKvDcMtPUc/ | 2023-07-01 | Optional process/about support, not portfolio hero | Small file and older reel; message explains why planned furniture is an investment. |

Source-only reel not downloaded: https://www.instagram.com/p/C4i476NxFRp/ from 2024-03-15. It is a 69-second relationship/process reel and the direct file was about 19 MB, so I did not add it to the V1 pack. Use only if CTO later compresses a short excerpt and confirms music/audio rights.

### Kitchens

| Asset | Local file | Instagram source | Date | Placement | Notes |
| --- | --- | --- | --- | --- | --- |
| Kitchen ideas carousel cover | `public/assets/movel-plan/DNRSw3zSElq.webp` | https://www.instagram.com/p/DNRSw3zSElq/ | 2025-08-12 | Kitchens group cover or "ideas" tile | Caption promises 5 kitchen planned-furniture ideas. Good category anchor; verify child carousel frames if richer kitchen detail is needed. |

### Bedrooms / Closets

| Asset | Local file | Instagram source | Date | Placement | Notes |
| --- | --- | --- | --- | --- | --- |
| Bedroom reel | `public/assets/movel-plan/DN6JZ30j4nC.mp4` | https://www.instagram.com/p/DN6JZ30j4nC/ | 2025-08-28 | Bedroom/closet group lead | Real Móvel Plan reel; stronger than generic bedroom copy. Use poster for cards. |

### Living Rooms

| Asset | Local file | Instagram source | Date | Placement | Notes |
| --- | --- | --- | --- | --- | --- |
| Living room reel, Ares/Off White/Itapuã | `public/assets/movel-plan/DYPtgxORg-Q.mp4` | https://www.instagram.com/p/DYPtgxORg-Q/ | 2026-05-12 | Hero candidate, living-room group lead | Freshest asset in this extraction; useful for first-viewport proof. |
| Living room reel, Ares/Freijó | `public/assets/movel-plan/DOOaavrDSEE.mp4` | https://www.instagram.com/p/DOOaavrDSEE/ | 2025-09-05 | Living-room gallery support | Good finish/material proof. |

### Bathrooms / Laundry

| Asset | Local file | Instagram source | Date | Placement | Notes |
| --- | --- | --- | --- | --- | --- |
| Bathroom reel | `public/assets/movel-plan/DOHXUTIknN5.mp4` | https://www.instagram.com/p/DOHXUTIknN5/ | 2025-09-02 | Bathroom group lead | Real project-led reel; use as proof for compact wet areas. |
| Compact bathroom carousel cover | `public/assets/movel-plan/DNWuNiPp41Z.webp` | https://www.instagram.com/p/DNWuNiPp41Z/ | 2025-08-15 | Bathroom support tile | Caption focuses on compact bathrooms, niches, and storage. Treat as advice/content asset unless child frames prove finished work. |

### Offices

No office-specific asset appeared in the first extracted profile batch. Do not invent office proof. If V1 needs an office category, request either client photos/reels or deeper Instagram archive extraction before publishing that group.

### Details / Finishes / Materials

| Asset | Local file | Instagram source | Date | Placement | Notes |
| --- | --- | --- | --- | --- | --- |
| MDF/MDP/compensado guide | `public/assets/movel-plan/DNeIFtqMFZT.webp` | https://www.instagram.com/p/DNeIFtqMFZT/ | 2025-08-17 | Detail/finish education tile | Good for material literacy and quality positioning. It is educational, not a completed-project proof tile. |
| Home story / brand value image | `public/assets/movel-plan/DNBXkNCSuoA.webp` | https://www.instagram.com/p/DNBXkNCSuoA/ | 2025-08-06 | Optional about/process support | Useful only if the page needs brand texture; deprioritize for portfolio-first V1. |

### Before / After / Process

| Asset | Local file | Instagram source | Date | Placement | Notes |
| --- | --- | --- | --- | --- | --- |
| Why planned furniture reel | `public/assets/movel-plan/CuKvDcMtPUc.mp4` | https://www.instagram.com/p/CuKvDcMtPUc/ | 2023-07-01 | Process/about support | Explains value of planned furniture; not before/after. |
| Functional-home image | `public/assets/movel-plan/DNHI6JYynUW.webp` | https://www.instagram.com/p/DNHI6JYynUW/ | 2025-08-08 | Conversion support near CTA | Caption speaks to lack of space/functionality. Strong pain-point fit, but not a specific project case. |

No clear before/after sequence was available in the first extracted profile batch.

## UX / CTO Build Notes

- Prioritize the 2026-05-12 living-room reel for the hero because it is current, project-led, and visually specific to planned furniture.
- Keep the portfolio-first page honest: label educational carousel covers as "dicas" or supporting content, not delivered projects, unless additional carousel frames confirm real finished installations.
- Use Instagram permalinks as source attribution in internal comments or CMS metadata; do not expose long CDN URLs because they expire.
- Re-encode videos before production if the final page has a strict performance budget. Current downloaded files total about 16.6 MB across five MP4s.
- Avoid unsupported proof claims from the current content file, especially fake testimonials, "500+ projetos", "4.9 avaliação", and "10+ anos" unless the client verifies them.

## Marketing Lens Notes

- **Message-market fit:** the strongest available captions address desired rooms and pain points such as lack of space/functionality, not only feature lists.
- **Content freshness:** the 2026 and 2025 assets should lead; 2023/2024 reels should be supporting only.
- **Social proof leverage:** visual project proof is available, but testimonial/metric proof is not verified in this extraction.
- **Attribution discipline:** source/medium for every asset is Instagram organic from `@movel.plan`; keep permalink metadata with each portfolio item.
