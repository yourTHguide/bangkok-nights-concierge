import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  CalendarDays,
  Clock,
  MapPin,
  Users,
  Martini,
  Sparkles,
  Check,
  X,
  Timer,
  UserRound,
} from "lucide-react";

import speakeasy from "@/assets/nib-speakeasy.jpeg.asset.json";
import cheers from "@/assets/nib-cheers.png.asset.json";
import laughing from "@/assets/nib-laughing.png.asset.json";
import beerpong from "@/assets/nib-beerpong.jpg.asset.json";
import neonsign from "@/assets/nib-neonsign.jpg.asset.json";
import fridge from "@/assets/nib-fridge.webp.asset.json";
import apt101 from "@/assets/nib-apt101.jpg.asset.json";
import interior from "@/assets/nib-interior.jpeg.asset.json";
import soi11 from "@/assets/nib-soi11.png.asset.json";

import {
  newInBangkok as ev,
  nextWednesday,
  formatEventDate,
} from "@/data/new-in-bangkok";

export const Route = createFileRoute("/new-in-bangkok")({
  component: NewInBangkok,
  head: () => ({
    meta: [
      { title: "New in Bangkok? Start Here — BEST Nightlife Thailand" },
      {
        name: "description",
        content:
          "A hosted Wednesday social night in Bangkok. Two curated venues, a cocktail tasting at each and a host who makes the introductions. Come alone — most people do.",
      },
      { property: "og:title", content: "New in Bangkok? Start Here — BEST Nightlife Thailand" },
      {
        property: "og:description",
        content:
          "A hosted Wednesday social night across two properly chosen Bangkok venues. Early bird ฿390 · Standard ฿490.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,500&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
});

function NewInBangkok() {
  const [dateLabel, setDateLabel] = useState<string>("");
  const heroCtaRef = useRef<HTMLAnchorElement | null>(null);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    setDateLabel(formatEventDate(nextWednesday()));
  }, []);

  useEffect(() => {
    const el = heroCtaRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setShowSticky(!entry.isIntersecting && entry.boundingClientRect.top < 0),
      { threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <main className="relative overflow-x-hidden bg-background text-foreground">
      <SiteHeader />

      {/* 01 HERO */}
      <section className="relative flex min-h-[92svh] items-end overflow-hidden pt-24">
        <div className="absolute inset-0">
          <img
            src={cheers.url}
            alt="Guests laughing and toasting together at a Bangkok social night"
            width={1125}
            height={738}
            fetchPriority="high"
            className="h-full w-full object-cover object-[60%_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/30 to-transparent" />
        </div>
        <div className="orb" style={{ width: 460, height: 460, background: "#41002A", bottom: "-12%", left: "-14%" }} />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 sm:pb-20">
          <div className="max-w-2xl animate-fade-up">
            <p className="micro-caps mb-5 text-white/70">A BEST Nightlife Thailand Social Night</p>
            <h1 className="font-display text-[44px] leading-[1.0] tracking-tight text-white sm:text-6xl lg:text-[76px]">
              New in Bangkok?
              <br />
              <span className="italic text-neon-gradient">Start here.</span>
            </h1>
            <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-white/75 sm:text-lg">
              A hosted {ev.weekday} night for people who want to meet someone new — over good
              drinks, easy conversation and two properly chosen Bangkok venues.
            </p>

            <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-white/10 py-4">
              <Meta icon={<CalendarDays className="h-4 w-4" />} label={dateLabel || `${ev.weekday.toUpperCase()}S`} />
              <Meta icon={<Clock className="h-4 w-4" />} label={ev.startTime} />
              <Meta icon={<MapPin className="h-4 w-4" />} label={`${ev.venueCount} venues`} />
            </ul>

            <p className="mt-6 text-sm text-white/70">
              <span className="text-crimson font-semibold">Early bird {ev.currency}{ev.priceEarlyBird}</span>
              <span className="mx-2 text-white/30">·</span>
              Standard {ev.currency}{ev.priceStandard}
            </p>

            <a
              ref={heroCtaRef}
              href={ev.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon btn-neon-filled mt-6 w-full sm:w-auto"
            >
              <span>Book this {ev.weekday}</span>
            </a>
            <p className="mt-4 text-[13px] text-white/55">Coming alone? Most people do.</p>
          </div>
        </div>
      </section>

      {/* 02 AUDIENCE EXPANSION */}
      <Section>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <p className="micro-caps mb-4 text-crimson">Not new? Good.</p>
            <h2 className="font-display text-[34px] leading-[1.08] tracking-tight text-white sm:text-5xl">
              Bangkok can feel new again when the people are.
            </h2>
            <p className="mt-6 max-w-md text-[16px] leading-relaxed text-white/70">
              New here, travelling solo, long-time expat or Thai — it doesn't matter. Come if you're
              open to meeting someone outside your usual circle.
            </p>
            <p className="mt-5 font-display text-xl italic text-neon-gradient">
              Come alone. Come curious.
            </p>
          </div>
          <Figure
            src={laughing.url}
            alt="Two guests laughing together while sharing photo-booth strips"
            className="aspect-[4/3] md:aspect-[5/4]"
            position="object-[50%_40%]"
          />
        </div>
      </Section>

      {/* 03 THE NIGHT HAS A FLOW */}
      <Section className="border-y border-white/5">
        <h2 className="font-display text-[34px] tracking-tight text-white sm:text-5xl">
          The night has a <span className="italic text-neon-gradient">flow.</span>
        </h2>

        <ol className="mt-10 space-y-10 md:mt-14 md:space-y-14">
          {[
            {
              n: "01",
              h: "Start easy",
              b: "Meet at our first speakeasy, try your first cocktail tasting shot and let your host make the introductions.",
              img: speakeasy.url,
              alt: "Guests talking in a low-lit Bangkok speakeasy",
            },
            {
              n: "02",
              h: "Play, talk, loosen up",
              b: "Conversation, pool, beer pong and a little Bangkok nightlife context from your host along the way.",
              img: beerpong.url,
              alt: "Group playing beer pong at the first venue",
            },
            {
              n: "03",
              h: "Change the energy",
              b: "We move together to venue two. Same people, more music, more energy.",
              img: soi11.url,
              alt: "The group walking together to the second venue on Soi 11",
            },
          ].map((s, i) => (
            <li
              key={s.n}
              className={`grid gap-6 md:grid-cols-2 md:items-center md:gap-12 ${
                i % 2 ? "md:[&>figure]:order-2" : ""
              }`}
            >
              <Figure src={s.img} alt={s.alt} className="aspect-[16/10]" />
              <div className="flex gap-5">
                <span className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-crimson/50 font-sans text-[13px] font-semibold text-crimson">
                  {s.n}
                </span>
                <div className="min-w-0">
                  <h3 className="micro-caps !text-[13px] text-white">{s.h}</h3>
                  <p className="mt-3 text-[16px] leading-relaxed text-white/70">{s.b}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* 04 QUICK VALUE */}
      <section className="px-6 py-14">
        <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
          {[
            { icon: MapPin, t: `${ev.venueCount} venues` },
            { icon: Users, t: "Hosted night" },
            { icon: Martini, t: "A tasting at each venue" },
            { icon: Sparkles, t: "Made for meeting people" },
          ].map(({ icon: Icon, t }) => (
            <li key={t} className="flex items-start gap-3">
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-crimson" strokeWidth={1.5} />
              <span className="micro-caps !tracking-[0.18em] text-white/85">{t}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 05 BEST HOSTING */}
      <Section className="border-y border-white/5">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <Figure
            src={interior.url}
            alt="Host and guests relaxed together inside the first venue"
            className="aspect-[4/3]"
          />
          <div>
            <h2 className="font-display text-[34px] leading-[1.08] tracking-tight text-white sm:text-5xl">
              Hosted, so the room <span className="italic">opens faster.</span>
            </h2>
            <ul className="mt-8 space-y-4">
              {[
                "Introductions that actually help",
                "The night already planned",
                "A host keeping the group connected",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-[16px] text-white/75">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-crimson" strokeWidth={2} />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 06 REAL NIGHT PROOF */}
      <Section>
        <h2 className="font-display text-[34px] leading-[1.08] tracking-tight text-white sm:text-5xl">
          People arrive separately.
          <br />
          <span className="italic text-neon-gradient">The night does the work.</span>
        </h2>
        <p className="mt-5 max-w-md text-[16px] leading-relaxed text-white/70">
          Real conversations. No forced networking, no matching, no pressure.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <Figure
            src={apt101.url}
            alt="Crowd under red lights at the second venue"
            className="aspect-[4/3] md:col-span-2 md:aspect-[16/10]"
          />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
            <Figure src={laughing.url} alt="Guests laughing together" className="aspect-square" />
            <Figure src={neonsign.url} alt="Neon sign: pool table, beer pong, games, karaoke" className="aspect-square" />
          </div>
        </div>
      </Section>

      {/* 07 GOOD TO KNOW */}
      <Section className="border-y border-white/5">
        <h2 className="font-display text-[34px] tracking-tight text-white sm:text-5xl">Good to know.</h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-3 lg:gap-14">
          <dl className="divide-y divide-white/10 border-y border-white/10 lg:col-span-2">
            {[
              { icon: Clock, k: "Start", v: ev.startTime },
              { icon: Timer, k: "Duration", v: ev.durationLabel },
              { icon: MapPin, k: "Meeting point", v: ev.meetingPoint },
              { icon: Martini, k: "The night", v: `${ev.venueCount} venues` },
              { icon: UserRound, k: "Come alone?", v: "Absolutely." },
            ].map(({ icon: Icon, k, v }) => (
              <div key={k} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4">
                <dt className="flex min-w-0 items-center gap-3">
                  <Icon className="h-4 w-4 shrink-0 text-crimson" strokeWidth={1.5} />
                  <span className="micro-caps text-white/60">{k}</span>
                </dt>
                <dd className="text-right text-[15px] text-white">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="space-y-8">
            <div>
              <p className="micro-caps mb-4 text-crimson">Included</p>
              <ul className="space-y-3 text-[15px] text-white/75">
                <li className="flex gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-crimson" strokeWidth={2} />1 complimentary cocktail tasting shot at each venue</li>
                <li className="flex gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-crimson" strokeWidth={2} />Hosted introductions throughout the night</li>
              </ul>
            </div>
            <div>
              <p className="micro-caps mb-4 text-white/60">Extra</p>
              <ul className="space-y-3 text-[15px] text-white/60">
                <li className="flex gap-3"><X className="mt-1 h-4 w-4 shrink-0 text-white/35" strokeWidth={2} />Additional drinks</li>
                <li className="flex gap-3"><X className="mt-1 h-4 w-4 shrink-0 text-white/35" strokeWidth={2} />Paid venue games/activities where applicable</li>
              </ul>
            </div>
            <p className="border-l-2 border-crimson/50 pl-4 text-[14px] leading-relaxed text-white/55">
              Guests are welcome to continue enjoying the second venue after the hosted experience
              ends.
            </p>
          </div>
        </div>
      </Section>

      {/* 08 TWO ROOMS */}
      <Section>
        <h2 className="font-display text-[34px] leading-[1.08] tracking-tight text-white sm:text-5xl">
          Two rooms. <span className="italic text-neon-gradient">Two energies.</span>
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-6">
          <VenueCard
            order="First"
            name="Don't Open the Fridge"
            line="Start easy."
            meta="Speakeasy · cocktail tasting · conversation · games available"
            img={fridge.url}
            alt="Neon-lit entrance of Don't Open the Fridge on Soi 11"
          />
          <VenueCard
            order="Then"
            name="APT 101"
            line="Turn it up."
            meta="Second tasting · more music · more energy"
            img={apt101.url}
            alt="Red-lit dance floor at APT 101"
            note="Stay and continue the night."
          />
        </div>
      </Section>

      {/* 09 FINAL CONVERSION */}
      <section className="relative isolate overflow-hidden px-6 py-24 text-center sm:py-32">
        <img
          src={apt101.url}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/80 to-background" />

        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-[36px] leading-[1.05] tracking-tight text-white sm:text-6xl">
            The night is taken care of.
            <br />
            <span className="italic text-neon-gradient">You just have to show up.</span>
          </h2>

          <a
            href={ev.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon btn-neon-filled mt-10 w-full sm:w-auto"
          >
            <span>Book New in Bangkok</span>
          </a>

          <p className="micro-caps mt-7 text-white/60">
            {ev.weekday}s · {ev.startTime} · {ev.venueCount} venues
          </p>
          <p className="mt-3 text-sm text-white/60">
            Early bird {ev.currency}{ev.priceEarlyBird}
            <span className="mx-2 text-white/25">·</span>
            Standard {ev.currency}{ev.priceStandard}
          </p>
          <p className="mt-8 text-[11px] uppercase tracking-[0.28em] text-white/40">
            Hosted by BEST Nightlife Thailand
          </p>
        </div>
      </section>

      <footer className="border-t border-white/5 px-6 py-14 pb-28 sm:pb-14">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
          <Link to="/" className="font-sans text-[12px] font-semibold tracking-[0.22em]">
            BEST NIGHTLIFE <span className="text-neon-gradient">THAILAND</span>
          </Link>
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} — Bangkok · Pattaya · By inquiry only.
          </p>
        </div>
      </footer>

      {/* MOBILE STICKY CTA */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-background/95 backdrop-blur-xl transition-transform duration-300 sm:hidden ${
          showSticky ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3">
          <p className="min-w-0 truncate text-[13px] text-white/75">
            {ev.weekday.slice(0, 3)} · from{" "}
            <span className="font-semibold text-white">{ev.currency}{ev.priceEarlyBird}</span>
          </p>
          <a
            href={ev.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neon-gradient inline-flex min-h-11 items-center rounded-full px-7 text-[12px] font-semibold uppercase tracking-[0.18em] text-white"
          >
            Book
          </a>
        </div>
      </div>
    </main>
  );
}

function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-background/50 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-4 md:flex md:justify-between">
        <Link
          to="/"
          className="min-w-0 truncate font-sans text-[12px] font-semibold tracking-[0.22em] text-white sm:text-[13px]"
        >
          BEST NIGHTLIFE <span className="text-neon-gradient">THAILAND</span>
        </Link>
        <nav className="micro-caps hidden items-center gap-9 text-white/60 md:flex">
          <Link to="/" className="transition hover:text-white">Home</Link>
          <Link to="/about" className="transition hover:text-white">About</Link>
          <Link to="/new-in-bangkok" className="text-white">New in Bangkok</Link>
        </nav>
        <a
          href={ev.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-neon !px-5 !py-2.5 !text-[11px]"
        >
          <span>Book</span>
        </a>
      </div>
    </header>
  );
}

function Meta({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <li className="flex items-center gap-2 text-sm text-white/80">
      <span className="text-crimson">{icon}</span>
      <span className="font-medium tracking-wide">{label}</span>
    </li>
  );
}

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`relative px-6 py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function Figure({
  src,
  alt,
  className = "",
  position = "object-center",
}: {
  src: string;
  alt: string;
  className?: string;
  position?: string;
}) {
  return (
    <figure className={`relative overflow-hidden rounded-[20px] border border-white/10 ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`h-full w-full object-cover ${position}`}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
    </figure>
  );
}

function VenueCard({
  order,
  name,
  line,
  meta,
  img,
  alt,
  note,
}: {
  order: string;
  name: string;
  line: string;
  meta: string;
  img: string;
  alt: string;
  note?: string;
}) {
  return (
    <article className="relative h-[400px] overflow-hidden rounded-[24px] border border-white/10 sm:h-[460px]">
      <img src={img} alt={alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />
      <div className="relative flex h-full flex-col justify-end p-7">
        <p className="micro-caps mb-3 text-crimson">{order}</p>
        <h3 className="font-display text-3xl leading-tight text-white sm:text-[34px]">{name}</h3>
        <p className="mt-2 font-display text-lg italic text-white/80">{line}</p>
        <p className="mt-3 text-[13px] leading-relaxed text-white/60">{meta}</p>
        {note && <p className="mt-3 text-[13px] text-crimson">{note}</p>}
      </div>
    </article>
  );
}
