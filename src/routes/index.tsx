import { createFileRoute } from "@tanstack/react-router";
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
      { title: "Best Nightlife Thailand — Bangkok Nightlife, Mastered." },
      {
        name: "description",
        content:
          "Bespoke private productions, elite venue access, and curated high-concept nightlife experiences in Bangkok and Pattaya.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
});

function Index() {
  const [active, setActive] = useState<Experience | null>(null);

  return (
    <main className="bg-background text-foreground relative overflow-x-hidden">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-background/40 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#top" className="font-display tracking-[0.2em] text-sm sm:text-base text-foreground">
            BEST NIGHTLIFE <span className="text-gold">THAILAND</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 micro-caps text-muted-foreground">
            <a href="#productions" className="hover:text-gold transition">Productions</a>
            <a href="#pillars" className="hover:text-gold transition">Pillars</a>
            <a href="#experiences" className="hover:text-gold transition">Experiences</a>
          </nav>
          <a
            href="#experiences"
            className="hidden sm:inline-flex items-center rounded-full border border-gold/50 text-gold micro-caps px-4 py-2 hover:bg-gold/10 transition"
          >
            Inquire
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
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/55 to-background" />
        </div>

        <div className="orb" style={{ width: 520, height: 520, background: "#1a1a4d", top: "-10%", left: "-8%" }} />
        <div className="orb" style={{ width: 460, height: 460, background: "#2a0a4d", bottom: "-12%", right: "-6%", animationDelay: "2s" }} />

        <div className="relative z-10 text-center max-w-4xl px-6 animate-fade-up">
          <p className="micro-caps text-gold mb-6">Est. Bangkok · Members & Guests</p>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-white leading-[1.02]">
            Bangkok Nightlife,
            <br />
            <span className="italic text-gold-gradient">Mastered.</span>
          </h1>
          <p className="mt-8 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Bespoke private productions, elite venue access, and curated high-concept
            events for those who demand the exceptional.
          </p>

          <a
            href="#productions"
            className="mt-14 inline-flex flex-col items-center text-gold group"
            aria-label="Scroll to productions"
          >
            <span className="micro-caps mb-3 opacity-70 group-hover:opacity-100 transition">Enter</span>
            <span className="block h-12 w-px bg-gradient-to-b from-gold to-transparent" />
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="mt-1 animate-bounce">
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

      {/* SIGNATURE PRODUCTIONS */}
      <section id="productions" className="relative py-28 sm:py-36 px-6">
        <div className="orb" style={{ width: 400, height: 400, background: "#1a1a4d", top: "20%", right: "-10%" }} />
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="micro-caps text-gold mb-4">02 — The Culture</p>
            <h2 className="font-display text-4xl sm:text-6xl text-white leading-tight">
              Our Signature <span className="italic text-gold-gradient">Productions</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-2xl">
              We don't just book tables — we design culture. Experience our legendary
              public productions where the city's elite collective meets.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-6">
            <ProductionCard
              tag="01 — Flagship"
              title="Bangkok Club Crawl"
              copy="The premium, high-energy benchmark for curated nightlife exploration."
              img={crawlImg}
              className="md:col-span-7 md:row-span-2 h-[520px]"
            />
            <ProductionCard
              tag="02 — Concept"
              title="Bangkok Mob"
              copy="Immersive, concept-driven pop-up nightlife experiences."
              img={mobImg}
              className="md:col-span-5 h-[250px]"
            />
            <ProductionCard
              tag="03 — Secret Society"
              title="Bangkok Masquerade"
              copy="Our flagship secret society annual gala."
              img={masqueradeImg}
              className="md:col-span-5 h-[250px]"
            />
          </div>

          <div className="mt-12 flex justify-end">
            <a href="#experiences" className="micro-caps text-gold border-b border-gold/50 pb-1 hover:border-gold transition">
              Explore Upcoming Schedules →
            </a>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section id="pillars" className="relative py-28 sm:py-36 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="micro-caps text-gold mb-4">03 — Credentials</p>
            <h2 className="font-display text-4xl sm:text-5xl text-white">
              Built on <span className="italic text-gold-gradient">Three Pillars</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-gold/20">
            {[
              {
                h: "01 / Primed Network",
                b: "Pre-negotiated minimum spends and preferred table placement at Bangkok's most iconic institutions, including Sing Sing Theater and Levels.",
              },
              {
                h: "02 / Turnkey Production",
                b: "Complete logistics, sound systems, bespoke venue transformations, and top-tier talent bookings handled seamlessly under our oversight.",
              },
              {
                h: "03 / Elite Hosting",
                b: "Executed exclusively by seasoned nightlife directors and dedicated concierges. Complete friction-free access from your doorstep to sunrise.",
              },
            ].map((p) => (
              <div key={p.h} className="bg-background p-10">
                <h3 className="font-display text-2xl text-gold">{p.h}</h3>
                <p className="mt-5 text-muted-foreground text-sm leading-relaxed">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE DECK */}
      <section id="experiences" className="relative py-28 sm:py-36 px-6" style={{ background: "#0D0D0D" }}>
        <div className="orb" style={{ width: 480, height: 480, background: "#2a0a4d", top: "10%", left: "-12%" }} />
        <div className="orb" style={{ width: 420, height: 420, background: "#0a1a4d", bottom: "10%", right: "-8%", animationDelay: "3s" }} />

        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="micro-caps text-gold mb-4">04 — The Master Deck</p>
            <h2 className="font-display text-4xl sm:text-6xl text-white leading-tight">
              The Private <span className="italic text-gold-gradient">Experience</span> Deck
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">
              Fourteen bespoke experiences. Swipe through the deck — tap any card to
              open a full briefing and conversational inquiry.
            </p>
          </div>

          <StackedDeck onOpen={setActive} />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="font-display tracking-[0.2em] text-sm">
            BEST NIGHTLIFE <span className="text-gold">THAILAND</span>
          </p>
          <p className="text-xs text-muted-foreground">
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
    <article
      className={`group relative overflow-hidden rounded-2xl border border-white/10 ${className}`}
    >
      <img
        src={img}
        alt={title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="relative h-full flex flex-col justify-end p-7">
        <p className="micro-caps text-gold mb-3">{tag}</p>
        <h3 className="font-display text-white text-2xl sm:text-3xl">{title}</h3>
        <p className="text-sm text-muted-foreground mt-2 max-w-md">{copy}</p>
      </div>
    </article>
  );
}
