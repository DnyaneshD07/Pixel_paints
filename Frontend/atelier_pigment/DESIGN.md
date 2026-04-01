# Design System Document: The Architectural Canvas

## 1. Overview & Creative North Star
**Creative North Star: "The Curated Atelier"**
This design system moves away from the transactional nature of e-commerce and toward the immersive experience of a high-end gallery. We do not just sell "paint"; we sell the transformation of space through light, texture, and pigment. 

To break the "template" look, this system utilizes **Intentional Asymmetry**. Large-scale architectural imagery should bleed off the edges of the viewport, while typography is treated as a structural element—overlapping images or sitting in expansive negative space. The goal is a digital experience that feels as tactile and premium as a hand-painted wall.

---

## 2. Colors & Tonal Depth
Our palette is a study in sophisticated contrast, mirroring the finishes of high-end pigments.

### The Color Palette (Material Design Tokens)
*   **Primary (Deep Navy):** `#051125` | The anchor. Use for high-authority moments and deep backgrounds.
*   **Secondary (Terracotta):** `#944925` | The accent. Use for call-to-actions that require warmth and urgency.
*   **Tertiary (Sage Green):** `#0e1400` | The organic balance. Use for sustainability messaging or subtle section shifts.
*   **Neutral (Off-White/Grey):** `surface: #fafaf5` and `surface_variant: #e3e3de`.

### Key Directives
*   **The "No-Line" Rule:** Explicitly prohibit 1px solid borders for sectioning. Boundaries must be defined solely through background color shifts. For example, a `surface_container_low` (`#f4f4ef`) section sitting on a `surface` (`#fafaf5`) background creates a sophisticated "zone" without the clutter of lines.
*   **The Glass & Gradient Rule:** For floating navigation or product overlays, use **Glassmorphism**. Apply `surface` colors at 80% opacity with a `20px` backdrop-blur. 
*   **Signature Textures:** For Hero backgrounds, use a linear gradient transitioning from `primary` (`#051125`) to `primary_container` (`#1b263b`) at a 135-degree angle. This mimics the way light hits a matte-finish wall.

---

## 3. Typography: Editorial Authority
The type system relies on the tension between a high-contrast Serif and a functional, modern Sans.

*   **Display & Headline (Newsreader):** This serif is our "voice." Use `display-lg` (3.5rem) for hero statements. Headlines should use tight letter-spacing (-0.02em) to feel like a premium magazine masthead.
*   **Body & UI (Manrope):** Our "workhorse." Use `body-lg` (1rem) for product descriptions. The generous x-height of Manrope ensures legibility against textured backgrounds.
*   **Label (Manrope Bold):** Use `label-md` (0.75rem) in all-caps with +0.1em letter-spacing for category tags and small UI hints.

---

## 4. Elevation & Depth
We reject the standard "drop shadow" in favor of **Tonal Layering**.

*   **The Layering Principle:** Depth is achieved by "stacking" surface tiers. Place a `surface_container_lowest` (#ffffff) card on a `surface_container_low` (#f4f4ef) background. This creates a soft, natural lift that feels architectural rather than digital.
*   **Ambient Shadows:** If a shadow is required (e.g., a floating "Order Sample" button), use a multi-layered shadow: 
    *   `box-shadow: 0 10px 40px rgba(5, 17, 37, 0.06);` (Note the use of the `primary` color for the shadow tint instead of pure black).
*   **The Ghost Border Fallback:** If accessibility requires a stroke, use `outline_variant` at 15% opacity. It should be felt, not seen.

---

## 5. Components

### Buttons & CTAs
*   **Primary:** `secondary` (`#944925`) background with `on_secondary` text. Shape: `md` (0.375rem). Use a subtle inner-glow (1px white at 10% opacity) on the top edge to simulate a "beveled" paint tin lid.
*   **Secondary/Tertiary:** No background. Underline using a 2px stroke of the `primary` color, offset by 4px.

### Cards & Surfaces
*   **Product Cards:** Forbid divider lines. Use `surface_container` for the card body. On hover, transition the background to `surface_container_high` and slightly scale the image (1.05x).
*   **The "Sample Strip":** A custom component for color selection. Long, vertical rectangles that use the `spacing.12` value for width. When hovered, they expand to show the color name in `label-md`.

### Structured Forms
*   **Inputs:** Use `surface_container_lowest` for the field. The label should sit above the field in `label-sm`. The active state is indicated by a 2px bottom-border of `secondary` (Terracotta), never a full box outline.

### Navigation
*   **Interactive Nav:** The top bar should be transparent on scroll-start and transition to a "Glass" effect (`surface` @ 80% + blur) upon scrolling. Use `title-sm` for nav links to maintain an editorial feel.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use asymmetrical layouts. Let text sit on the left 1/3 of the screen while an image occupies the right 2/3 and bleeds off.
*   **Do** use the Spacing Scale `20` (7rem) and `24` (8.5rem) for section padding. White space is a luxury; use it.
*   **Do** use "Soft Shadows" tinted with Navy—never use pure `#000000`.

### Don’t
*   **Don’t** use 1px solid dividers to separate content blocks. Use a background color shift instead.
*   **Don’t** use standard 4-column grids for everything. Break the grid by offsetting images by `spacing.10`.
*   **Don’t** use high-saturation "web" colors. Every color must feel like it could be mixed in a paint can.