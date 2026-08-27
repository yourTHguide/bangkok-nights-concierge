/**
 * Single source of truth for the New in Bangkok product.
 * Date is derived dynamically (the next upcoming Wednesday) so the page
 * never shows a stale hard-coded event date.
 */

export const newInBangkok = {
  name: "New in Bangkok",
  weekday: "Wednesday",
  startTime: "8:30 PM",
  durationLabel: "Approx. 3 hours",
  venueCount: 2,
  meetingPoint: "Don't Open the Fridge, Soi 11",
  priceStandard: 490,
  priceEarlyBird: 390,
  currency: "฿",
  bookingUrl:
    "https://wa.me/66000000000?text=" +
    encodeURIComponent("Hi BEST — I'd like to book New in Bangkok this Wednesday."),
} as const;

export function nextWednesday(from: Date = new Date()): Date {
  const d = new Date(from);
  const diff = (3 - d.getDay() + 7) % 7 || 7;
  d.setDate(d.getDate() + diff);
  return d;
}

export function formatEventDate(d: Date): string {
  return d
    .toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" })
    .toUpperCase();
}
