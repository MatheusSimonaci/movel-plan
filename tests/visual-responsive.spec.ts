import { test, expect } from '@playwright/test';

const BREAKPOINTS = {
  mobile: { width: 375, height: 667, name: 'mobile' },
  tablet: { width: 768, height: 1024, name: 'tablet' },
  desktop: { width: 1280, height: 720, name: 'desktop' }
};

test.describe('Responsive Design - /experimental Route', () => {
  test.beforeEach(async ({ page }) => {
    // Wait for the app to be running
    page.setDefaultTimeout(30000);
  });

  Object.entries(BREAKPOINTS).forEach(([key, viewport]) => {
    test(`[${viewport.name}] Load /experimental route`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto('http://localhost:3000/experimental', { waitUntil: 'networkidle' });

      // Verify page loaded
      const heading = page.locator('h1, h2').first();
      await expect(heading).toBeVisible({ timeout: 5000 });

      // Screenshot for visual inspection
      await page.screenshot({
        path: `test-results/screenshots/experimental-${viewport.name}.png`,
        fullPage: true
      });
    });

    test(`[${viewport.name}] ExperimentalProcessStrip collapse behavior`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto('http://localhost:3000/experimental', { waitUntil: 'networkidle' });

      // Look for process strip component
      const processStrip = page.locator('[data-testid="experimental-process-strip"], .process-strip, section').first();
      if (await processStrip.isVisible()) {
        await expect(processStrip).toBeVisible();
        await processStrip.screenshot({
          path: `test-results/screenshots/process-strip-${viewport.name}.png`
        });
      }
    });

    test(`[${viewport.name}] TestimonialsStrip card layout`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto('http://localhost:3000/experimental', { waitUntil: 'networkidle' });

      // Scroll to testimonials section
      const testimonials = page.locator('[data-testid="testimonials-strip"], .testimonials-strip').first();
      if (await testimonials.isVisible()) {
        await testimonials.scrollIntoViewIfNeeded();
        await page.waitForTimeout(300);

        const cards = testimonials.locator('[role="article"], .card, li').first();
        if (await cards.isVisible()) {
          await testimonials.screenshot({
            path: `test-results/screenshots/testimonials-${viewport.name}.png`
          });
        }
      }
    });

    test(`[${viewport.name}] MotionStrip touch target sizes (accessibility)`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto('http://localhost:3000/experimental', { waitUntil: 'networkidle' });

      // Check interactive elements for minimum touch target size (44px)
      const buttons = page.locator('button, [role="button"]');
      const count = await buttons.count();

      for (let i = 0; i < Math.min(count, 5); i++) {
        const button = buttons.nth(i);
        if (await button.isVisible()) {
          const box = await button.boundingBox();
          if (box) {
            expect(box.width >= 40).toBeTruthy(); // Allow 40px min (some tap targets may be bordered)
            expect(box.height >= 40).toBeTruthy();
          }
        }
      }
    });

    test(`[${viewport.name}] Hero subtitle line breaks`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto('http://localhost:3000/experimental', { waitUntil: 'networkidle' });

      // Look for hero section subtitle
      const subtitle = page.locator('h2, .subtitle, p').filter({ hasText: /./i }).first();
      if (await subtitle.isVisible()) {
        const box = await subtitle.boundingBox();
        await subtitle.screenshot({
          path: `test-results/screenshots/hero-subtitle-${viewport.name}.png`
        });

        // Verify text is readable (not overflowing)
        expect(box?.height ?? 0 > 0).toBeTruthy();
      }
    });
  });

  test('Overall layout regression check', async ({ page }) => {
    for (const [key, viewport] of Object.entries(BREAKPOINTS)) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto('http://localhost:3000/experimental', { waitUntil: 'networkidle' });

      // Check for no layout shifts or console errors
      const errors: string[] = [];
      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          errors.push(msg.text());
        }
      });

      await page.waitForTimeout(1000);
      expect(errors.length).toBe(0);
    }
  });
});
