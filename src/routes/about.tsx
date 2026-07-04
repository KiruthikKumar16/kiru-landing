import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { PageFrame } from "../components/site-shell";

export const Route = createFileRoute("/about")({
  component: KiruLanding,
});

const NAV = [
  { label: "Features", href: "/features" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Download", href: "/#download" },
  { label: "Contact", href: "/contact" },
];

const PRINCIPLES = [
  {
    title: "Personalization",
    copy: "Every traveler is different. Every recommendation should be too.",
  },
  {
    title: "Simplicity",
    copy: "Travel planning should feel effortless from start to finish.",
  },
  {
    title: "Global Thinking",
    copy: "Designed for travelers exploring every country, culture, and climate.",
  },
  {
    title: "Sustainability",
    copy: "Making better use of existing wardrobes before suggesting new purchases.",
  },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            io.unobserve(entry.target);
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
      <Narrative />
    </PageFrame>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-charcoal text-cream">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=2200&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(17,17,17,0.9)_10%,rgba(17,17,17,0.55)_55%,rgba(17,17,17,0.82)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_38%)]" />
      <div className="relative mx-auto flex min-h-screen max-w-[1600px] flex-col justify-center px-6 py-28 md:px-16 md:py-36">
        <div className="max-w-4xl space-y-8" data-reveal>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-cream/70">
            ABOUT KIRU
          </p>
          <h1 className="font-display text-[clamp(2.75rem,7vw,5.4rem)] leading-[0.95] tracking-[-0.03em]">
            Designed for Every Journey
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-cream/80 md:text-xl">
            Helping travelers pack smarter, dress confidently, and explore the world through intelligent technology.
          </p>
        </div>
      </div>
    </section>
  );
}

function Narrative() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sections = [
    {
      eyebrow: "Overview",
      title: "A calmer way to prepare for the world.",
      body: [
        "Travel has the power to create unforgettable experiences, but preparing for those experiences often feels unnecessarily complicated.",
        "Packing too much, forgetting essentials, or wondering whether your clothes suit the destination are challenges shared by travelers everywhere.",
        "Kiru was created to remove that uncertainty. By combining artificial intelligence with your wardrobe, destination, weather, and personal style, we aim to make travel preparation as enjoyable as the journey itself.",
      ],
      image:
        "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?auto=format&fit=crop&w=2200&q=80",
    },
    {
      eyebrow: "Our Story",
      title: "Every great journey begins with a question.",
      body: [
        "Why is packing still based on guesswork?",
        "Despite advances in technology, preparing for a trip often means opening a suitcase and hoping you&apos;ve packed enough of the right clothes. Most people either overpack &quot;just in case&quot; or underpack and regret it later.",
        "Fashion apps recommend buying more clothes, while travel apps rarely consider what you&apos;ll actually wear. Kiru was born from the idea that these experiences shouldn&apos;t be separate.",
        "We imagined a travel companion that understands your wardrobe before recommending anything new. One that considers the weather before suggesting an outfit. One that respects local culture before deciding what&apos;s appropriate. One that learns your style with every journey.",
        "That vision became Kiru.",
      ],
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=2200&q=80",
    },
    {
      eyebrow: "Our Philosophy",
      title: "Technology should simplify life, not complicate it.",
      body: [
        "Instead of encouraging endless shopping, Kiru begins with what you already own. Instead of generic outfit suggestions, every recommendation is tailored to your destination, your plans, and your personal style.",
        "We believe the smartest suitcase isn&apos;t the fullest one—it&apos;s the one packed with intention.",
      ],
      image:
        "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=2200&q=80",
    },
    {
      eyebrow: "Principles",
      title: "Built around four guiding ideas.",
      body: [],
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2200&q=80",
      content: (
        <div className="space-y-6">
          {PRINCIPLES.map((principle, index) => (
            <div
              key={principle.title}
              className="rounded-[2rem] border border-white/10 bg-black/20 p-10 shadow-[0_30px_80px_rgba(0,0,0,0.18)] transition-all duration-300 hover:bg-black/25"
            >
              <div className="flex items-center justify-between gap-6 text-sm uppercase tracking-[0.28em] text-cream/60">
                <span>{principle.title}</span>
                <span className="font-display text-3xl text-cream/40">0{index + 1}</span>
              </div>
              <p className="mt-6 max-w-2xl text-base leading-8 text-cream/80">
                {principle.copy}
              </p>
            </div>
          ))}
        </div>
      ),
    },
    {
      eyebrow: "Looking Forward",
      title: "An intelligent travel companion for the next era of exploration.",
      body: [
        "Kiru is more than an outfit recommendation app.",
        "We&apos;re building an intelligent travel companion that grows alongside every journey. From virtual wardrobes and AI-powered styling to cultural guidance, smart packing, and future technologies like virtual try-on, our mission is to redefine how people prepare for travel.",
        "This is only the beginning.",
      ],
      image:
        "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=2200&q=80",
    },
  ];

  return (
    <main className="bg-background text-foreground">
      <div className="space-y-0">
        {sections.map((section, index) => {
          const shift = Math.max(-22, scrollY * 0.015 - index * 16);
          return (
            <section
              key={section.eyebrow}
              className="relative min-h-screen overflow-hidden border-b border-white/10 bg-charcoal text-cream"
              data-reveal
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                style={{
                  backgroundImage: `url('${section.image}')`,
                  transform: `translateY(${shift}px)`,
                  backgroundPositionY: `${50 + scrollY * 0.01}%`,
                }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(17,17,17,0.92)_5%,rgba(17,17,17,0.68)_45%,rgba(17,17,17,0.88)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_40%)]" />

              <div className="relative mx-auto flex min-h-screen max-w-[1280px] items-center px-6 py-24 md:px-10 md:py-32">
                <div className="grid w-full gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
                  <div className="max-w-md space-y-4">
                    <p className="text-xs font-medium uppercase tracking-[0.3em] text-cream/65">
                      {section.eyebrow}
                    </p>
                    <h2 className="font-display text-[clamp(2rem,4.1vw,3rem)] leading-[0.95] tracking-[-0.02em] text-cream">
                      {section.title}
                    </h2>
                  </div>

                  <div className="space-y-5 text-lg leading-8 text-cream/80">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {section.content}
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        <section className="relative overflow-hidden bg-background text-foreground" data-reveal>
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(245,236,223,0.95),rgba(255,255,255,0.92))]" />
          <div className="relative mx-auto flex max-w-[900px] items-center px-6 py-20 md:px-10 md:py-24">
            <blockquote className="max-w-3xl font-display text-[clamp(1.8rem,4.2vw,3rem)] leading-tight text-foreground">
              The world is waiting. Dress for the journey.
            </blockquote>
          </div>
        </section>
      </div>
    </main>
  );
}


