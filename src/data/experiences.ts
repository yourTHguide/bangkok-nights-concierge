export interface Experience {
  id: number;
  tier: string;
  name: string;
  metrics: string;
  price: string;
  inquiryPricing?: boolean;
  description: string;
  includes: string[];
  pills: string[];
  cta: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    tier: "LUXURY",
    name: "Yacht Party — Pattaya",
    metrics: "4 Hours on Water · Min. 10 People",
    price: "From 3,000 THB / person",
    description:
      "Cruise along Pattaya's coastline on a private chartered yacht. Sunset views, open water, and a full premium party setup.",
    includes: [
      "Private yacht charter (4 hrs)",
      "Crew & licensed captain",
      "Onboard sound system",
      "Soft drinks package",
      "Event host & coordination",
    ],
    pills: ["10–30 People", "Pattaya Coast", "Private Charter", "Sunset View"],
    cta: "Request This Experience →",
  },
  {
    id: 2,
    tier: "OUTDOOR PRODUCTION",
    name: "Pool Villa Party",
    metrics: "5–8 Hours · Min. 10 People",
    price: "From 4,800 THB / person",
    description:
      "High-energy private pool party with full nightlife-style production. Your music, your pool, no curfew. Already have a villa? We come to you.",
    includes: [
      "Villa sourcing & logistics",
      "Professional DJ (2–3 hrs)",
      "Outdoor sound & lighting",
      "Event hosts (2 hosts for 16+ guests)",
      "Complete setup/breakdown",
    ],
    pills: ["10–50 People", "Private Pool", "DJ Included", "No Curfew"],
    cta: "Request This Experience →",
  },
  {
    id: 3,
    tier: "PRIVATE PRODUCTION",
    name: "Penthouse & Condo Party",
    metrics: "4–6 Hours · Custom Schedule",
    price: "From 25,000 THB flat",
    description:
      "The club environment comes directly to you. We bring the DJ, custom lighting, sound arrays, and hosts straight into your private suite.",
    includes: [
      "Professional DJ (3 hours)",
      "Club-tier sound & lighting",
      "Dedicated logistics host",
      "Pre-event supplier coordination",
      "Full setup/breakdown",
    ],
    pills: ["Bangkok City", "Your Space", "DJ Included", "Skyline Views"],
    cta: "Request This Experience →",
  },
  {
    id: 4,
    tier: "ULTRA-PREMIUM",
    name: "Proposal Night",
    metrics: "3–4 Hours · Guest-Led Timing",
    price: "From 20,000 THB flat",
    description:
      "The most critical milestone of your relationship. We handle the venue choreography, champagne staging, and a discreet professional photographer.",
    includes: [
      "Premium rooftop or lounge VIP table",
      "Senior Guide-level host",
      "1 Bottle of premium Champagne",
      "Flower arrangement setup",
      "Discreet professional photographer (2–3 hrs)",
    ],
    pills: ["The Proposal", "Photographer Included", "Champagne", "Once in a Lifetime"],
    cta: "Request This Experience →",
  },
  {
    id: 5,
    tier: "ROMANTIC",
    name: "Anniversary Night",
    metrics: "3–4 Hours · Flexible from 7 PM",
    price: "From 10,000 THB flat (2 pax)",
    description:
      "An evening designed around the two of you. Premium table access, pre-briefed venue staff, and a host who stays completely invisible if preferred.",
    includes: [
      "Selected premium table coordination",
      "Personal host (on-call or present)",
      "Welcome signature cocktails",
      "Bespoke floral table design",
      "Full staff pre-briefing",
    ],
    pills: ["Anniversary", "Couples", "Flowers Included", "Invisible Hosting"],
    cta: "Request This Experience →",
  },
  {
    id: 6,
    tier: "STAG NIGHT",
    name: "Bachelor Night Out",
    metrics: "4–5 Hours · 9:30 PM – 2:00 AM",
    price: "From 2,000 THB / person",
    description:
      "The groom's last night of freedom, curated properly. Three premium venues, an elite private transport lounge, and a dedicated host.",
    includes: [
      "3 high-energy venue itinerary",
      "Dedicated host for full night",
      "VIP entry lines",
      "Premium transport lounge with custom sound",
      "Welcome shots round + groom prop kit",
    ],
    pills: ["Stag Night", "6–20 People", "3 Venues", "VIP Transport"],
    cta: "Request This Experience →",
  },
  {
    id: 7,
    tier: "HEN PARTY",
    name: "Bachelorette Night",
    metrics: "4–5 Hours · 9:30 PM – 2:00 AM",
    price: "From 2,000 THB / person",
    description:
      "A sophisticated night designed for her and her closest network. Curated premium venues, custom surprises, and full security.",
    includes: [
      "Female-friendly curated itinerary",
      "Dedicated host for full night",
      "VIP priority entry",
      "Premium transport lounge with custom sound",
      "Welcome shots + luxury hen prop kit",
    ],
    pills: ["Bachelorette", "6–20 People", "Prop Kit", "Girls Night"],
    cta: "Request This Experience →",
  },
  {
    id: 8,
    tier: "CELEBRATION",
    name: "Birthday Night Out",
    metrics: "4–5 Hours · 9:30 PM – 2:00 AM",
    price: "From 2,000 THB / person",
    description:
      "Your birthday, executed professionally. We manage the venue line-up, the surprise sequence, and the logistics so you just show up.",
    includes: [
      "Custom 2–3 venue itinerary",
      "Dedicated host for full night",
      "VIP priority entry",
      "Premium transport lounge with custom sound",
      "Welcome shots + birthday surprise coordination",
    ],
    pills: ["Birthday", "6–20 People", "Host Included", "Surprise Ready"],
    cta: "Request This Experience →",
  },
  {
    id: 9,
    tier: "PRIVATE GROUP",
    name: "Private Club Crawl",
    metrics: "4–5 Hours · 9:30 PM – 2:00 AM",
    price: "From 1,500 THB / person",
    description:
      "The complete, unapologetic Bangkok club scene—entirely private. Custom route, VIP sprinter transport, and an elite host managing the energy.",
    includes: [
      "Custom 3–4 venue itinerary",
      "Dedicated private host",
      "Premium transport lounge with custom sound",
      "VIP entry line bypass",
      "Welcome shots round for the group",
    ],
    pills: ["Private Group", "8–20 People", "3–4 Venues", "Bypass Lines"],
    cta: "Request This Experience →",
  },
  {
    id: 10,
    tier: "VIP CONCIERGE",
    name: "VIP Table & Bottle Service",
    metrics: "4–6 Hours · Venue-Dependent",
    price: "2,000 THB Coordination Fee",
    inquiryPricing: true,
    description:
      "Secure the most coveted table real estate across Bangkok's premier venues. Skip the line entirely. Minimum spend settled directly at the venue.",
    includes: [
      "VIP table allocation at partner venue",
      "Negotiated arrival perks",
      "Instant guest list priority access",
      "Personal WhatsApp concierge support",
      "Live on-call coordinator",
    ],
    pills: ["2–15 People", "VIP Table", "Line Bypass", "Venue Min. 20k+"],
    cta: "Reserve Your Table →",
  },
  {
    id: 11,
    tier: "CORPORATE",
    name: "Corporate Team Night",
    metrics: "4–5 Hours · 9:00 PM – 1:00 AM",
    price: "From 1,800 THB / person",
    description:
      "Bangkok nightlife structured safely and smoothly for professional teams. Custom itineraries, premium private transport, and seamless corporate billing.",
    includes: [
      "Tailored 2–3 venue professional route",
      "Dedicated corporate event host",
      "VIP line bypass access",
      "Private executive transport",
      "Welcome premium beverage round",
    ],
    pills: ["10–50 People", "Corporate", "Team Building", "Tax Receipt Available"],
    cta: "Request This Experience →",
  },
  {
    id: 12,
    tier: "PREMIUM EVENT",
    name: "Rooftop Private Buyout",
    metrics: "Custom Duration · Your Schedule",
    price: "Coordination from 10,000 THB",
    inquiryPricing: true,
    description:
      "Command Bangkok's iconic skylines. Complete private rooftop takeovers managed from venue negotiation to operational execution.",
    includes: [
      "Premium venue sourcing & negotiation",
      "Full structural event run-of-show",
      "On-site supplier & technical management",
      "Guest list & arrival registration control",
    ],
    pills: ["20–100 People", "Full Buyout", "Skyline Views", "Custom Proposal"],
    cta: "Request a Proposal →",
  },
  {
    id: 13,
    tier: "BRAND & PRODUCTION",
    name: "Brand & Influencer Event",
    metrics: "Custom Duration · Concept-Led",
    price: "Custom Quote Portfolio",
    inquiryPricing: true,
    description:
      "Turnkey venue capture, high-fidelity media production, and immediate activation of the local Flow Lab community and creator network.",
    includes: [
      "Premier partner venue database access",
      "Built-in target audience activation",
      "Content-optimized lighting & production",
      "Host network management",
      "Social cross-promotion",
    ],
    pills: ["Brands & Agencies", "Content First", "Built-In Audience"],
    cta: "Request a Proposal →",
  },
  {
    id: 14,
    tier: "NIGHTLIFE PRODUCTIONS",
    name: "Immersive Themed Events",
    metrics: "Full Scale · Concept-Dependent",
    price: "Full production from 50,000 THB",
    inquiryPricing: true,
    description:
      "Turnkey high-concept event design and execution. From secret society masquerades to immersive nightlife takeovers like Bangkok Mob.",
    includes: [
      "Complete concept creation & set design",
      "Premium partner venue buyout control",
      "Immersive talent booking (DJs, performers)",
      "Sound, lighting & specialized VFX production",
      "Community guest list curation",
    ],
    pills: ["Immersive Events", "Concept Design", "Bangkok Mob", "Scale 100+"],
    cta: "Request a Production Proposal →",
  },
];
