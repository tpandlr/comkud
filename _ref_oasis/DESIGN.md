# Design System Specification: Oasis B2B Procurement

## 1. Overview & Creative North Star
**The Creative North Star: "The Pristine Flow"**

This design system moves away from the "cluttered dashboard" trope of B2B procurement. Instead, it adopts an editorial, high-end marketplace aesthetic. We are not building a spreadsheet; we are building a premium shopping experience for professional partners. 

The visual language is defined by **intentional asymmetry** and **tonal layering**. By utilizing the "Pristine Flow" philosophy, we break the rigid grid with expansive white space (the "Air"), sophisticated typography scales (the "Authority"), and fluid background shifts (the "Water"). We avoid the "template" look by treating the UI as a series of stacked, organic layers rather than a flat grid of boxed-in components.

---

## 2. Colors & Surface Philosophy
The palette is rooted in the depth of Oasis Navy and the vibrance of Oasis Cyan, supported by a sophisticated range of tonal neutrals.

### The "No-Line" Rule
**Borders are prohibited for sectioning.** To achieve a premium, airy feel, boundaries must be defined solely through background color shifts. 
- Use `surface-container-low` for large section backgrounds.
- Use `surface-container-lowest` (pure white) for high-priority cards or content areas.
- This creates a "soft-edge" layout that feels modern and expansive.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of fine paper.
*   **Level 0 (Base):** `surface` (#F7F9FB) – The canvas for the entire application.
*   **Level 1 (Sectioning):** `surface-container-low` (#F2F4F6) – Defines large functional areas (e.g., a filter sidebar).
*   **Level 2 (Interaction):** `surface-container-lowest` (#FFFFFF) – Used for primary cards, product tiles, and white-space blocks.
*   **Level 3 (Elevation):** `surface-container-high` (#E6E8EA) – Used for subtle hovering or nested information within a white card.

### The "Glass & Gradient" Rule
To elevate the B2B experience, floating elements (Modals, Navigation Bars, or "Quick View" drawers) should utilize **Glassmorphism**:
*   **Background:** `surface` at 80% opacity.
*   **Backdrop Blur:** 12px to 20px.
*   **Signature Gradient:** For primary CTAs and Hero sections, use a subtle linear gradient from `on-primary-container` (#00AACC) to `secondary` (#3A5F94) at a 135-degree angle. This adds a "liquid" depth that flat hex codes lack.

---

## 3. Typography
We use a dual-font strategy to balance editorial elegance with functional clarity.

*   **Display & Headline (Manrope):** This is our "Editorial Voice." Manrope’s geometric yet friendly curves provide a premium feel. Use `display-lg` and `headline-md` with generous tracking (-0.02em) to create an authoritative, trustworthy presence.
*   **Body & UI (Inter):** This is our "Utility Voice." Inter provides world-class legibility for complex procurement data, order histories, and SKU lists.

**The Hierarchy of Trust:**
- Large, bold headlines in `primary` (#00222B) convey stability.
- Sub-labels in `on-surface-variant` (#43474F) provide context without cluttering the visual field.

---

## 4. Elevation & Depth
In this system, depth is felt, not seen.

*   **Tonal Layering:** Avoid shadows for static elements. A `surface-container-lowest` card sitting on a `surface-container-low` background provides enough "lift" for a clean, B2B aesthetic.
*   **Ambient Shadows:** For floating elements (e.g., active dropdowns), use a "Water Shadow": `X:0, Y:8, Blur:24, Color: rgba(25, 28, 30, 0.06)`. It should feel like a soft glow of light, never a dark smudge.
*   **The Ghost Border:** If a border is required for accessibility (e.g., input fields), use `outline-variant` (#C3C6D1) at 20% opacity. **Never use 100% opaque borders.**

---

## 5. Components

### Buttons
- **Primary:** `primary` background (Oasis Navy depth), `8px` rounded corners, `bold` weight. 
- **Action (CTA):** Oasis Cyan (#00BFE6) background with `on-primary` text. This is reserved for "Place Order" or "Add to Cart."
- **Secondary:** Transparent background with a "Ghost Border" (20% opacity `outline`).
- **Interaction:** On hover, primary buttons should shift 4px upward with an Ambient Shadow.

### Cards & Product Tiles
- **Constraint:** No divider lines.
- **Separation:** Use 24px-32px of vertical padding and `surface-container-lowest` backgrounds to separate products.
- **Header:** Use `title-md` for product names to ensure a "Marketplace" feel.

### Input Fields
- **Style:** Minimalist. No background fill—only a bottom "Ghost Border" that transitions to a 2px Oasis Cyan (#00BFE6) underline on focus.
- **Feedback:** Error states use `error` (#BA1A1A) text but maintain the soft, rounded corner language.

### Inventory & Order Lists
- **The "Clean Row":** Forbid the use of table grid lines. Use alternating tonal shifts (e.g., even rows on `surface`, odd rows on `surface-container-low`) or simply generous white space (16px between rows).

### Chips (Filters)
- Use `8px` (default) roundedness. 
- **Inactive:** `surface-container-high` background with `on-surface` text.
- **Active:** Oasis Cyan (#00BFE6) background with white text.

---

## 6. Do's and Don'ts

### Do:
*   **Embrace Whitespace:** If a layout feels "empty," it is working. The airy vibe is essential for a premium B2B experience.
*   **Layer Neutrals:** Stack `surface-container` tiers to create hierarchy.
*   **Use Intentional Asymmetry:** Align text to the left but allow imagery or product shots to break the container slightly for an editorial look.

### Don't:
*   **Don't use 1px solid borders:** They create visual noise and make the app look "templated."
*   **Don't use pure black text:** Always use `on-surface` (#191C1E) for body or `primary` (#00222B) for headers to maintain a sophisticated tonal range.
*   **Don't overcrowd the fold:** Let the user breathe. B2B users are often overwhelmed by data; this system should be their "Oasis" of calm.