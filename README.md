# Bangkok Nights Concierge

Act as an elite UI/UX developer specialized in ultra-premium, dark-themed luxury lifestyle and hospitality web applications. Build a single-page, high-converting conversational web app landing page for "BEST NIGHTLIFE THAILAND" that merges exclusive public social productions with a bespoke VIP private concierge service. 

The entire aesthetic must feel cinematic, curated, electric, yet ultra-premium—deeply inspired by SOHO House, luxury superyacht charters, and high-end private members' clubs.

---

### I. GLOBAL DESIGN SYSTEM & BRAND TOKENS

- **Color Palette:**

  - Primary Background: Deep Black (#0D0D0D) and Dark Charcoal (#121212)

  - Accent / Primary Interactive Color: Champagne Gold (#C9A84C)

  - Soft Accents: Linear-gradient(135deg, #C9A84C, #E8C97A) for CTAs

  - Background Translucent Containers: rgba(255, 255, 255, 0.04) with a 1px rgba(255,255,255,0.1) subtle border.

  - Electric Vibes: Inject 2-3 deep, ultra-soft, low-opacity background blur orbs (deep violet/midnight blue tint, opacity 0.1) behind content text layers to give a pulsing nightlife texture without adding visual clutter.

- **Strict Brand Rule:** ABSOLUTELY NO BRIGHT PINK OR NEON MAGENTA ANYWHERE.

- **Typography Layout:**

  - Display & Headings: Elegant Serif font ("Cormorant Garamond" or equivalent look) for an upscale, authoritative tone.

  - Body, Micro-caps, Pills, UI Labels: Clean geometric Sans-Serif ("Montserrat" or equivalent look) for modern readability.

---

### II. APP LAYOUT AND SECTIONS (SINGLE-PAGE STORYTELLING FLOW)

#### SECTION 1: THE IMMERSIVE HERO HOOK (THE STORY & FEEL)

- **Layout:** Full-viewport fluid frame. Include a navigation header at the top with a sleek minimalist typography logo "BEST NIGHTLIFE THAILAND". 

- **Background Visual:** A full-bleed, moody, dark-tinted background placeholder container configured to accept a luxury slow-motion video loop (yacht parties at sunset, stylish crowds, premium mixology).

- **Copy Content:**

  - Main Title (Serif): "Bangkok Nightlife, Mastered."

  - Subtitle (Sans-Serif): "Bespoke private productions, elite venue access, and curated high-concept events for those who demand the exceptional."

  - Action Element: A single, minimalist champagne gold outline chevron or elegant button scrolling down to the next section.

#### SECTION 2: SIGNATURE SOCIAL PRODUCTIONS (THE CULTURE & AUTHORITY)

- **Layout:** An elegant, wide editorial asymmetric layout showcasing large-scale cultural events. Replace directory-style cards with horizontal-scroll or clean grid blocks featuring professional, dark, high-contrast atmospheric nightlife imagery.

- **Section Copy:**

  - Section Header (Serif): "Our Signature Productions"

  - Subhead (Sans-Serif): "We don’t just book tables—we design culture. Experience our legendary signature public productions where the city's elite collective meets."

- **Event Highlights Display:**

  - Feature 01: "Bangkok Club Crawl" — The premium, high-energy benchmark for curated nightlife exploration.

  - Feature 02: "Bangkok Mob" — Immersive, concept-driven pop-up nightlife experiences.

  - Feature 03: "Bangkok Masquerade" — Our flagship secret society annual gala.

- **CTA:** A sleek champagne gold text link/button: "Explore Upcoming Schedules →"

#### SECTION 3: CREDENTIALS & PILLARS (THE TRUST & EXPERTISE)

- **Layout:** A minimalist 3-column micro-grid framed with subtle 1px champagne gold dividers. 

- **Pillar 01:**

  - Header: "01 / Primed Network"

  - Body: "Pre-negotiated minimum spends and preferred table placement at Bangkok's most iconic institutions, including Sing Sing Theater and Levels."

- **Pillar 02:**

  - Header: "02 / Turnkey Production"

  - Body: "Complete logistics, sound systems, bespoke venue transformations, and top-tier talent bookings handled seamlessly under our oversight."

- **Pillar 03:**

  - Header: "03 / Elite Hosting"

  - Body: "Executed exclusively by seasoned nightlife directors and dedicated concierges. Complete friction-free access from your doorstep to sunrise."

#### SECTION 4: THE PRIVATE EXPERIENCE MASTER DECK (THE SERVICES)

- **Layout:** Change background subtly to pure #0D0D0D. Implement an interactive, tactile **Stacked Deck Component** showing 3 cards at a time (front, middle, back layout). Users swipe left/right to cycle through the options.

- **Design Elements for Each Card:**

  - Tier Label (Small caps, Gold)

  - Experience Name (Serif, Large, White)

  - Duration + Group Constraints (Small text, Muted grey)

  - Starting Price (Gold, Bold, Serif)

  - Description (2-3 lines max, Muted text)

  - Bulleted Includes List (Gold dashes, 4-5 items max)

  - Keyword Pills (Translucent pill-shaped badges, background: rgba(255,255,255,0.08))

  - CTA Button (Champagne Gold linear gradient pill, black text) -> Tapping triggers a beautiful bottom sheet popup overlay.

---

### III. EXACT DATA FOR THE STACKED CARD ROTATION (14 EXPERIENCE PACKAGES)

Please completely inject this verified data matrix into the card component logic in this exact priority sequence:

CARD 01 — Yacht Party

- Tier: LUXURY

- Name: Yacht Party — Pattaya

- Metrics: 4 Hours on Water · Min. 10 People

- Price: From 3,000 THB / person

- Description: Cruise along Pattaya's coastline on a private chartered yacht. Sunset views, open water, and a full premium party setup.

- Includes: Private yacht charter (4 hrs) | Crew & licensed captain | Onboard sound system | Soft drinks package | Event host & coordination

- Pills: "10–30 People" | "Pattaya Coast" | "Private Charter" | "Sunset View"

- CTA: Request This Experience →

CARD 02 — Pool Villa Party

- Tier: OUTDOOR PRODUCTION

- Name: Pool Villa Party

- Metrics: 5–8 Hours · Min. 10 People

- Price: From 4,800 THB / person

- Description: High-energy private pool party with full nightlife-style production. Your music, your pool, no curfew. Already have a villa? We come to you.

- Includes: Villa sourcing & logistics | Professional DJ (2-3 hrs) | Outdoor sound & lighting | Event hosts (2 hosts for 16+ guests) | Complete setup/breakdown

- Pills: "10–50 People" | "Private Pool" | "DJ Included" | "No Curfew"

- CTA: Request This Experience →

CARD 03 — Penthouse & Condo Party

- Tier: PRIVATE PRODUCTION

- Name: Penthouse & Condo Party

- Metrics: 4–6 Hours · Custom Schedule

- Price: From 25,000 THB flat

- Description: The club environment comes directly to you. We bring the DJ, custom lighting, sound arrays, and hosts straight into your private suite.

- Includes: Professional DJ (3 hours) | Club-tier sound & lighting | Dedicated logistics host | Pre-event supplier coordination | Full setup/breakdown

- Pills: "Bangkok City" | "Your Space" | "DJ Included" | "Skyline Views"

- CTA: Request This Experience →

CARD 04 — Proposal Night

- Tier: ULTRA-PREMIUM

- Name: Proposal Night

- Metrics: 3–4 Hours · Guest-Led Timing

- Price: From 20,000 THB flat

- Description: The most critical milestone of your relationship. We handle the venue choreography, champagne staging, and a discreet professional photographer.

- Includes: Premium rooftop or lounge VIP table | Senior Guide-level host | 1 Bottle of premium Champagne | Flower arrangement setup | Discreet professional photographer (2-3 hrs)

- Pills: "The Proposal" | "Photographer Included" | "Champagne" | "Once in a Lifetime"

- CTA: Request This Experience →

CARD 05 — Anniversary Night

- Tier: ROMANTIC

- Name: Anniversary Night

- Metrics: 3–4 Hours · Flexible from 7 PM

- Price: From 10,000 THB flat (2 pax)

- Description: An evening designed around the two of you. Premium table access, pre-briefed venue staff, and a host who stays completely invisible if preferred.

- Includes: Selected premium table coordination | Personal host (on-call or present) | Welcome signature cocktails | Bespoke floral table design | Full staff pre-briefing

- Pills: "Anniversary" | "Couples" | "Flowers Included" | "Invisible Hosting"

- CTA: Request This Experience →

CARD 06 — Bachelor Night Out

- Tier: STAG NIGHT

- Name: Bachelor Night Out

- Metrics: 4–5 Hours · 9:30 PM – 2:00 AM

- Price: From 2,000 THB / person

- Description: The groom's last night of freedom, curated properly. Three premium venues, an elite private transport lounge, and a dedicated host.

- Includes: 3 high-energy venue itinerary | Dedicated host for full night | VIP entry lines | Premium transport lounge with custom sound | Welcome shots round + groom prop kit

- Pills: "Stag Night" | "6–20 People" | "3 Venues" | "VIP Transport"

- CTA: Request This Experience →

CARD 07 — Bachelorette Night

- Tier: HEN PARTY

- Name: Bachelorette Night

- Metrics: 4–5 Hours · 9:30 PM – 2:00 AM

- Price: From 2,000 THB / person

- Description: A sophisticated night designed for her and her closest network. Curated premium venues, custom surprises, and full security.

- Includes: Female-friendly curated itinerary | Dedicated host for full night | VIP priority entry | Premium transport lounge with custom sound | Welcome shots + luxury hen prop kit

- Pills: "Bachelorette" | "6–20 People" | "Prop Kit" | "Girls Night"

- CTA: Request This Experience →

CARD 08 — Birthday Night Out

- Tier: CELEBRATION

- Name: Birthday Night Out

- Metrics: 4–5 Hours · 9:30 PM – 2:00 AM

- Price: From 2,000 THB / person

- Description: Your birthday, executed professionally. We manage the venue line-up, the surprise sequence, and the logistics so you just show up.

- Includes: Custom 2-3 venue itinerary | Dedicated host for full night | VIP priority entry | Premium transport lounge with custom sound | Welcome shots + birthday surprise coordination

- Pills: "Birthday" | "6–20 People" | "Host Included" | "Surprise Ready"

- CTA: Request This Experience →

CARD 09 — Private Club Crawl

- Tier: PRIVATE GROUP

- Name: Private Club Crawl

- Metrics: 4–5 Hours · 9:30 PM – 2:00 AM

- Price: From 1,500 THB / person

- Description: The complete, unapologetic Bangkok club scene—entirely private. Custom route, VIP sprinter transport, and an elite host managing the energy.

- Includes: Custom 3-4 venue itinerary | Dedicated private host | Premium transport lounge with custom sound | VIP entry line bypass | Welcome shots round for the group

- Pills: "Private Group" | "8–20 People" | "3–4 Venues" | "Bypass Lines"

- CTA: Request This Experience →

CARD 10 — VIP Table & Bottle Service

- Tier: VIP CONCIERGE

- Name: VIP Table & Bottle Service

- Metrics: 4–6 Hours · Venue-Dependent

- Price: 2,000 THB Coordination Fee

- Description: Secure the most coveted table real estate across Bangkok's premier venues. Skip the line entirely. Minimum spend settled directly at the venue.

- Includes: VIP table allocation at partner venue | Negotiated arrival perks | Instant guest list priority access | Personal WhatsApp concierge support | Live on-call coordinator

- Pills: "2–15 People" | "VIP Table" | "Line Bypass" | "Venue Min. 20k+"

- CTA: Reserve Your Table →

CARD 11 — Corporate Team Night Out

- Tier: CORPORATE

- Name: Corporate Team Night

- Metrics: 4–5 Hours · 9:00 PM – 1:00 AM

- Price: From 1,800 THB / person

- Description: Bangkok nightlife structured safely and smoothly for professional teams. Custom itineraries, premium private transport, and seamless corporate billing.

- Includes: Tailored 2-3 venue professional route | Dedicated corporate event host | VIP line bypass access | Private executive transport | Welcome premium beverage round

- Pills: "10–50 People" | "Corporate" | "Team Building" | "Tax Receipt Available"

- CTA: Request This Experience →

CARD 12 — Rooftop Private Buyout

- Tier: PREMIUM EVENT

- Name: Rooftop Private Buyout

- Metrics: Custom Duration · Your Schedule

- Price: Coordination from 10,000 THB

- Description: Command Bangkok’s iconic skylines. Complete private rooftop takeovers managed from venue negotiation to operational execution.

- Includes: Premium venue sourcing & negotiation | Full structural event run-of-show | On-site supplier & technical management | Guest list & arrival registration control

- Pills: "20–100 People" | "Full Buyout" | "Skyline Views" | "Custom Proposal"

- CTA: Request a Proposal →

CARD 13 — Brand & Influencer Event

- Tier: BRAND & PRODUCTION

- Name: Brand & Influencer Event

- Metrics: Custom Duration · Concept-Led

- Price: Custom Quote Portfolio

- Description: Turnkey venue capture, high-fidelity media production, and immediate activation of the local Flow Lab community and creator network.

- Includes: Premier partner venue database access | Built-in target audience activation | Content-optimized lighting & production | Host network management | Social cross-promotion

- Pills: "Brands & Agencies" | "Content First" | "Built-In Audience"

- CTA: Request a Proposal →

CARD 14 — Large-Scale Immersive Productions

- Tier: NIGHTLIFE PRODUCTIONS

- Name: Immersive Themed Events

- Metrics: Full Scale · Concept-Dependent

- Price: Full production from 50,000 THB

- Description: Turnkey high-concept event design and execution. From secret society masquerades to immersive nightlife takeovers like Bangkok Mob.

- Includes: Complete concept creation & set design | Premium partner venue buyout control | Immersive talent booking (DJs, performers) | Sound, lighting, & specialized VFX production | Community guest list curation

- Pills: "Immersive Events" | "Concept Design" | "Bangkok Mob" | "Scale 100+"

- CTA: Request a Production Proposal →

---

### IV. INTERACTION LOGIC & BOTTOM SHEET COMPONENT

- When any experience card CTA is clicked, slide up a native-feeling, elegant **Bottom Sheet Modal** from the base of the viewport.

- **Bottom Sheet Design:** Background (#0D0D0D), a single crisp 1px champagne gold border along the top edge, and an elegant gold pill-shaped drag handle at the peak.

- **Bottom Sheet Content Architecture:**

  - Tier Label (Small caps, Gold)

  - Experience Name (Serif typography, White, 26px font-size)

  - 1px thin champagne gold horizontal divider line

  - Full detailed "Includes List" extracted cleanly from the active card data

  - Price Block positioned above the button: 

    - Text Label: "STARTING FROM" (Sans-Serif, Muted grey, 11px uppercase)

    - Dynamic Value: The gold serif price figure.

    - *Exception Rule:* For Card 10 (VIP Table), Card 12 (Brand Event), Card 13 (Influencer), and Card 14 (Immersive Production), swap the pricing block text entirely to: "Pricing on inquiry — submit your details and we'll send a custom proposal within 4 hours."

  - **The Main Conversion CTA:** Full width, pill-shaped button utilizing a beautiful `linear-gradient(135deg, #C9A84C, #E8C97A)` background, bold black typography, and a subtle sleek shine overlay animation. 

  - **Conversion Target:** Configure the button click to open an immediate, smooth redirect link directly to an elite conversational funnel (WhatsApp Business link placeholder or low-friction inquiry dialog).

  - Bottom Footer Disclaimer text directly beneath the button: "Exact pricing confirmed after inquiry — no surprises." (Sans-Serif, Muted, 11px centered text).

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/67acb63c-61aa-4b58-967e-ccfbe2c8630b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
