import { useState } from "react";
import { experiences, type Experience } from "@/data/experiences";

interface Props {
  onOpen: (e: Experience) => void;
}

export function StackedDeck({ onOpen }: Props) {
  const [index, setIndex] = useState(0);
  const total = experiences.length;

  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + total) % total);

  const visible = [0, 1, 2].map((offset) => {
    const i = (index + offset) % total;
    return { exp: experiences[i], offset };
  });

  return (
    <div className="relative">
      <div className="relative mx-auto h-[560px] sm:h-[600px] max-w-md">
        {visible
          .slice()
          .reverse()
          .map(({ exp, offset }) => {
            const isFront = offset === 0;
            const scale = 1 - offset * 0.05;
            const translateY = offset * 22;
            const opacity = 1 - offset * 0.3;
            return (
              <article
                key={exp.id}
                onClick={() => isFront && onOpen(exp)}
                className="absolute inset-0 rounded-[28px] overflow-hidden border border-white/10 transition-all duration-500 cursor-pointer group"
                style={{
                  transform: `translateY(${translateY}px) scale(${scale})`,
                  opacity,
                  zIndex: 10 - offset,
                  pointerEvents: isFront ? "auto" : "none",
                  boxShadow: isFront
                    ? "0 30px 80px -20px rgba(234,0,58,0.25), 0 0 0 1px rgba(255,255,255,0.05)"
                    : "0 20px 40px -20px rgba(0,0,0,0.6)",
                }}
              >
                <img
                  src={exp.image}
                  alt={exp.name}
                  loading="lazy"
                  width={1280}
                  height={1600}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/30" />
                <div
                  className="absolute inset-0 mix-blend-overlay opacity-40 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 20%, rgba(234,0,58,0.45), transparent 55%), radial-gradient(circle at 80% 90%, rgba(130,0,101,0.45), transparent 55%)",
                  }}
                />

                <div className="relative h-full flex flex-col p-7 sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="pill-glass">{exp.category}</span>
                    <span className="text-[11px] text-white/55 tabular-nums tracking-widest">
                      {String(exp.id).padStart(2, "0")} / {String(total).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="flex-1" />

                  <h3 className="font-display text-white text-[34px] sm:text-[42px] leading-[1.05] tracking-tight max-w-[14ch]">
                    {exp.name}
                  </h3>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.pills.slice(0, 3).map((p) => (
                      <span key={p} className="pill-glass">
                        {p}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpen(exp);
                    }}
                    className="btn-neon mt-6 w-full"
                  >
                    <span>View Experience →</span>
                  </button>
                </div>
              </article>
            );
          })}
      </div>

      <div className="flex items-center justify-center gap-5 mt-12">
        <button
          onClick={() => go(-1)}
          aria-label="Previous"
          className="h-11 w-11 rounded-full border border-white/15 text-white/80 hover:text-white hover:border-white/40 transition flex items-center justify-center"
        >
          ←
        </button>
        <span className="micro-caps text-white/60 tabular-nums">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <button
          onClick={() => go(1)}
          aria-label="Next"
          className="h-11 w-11 rounded-full border border-white/15 text-white/80 hover:text-white hover:border-white/40 transition flex items-center justify-center"
        >
          →
        </button>
      </div>
    </div>
  );
}
