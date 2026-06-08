# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: visual-responsive.spec.ts >> Responsive Design - /experimental Route >> [desktop] TestimonialsStrip card layout
- Location: tests/visual-responsive.spec.ts:45:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
TimeoutError: page.goto: Timeout 30000ms exceeded.
Call log:
  - navigating to "http://localhost:3000/experimental", waiting until "networkidle"

```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | const BREAKPOINTS = {
  4   |   mobile: { width: 375, height: 667, name: 'mobile' },
  5   |   tablet: { width: 768, height: 1024, name: 'tablet' },
  6   |   desktop: { width: 1280, height: 720, name: 'desktop' }
  7   | };
  8   | 
  9   | test.describe('Responsive Design - /experimental Route', () => {
  10  |   test.beforeEach(async ({ page }) => {
  11  |     // Wait for the app to be running
  12  |     page.setDefaultTimeout(30000);
  13  |   });
  14  | 
  15  |   Object.entries(BREAKPOINTS).forEach(([key, viewport]) => {
  16  |     test(`[${viewport.name}] Load /experimental route`, async ({ page }) => {
  17  |       await page.setViewportSize({ width: viewport.width, height: viewport.height });
  18  |       await page.goto('http://localhost:3000/experimental', { waitUntil: 'networkidle' });
  19  | 
  20  |       // Verify page loaded
  21  |       const heading = page.locator('h1, h2').first();
  22  |       await expect(heading).toBeVisible({ timeout: 5000 });
  23  | 
  24  |       // Screenshot for visual inspection
  25  |       await page.screenshot({
  26  |         path: `test-results/screenshots/experimental-${viewport.name}.png`,
  27  |         fullPage: true
  28  |       });
  29  |     });
  30  | 
  31  |     test(`[${viewport.name}] ExperimentalProcessStrip collapse behavior`, async ({ page }) => {
  32  |       await page.setViewportSize({ width: viewport.width, height: viewport.height });
  33  |       await page.goto('http://localhost:3000/experimental', { waitUntil: 'networkidle' });
  34  | 
  35  |       // Look for process strip component
  36  |       const processStrip = page.locator('[data-testid="experimental-process-strip"], .process-strip, section').first();
  37  |       if (await processStrip.isVisible()) {
  38  |         await expect(processStrip).toBeVisible();
  39  |         await processStrip.screenshot({
  40  |           path: `test-results/screenshots/process-strip-${viewport.name}.png`
  41  |         });
  42  |       }
  43  |     });
  44  | 
  45  |     test(`[${viewport.name}] TestimonialsStrip card layout`, async ({ page }) => {
  46  |       await page.setViewportSize({ width: viewport.width, height: viewport.height });
> 47  |       await page.goto('http://localhost:3000/experimental', { waitUntil: 'networkidle' });
      |                  ^ TimeoutError: page.goto: Timeout 30000ms exceeded.
  48  | 
  49  |       // Scroll to testimonials section
  50  |       const testimonials = page.locator('[data-testid="testimonials-strip"], .testimonials-strip').first();
  51  |       if (await testimonials.isVisible()) {
  52  |         await testimonials.scrollIntoViewIfNeeded();
  53  |         await page.waitForTimeout(300);
  54  | 
  55  |         const cards = testimonials.locator('[role="article"], .card, li').first();
  56  |         if (await cards.isVisible()) {
  57  |           await testimonials.screenshot({
  58  |             path: `test-results/screenshots/testimonials-${viewport.name}.png`
  59  |           });
  60  |         }
  61  |       }
  62  |     });
  63  | 
  64  |     test(`[${viewport.name}] MotionStrip touch target sizes (accessibility)`, async ({ page }) => {
  65  |       await page.setViewportSize({ width: viewport.width, height: viewport.height });
  66  |       await page.goto('http://localhost:3000/experimental', { waitUntil: 'networkidle' });
  67  | 
  68  |       // Check interactive elements for minimum touch target size (44px)
  69  |       const buttons = page.locator('button, [role="button"]');
  70  |       const count = await buttons.count();
  71  | 
  72  |       for (let i = 0; i < Math.min(count, 5); i++) {
  73  |         const button = buttons.nth(i);
  74  |         if (await button.isVisible()) {
  75  |           const box = await button.boundingBox();
  76  |           if (box) {
  77  |             expect(box.width >= 40).toBeTruthy(); // Allow 40px min (some tap targets may be bordered)
  78  |             expect(box.height >= 40).toBeTruthy();
  79  |           }
  80  |         }
  81  |       }
  82  |     });
  83  | 
  84  |     test(`[${viewport.name}] Hero subtitle line breaks`, async ({ page }) => {
  85  |       await page.setViewportSize({ width: viewport.width, height: viewport.height });
  86  |       await page.goto('http://localhost:3000/experimental', { waitUntil: 'networkidle' });
  87  | 
  88  |       // Look for hero section subtitle
  89  |       const subtitle = page.locator('h2, .subtitle, p').filter({ hasText: /./i }).first();
  90  |       if (await subtitle.isVisible()) {
  91  |         const box = await subtitle.boundingBox();
  92  |         await subtitle.screenshot({
  93  |           path: `test-results/screenshots/hero-subtitle-${viewport.name}.png`
  94  |         });
  95  | 
  96  |         // Verify text is readable (not overflowing)
  97  |         expect(box?.height ?? 0 > 0).toBeTruthy();
  98  |       }
  99  |     });
  100 |   });
  101 | 
  102 |   test('Overall layout regression check', async ({ page }) => {
  103 |     for (const [key, viewport] of Object.entries(BREAKPOINTS)) {
  104 |       await page.setViewportSize({ width: viewport.width, height: viewport.height });
  105 |       await page.goto('http://localhost:3000/experimental', { waitUntil: 'networkidle' });
  106 | 
  107 |       // Check for no layout shifts or console errors
  108 |       const errors: string[] = [];
  109 |       page.on('console', (msg) => {
  110 |         if (msg.type() === 'error') {
  111 |           errors.push(msg.text());
  112 |         }
  113 |       });
  114 | 
  115 |       await page.waitForTimeout(1000);
  116 |       expect(errors.length).toBe(0);
  117 |     }
  118 |   });
  119 | });
  120 | 
```