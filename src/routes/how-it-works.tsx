import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { PageFrame } from "../components/site-shell";

export const Route = createFileRoute("/how-it-works")({
  component: KiruLanding,
});

const NAV = [
  { label: "Features", href: "/features" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Download", href: "/#download" },
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

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
          } else {
            e.target.classList.remove("reveal-in");
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
      <OverviewSection />
      <FeatureGrid />
    </PageFrame>
  );
}

function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[560px] w-full overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2400&q=85"
        alt="Traveler packing clothes into a suitcase with an itinerary and phone nearby"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/25 to-charcoal/80" />

      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-24 md:px-16 md:pb-32">
        <div data-reveal className="reveal max-w-3xl text-white">
          <h1 className="font-display hero-heading" style={{ fontSize: 'clamp(24px, 3.5vw, 44px)', lineHeight: '1.05', whiteSpace: 'nowrap', fontWeight: 500 }}>
            From&nbsp;closet
            <br />
            To&nbsp;destination
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">
            From your first trip to your hundredth, Kiru transforms the way you prepare for travel by combining your wardrobe, destination, and artificial intelligence into one seamless experience.
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
                  i === active
                    ? "text-cream"
                    : "text-cream/50 hover:text-cream/80"
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
            href="/how-it-works"
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

function OverviewSection() {
  return (
    <section className="relative min-h-screen border-t border-border/60 bg-background py-24 md:py-32 flex items-center" id="overview">
      <div className="mx-auto flex max-w-6xl px-6 md:px-10">
        <div className="grid w-full gap-12 md:grid-cols-[260px_minmax(0,1fr)] md:items-start">
          <div className="pt-4 md:pt-0">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Overview
            </h2>
          </div>
          <div className="space-y-8 pt-4 md:pt-0">
            <p className="text-lg leading-8 text-muted-foreground md:text-xl">
                Every journey begins long before you leave home. From choosing what to wear to deciding what belongs in your suitcase, preparing for a trip often involves countless decisions that can feel overwhelming.            </p>
            <p className="text-lg leading-8 text-muted-foreground md:text-xl">
                Kiru simplifies that process by combining your wardrobe, destination, weather forecasts, travel itinerary, and personal style into one intelligent system. Every recommendation is tailored specifically to you, helping eliminate the guesswork from packing.            </p>
            <p className="text-lg leading-8 text-muted-foreground md:text-xl">
                From building your digital wardrobe to receiving daily outfit suggestions and smart packing lists, every step is designed to make travel preparation effortless—so you can spend less time planning and more time enjoying the journey.            </p>
          </div>
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

const FEATURE_CARDS = [
  {
    title: "Profile Setup",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Wardrobe Analysis",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Trip Planning",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Destination Intelligence",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Outfit Generation",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Packing Optimization",
    image:
      "https://images.unsplash.com/photo-1467043237213-65f2da53396f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Travel Assistance",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Continuous Learning",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
  },
];

function FeatureGrid() {
  return (
    <section className="border-t border-border/60 bg-background py-24 md:py-32 px-6 md:px-10" id="feature-grid">
      <div className="space-y-24 w-full">
        <div className="w-full">
          <h3
            data-reveal
            className="reveal font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            Behind Every Recommendation
          </h3>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
            Every outfit Kiru suggests is the result of a carefully designed process that combines your wardrobe, destination, weather, and personal style into one seamless travel experience.
          </p>
        </div>
        <div className="grid w-full gap-8 sm:grid-cols-2">
            {FEATURE_CARDS.map((card) => (
              <div
                key={card.title}
                data-reveal
                className="reveal feature-card relative overflow-hidden border border-white/10 bg-charcoal/10 shadow-[0_30px_90px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-cream/40"
              >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="feature-card-image h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/40 to-transparent opacity-90 transition-opacity duration-500 feature-card-overlay" />
              </div>
              <div className="relative min-h-[520px] px-10 pb-10 pt-6 flex items-end">
                <div>
                  <div className="mb-5 h-1 w-20 bg-terracotta/80 transition-all duration-500 group-hover:w-28" />
                  <h3 className="text-3xl font-semibold tracking-tight text-cream transition-colors duration-500">
                    {card.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClosingBanner() {
  return (
    <section id="download" className="relative h-[70svh] min-h-[480px] w-full overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=2400&q=85"
        alt="Camera lens and travel gear in a stylish composition"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-charcoal/55" />
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
              Whether you're heading to snowy mountains, tropical beaches, or bustling cities, Kiru creates travel outfits based on your wardrobe, destination, weather, and personal style—so you're prepared for every moment.
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


