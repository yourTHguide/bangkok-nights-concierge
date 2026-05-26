import { useEffect } from "react";
import type { Experience } from "@/data/experiences";

interface Props {
  experience: Experience | null;
  onClose: () => void;
}

const WHATSAPP_URL = "https://wa.me/66000000000?text=";

export function BottomSheet({ experience, onClose }: Props) {
  useEffect(() => {
    if (!experience) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [experience, onClose]);

  if (!experience) return null;

  const inquiryCopy =
    "Pricing on inquiry — submit your details and we'll send a custom proposal within 4 hours.";

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      <div className="relative w-full max-w-2xl bg-background border-t border-gold rounded-t-3xl animate-sheet-up max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 pt-3 pb-2 bg-background flex justify-center z-10">
          <button
            onClick={onClose}
            aria-label="Close"
            className="h-1.5 w-12 rounded-full bg-gold-gradient opacity-80"
          />
        </div>

        <div className="px-6 pb-8 sm:px-10 sm:pb-12">
          <p className="micro-caps text-gold">{experience.tier}</p>
          <h3 className="font-display text-white mt-2" style={{ fontSize: 26, lineHeight: 1.15 }}>
            {experience.name}
          </h3>
          <p className="text-xs text-muted-foreground mt-2">{experience.metrics}</p>

          <div className="h-px bg-gold/60 my-6" />

          <p className="text-sm text-muted-foreground leading-relaxed">
            {experience.description}
          </p>

          <p className="micro-caps text-gold/80 mt-8 mb-3">What's Included</p>
          <ul className="space-y-3">
            {experience.includes.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-foreground/90">
                <span className="text-gold mt-1">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            {experience.inquiryPricing ? (
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                {inquiryCopy}
              </p>
            ) : (
              <>
                <p className="micro-caps text-muted-foreground">Starting From</p>
                <p className="font-display text-gold text-3xl mt-1">{experience.price}</p>
              </>
            )}
          </div>

          <a
            href={`${WHATSAPP_URL}${encodeURIComponent(`Hi, I'd like to inquire about: ${experience.name}`)}`}
            target="_blank"
            rel="noreferrer"
            className="shine mt-6 block w-full text-center rounded-full bg-gold-gradient text-black font-semibold py-4 tracking-wide hover:scale-[1.01] transition-transform"
          >
            {experience.cta}
          </a>

          <p className="text-center text-[11px] text-muted-foreground mt-4">
            Exact pricing confirmed after inquiry — no surprises.
          </p>
        </div>
      </div>
    </div>
  );
}
