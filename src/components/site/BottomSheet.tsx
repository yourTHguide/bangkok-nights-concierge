import { useEffect } from "react";
import type { Experience } from "@/data/experiences";

interface Props {
  experience: Experience | null;
  onClose: () => void;
}

const WHATSAPP_URL = "https://wa.me/66660399569?text=";

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

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-md animate-fade-in"
        onClick={onClose}
      />
      <div
        className="relative w-full max-w-2xl bg-background rounded-t-[32px] animate-sheet-up max-h-[92vh] overflow-y-auto"
        style={{
          borderTop: "1px solid transparent",
          backgroundImage:
            "linear-gradient(#0D0D0D,#0D0D0D), linear-gradient(90deg,#EA003A,#820065)",
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
          boxShadow: "0 -20px 80px rgba(234,0,58,0.25)",
        }}
      >
        <div className="sticky top-0 pt-4 pb-3 bg-background flex justify-center z-10">
          <button
            onClick={onClose}
            aria-label="Close"
            className="h-1.5 w-14 rounded-full bg-neon-gradient opacity-90"
          />
        </div>

        <div className="relative h-56 sm:h-64 mx-5 mt-2 mb-6 rounded-2xl overflow-hidden">
          <img
            src={experience.image}
            alt={experience.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="pill-glass">{experience.category}</span>
          </div>
        </div>

        <div className="px-6 pb-10 sm:px-10 sm:pb-12">
          <h3 className="font-display text-white text-[30px] sm:text-[38px] leading-[1.05]">
            {experience.name}
          </h3>

          <div className="mt-5 flex flex-wrap gap-2">
            {experience.pills.map((p) => (
              <span key={p} className="pill-glass">
                {p}
              </span>
            ))}
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent my-7" />

          <p className="micro-caps text-white/55 mb-3">What's Included</p>
          <p className="text-[15px] text-white/85 leading-relaxed">
            {experience.details}
          </p>

          <div className="mt-9 flex items-baseline justify-between gap-4">
            <div>
              <p className="micro-caps text-white/50">Starting From</p>
              <p className="font-display text-white text-3xl mt-1 text-neon-gradient">
                {experience.price}
              </p>
            </div>
          </div>

          <a
            href={`${WHATSAPP_URL}${encodeURIComponent(`Hi, I'd like to inquire about: ${experience.name}`)}`}
            target="_blank"
            rel="noreferrer"
            className="btn-neon btn-neon-filled mt-7 w-full"
          >
            <span>{experience.cta} →</span>
          </a>

          <p className="text-center text-[11px] text-white/45 mt-4 tracking-wide">
            Exact pricing confirmed after inquiry — no surprises.
          </p>
        </div>
      </div>
    </div>
  );
}
