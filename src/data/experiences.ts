import yacht from "@/assets/card-yacht.jpg";
import pool from "@/assets/card-pool.jpg";
import penthouse from "@/assets/card-penthouse.jpg";
import proposal from "@/assets/card-proposal.jpg";
import bachelorette from "@/assets/card-bachelorette.jpg";
import birthday from "@/assets/card-birthday.jpg";
import viptable from "@/assets/card-viptable.jpg";
import rooftop from "@/assets/card-rooftop.jpg";
import bachelor from "@/assets/card-bachelor.jpg";
import corporate from "@/assets/card-corporate.jpg";
import crawl from "@/assets/prod-crawl.jpg";
import mob from "@/assets/prod-mob.jpg";
import masquerade from "@/assets/prod-masquerade.jpg";

export interface Experience {
  id: number;
  category: string;
  name: string;
  price: string;
  pills: string[];
  details: string;
  image: string;
  cta: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    category: "Luxury",
    name: "Yacht Party — Pattaya",
    price: "From 3,000 THB / person",
    pills: ["Private Cruise", "Sunset View", "10-30 Pax"],
    details:
      "4-hour private charter, captain and crew, sound system, drinks package, and a dedicated party host.",
    image: yacht,
    cta: "Inquire on WhatsApp",
  },
  {
    id: 2,
    category: "Outdoor",
    name: "Pool Villa Party",
    price: "From 4,800 THB / person",
    pills: ["Private Villa", "DJ Included", "No Curfew"],
    details:
      "Luxury villa matching your group size, professional DJ, sound & light setup, and full event hosting.",
    image: pool,
    cta: "Inquire on WhatsApp",
  },
  {
    id: 3,
    category: "Private",
    name: "Penthouse Suite Party",
    price: "From 25,000 THB flat",
    pills: ["Your Space", "Club Lights", "Private DJ"],
    details:
      "We bring the club to your suite. Includes a pro DJ for 3 hours, premium sound, party lighting, and clean setup/breakdown.",
    image: penthouse,
    cta: "Inquire on WhatsApp",
  },
  {
    id: 4,
    category: "Ultra-Premium",
    name: "Proposal Night",
    price: "From 20,000 THB flat",
    pills: ["Rooftop VIP", "Champagne", "Photographer"],
    details:
      "Premium rooftop table setup, senior host coordinator, 1 bottle of champagne, flowers, and a hidden photographer.",
    image: proposal,
    cta: "Plan Your Proposal",
  },
  {
    id: 5,
    category: "Romantic",
    name: "Anniversary Night",
    price: "From 10,000 THB flat",
    pills: ["Rooftop Dinner", "Cocktails", "Couples"],
    details:
      "Ultra-premium table booking, signature cocktails, fresh flowers at the table, and fully customized planning.",
    image: proposal,
    cta: "Inquire on WhatsApp",
  },
  {
    id: 6,
    category: "Stag",
    name: "Bachelor Night Out",
    price: "From 2,000 THB / person",
    pills: ["Stag Party", "VIP Transport", "3 Venues"],
    details:
      "High-energy 3-club tour, premium party sprinter with sound system, free welcome shots, and a private group host.",
    image: bachelor,
    cta: "Book the Stag",
  },
  {
    id: 7,
    category: "Hen",
    name: "Bachelorette Night",
    price: "From 2,000 THB / person",
    pills: ["Girls Night", "VIP Entry", "Party Sprinter"],
    details:
      "Tailored premium venue route, private luxury sprinter transport, free welcome shots, hen prop kit, and full hosting.",
    image: bachelorette,
    cta: "Book the Hen Night",
  },
  {
    id: 8,
    category: "Celebration",
    name: "Birthday Night Out",
    price: "From 2,000 THB / person",
    pills: ["Celebration", "VIP Access", "Birthday Surprise"],
    details:
      "Curated 2–3 venue tour, express line bypass, private sprinter lounge, welcome shots, and full birthday surprise coordination.",
    image: birthday,
    cta: "Plan the Birthday",
  },
  {
    id: 9,
    category: "Private Group",
    name: "Private Club Crawl",
    price: "From 1,500 THB / person",
    pills: ["Private Group", "Line Bypass", "Custom Clubs"],
    details:
      "The ultimate custom Bangkok club tour. Private transport, express skip-the-line club access, welcome shots, and your own host.",
    image: crawl,
    cta: "Inquire on WhatsApp",
  },
  {
    id: 10,
    category: "VIP Concierge",
    name: "VIP Table Bookings",
    price: "2,000 THB service fee",
    pills: ["Top Clubs", "Skip Lines", "Best Tables"],
    details:
      "Access to the best tables at Sing Sing, Levels, and premier venues. Instant entry list skip-the-line validation. Venue minimum spends apply.",
    image: viptable,
    cta: "Reserve a Table",
  },
  {
    id: 11,
    category: "Corporate",
    name: "Corporate Team Night",
    price: "From 1,800 THB / person",
    pills: ["Companies", "Team Building", "Full Transport"],
    details:
      "Smooth, safe, and exciting venue itineraries designed for corporate groups. Includes transport, drinks, and full host management.",
    image: corporate,
    cta: "Plan Team Night",
  },
  {
    id: 12,
    category: "Premium Event",
    name: "Rooftop Private Buyout",
    price: "Custom quote",
    pills: ["Skyline Views", "Full Venue", "Custom Budget"],
    details:
      "Complete private buyout of Bangkok's top rooftop spaces. Full concept setup, guest management, and staffing included.",
    image: rooftop,
    cta: "Request a Proposal",
  },
  {
    id: 13,
    category: "Brand & Media",
    name: "Brand & Creator Events",
    price: "Custom quote",
    pills: ["Agencies", "Launch Party", "Media Ready"],
    details:
      "Access to partner clubs, lighting optimized for content creation, local network activation, and full on-ground event management.",
    image: mob,
    cta: "Request a Proposal",
  },
  {
    id: 14,
    category: "Productions",
    name: "Immersive Themed Productions",
    price: "Custom quote",
    pills: ["Bangkok Mob", "Masquerade", "100+ Guests"],
    details:
      "Turnkey high-concept large events. Complete set design, venue transformation, specialized visual effects, and custom talent casting.",
    image: masquerade,
    cta: "Request a Production",
  },
];
