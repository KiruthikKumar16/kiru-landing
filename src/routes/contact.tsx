import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageFrame } from "../components/site-shell";

export const Route = createFileRoute("/contact")({
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
      <ContactDetails />
    </PageFrame>
  );
}

function Hero() {
  return (
    <section className="relative h-[50vh] min-h-[50vh] w-full overflow-hidden text-cream">
      <img
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2400&q=85"
        alt="Traveler at a desk writing a message next to a passport and laptop"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/25 via-charcoal/10 to-charcoal/80" />
      <div className="relative mx-auto flex h-full max-w-[1600px] flex-col justify-center px-6 md:px-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <div className="font-display text-[5.5vw] leading-[0.95] uppercase tracking-[-0.05em] sm:text-[5rem] font-black">
              <span className="block">GET IN</span>
              <span className="block">TOUCH</span>
            </div>
          </div>

          <div className="max-w-[56rem] text-sm uppercase tracking-[0.24em] text-cream/90 sm:text-base">
            <p className="mb-4 text-cream/90 font-semibold leading-[1.2]">
              <span className="block whitespace-nowrap">YOU ARE WELCOME TO CONTACT US WITH GENERAL INQUIRIES</span>
            </p>
            <p className="text-cream/90 font-semibold">THROUGH THE CHANNELS BELOW.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactDetails() {
  return (
    <section className="bg-charcoal text-cream h-[50vh] min-h-[50vh] border-b border-cream/15">
      <div className="mx-auto flex h-full max-w-[1600px] items-center px-6 md:px-16">
        <div className="grid w-full gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <div>
            <p className="font-display text-3xl font-semibold uppercase tracking-[0.24em] text-cream/90">
              CONTACT INFORMATION
            </p>
          </div>

          <div className="space-y-5 text-sm text-cream/80">
            <p className="font-medium">info@kiru.com</p>
            <p>T: +46 31-45 44 60</p>
          </div>
        </div>
      </div>
    </section>
  );
}


