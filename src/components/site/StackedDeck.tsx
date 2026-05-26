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
      <div className="relative mx-auto h-[640px] sm:h-[600px] max-w-xl">
        {visible
          .slice()
          .reverse()
          .map(({ exp, offset }) => {
            const isFront = offset === 0;
            const scale = 1 - offset * 0.05;
            const translateY = offset * 18;
            const opacity = 1 - offset * 0.25;
            return (
              <article
                key={exp.id}
                className="absolute inset-0 glass rounded-3xl p-7 sm:p-9 flex flex-col transition-all duration-500"
                style={{
                  transform: `translateY(${translateY}px) scale(${scale})`,
                  opacity,
                  zIndex: 10 - offset,
                  pointerEvents: isFront ? "auto" : "none",
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="micro-caps text-gold">{exp.tier}</span>
                  <span className="text-xs text-muted-foreground tabular-nums">
                    {String(exp.id).padStart(2, "0")} / {String(total).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="font-display text-white text-3xl sm:text-4xl mt-5 leading-tight">
                  {exp.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-2">{exp.metrics}</p>

                <p className="font-display text-gold text-2xl mt-4">{exp.price}</p>

                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="mt-5 space-y-2 flex-1">
                  {exp.includes.slice(0, 5).map((item) => (
                    <li key={item} className="flex gap-2 text-[13px] text-foreground/85">
                      <span className="text-gold">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-5">
                  {exp.pills.map((p) => (
                    <span
                      key={p}
                      className="px-3 py-1 rounded-full text-[11px] text-foreground/80"
                      style={{ background: "rgba(255,255,255,0.08)" }}
                    >
                      {p}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onOpen(exp)}
                  className="shine mt-6 w-full rounded-full bg-gold-gradient text-black font-semibold py-3.5 tracking-wide hover:scale-[1.01] transition-transform"
                >
                  {exp.cta}
                </button>
              </article>
            );
          })}
      </div>

      <div className="flex items-center justify-center gap-4 mt-10">
        <button
          onClick={() => go(-1)}
          aria-label="Previous"
          className="h-12 w-12 rounded-full border border-gold/40 text-gold hover:bg-gold/10 transition"
        >
          ←
        </button>
        <span className="micro-caps text-muted-foreground tabular-nums">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <button
          onClick={() => go(1)}
          aria-label="Next"
          className="h-12 w-12 rounded-full border border-gold/40 text-gold hover:bg-gold/10 transition"
        >
          →
        </button>
      </div>
    </div>
  );
}
