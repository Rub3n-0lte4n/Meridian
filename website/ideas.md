# Meridian Website — Design Ideas

## Response 1 — Editorial Precision
<response>
<text>
**Design Movement:** Swiss International Typographic Style meets Bloomberg Terminal

**Core Principles:**
- Grid-first, asymmetric editorial layout with strict column discipline
- Typography as the primary visual element — whitespace is intentional, not leftover
- Bone/Obsidian as the workhorse pair, Deep Meridian as the cinematic punch
- Every element earns its place; decoration is zero

**Color Philosophy:** Light-mode editorial magazine with cinematic Deep Meridian hero moments. 80% Bone/Obsidian, 20% Deep Meridian. Antique Brass as the constant thread.

**Layout Paradigm:** Asymmetric editorial grid — headlines break the column, body text is constrained to 65ch, massive whitespace between sections. Left-anchored navigation, right-anchored hero text.

**Signature Elements:**
- Brass hairline rules as section dividers
- Oversized italic serif headlines that bleed past the column
- Monospace data callouts (numbers, prices, durations)

**Interaction Philosophy:** Scroll-triggered reveals, no hover gimmicks. Content enters from below with subtle opacity + translate.

**Animation:** Framer Motion staggered entrance animations. Elements fade in with 20px upward translate over 0.6s ease-out. No bouncing, no spring physics.

**Typography System:** Canela Ultralight Italic for display, Inter Medium for H2, JetBrains Mono for data.
</text>
<probability>0.08</probability>
</response>

## Response 2 — Cinematic Dark Luxury
<response>
<text>
**Design Movement:** Ramp x A. Lange & Söhne — dark backgrounds that feel expensive, not edgy

**Core Principles:**
- Deep Meridian as the primary surface — the entire site lives in the cinematic dark
- Bone text on navy, brass as the constant accent
- Generous whitespace, minimal elements, maximum authority
- Apple-style scroll-driven animations with device mockups as the hero

**Color Philosophy:** Full dark mode. Deep Meridian (#0B0F45) as the primary background. Bone (#F2EEE5) for all text. Antique Brass (#C9A961) for eyebrows, CTAs, and hairlines. Elevated surfaces at #141847.

**Layout Paradigm:** Full-width cinematic sections. Hero takes 100vh. Each section is a "room" — distinct, spacious, purposeful. No sidebar. Centered content with asymmetric text alignment.

**Signature Elements:**
- Full-bleed Deep Meridian hero with floating 3D phone mockups
- Brass hairline rules between sections
- Scroll-driven parallax on device mockups

**Interaction Philosophy:** Scroll-driven parallax. Devices float and rotate as user scrolls. CTAs have subtle brass shimmer on hover.

**Animation:** CSS scroll-linked animations. Phones float in on hero load with 3D perspective transform. Section reveals use IntersectionObserver with staggered opacity + translateY.

**Typography System:** Canela Ultralight Italic for display (bone on navy), Inter Medium for H2, JetBrains Mono for data.
</text>
<probability>0.09</probability>
</response>

## Response 3 — Premium Editorial Magazine (CHOSEN)
<response>
<text>
**Design Movement:** Stripe Press meets a16z — editorial authority with operator precision

**Core Principles:**
- Light-mode editorial base with Deep Meridian hero moments as cinematic interruptions
- The "Signature Move" repeated with variation: brass eyebrow → italic headline → body → hairline
- Device mockups as the visual centerpiece, floating in 3D perspective
- Apple-style scroll animations: elements enter with purpose, exit cleanly

**Color Philosophy:** Bone (#F2EEE5) as the primary surface. Obsidian (#0B0C0E) for all text. Deep Meridian (#0B0F45) for hero sections and pull-quote panels. Antique Brass (#C9A961) as the constant thread — eyebrows, CTAs, hairlines, numerals.

**Layout Paradigm:** Editorial asymmetric layout. Hero is full-bleed Deep Meridian with centered content and floating phones. Body sections alternate between bone and stone backgrounds. Pull-quote panels use Deep Meridian full-bleed. No centered grid monotony — text anchors left, visuals anchor right.

**Signature Elements:**
- Floating 3D phone mockup group as the hero visual
- Brass hairline rules as section separators
- Monospace data stats (prices, durations, module counts) in brass

**Interaction Philosophy:** Scroll-triggered reveals with IntersectionObserver. Devices animate on scroll with subtle 3D rotation. Navigation is minimal and fixed — wordmark left, links right.

**Animation:** Framer Motion for entrance animations. Hero phones float in with staggered scale + opacity. Sections reveal with translateY(30px) → translateY(0) + opacity 0→1 over 0.7s. Smooth, not flashy.

**Typography System:** Canela Deck (via @font-face or Google Fonts Cormorant Garamond as fallback) for display italic, Inter for all sans-serif, JetBrains Mono for data.
</text>
<probability>0.07</probability>
</response>

## CHOSEN: Response 3 — Premium Editorial Magazine
The design philosophy is **Premium Editorial Magazine** — Stripe Press meets a16z. Light-mode editorial base with Deep Meridian cinematic hero moments, the Meridian Signature Move repeated throughout, and Apple-style scroll animations with 3D device mockups as the visual centerpiece.
