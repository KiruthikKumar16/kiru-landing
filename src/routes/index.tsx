import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { PageFrame } from "../components/site-shell";

export const Route = createFileRoute("/")({
  component: KiruLanding,
});

const NAV = [
  { label: "Features", href: "/features" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Download", href: "#download" },
  { label: "Contact", href: "/contact" },
];

const FEATURES = [
  {
    id: "wardrobe",
    title: "Wardrobe",
    blurb: "Your virtual wardrobe, fully understood.",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1800&q=80",
    alt: "Neatly organized clothing rack in a bright wardrobe",
  },
  {
    id: "ai",
    title: "Trips",
    blurb: "Plan the journey, outfit by outfit.",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1800&q=80",
    alt: "Fashion editorial flat lay with styled outfit",
  },
  {
    id: "weather",
    title: "AI Stylist",
    blurb: "Your travel stylist, powered by AI.",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1800&q=80",
    alt: "Suitcase packed with folded clothing for travel",
  },
  {
    id: "culture",
    title: "Community Feed",
    blurb: "Shared styling for the travel community.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1800&q=80",
    alt: "Traveler in a cultural market dressed appropriately",
  },
];

const FEATURE_ROUTES: Record<string, string> = {
  wardrobe: "/wardrobe-analysis",
  ai: "/trip-planning",
  weather: "/ai-stylist",
  culture: "/community-feed",
};

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function KiruLanding() {
  useReveal();
  return (
    <PageFrame navItems={NAV} homeHref="/">
      <Hero />
      <FeatureCarousel />
      <AlternatingSections />
      <ClosingBanner />
    </PageFrame>
  );
}

function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[560px] w-full overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2400&q=85"
        alt="Traveler in a stylish coat walking through an airport terminal with a suitcase"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/10 to-charcoal/70" />

      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-24 md:px-16 md:pb-32">
        <div data-reveal className="reveal max-w-3xl text-cream">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.32em] text-cream/80">
            The AI Travel Stylist
          </p>
          <h1
            className="font-display hero-heading"
            style={{ fontSize: "clamp(60px, 12vw, 160px)", lineHeight: "0.95" }}
          >
            Pack Smarter,
            <br />
            <em className="font-normal italic">Dress Better.</em>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-cream/80 md:text-xl">
            Kiru studies your wardrobe, your destination, the weather, and the culture — then
            curates outfits worth the journey.
          </p>
        </div>
      </div>
    </section>
  );
}

const FEATURE_HEADLINES: Record<string, { eyebrow: string; headline: string }> = {
  wardrobe: {
    eyebrow: "Your closet, digitized",
    headline: "EVERY PIECE\nYOU OWN",
  },
  ai: {
    eyebrow: "Plan the journey",
    headline: "OUTFIT BY\nOUTFIT",
  },
  weather: {
    eyebrow: "AI-powered styling",
    headline: "YOUR TRAVEL\nSTYLIST",
  },
  culture: {
    eyebrow: "Shared inspiration",
    headline: "STYLE FROM\nTHE COMMUNITY",
  },
};

function FeatureCarousel() {
  const [active, setActive] = useState(0);
  const current = FEATURES[active];
  const meta = FEATURE_HEADLINES[current.id];

  return (
    <section
      id="features"
      className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-charcoal"
    >
      {/* Stacked crossfading images */}
      {FEATURES.map((f, i) => (
        <img
          key={f.id}
          src={f.image}
          alt={f.alt}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/25 to-charcoal/80" />

      {/* Tabs */}
      <div className="absolute inset-x-0 top-24 z-50 md:top-28">
        <div className="mx-auto max-w-[1600px] px-6 md:px-16">
          <div className="flex gap-6 overflow-x-auto border-b border-cream/25 no-scrollbar md:gap-12">
            {FEATURES.map((f, i) => (
              <button
                key={f.id}
                onClick={() => {
                  setActive(i);
                }}
                type="button"
                className={`relative shrink-0 pb-4 text-sm font-medium tracking-tight transition-colors md:text-base cursor-pointer ${
                  i === active ? "text-cream" : "text-cream/50 hover:text-cream/80"
                }`}
              >
                {f.title}
                <span
                  className={`absolute -bottom-px left-0 h-[2px] bg-cream transition-all duration-500 ${
                    i === active ? "w-full" : "w-0"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Headline + CTA */}
      <div className="absolute inset-0 z-10 flex items-center overflow-hidden pointer-events-none">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col items-start justify-between gap-10 px-6 md:flex-row md:items-center md:px-16 pointer-events-auto">
          <div className="max-w-4xl w-full transition-all duration-700">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-cream/70 transition-opacity duration-700">
              {meta.eyebrow}
            </p>
            <h2 className="font-display feature-heading font-medium uppercase tracking-tight text-cream transition-opacity duration-700">
              {meta.headline}
            </h2>
            <p className="mt-6 max-w-md text-base text-cream/75 md:text-lg transition-opacity duration-700">
              {current.blurb}
            </p>
          </div>

          <a
            href={FEATURE_ROUTES[current.id] ?? "/features"}
            className="group inline-flex shrink-0 items-center gap-4 rounded-full border border-cream/60 bg-cream/5 px-7 py-4 text-sm font-medium text-cream backdrop-blur-md transition-all duration-500 hover:bg-cream hover:text-charcoal"
          >
            Discover more
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

type AltSection = {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  body: string;
  cta: string;
  image: string;
  alt: string;
  reverse?: boolean;
};

const ALT: AltSection[] = [
  {
    id: "how",
    eyebrow: "AI Styling Core",
    title: "Intelligence in every fold",
    body: "Kiru's neural engine analyzes destination weather forecasts, local cultural customs, and your style preferences to curate the perfect outfit recommendations directly from your closet.",
    cta: "Discover more",
    image:
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=1800&q=85",
    alt: "Stylish outfit flat lay with phone showing outfit recommendation UI",
  },
  {
    id: "about",
    eyebrow: "Our Philosophy",
    title: "Pack smarter, dress better",
    body: "By maximizing cost-per-wear and generating digital capsule collections, Kiru helps you look stunning while traveling light and promoting sustainable wardrobe reuse.",
    cta: "Discover more",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1800&q=80",
    alt: "Two diverse travelers laughing together in a scenic destination",
    reverse: true,
  },
  {
    id: "sustainable",
    eyebrow: "Global Sensitivity",
    title: "Respect where you land",
    body: "With built-in cultural filters and modest fashion modes, Kiru ensures you feel comfortable and respectful, whether visiting sacred temples or walking down modern metropolis streets.",
    cta: "Discover more",
    image:
      "https://images.unsplash.com/photo-1473625247510-8ceb1760943f?auto=format&fit=crop&w=1800&q=80",
    alt: "Beautifully packed leather suitcase with folded neutral clothing",
  },
];

function AlternatingSections() {
  return (
    <div className="bg-background">
      {ALT.map((s) => (
        <section key={s.id} id={s.id} className="border-t border-border/60 py-24 md:py-32">
          <div className="mx-auto grid max-w-[1600px] items-center gap-14 px-6 md:grid-cols-2 md:gap-20 md:px-10">
            <div data-reveal className={`reveal ${s.reverse ? "md:order-2" : ""}`}>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={s.image}
                  alt={s.alt}
                  className="h-[420px] w-full object-cover md:h-[640px]"
                  loading="lazy"
                />
              </div>
            </div>
            <div data-reveal className={`reveal ${s.reverse ? "md:order-1 md:pr-8" : "md:pl-8"}`}>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-terracotta">
                {s.eyebrow}
              </p>
              <h2 className="font-display section-heading">{s.title}</h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl">
                {s.body}
              </p>
              <a
                href="/how-it-works"
                className="mt-8 inline-flex items-center gap-2 border-b border-charcoal pb-1 text-xs font-medium uppercase tracking-[0.22em] text-charcoal hover:border-terracotta hover:text-terracotta"
              >
                {s.cta} <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

function ClosingBanner() {
  return (
    <section id="download" className="relative h-[70svh] min-h-[480px] w-full overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=2400&q=85"
        alt="Camera lens and travel gear in a stylish composition"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-charcoal/65" />
      <div
        data-reveal
        className="reveal absolute inset-0 flex items-center justify-center px-6 text-left"
      >
        <div className="mx-auto grid w-full max-w-[1400px] gap-12 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div className="max-w-2xl">
            <h2 className="mt-5 font-display text-5xl font-medium leading-[0.92] text-cream md:text-6xl">
              Ready for Your Next Adventure?
            </h2>
            <p className="mt-8 text-lg leading-8 text-cream/75 md:text-xl">
              <br />
              Whether you're heading to snowy mountains, tropical beaches, or bustling cities, Kiru
              creates travel outfits based on your wardrobe, destination, weather, and personal
              style—so you're prepared for every moment.
            </p>
          </div>
          <div className="flex items-start justify-end">
            <a
              href="#"
              className="group inline-flex shrink-0 items-center gap-4 rounded-full border border-cream/60 bg-cream/5 px-8 py-5 text-base font-medium text-cream backdrop-blur-md transition-all duration-500 hover:bg-cream hover:text-charcoal"
            >
              Get Kiru
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
