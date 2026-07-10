import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { PageFrame } from "../components/site-shell";

export const Route = createFileRoute("/continuous-learning")({
  component: ContinuousLearning,
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

function ContinuousLearning() {
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
        alt="AI learning and personalization"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/25 to-charcoal/80" />

      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-24 md:px-16 md:pb-32">
        <div data-reveal className="reveal max-w-3xl text-white">
          <h1 className="font-display hero-heading mt-4" style={{ fontSize: 'clamp(30px, 5vw, 70px)', lineHeight: '0.95' }}>
            Continuous Learning
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">
            A Stylist That Evolves With Every Journey.
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
      "Great personal stylists don't become exceptional overnight. They learn through experience, observation, and understanding. The same philosophy powers Kiru's Continuous Learning system. Every outfit you wear, every recommendation you save, every destination you visit, and every decision you make helps Kiru better understand your personal style and travel preferences. Rather than relying on static rules, Kiru continuously refines its understanding of who you are as a traveler. Over time, recommendations become increasingly personalized, accurate, and aligned with your lifestyle. The result is an AI stylist that grows alongside you, transforming every journey into an opportunity to deliver even better experiences in the future.",
  },
  {
    title: "Learning Your Preferences",
    body:
      "Style is personal, and understanding it requires more than analyzing clothing. Kiru observes patterns in the recommendations you engage with, the outfits you save, the garments you wear most often, and the combinations you naturally prefer. These insights help the system distinguish between what looks good on paper and what genuinely feels right for you. As your preferences become clearer, recommendations begin reflecting your unique identity rather than generalized fashion trends. The more you interact with Kiru, the more accurately it can anticipate the styles, colors, and outfit combinations you'll love.",
  },
  {
    title: "Adapting to Your Travel Habits",
    body:
      "Travel preferences evolve just as much as personal style. Some travelers begin prioritizing comfort, while others discover a preference for lighter packing, destination-specific dressing, or more versatile wardrobes. Kiru learns from your travel behavior, identifying patterns across destinations, trip lengths, activities, and packing decisions. By understanding how you travel over time, the platform can generate recommendations that feel increasingly practical and personalized. Every journey contributes valuable context that helps improve future outfit suggestions, packing strategies, and travel preparation.",
  },
  {
    title: "Smarter With Every Recommendation",
    body:
      "Continuous Learning isn't about collecting data—it's about creating better experiences. Each interaction strengthens the relationship between you and the system, allowing Kiru to refine recommendations with greater confidence and precision. What begins as intelligent guidance gradually evolves into a highly personalized travel styling experience tailored specifically to you. The result is an AI stylist that doesn't simply respond to your preferences but actively grows with them. Every destination, every outfit, and every adventure helps Kiru become a more thoughtful, capable, and reliable travel companion for the journeys still to come.",
  },
];

const SLIDES = [
  {
    section: "01",
    title: "Understand Your Style",
    caption: "Learn from saved outfits, favorite garments, and styling preferences.",
    image: "https://images.unsplash.com/photo-1520975914412-1a2f3a1b8b2c?auto=format&fit=crop&w=1400&q=80",
    alt: "Visual timeline showing favorite outfits and personal style preferences forming a unique profile",
    bullets: [],
  },
  {
    section: "02",
    title: "Analyze Travel Patterns",
    caption: "Identify habits, destinations, and packing behaviors across multiple journeys.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80",
    alt: "World map connected to multiple completed trips highlighting learned travel habits",
    bullets: [],
  },
  {
    section: "03",
    title: "Refine Recommendations",
    caption: "Continuously improve outfit suggestions through real-world feedback and usage.",
    image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=1400&q=80",
    alt: "AI dashboard displaying recommendations becoming increasingly accurate through feedback loops",
    bullets: [],
  },
  {
    section: "04",
    title: "Grow Alongside You",
    caption: "Evolve with your changing style, lifestyle, and travel experiences over time.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    alt: "Cinematic progression showing traveler across different stages with Kiru evolving alongside",
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
