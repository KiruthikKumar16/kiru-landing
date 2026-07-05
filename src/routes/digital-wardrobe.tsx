import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { PageFrame } from "../components/site-shell";

export const Route = createFileRoute("/digital-wardrobe")({
  component: KiruLanding,
});

const NAV = [
  { label: "Features", href: "/features" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Download", href: "/#download" },
  { label: "Contact", href: "/contact" },
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
      <OverviewSections />
      <FooterSection />
    </PageFrame>
  );
}

function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[560px] w-full overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=2400&q=85"
        alt="Traveler packing clothes into a suitcase with an itinerary and phone nearby"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/25 to-charcoal/80" />

      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-24 md:px-16 md:pb-32">
        <div data-reveal className="reveal max-w-3xl text-white">
          <h1 className="font-display hero-heading" style={{ fontSize: 'clamp(30px, 5vw, 70px)', lineHeight: '0.95' }}>
            Digital Wardrobe
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">
            Your Wardrobe, Reimagined
          </p>
          <a
            href="/features"
            className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:border-white/60 hover:bg-white/15"
          >
            Back to Features
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

const OVERVIEW_BLOCKS = [
  {
    title: "Overview",
    body:
      "Every journey begins long before you leave home. The clothes you choose influence your comfort, confidence, and readiness for every destination, yet packing often relies on guesswork and last-minute decisions. Kiru changes that by transforming your closet into an intelligent digital wardrobe that understands every garment you own. By recognizing, organizing, and learning from your collection, Kiru creates a personalized foundation for smarter outfit recommendations, efficient packing, and more meaningful travel experiences. Instead of asking what you should buy next, it begins with what already belongs to you.",
  },
  {
    title: "Intelligent Recognition",
    body:
      "Creating your digital wardrobe should be effortless. Simply capture or upload photos of your clothing, and Kiru's AI automatically identifies each garment, recognizing categories, colors, fabrics, patterns, sleeve lengths, and seasonal suitability. Every item is analyzed and transformed into structured information without requiring hours of manual organization. As your wardrobe grows, Kiru continuously improves its understanding of your collection, making every future recommendation faster, smarter, and more accurate.",
  },
  {
    title: "Personalized Organization",
    body:
      "A wardrobe is more than a list of clothes—it's a collection shaped by your personality, lifestyle, and experiences. Kiru organizes every garment into an intuitive digital library, grouping items by category, occasion, season, color palette, and compatibility. Powerful search and filtering make it easy to find exactly what you're looking for, while intelligent organization helps you rediscover forgotten favorites and create new outfit combinations from pieces you already own. Your wardrobe remains organized, accessible, and always ready for your next adventure.",
  },
  {
    title: "Built for Every Journey",
    body:
      "Every destination brings different climates, activities, and cultural expectations. Whether you're traveling for business, exploring a new city, relaxing on the coast, or embarking on a long international adventure, your digital wardrobe adapts to the journey ahead. Kiru combines your clothing with destination insights, weather forecasts, travel itineraries, and personal preferences to recommend outfits that are versatile, comfortable, and appropriate for every occasion. The result is a packing experience that is lighter, smarter, and uniquely tailored to the way you travel.",
  },
];

const SLIDES = [
  {
    section: "Section 01",
    title: "AI Clothing Recognition",
    caption:
      "Instantly identify every garment using advanced AI image analysis. Simply upload a photo, and Kiru recognizes clothing categories, colors, fabrics, patterns, and seasonal suitability within seconds.",
    image:
      "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1400&q=80",
    alt: "Flat lay of clothes with AI detection boxes",
    bullets: ["Shirt", "Jeans", "Sneakers", "Jacket"],
  },
  {
    section: "Section 02",
    title: "Smart Organization",
    caption:
      "Every item is automatically organized into an intelligent wardrobe, making it easy to browse, search, and rediscover your clothing through categories, occasions, colors, and seasons.",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1400&q=80",
    alt: "Digital wardrobe UI with jackets, shirts, pants, shoes, and accessories",
    bullets: ["Jackets", "Shirts", "Pants", "Shoes", "Accessories"],
  },
  {
    section: "Section 03",
    title: "Outfit Compatibility",
    caption:
      "Kiru understands how garments work together, recommending combinations based on style harmony, weather conditions, travel plans, and your personal preferences.",
    image:
      "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1400&q=80",
    alt: "Three complete outfits displayed side by side",
    bullets: ["Business", "Casual", "Vacation"],
  },
  {
    section: "Section 04",
    title: "Travel-Ready Selection",
    caption:
      "Before every journey, Kiru transforms your wardrobe into destination-ready outfits and optimized packing lists, ensuring every item in your suitcase has a purpose.",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1400&q=80",
    alt: "Open suitcase with selected clothes and destination background",
    bullets: ["Suitcase", "Selected Clothes", "Travel Destination"],
  },
];

function OverviewSections() {
  return (
    <div className="bg-background text-foreground">
      {OVERVIEW_BLOCKS.map((section, index) => (
        <section
          key={section.title}
          className="border-t border-border/60 py-20 md:py-28"
        >
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start">
              <div className="space-y-4">
                <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {section.title}
                </h2>
              </div>
              <div>
                <p className="text-lg leading-8 text-muted-foreground md:text-xl">
                  {section.body}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

function FooterSection() {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsAnimating(true);
      window.setTimeout(() => {
        setActive((current) => (current + 1) % SLIDES.length);
        setIsAnimating(false);
      }, 240);
    }, 15000);

    return () => window.clearTimeout(timer);
  }, [active]);

  const slide = SLIDES[active];
  const nextSlide = SLIDES[(active + 1) % SLIDES.length];

  const changeSlide = (nextIndex: number) => {
    setIsAnimating(true);
    window.setTimeout(() => {
      setActive(nextIndex);
      setIsAnimating(false);
    }, 240);
  };

  return (
    <section id="digital-wardrobe-slider" className="relative overflow-hidden bg-charcoal text-white">
      <div className="relative mx-auto min-h-screen max-w-[1700px] px-6 py-16 md:px-12">
        <div className="flex min-h-[calc(100vh-6rem)] flex-col gap-10">
          <div className="max-w-4xl space-y-6">
            <h2 className="text-5xl font-display font-semibold leading-[1.02] tracking-[-0.03em] text-white sm:text-6xl">
              {slide.title}
            </h2>
            <p className="text-lg leading-8 text-white/80 md:text-xl">
              {slide.caption}
            </p>
          </div>

          <div className="grid gap-8 xl:grid-cols-[1.7fr_0.9fr] xl:items-stretch">
            <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-black/20 shadow-[0_40px_120px_rgba(0,0,0,0.25)]">
              <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
                <img
                  key={slide.image}
                  src={slide.image}
                  alt={slide.alt}
                  className={`h-full w-full object-cover transition-all duration-700 ease-in-out ${
                    isAnimating ? "opacity-20 scale-105" : "opacity-100 scale-100"
                  }`}
                />
              </div>
            </div>

            <div className="flex h-full flex-col gap-6">
              <div className="flex-1 overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/15">
                <div className="relative h-full w-full overflow-hidden">
                  <img
                    src={nextSlide.image}
                    alt={nextSlide.alt}
                    className="h-full w-full object-cover scale-110 transition-transform duration-700 ease-in-out"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => changeSlide((active - 1 + SLIDES.length) % SLIDES.length)}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-white/40 hover:bg-white/10"
                  aria-label="Previous slide"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => changeSlide((active + 1) % SLIDES.length)}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-white/40 hover:bg-white/15"
                  aria-label="Next slide"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
                <span className="text-sm text-white/60">
                  {String(active + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


