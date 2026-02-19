# Aman.com — Deep Research & GV&Co Implementation Plan
_Research Date: Feb 19, 2026_

---

## PART 1: RESEARCH FINDINGS — AMAN.COM DESIGN SYSTEM

### 1.1 Typography System
Aman.com uses a custom serif font family ("Aman" proprietary) + a thin geometric sans-serif.
The closest public equivalents:
- **Heading**: Cormorant Garamond (300/400 weight) — deeply classical, editorial
- **Body**: Jost, weight 200-300 only (ultra-thin) — NOT Inter (too tech-y)
- **Eyebrow labels**: Same body font, `font-weight: 300`, `0.625rem`, ALL CAPS, `letter-spacing: 0.25em`

Key sizing:
```
Hero H1:        clamp(3.5rem, 6vw, 6.5rem)  — font-weight: 300
Section H2:     clamp(2rem, 3.5vw, 4rem)    — font-weight: 300
Card H3:        1.5rem to 2rem              — font-weight: 300
Eyebrow:        0.625rem                    — weight: 400, tracking: 0.25em
Body:           0.9375rem (15px)            — weight: 300, line-height: 1.8
Small/caption:  0.75rem                     — weight: 300, tracking: 0.15em
```

### 1.2 Color Palette
```
Background (primary):    #F4EFE8  (warm parchment, slightly more warm than our current)
Background (alt):        #EAE4DC  (slightly darker parchment for alternating sections)
Background (dark):       #1A1916  (near-black charcoal for dark sections/footer)
Text (primary):          #1A1916  (charcoal, same as dark bg)
Text (secondary/muted):  #7A7068  (warm mid-taupe)
Text (subtle):           #A89E92  (light taupe for captions)
Border (light):          #DDD8D0  (barely-there warm gray)
Border (dark):           #2E2C29  (subtle dark border on dark sections)
Accent (none):           Aman uses NO gold. Zero. Pure restraint.
```
> **Critical Insight**: Aman doesn't use gold accents. Their luxury feels from RESTRAINT — removing color, removing decoration. The warmth comes entirely from the parchment + serif typography.

### 1.3 Spacing System
Aman is defined by EXTREME whitespace:
```
Section vertical padding:  160px–200px (desktop), 80px (mobile)
Between heading and body:  32–40px
Between body and CTA:      40–48px
Column gap (2-col grid):   2px–4px (deliberate near-zero gap for bleeding effect)
Page side padding:         max(40px, 5vw)  — NOT centered container on many sections
```
**Key insight**: Many sections are NOT inside a container — they go edge-to-edge with only side padding.

### 1.4 Homepage Section Structure (Top to Bottom)
```
1. STICKY HEADER         — transparent bg, charcoal text. "Menu" left | AMAN center | "Reserve" right
2. HERO                  — 100vh full-bleed image, NO text on image, NO overlay
3. HERO TEXT BELOW       — Parchment bg, eyebrow + large H1 + body + underline CTA
4. JOURNEYS SECTION      — Smaller eyebrow + editorial intro text + destination grid (2-up large, then 2-up smaller)
5. EDITORIAL SPLIT       — "City stays reimagined" — 2-col equal split, left image + right text
6. SEASONAL GRID         — 6 cards in 2x3 grid, all images, minimal text overlay (category + title), NO body text  
7. WORLD OF AMAN         — Full dark section (#1A1916), 3-col feature cards on dark bg
8. FOOTER                — Dark, 4-col grid: Brand | Links | More Info | Newsletter
```

### 1.5 Navigation (Header)
- **Position**: `position: sticky; top: 0` — stays sticky but transparent on hero
- **Height**: ~72px desktop, 60px mobile
- **Left**: "Menu" text with 2-line hamburger icon (1px thin lines, 18px wide, animates shorter line)
- **Center**: "AMAN" wordmark in Cormorant Garamond, `tracking-[0.5em]`, size ~1.6rem
- **Right**: "Reserve" (their version of CTA) + language selector
- **On scroll**: Background transitions from transparent to white/parchment `bg-white/95 backdrop-blur`

### 1.6 Menu Overlay (Full Screen)
- Slides in from LEFT (X axis), full viewport cover
- Background: `#F4EFE8` (same parchment as page)
- Nav links: 
  - `font-heading text-[3.5rem] md:text-[5rem]` 
  - `font-weight: 300`
  - Each link on its own line, huge scale
  - Hover: text shifts to italic style
  - Staggered entrance animation: 0.05s delay per item
- Bottom bar: Location + secondary links
- Close: Top right, "Close" text

### 1.7 Button / CTA Style
Aman uses **TEXT LINKS ONLY** for most CTAs:
```
Primary CTA:    "Discover more" — text + bottom border only, no box, no bg, no padding top/bottom
Secondary CTA:  "Book" / "Reserve" — small, uppercase, letter-spaced, minimal
NO:             Rounded buttons, gradient fills, shadow effects, gold hovers
```
Actual button style when they do use one (rare):
```css
border: 1px solid #1A1916;
padding: 12px 28px;
font-size: 0.75rem;
letter-spacing: 0.2em;
text-transform: uppercase;
background: transparent;
color: #1A1916;
border-radius: 0;  /* SQUARE — never rounded */
```

### 1.8 Image Treatment
- **Border radius**: 0 (zero, always). Aman never rounds images.
- **Aspect ratios**: `4/5` (portrait) for editorial cards, `16/9` for hero/wide, `1/1` for details
- **Hover**: `transform: scale(1.04)`, `transition-duration: 1.5s–2s`, `ease-out` (very slow, luxurious)
- **No shadow, no border, no border-radius** — pure image in a container

### 1.9 Animation & Transition Philosophy
```
Entrance animations:       fade-up: y: 30px → 0, opacity 0 → 1, duration: 1.0–1.2s
Easing:                    cubic-bezier(0.16, 1, 0.3, 1)  — "expo out" — starts fast, decelerates gently
Stagger delay:             0.1s–0.15s between sibling elements
Image hover scale:         1.04, duration: 1.5–2.0s, ease-out
Menu slide:                x: -100% → 0, duration: 0.85s, cubic-bezier(0.65, 0, 0.35, 1)
Header scroll:             opacity/bg transition, duration: 0.5s
NO:                        bounce effects, spring physics, rapid animations, color flash
```

### 1.10 Marketing Psychology (What Makes Customers Feel It)
1. **Silence = Luxury**: The extreme whitespace communicates that you don't NEED to shout. Confidence through restraint.
2. **Aspiration, not pressure**: CTAs say "Discover more" not "Buy Now". The visitor is invited, not pushed.
3. **Editorial feel**: The page feels like a beautifully printed magazine — every image chosen with care, every word deliberate.
4. **No price on homepage**: Creates mystery and exclusivity — "if you have to ask..."
5. **Seasonal storytelling**: "Alpine Awakening", "Chasing Sunlight" — the copy creates DESIRE for experiences, not just places.
6. **Trust through restraint**: No testimonials, no badges, no star ratings. The brand speaks for itself.
7. **World-class imagery**: Full-bleed, high-resolution, always nature or architecture — never people's faces (impersonal = universal).
8. **Typography as personality**: The serif typeface alone communicates age, authority, craftsmanship.

---

## PART 2: GAP ANALYSIS — GV&CO VS AMAN

| Element | Aman.com | GV&Co (Current) | Fix Needed |
|---------|----------|-----------------|------------|
| Button border-radius | 0 (square) | 0.5rem (rounded) | Remove radius |
| Button hover | No color change, subtle | Gold fill | Remove gold |
| Eyebrow color | Neutral taupe `#7A7068` | Amber/gold `#B45309` | Fix to taupe |
| Body font weight | 200-300 (ultra-thin) | 400-500 (normal) | Add ultra-thin |
| Section padding | 160-200px desktop | 96-192px | Increase further |
| Hero scroll header | Transparent → parchment | Always parchment sticky | Add scroll logic |
| "Journeys" section | Editorial intro + destination grid | Missing | Add new section |
| Seasonal grid | 6-card 2x3 grid | Missing | Add new section |
| Dark feature section | Full dark with feature cards | CTABlock (partial) | Expand/replace |
| Gold accents | None | Yes (multiple) | Remove all gold |
| Image hover duration | 1.5s–2s | 1.5s | Fine (keep) |
| Footer layout | 4-col grid | Centered stack | Add columns |
| Menu width | Full screen | Full screen ✅ | Already good |
| Menu font size | 4-5rem | 3-4rem | Slightly increase |
| Gap between grid cols | 2px | 2px ✅ | Already good |

---

## PART 3: IMPLEMENTATION PLAN (ORDERED BY IMPACT)

### PHASE 1 — GLOBAL FOUNDATIONS (globals.css)
1. Remove border-radius from all buttons
2. Remove gold hover from `btn-primary`  
3. Change eyebrow color from amber to taupe
4. Fix `btn-outline` to be square
5. Add font import for Jost 200 weight
6. Add `.btn-aman-link` style (text + border-b only, no box)

### PHASE 2 — HEADER (HeaderAman.tsx)
1. Add scroll detection → transparent header over hero, parchment below
2. Add backdrop-blur on scroll
3. Increase logo tracking to `tracking-[0.5em]`
4. Replace "English" language selector with "Contact" link (more useful for GV&Co)

### PHASE 3 — HERO (HeroAman.tsx)
1. Increase H1 size: `clamp(3.5rem, 5.5vw, 6rem)`
2. Reduce body font to weight 300
3. "Discover more" link — add right arrow with hover animation
4. Add scroll indicator (thin line animation at bottom of image)

### PHASE 4 — NEW SECTION: JourneysSection (replaces IndustriesStrip)
A bold editorial intro section:
- Big eyebrow label: "THE SPIRIT OF GV&CO"
- Full H2: "Businesses we've transformed across India."
- 4-card destination-style grid (Restaurant, Hotel, Clinic, Retail — each with a portrait image, category label, title, and underline CTA)

### PHASE 5 — SEASONAL GRID (new SeasonalGrid.tsx)
Aman's most iconic section: 6-card editorial grid
- 2-col header on left: eyebrow + big H2 + body text
- Right + below: 6 cards in 3x2 or 2x3 pattern
- Each card: image-only with title overlay at bottom on hover OR text below
- Cards: "Branding", "Websites", "Operations", "Marketing", "Training", "Analytics"

### PHASE 6 — DARK FEATURE SECTION (new DarkManifesto.tsx)
Replaces current CTABlock:
- Background `#1A1916`
- Full width, generous padding
- Large centered serif quote: "We believe every business, no matter how small, deserves to look extraordinary."
- Below: 3 stats columns (e.g., "40+ · Businesses Transformed", "₹0 · Hidden fees", "1 · Team dedicated to you")
- CTA at bottom: "Begin your transformation" — underline link, parchment text

### PHASE 7 — FOOTER UPGRADE (Footer.tsx)
Replace centered stack with Aman-style column layout:
- 4 cols: Wordmark/tagline | Core links | Services links | Contact info
- Very minimal, all text weight 300
- Copyright in small text at very bottom

### PHASE 8 — EDITORIAL SPLIT REFINEMENT (EditorialSplit.tsx)
Already good structure but:
- Increase vertical padding from 100px to 160px
- Offset right card more (mt-24 instead of mt-12)

### PHASE 9 — CAROUSEL → EDITORIAL WORKS (FeaturedCarousel.tsx)
Convert horizontal scroll carousel to a vertical editorial-style gallery:
- 2 large cards side by side (like Aman's property listing)
- Below: 2 smaller cards
- This matches Aman's "Journeys Await" section pattern exactly

---
