import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { PageFrame } from "../components/site-shell";

export const Route = createFileRoute("/wardrobe-analysis")({
  component: WardrobeAnalysis,
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

function WardrobeAnalysis() {
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
        src="https://images.unsplash.com/photo-1505765051532-9a6a6f6ed8d9?auto=format&fit=crop&w=2400&q=85"
        alt="Wardrobe organization and clothing analysis"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/25 to-charcoal/80" />

      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-24 md:px-16 md:pb-32">
        <div data-reveal className="reveal max-w-3xl text-white">
          <h1 className="font-display hero-heading mt-4" style={{ fontSize: 'clamp(30px, 5vw, 70px)', lineHeight: '0.95' }}>
            Wardrobe Analysis
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">
            Understanding What You Own.
          </p>
          <a
            href="/how-it-works"
            className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:border-white/60 hover:bg-white/15"
          >
            Back to How It Works
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
      "Every intelligent recommendation begins with understanding your wardrobe. Before Kiru can create outfits, generate packing lists, or prepare you for a destination, it first needs to know what already belongs in your closet. Wardrobe Analysis transforms individual garments into meaningful insights, allowing the system to understand not just what you own, but how each piece contributes to your personal style. Using advanced image recognition and intelligent categorization, Kiru analyzes clothing across multiple dimensions, creating a structured digital wardrobe that serves as the foundation for every recommendation. By understanding your collection in detail, Kiru helps you discover new combinations, maximize versatility, and make better use of the clothes you already own.",
  },
  {
    title: "AI-Powered Recognition",
    body:
      "Building a digital wardrobe shouldn't feel like an administrative task. Kiru simplifies the process by allowing you to upload photos of your clothing, automatically identifying key garment attributes through artificial intelligence. Categories, colors, fabrics, patterns, sleeve lengths, and seasonal suitability are recognized within seconds, transforming simple images into meaningful wardrobe data. This intelligent recognition process removes the need for extensive manual input while ensuring your wardrobe remains accurate, organized, and ready for future recommendations. The result is a smarter and more effortless way to manage your clothing collection.",
  },
  {
    title: "Beyond Simple Organization",
    body:
      "Most wardrobe apps focus on storage. Kiru focuses on understanding. Every garment is automatically grouped by category, occasion, season, color palette, and compatibility, creating a wardrobe that feels structured and intuitive. Instead of searching endlessly through your closet, you gain instant access to the clothing best suited for specific destinations, activities, and weather conditions. As your collection grows, Kiru continues organizing and refining its understanding, ensuring your wardrobe remains accessible and useful regardless of its size. The goal is not simply to catalog clothing, but to create a system that supports better decisions every time you travel.",
  },
  {
    title: "The Foundation of Every Recommendation",
    body:
      "The quality of every recommendation depends on the quality of understanding behind it. By analyzing your wardrobe in detail, Kiru gains the ability to create outfits that feel personal, practical, and authentic to your style. Every destination, packing list, and travel plan benefits from a deeper understanding of the clothing you already own. Rather than encouraging unnecessary purchases, Kiru prioritizes existing garments first, helping you unlock more value from your wardrobe while promoting smarter, more sustainable travel. Every feature that follows begins with this foundation of understanding.",
  },
];

const SLIDES = [
  {
    section: "01",
    title: "Capture Your Wardrobe",
    caption: "Upload clothing photos and build your digital collection with ease.",
    image: "https://images.unsplash.com/photo-1520975914412-1a2f3a1b8b2c?auto=format&fit=crop&w=1400&q=80",
    alt: "User photographing clothing items laid neatly on a bed or flat surface",
    bullets: [],
  },
  {
    section: "02",
    title: "AI Recognition",
    caption: "Identify categories, colors, fabrics, patterns, and seasonal suitability automatically.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80",
    alt: "Garment image with elegant AI overlays identifying category, color, material, and season",
    bullets: [],
  },
  {
    section: "03",
    title: "Smart Organization",
    caption: "Create a structured wardrobe organized by occasion, compatibility, and personal style.",
    image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=1400&q=80",
    alt: "Premium digital wardrobe interface showing clothes grouped into categories and collections",
    bullets: [],
  },
  {
    section: "04",
    title: "Ready for Recommendations",
    caption: "Transform wardrobe insights into personalized outfits, packing lists, and travel plans.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    alt: "Visual transition from wardrobe items to complete outfits and destination-ready packing plan",
    bullets: [],
  },
];

function OverviewSections() {
  return (
    <div className="bg-background text-foreground">
      {OVERVIEW_BLOCKS.map((section) => (
        <section key={section.title} className="border-t border-border/60 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start">
              <div className="space-y-4">
                <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{section.title}</h2>
              </div>
              <div>
                <p className="text-lg leading-8 text-muted-foreground md:text-xl">{section.body}</p>
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
    <section id="cultural-image-slider" className="relative overflow-hidden bg-charcoal text-white">
      <div className="relative mx-auto min-h-screen max-w-[1700px] px-6 py-16 md:px-12">
        <div className="flex min-h-[calc(100vh-6rem)] flex-col gap-10">
          <div className="max-w-4xl space-y-6">
            <h2 className="text-5xl font-display font-semibold leading-[1.02] tracking-[-0.03em] text-white sm:text-6xl">{slide.title}</h2>
            <p className="text-lg leading-8 text-white/80 md:text-xl">{slide.caption}</p>
          </div>

          <div className="grid gap-8 xl:grid-cols-[1.7fr_0.9fr] xl:items-stretch">
            <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-black/20 shadow-[0_40px_120px_rgba(0,0,0,0.25)]">
              <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
                <img key={slide.image} src={slide.image} alt={slide.alt} className={`h-full w-full object-cover transition-all duration-700 ease-in-out ${isAnimating ? "opacity-20 scale-105" : "opacity-100 scale-100"}`} />
              </div>
            </div>

            <div className="flex h-full flex-col gap-6">
              <div className="flex-1 overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/15">
                <div className="relative h-full w-full overflow-hidden">
                  <img src={nextSlide.image} alt={nextSlide.alt} className="h-full w-full object-cover scale-110 transition-transform duration-700 ease-in-out" />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3">
                <button type="button" onClick={() => changeSlide((active - 1 + SLIDES.length) % SLIDES.length)} className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-white/40 hover:bg-white/10" aria-label="Previous slide">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
                </button>
                <button type="button" onClick={() => changeSlide((active + 1) % SLIDES.length)} className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-white/40 hover:bg-white/15" aria-label="Next slide">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6" /></svg>
                </button>
                <span className="text-sm text-white/60">{String(active + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
