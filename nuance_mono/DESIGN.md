# Design System: The Editorial Minimalist

## 1. Overview & Creative North Star
**Creative North Star: "The Curated Gallery"**
This design system moves away from the "app-like" density of traditional review platforms and toward a high-end editorial experience. Instead of a digital database, we treat product reviews as curated exhibits. The goal is to break the "standard template" look by utilizing generous white space, intentional asymmetry, and a sophisticated tonal hierarchy. By prioritizing "The Curated Gallery" mindset, we ensure that every review feels like a deliberate piece of content rather than a row in a table.

## 2. Colors: Tonal Depth vs. Structural Lines
This system relies on a monochromatic, sophisticated palette to define space. We replace traditional UI "boxes" with a "Mist-on-Snow" approach.

*   **The "No-Line" Rule:** Under no circumstances should 1px solid borders be used to section off content. Structural boundaries are defined solely through background shifts. For example, a `surface-container-low` (#f2f4f5) review card sits on a `background` (#f9f9fa) page, creating a soft edge without a hard stroke.
*   **Surface Hierarchy & Nesting:** Think of the UI as layers of fine paper.
    *   **Base:** `surface` (#f9f9fa) for the main page background.
    *   **Level 1 (Sections):** `surface-container` (#ebeef0) for sidebars or grouping.
    *   **Level 2 (Cards/Focus):** `surface-container-lowest` (#ffffff) for the actual review content to make it "pop" with purity.
*   **The "Glass & Gradient" Rule:** Use `backdrop-blur-xl` combined with a semi-transparent `surface` color (e.g., `rgba(249, 249, 250, 0.8)`) for floating navigation or sticky headers. For primary CTAs (like "Write a Review"), use a subtle linear gradient from `primary` (#5f5e5e) to `primary-dim` (#535252) to add a tactile, premium weight.

## 3. Typography: Authoritative Clarity
We use a single typeface (Inter) but create a rich hierarchy through extreme scale and weight contrast.

*   **Display & Headline:** Use `display-md` (2.75rem) for the overall product rating score. It should feel like a masthead. Use `headline-sm` (1.5rem) for review titles to establish an editorial "voice."
*   **Body & Labels:** `body-md` (0.875rem) is the workhorse for review text. Use `on-surface-variant` (#5a6063) for secondary metadata like dates or "Verified Purchase" to reduce visual noise.
*   **Editorial Intent:** The spacing between a `headline-sm` and its `body-md` should be tight (`spacing-1.5`), while the space between separate reviews should be vast (`spacing-12` to `spacing-16`) to allow each testimonial to breathe.

## 4. Elevation & Depth: Tonal Layering
Depth is not a shadow; it is a relationship between tones.

*   **The Layering Principle:** To lift a review card, do not use an outline. Place a `surface-container-lowest` (#ffffff) element on a `surface-container-low` (#f2f4f5) background. The 2% shift in brightness is enough for the human eye to perceive elevation in a high-end minimalist context.
*   **Ambient Shadows:** If an element must float (like a modal or a "Sort" dropdown), use an ultra-diffused shadow.
    *   *Specification:* `box-shadow: 0 20px 50px rgba(45, 51, 54, 0.05);` (using `on-surface` at 5% opacity). This mimics natural, soft-box photography lighting.
*   **The "Ghost Border" Fallback:** If a container requires definition for accessibility (e.g., an input field), use the `outline-variant` (#adb3b6) at **15% opacity**. It should be felt, not seen.

## 5. Components

### Cards & Reviews
*   **Style:** Forbid the use of divider lines between reviews. Use `spacing-10` as a vertical gap.
*   **Asymmetry:** Position the user's avatar and rating (`label-md`) slightly offset or in a wider left margin to break the "standard block" alignment.

### Buttons
*   **Primary:** Background `primary` (#5f5e5e), text `on-primary` (#faf7f6), `rounded-md`. No shadow. On hover, shift to `primary-dim`.
*   **Secondary/Tertiary:** No background. Use `title-sm` weight with a subtle underline using `outline-variant` at 20% opacity.

### Review Input Fields
*   **State:** Background `surface-container-highest` (#dde3e7). No border. On focus, transition background to `surface-container-lowest` (#ffffff) with a "Ghost Border" of `primary` at 10% opacity.
*   **Clarity:** Helper text should use `label-sm` in `on-surface-variant`.

### Rating Stars/Markers
*   **Visuals:** Instead of bright yellow, use `primary` (#5f5e5e) for filled states and `primary-container` (#e5e2e1) for empty states. This maintains the "Soft Gray" aesthetic while ensuring clarity.

### Progress Bars (Rating Distribution)
*   **Style:** Ultra-thin (2px height). Track color: `surface-container-highest`. Fill color: `primary`. This mimics a high-end watch face or technical instrument.

## 6. Do's and Don'ts

### Do:
*   **Do** use `spacing-16` (5.5rem) for top-level section padding to create a "luxury" feel.
*   **Do** use `surface-container-lowest` for the most important "Actionable" cards.
*   **Do** align text-heavy reviews to a narrow, readable column (max-width: 65ch) while letting images or pull-quotes break the grid.

### Don't:
*   **Don't** use `#000000` for text. Always use `on-surface` (#2d3336) to keep the contrast "soft-minimalist."
*   **Don't** use standard Tailwind `border-gray-200`. Use background color shifts instead.
*   **Don't** use "Pop" colors for success states. Even success should be subtle—use `tertiary` (#486272) for a sophisticated "confirmed" feel rather than a bright green.