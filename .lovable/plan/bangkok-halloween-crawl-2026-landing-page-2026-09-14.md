# Bangkok Halloween Crawl 2026 landing page

## Goal
Build a finished, mobile-first event sales page at `/bangkok-halloween-crawl-2026` that feels like a real BEST Nightlife Thailand production: cinematic, social, controlled, and easy to book without looking like a cheap pub crawl or a generic Halloween theme.

## What will be built
- A low-profile event header with in-page navigation and a single ticket action.
- An asymmetric hero with event photography, exact supplied copy, date, release pricing, and the primary presale CTA.
- Immediate photographic “Last Halloween” proof using a varied editorial mosaic rather than equal cards.
- Editorial problem/positioning section explaining why the hosted format exists.
- Four-stage night-flow timeline that is vertical on mobile and deliberately horizontal/staggered on desktop.
- Solo-guest reassurance section with one candid social photograph and the exact audience lines.
- Structured inclusions list with a supporting movement/nightlife image.
- Concise Year Three timeline focused only on longevity.
- Dominant presale conversion section with future release prices secondary, event details, and one cinematic image.
- Concise “Why book now” reinforcement section.
- Accessible dark FAQ accordion with the exact supplied answers.
- Cinematic final CTA and minimal BEST Nightlife Thailand footer.
- A compact mobile ticket bar that appears after the initial hero action leaves view.

## Visual direction
- Preserve the established BEST dark/crimson identity while refining this page toward deep wine-black, warm ivory, subdued warm-gray text, and restrained Electric Crimson accents.
- Use editorial serif display typography and the existing modern sans system.
- Keep imagery dominant and authentic: candid groups, conversations, costumes, movement, and Bangkok nightlife atmosphere.
- Avoid purple dominance, orange Halloween clichés, glass-heavy cards, oversized rounding, fake proof, and nightclub-flyer effects.
- Reuse the strongest supplied/project event photos where suitable; generate only the missing hero/supporting imagery needed for a coherent Halloween story.

## Responsive behavior
- Mobile: intentional 375–430px composition, portrait crops, vertical flow, full-width tap targets, price-first conversion, and no horizontal overflow.
- Tablet: layouts progressively open without compressed multi-column content.
- Desktop: 1180–1240px content rhythm with asymmetric hero, photo mosaic, split editorial sections, horizontal/staggered flow, two-column pricing, and readable FAQ width.

## Ticket behavior
- Define one obvious `BOKUN_CHECKOUT_URL` placeholder constant and route the hero, pricing, final, header, and mobile actions through it.
- Do not build an internal checkout or collect payment information.

## Technical approach
- Create the page as focused reusable React sections and small data-driven lists within the new route.
- Use semantic landmarks, one H1, accessible alt text, visible focus states, reduced-motion support, lazy loading below the fold, and high-priority loading for the hero image.
- Add page-specific title, description, Open Graph, and Twitter metadata.
- Keep all supplied event copy unchanged and avoid invented venue names, claims, testimonials, sponsors, inventory behavior, or additional inclusions.

## Verification
- Confirm the route builds without errors.
- Check the live page at mobile and desktop sizes, including the hero, image crops, timeline, pricing, FAQ interaction, anchor links, sticky CTA, and horizontal overflow.
- Confirm every ticket action uses the same placeholder checkout target and no unrelated pages are changed.
