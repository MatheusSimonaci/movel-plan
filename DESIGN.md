# Retail Intake Questionnaire Design — Móvel Plan

## Overview

A mobile-optimized intake questionnaire for retail businesses interested in the Móvel Plan product. Designed to collect essential information for qualification, personalization, and account setup.

## Design Goals

- **Progressive disclosure** — Only ask essential questions upfront; gate advanced questions after basic qualification
- **Mobile-first** — Optimized for thumb zones and vertical scrolling on devices (390px width minimum)
- **Forgiving** — Allow skipping non-critical fields; recover from errors gracefully
- **Quick** — 3–5 minutes to completion; no distractions

## User Flows

### Happy Path: End-to-End
1. **Entry** → Form intro with estimated time + CTA
2. **Section 1: Business Basics** → Name, contact, business type (required)
3. **Section 2: Scale Assessment** → Employee count, revenue range (required for qualification logic)
4. **Section 3: Current State** → Existing systems, pain points (conditional; revealed by section 2)
5. **Section 4: Goals & Timeline** → Objectives, urgency, budget comfort level (shown for qualified leads)
6. **Summary & Confirmation** → Review, consent to follow up, submit
7. **Success State** → Confirmation page with next steps (warm handoff)

### Qualification Logic
- **Low friction:** Show all questions; flag underqualified accounts for sales triage post-submit
- **Alternative:** Gate advanced sections on answers (e.g., only show "Goals" if mid-market size detected)

## Information Architecture

### Section 1: Business Basics (Required)
- **Business Name** — Text input, ~40 chars max
- **Contact Name** — Text input, ~40 chars max
- **Contact Email** — Email input with inline validation
- **Phone Number** — Optional; country-aware format (Brazil default: +55)
- **Business Type** — Segmented control / radio group:
  - Retail Store (physical)
  - E-commerce
  - Pop-up / Marketplace
  - Omnichannel (physical + online)
  - Other

### Section 2: Scale Assessment (Required)
- **Number of Locations** — Number input or range (1, 2–5, 6–20, 20+)
- **Average Monthly Revenue Range** — Segmented radio group (Brazil BRL):
  - < R$ 50k
  - R$ 50k–200k
  - R$ 200k–1M
  - > R$ 1M
- **Employee Count** — Range select (1, 2–5, 6–20, 20+)

### Section 3: Current Operations (Required)
- **Current POS/Sales System** — Multi-select:
  - Paper / Manual
  - Excel / Spreadsheets
  - Standalone POS (e.g., Vend)
  - Custom/Legacy System
  - None / Just starting
- **Inventory System** — Same multi-select list
- **Pain Points** — Checkboxes (max 3; optional but encouraged):
  - Inventory tracking accuracy
  - Sales/revenue visibility
  - Payment processing delays
  - Staff management
  - Customer insights
  - Integration complexity

### Section 4: Goals & Timeline (Conditional)
- **Primary Objective** — Radio group:
  - Improve inventory visibility
  - Increase sales/revenue
  - Reduce operational costs
  - Better customer experience
  - Multi-channel management
- **Timeline** — Radio group:
  - Immediate (within 30 days)
  - Near-term (30–90 days)
  - Planning phase (90+ days)
- **Budget Comfort** — Radio group:
  - Unsure
  - Tight (looking for cost-effective)
  - Flexible (willing to invest)

### Section 5: Confirmation
- **Consent Checkbox** — "I'd like Móvel Plan to contact me with personalized recommendations"
- **CTA Button** — "Submit & Next Steps"

---

## Interaction Design

### Visual Hierarchy & Spacing
- **Header:** Product name, section title (h2), progress indicator (X of 5)
- **Form fields:** Single-column layout; 16px baseline rhythm
- **Spacing:** `space-4` (4px) between labels and inputs; `space-6` (6px) between field groups
- **Bottom padding:** `space-8` (8px) above submit button to avoid thumb collision

### Form Field Design
- **Labels:** Required inline, no floated labels (mobile readability)
- **Helper text:** Shown below field when needed (e.g., "e.g., +55 11 98765-4321")
- **Error states:** Red border + error message below; no dismissal needed (cleared on fix)
- **Success states:** Green checkmark on multi-select fields; no visual confirmation for single inputs

### Input Types by Field
- **Text fields:** `inputMode="text"` (name, business name)
- **Email:** `inputMode="email"` with real-time validation
- **Phone:** `inputMode="tel"` with country-aware masking (format automatically to +55 pattern)
- **Number:** `inputMode="numeric"` for employee/location counts
- **Selects:** Radio groups (single choice, always visible), segmented control for 2–3 options
- **Multi-select:** Checkboxes with max-3 visual constraint (show count; disable 4th+)

### Validation
- **On blur** for text/email/number fields
- **On change** for radio/checkbox (immediate feedback)
- **Submit** only when all required fields pass
- **Error recovery:** Keep form state; show which fields need attention (red border + message)

### Progressive Disclosure
- **Section 3 (Pain Points)** shown only after answering "Current POS/Sales System"
- **Section 4 (Goals)** shown only if:
  - Employee count ≥ 2 AND
  - Monthly revenue > R$ 50k
  (Otherwise, prompt: "Thanks! We'll send you resources tailored to solopreneurs.")

---

## Mobile Optimization

### Viewport & Gesture Handling
- **Min width:** 360px (iPhone SE); max-width: 100vw
- **Thumb zone:** Bottom 220px of screen reserved for interactive elements
- **Tap targets:** Min 44px×44px (iOS HIG)
- **Keyboard:** When input is focused, form scrolls so field is in middle of screen (not at bottom)

### Density
- **Form width:** 100% on mobile (no lateral padding loss); 90vw max-width on tablet/desktop
- **Padding:** `space-4` horizontal on mobile, `space-6` on tablet+
- **Line-height:** 1.5 for body text (20px @ 13px base); labels 1.4

### Loading & Performance
- **Form submit:** Show skeleton loader below submit button (180ms delay threshold)
- **Page load:** Prefetch the success/next-steps screen to avoid jank
- **Network:** Cache form state in localStorage (persist on navigation back)

---

## Component Specs (Implementation)

### Submit Button
```
<Button variant="primary" size="lg" fullWidth disabled={!isValid}>
  Submit & Next Steps
</Button>
```
- Size: `lg` (56px height, 18px font, space-4 internal padding)
- Width: 100% on mobile
- State: disabled until all required fields valid
- Loading state: spinner inside button, text hidden

### Progress Indicator
```
<ProgressBar value={currentSection} max={5} />
<Text variant="caption" color="secondary">
  Section {currentSection} of 5
</Text>
```
- Horizontal progress bar; updated on section scroll into view
- Label below shows "Section X of 5"

### Field Layout
```
<FieldGroup spacing="space-6">
  <Label htmlFor="businessName" required>Business Name</Label>
  <TextInput
    id="businessName"
    placeholder="e.g., Boutique Design"
    value={...}
    error={errors.businessName}
    onBlur={validate}
  />
  {errors.businessName && (
    <Text variant="caption" color="error">{errors.businessName}</Text>
  )}
</FieldGroup>
```
- Error state: border `2px solid #dc2626` (red-600)
- Helper text: `caption` variant, `secondary` color

### Radio Group (Scale Assessment)
```
<RadioGroup name="revenueRange" onChange={handleChange}>
  <Radio value="under50k">< R$ 50k/mês</Radio>
  <Radio value="50k-200k">R$ 50k–200k/mês</Radio>
  <Radio value="200k-1m">R$ 200k–1M/mês</Radio>
  <Radio value="over1m">> R$ 1M/mês</Radio>
</RadioGroup>
```
- Spacing: `space-4` between options
- Checked state: filled circle + brand-500 color

### Multi-Select with Max Constraint
```
<Checkbox
  checked={selected.includes("inventory")}
  onChange={() => togglePainPoint("inventory")}
  disabled={!selected.includes("inventory") && selected.length >= 3}
>
  Inventory tracking accuracy
</Checkbox>
```
- Max 3 selections; 4th+ disabled with `opacity-50`
- Show count badge: "(Selected: 2 of 3)"

---

## Acceptance Criteria

- [ ] Form renders on mobile (390×844) without horizontal scroll
- [ ] All required fields validated; submit blocked until valid
- [ ] Progressive disclosure works: Section 3 appears after System selection; Section 4 appears for qualified leads
- [ ] Error messages appear inline and clear on fix
- [ ] Form state persists in localStorage (survives back navigation)
- [ ] Tap targets ≥ 44px×44px; bottom spacing prevents thumb collision
- [ ] Phone field auto-formats to +55 pattern (Brazil); email validates on blur
- [ ] Multi-select respects max-3 constraint (disables 4th+)
- [ ] Success page shown after submit (no error); includes next-steps CTA
- [ ] Accessibility: labels linked to inputs, focus visible, color not sole indicator
- [ ] Performance: page load < 2s; form interaction feedback < 100ms

---

## Residual Design Risks

- **Qualification gate too strict:** If Section 4 gates on employee count ≥ 2 + revenue > R$ 50k, solo entrepreneurs may feel dismissed. Mitigation: show encouraging message + relevant resources for solopreneurs.
- **Multi-select confusion:** Users may not understand the "max 3" constraint if we disable the 4th without clear messaging. Mitigation: show "(Selected: X of 3)" badge at top of section.
- **Phone country assumption:** Hardcoding Brazil format (+55) will fail if expanded to other countries later. Mitigation: Accept initial submission as Brazil-only; flag for refactor when multi-country is required.
- **Keyboard UX on long forms:** On iOS, keyboard may obscure lower sections. Mitigation: Test on real device; adjust scroll behavior if needed.

---

## Next Steps

1. **Design system alignment check** — Confirm all tokens (colors, spacing, typography) are available in the design system
2. **Build component library** — If custom multi-select or radio groups needed, coordinate with component owners
3. **Mobile testing** — Render on iOS 14+, Android 10+ at real 390×844 and 412×915 viewports
4. **API integration** — Define submission endpoint and payload shape
5. **Analytics** — Tag form interactions (submit, error, section views) for funnel analysis
