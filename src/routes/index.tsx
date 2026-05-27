import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero.jpg";
import crawlImg from "@/assets/prod-crawl.jpg";
import mobImg from "@/assets/prod-mob.jpg";
import masqueradeImg from "@/assets/prod-masquerade.jpg";
import { StackedDeck } from "@/components/site/StackedDeck";
import { BottomSheet } from "@/components/site/BottomSheet";
import type { Experience } from "@/data/experiences";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Best Nightlife Thailand — Bangkok Nightlife. Unlocked." },
      {
        name: "description",
        content:
          "Bespoke private parties, luxury yacht charters, and exclusive club access in Bangkok and Pattaya. Designed perfectly around you.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,500&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
});

function Index() {
  const [active, setActive] = useState<Experience | null>(null);

  return (
    <main className="bg-background text-foreground relative overflow-x-hidden">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-xl bg-background/50 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#top" className="font-sans font-semibold tracking-[0.22em] text-[12px] sm:text-[13px] text-white">
            BEST NIGHTLIFE <span className="text-neon-gradient">THAILAND</span>
          </a>
          <nav className="hidden md:flex items-center gap-9 micro-caps text-white/60">
            <Link to="/about" className="hover:text-white transition">About</Link>
            <a href="#productions" className="hover:text-white transition">Events</a>
            <a href="#pillars" className="hover:text-white transition">Method</a>
            <a href="#experiences" className="hover:text-white transition">Experiences</a>
          </nav>
          <a href="#experiences" className="btn-neon hidden sm:inline-flex !py-2.5 !px-5 !text-[11px]">
            <span>Inquire</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Bangkok luxury nightlife"
            width={1920}
            height={1280}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/65 to-background" />
        </div>

        <div className="orb" style={{ width: 620, height: 620, background: "#2F002F", top: "-12%", left: "-10%" }} />
        <div className="orb" style={{ width: 560, height: 560, background: "#41002A", bottom: "-15%", right: "-8%", animationDelay: "3s" }} />
        <div className="orb" style={{ width: 380, height: 380, background: "#EA003A", top: "40%", left: "55%", opacity: 0.18, animationDelay: "1.5s" }} />

        <div className="relative z-10 text-center max-w-4xl px-6 animate-fade-up">
          <p className="micro-caps text-white/70 mb-7">Bangkok · Pattaya · Private &amp; Members</p>
          <h1 className="font-display text-[52px] sm:text-7xl lg:text-[104px] text-white leading-[0.98] tracking-tight">
            Bangkok Nightlife.
            <br />
            <span className="italic text-neon-gradient">Unlocked.</span>
          </h1>
          <p className="mt-8 text-base sm:text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
            Bespoke private parties, luxury yacht charters, and exclusive club access.
            Designed perfectly around you.
          </p>

          <div className="mt-12 flex justify-center">
            <a href="#experiences" className="btn-neon">
              <span>Explore Client Experiences ↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* SIGNATURE EVENTS */}
      <section id="productions" className="relative py-28 sm:py-36 px-6">
        <div className="orb" style={{ width: 480, height: 480, background: "#2F002F", top: "10%", right: "-12%" }} />
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="micro-caps text-white/55 mb-4">02 — Our Productions</p>
            <h2 className="font-display text-[40px] sm:text-6xl text-white leading-[1.02] tracking-tight">
              Signature <span className="italic text-neon-gradient">Events</span>
            </h2>
            <p className="mt-6 text-white/65 text-lg max-w-xl">
              We don't just book tables. We create the party. Join our legendary
              public events in the city.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-5">
            <ProductionCard
              tag="Event 01"
              title="Bangkok Club Crawl"
              copy="The ultimate VIP venue tour."
              img={crawlImg}
              className="md:col-span-7 md:row-span-2 h-[540px]"
            />
            <ProductionCard
              tag="Event 02"
              title="Bangkok Mob"
              copy="Immersive pop-up parties."
              img={mobImg}
              className="md:col-span-5 h-[260px]"
            />
            <ProductionCard
              tag="Event 03"
              title="Bangkok Masquerade"
              copy="Our elite annual secret society gala."
              img={masqueradeImg}
              className="md:col-span-5 h-[260px]"
            />
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section id="pillars" className="relative py-28 sm:py-36 px-6 border-y border-white/5">
        <div className="orb" style={{ width: 420, height: 420, background: "#41002A", top: "20%", left: "-10%" }} />
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="micro-caps text-white/55 mb-4">03 — Method</p>
            <h2 className="font-display text-[40px] sm:text-5xl text-white tracking-tight">
              Built on <span className="italic text-neon-gradient">Three Pillars</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/10">
            {[
              {
                k: "01",
                h: "The Network",
                b: "The best VIP tables at Sing Sing, Levels, and top venues — pre-arranged.",
              },
              {
                k: "02",
                h: "The Production",
                b: "DJs, sound systems, lights, and luxury transport handled completely.",
              },
              {
                k: "03",
                h: "The Hosts",
                b: "Elite local concierges managing your entire night from start to finish.",
              },
            ].map((p) => (
              <div key={p.k} className="bg-background p-10 sm:p-12">
                <p className="micro-caps text-neon-gradient mb-5">{p.k} / Pillar</p>
                <h3 className="font-display text-white text-3xl">{p.h}</h3>
                <p className="mt-5 text-white/65 text-[15px] leading-relaxed">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE DECK */}
      <section id="experiences" className="relative py-28 sm:py-36 px-6">
        <div className="orb" style={{ width: 540, height: 540, background: "#2F002F", top: "10%", left: "-15%" }} />
        <div className="orb" style={{ width: 460, height: 460, background: "#41002A", bottom: "10%", right: "-10%", animationDelay: "3s" }} />

        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="micro-caps text-white/55 mb-4">04 — The Deck</p>
            <h2 className="font-display text-[40px] sm:text-6xl text-white leading-[1.02] tracking-tight">
              Client <span className="italic text-neon-gradient">Experiences</span>
            </h2>
            <p className="mt-6 text-white/65 text-lg">
              Fourteen bespoke nights. Tap any card to open a full briefing
              and chat with us directly on WhatsApp.
            </p>
          </div>

          <StackedDeck onOpen={setActive} />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="font-sans font-semibold tracking-[0.22em] text-[12px]">
            BEST NIGHTLIFE <span className="text-neon-gradient">THAILAND</span>
          </p>
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} — Bangkok · Pattaya · By inquiry only.
          </p>
        </div>
      </footer>

      <BottomSheet experience={active} onClose={() => setActive(null)} />
    </main>
  );
}

function ProductionCard({
  tag,
  title,
  copy,
  img,
  className = "",
}: {
  tag: string;
  title: string;
  copy: string;
  img: string;
  className?: string;
}) {
  return (
    <article className={`group relative overflow-hidden rounded-[24px] border border-white/10 ${className}`}>
      <img
        src={img}
        alt={title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.05]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />
      <div
        className="absolute inset-0 mix-blend-overlay opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 100%, rgba(234,0,58,0.4), transparent 60%)",
        }}
      />
      <div className="relative h-full flex flex-col justify-end p-7">
        <p className="micro-caps text-white/70 mb-3">{tag}</p>
        <h3 className="font-display text-white text-3xl sm:text-[34px] leading-tight">{title}</h3>
        <p className="text-sm text-white/70 mt-2 max-w-md">{copy}</p>
      </div>
    </article>
  );
}
