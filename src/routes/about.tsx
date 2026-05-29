import { createFileRoute, Link } from "@tanstack/react-router";
import passionImg from "@/assets/about-passion.jpg";
import heartImg from "@/assets/about-heart.jpg";
import rewardImg from "@/assets/about-reward.jpg";



const WHATSAPP_LINK = "https://wa.me/66812345678?text=Hi%20Best%20Nightlife%20Thailand%2C%20I%27d%20like%20to%20connect%20with%20a%20director.";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us — Best Nightlife Thailand" },
      {
        name: "description",
        content:
          "The story, passion, and process behind Bangkok's most exclusive nightlife concierge.",
      },
      { property: "og:title", content: "About Us — Best Nightlife Thailand" },
      {
        property: "og:description",
        content:
          "The story, passion, and process behind Bangkok's most exclusive nightlife concierge.",
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

function AboutPage() {
  return (
    <main className="bg-background text-foreground relative overflow-x-hidden">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-xl bg-background/50 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Link
            to="/"
            className="font-sans font-semibold tracking-[0.22em] text-[12px] sm:text-[13px] text-white"
          >
            BEST NIGHTLIFE <span className="text-neon-gradient">THAILAND</span>
          </Link>
          <nav className="hidden md:flex items-center gap-9 micro-caps text-white/60">
            <Link to="/about" className="text-white transition">About</Link>
            <a href="/#productions" className="hover:text-white transition">Events</a>
            <a href="/#pillars" className="hover:text-white transition">Method</a>
            <a href="/#experiences" className="hover:text-white transition">Experiences</a>
          </nav>
          <a href="/#experiences" className="btn-neon hidden sm:inline-flex !py-2.5 !px-5 !text-[11px]">
            <span>Inquire</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div
          className="orb"
          style={{ width: 520, height: 520, background: "#2F002F", top: "-8%", left: "-10%" }}
        />
        <div
          className="orb"
          style={{ width: 460, height: 460, background: "#41002A", bottom: "-12%", right: "-8%", animationDelay: "3s" }}
        />
        <div
          className="orb"
          style={{ width: 320, height: 320, background: "#EA003A", top: "35%", left: "55%", opacity: 0.15, animationDelay: "1.5s" }}
        />

        <div className="relative z-10 text-center max-w-4xl px-6 animate-fade-up">
          <p className="micro-caps text-white/70 mb-7">OUR MANIFESTO &amp; PASSION</p>
          <h1 className="font-display text-[44px] sm:text-6xl lg:text-7xl text-white leading-[0.98] tracking-tight">
            The Heart behind
            <br />
            the <span className="italic text-neon-gradient">Night.</span>
          </h1>
        </div>
      </section>

      {/* METRICS */}
      <section className="relative py-20 sm:py-28 px-6 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8 text-center">
            {[
              { num: "14+", label: "Bespoke Nightlife Experiences", accent: false },
              { num: "100%", label: "Turnkey Production & Logistics", accent: true },
              { num: "04 Hours", label: "Guaranteed Personal Response Time", accent: false },
            ].map((m) => (
              <div key={m.label} className="flex flex-col items-center">
                <p
                  className={`font-display text-[48px] sm:text-[56px] leading-none tracking-tight ${
                    m.accent ? "text-crimson" : "text-white"
                  }`}
                  style={m.accent ? { textShadow: "0 0 28px rgba(234,0,58,0.45)" } : {}}
                >
                  {m.num}
                </p>
                <p className="mt-4 micro-caps text-white/50 max-w-[200px]">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORIES GRID */}
      <section className="relative py-28 sm:py-36 px-6">
        <div
          className="orb"
          style={{ width: 440, height: 440, background: "#2F002F", top: "5%", right: "-12%" }}
        />
        <div
          className="orb"
          style={{ width: 380, height: 380, background: "#41002A", bottom: "10%", left: "-10%", animationDelay: "3s" }}
        />

        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-16">
            <p className="micro-caps text-white/55 mb-4">OUR STORIES &amp; BELIEFS</p>
            <h2 className="font-display text-[36px] sm:text-5xl text-white leading-[1.02] tracking-tight">
              What <span className="italic text-neon-gradient">Drives</span> Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                id: "01",
                tag: "THE PASSION",
                sub: "Thailand has everything you want.",
                body: "Bangkok and Pattaya hold the most electric nightlife on the planet. To us, a perfect night isn't just a table booking—it's an art form. We translate the beautiful chaos of the city into a premium, flawless masterpiece designed around your milestone celebration.",
              },
              {
                id: "02",
                tag: "THE HEART",
                sub: "We bring the real Thai hospitality.",
                body: "True luxury is about how you are made to feel. While our look is modern-minimal and sharp, our service is warm, proactive, and deeply personal. We carry the heart of Thai hospitality in everything we do, ensuring a flawless perimeter from doorstep to sunrise.",
              },
              {
                id: "03",
                tag: "THE REWARD",
                sub: "Your satisfaction is our only accolade.",
                body: "Our team lives the culture. We don't just offer an aesthetic; we live for the late-night glam, the music, and the people. Seeing the absolute fulfillment on our clients' faces when a surprise moment lands perfectly is the ultimate honor.",
              },
            ].map((b) => (
              <article
                key={b.id}
                className="rounded-[24px] border border-white/8 p-8 sm:p-10"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                <p className="micro-caps text-neon-gradient mb-6">
                  {b.id} / {b.tag}
                </p>
                <h3 className="font-display text-[22px] sm:text-[26px] text-white leading-snug italic mb-5">
                  <span className="text-neon-gradient">{b.sub}</span>
                </h3>
                <p className="text-white/65 text-[15px] leading-relaxed">{b.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="relative py-28 sm:py-36 px-6 border-y border-white/5">
        <div
          className="orb"
          style={{ width: 480, height: 480, background: "#2F002F", top: "0%", left: "-15%" }}
        />
        <div
          className="orb"
          style={{ width: 400, height: 400, background: "#41002A", bottom: "5%", right: "-10%", animationDelay: "2s" }}
        />

        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="micro-caps text-white/55 mb-4">THE CLIENT EXPERIENCE FLOW</p>
            <h2 className="font-display text-[36px] sm:text-5xl text-white leading-[1.02] tracking-tight">
              How It <span className="italic text-neon-gradient">Works</span>
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] sm:left-[27px] top-0 bottom-0 w-px bg-white/10" />

            <div className="space-y-14 sm:space-y-16">
              {[
                {
                  step: "01",
                  title: "The Brief",
                  body: "Tell us your exact vibe, location targets, and group scale.",
                },
                {
                  step: "02",
                  title: "The Curation",
                  body: "Our dedicated directors pre-arrange elite table configurations, lighting structures, and audio arrays.",
                },
                {
                  step: "03",
                  title: "The Execution",
                  body: "You show up. Your host manages the mechanics. Your night is completely mastered.",
                },
              ].map((s) => (
                <div key={s.step} className="relative flex gap-6 sm:gap-8 pl-2">
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-neon-gradient flex items-center justify-center">
                      <span className="font-display text-white text-sm sm:text-base font-semibold">
                        {s.step}
                      </span>
                    </div>
                  </div>
                  <div className="pt-1 sm:pt-2">
                    <h3 className="font-display text-white text-2xl sm:text-[28px] leading-tight mb-2">
                      {s.title}
                    </h3>
                    <p className="text-white/65 text-[15px] sm:text-base leading-relaxed max-w-lg">
                      {s.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 sm:py-36 px-6 text-center">
        <div
          className="orb"
          style={{ width: 500, height: 500, background: "#2F002F", top: "-10%", left: "50%", transform: "translateX(-50%)", animationDelay: "1s" }}
        />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-display text-[32px] sm:text-5xl text-white leading-[1.02] tracking-tight mb-6">
            Ready to craft your <span className="italic text-neon-gradient">perfect night?</span>
          </h2>
          <p className="text-white/65 text-lg max-w-lg mx-auto mb-10">
            Speak directly with a director and let us begin curating your bespoke Bangkok experience.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon-filled inline-flex"
          >
            <span>CONNECT WITH A DIRECTOR →</span>
          </a>
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
    </main>
  );
}
