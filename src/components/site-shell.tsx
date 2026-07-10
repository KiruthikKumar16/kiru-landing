import { Instagram, Twitter, Youtube } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

export type PageNavItem = {
  label: string;
  href: string;
};

type PageFrameProps = {
  children: ReactNode;
  navItems?: PageNavItem[];
  homeHref?: string;
};

const DEFAULT_MENU_BG_IMAGES = [
  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1467043237213-65f2da53396f?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=2000&q=80",
];

const DEFAULT_SECONDARY_LINKS: PageNavItem[] = [];

export function PageFrame({ children, navItems = [], homeHref = "/" }: PageFrameProps) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      const delta = y - lastY;
      if (Math.abs(delta) > 6) {
        setHidden(delta > 0 && y > 80);
        lastY = y;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add("reveal-in");
          } else {
            el.classList.remove("reveal-in");
          }
        });
      },
      { threshold: 0.12 },
    );

    const observeExisting = () => {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => io.observe(el));
    };

    observeExisting();

    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((n) => {
          if (!(n instanceof HTMLElement)) return;
          if (n.matches("[data-reveal]")) io.observe(n as Element);
          n.querySelectorAll && n.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
        });
      }
    });

    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = sessionStorage.getItem("kiru:backTarget");
      if (!raw) return;
      const parsed = JSON.parse(raw) as { path?: string; id?: string };
      if (!parsed?.path || !parsed?.id) return;

      const patch = () => {
        document.querySelectorAll<HTMLAnchorElement>(`a[href="${parsed.path}"]`).forEach((a) => {
          try {
            a.setAttribute("href", `${parsed.path}#${parsed.id}`);
            a.addEventListener("click", () => sessionStorage.removeItem("kiru:backTarget"), { once: true });
          } catch {}
        });
      };

      patch();
      const mo = new MutationObserver(() => patch());
      mo.observe(document.body, { childList: true, subtree: true });
      return () => mo.disconnect();
    } catch (e) {
      /* ignore */
    }
  }, []);

  const lightOnDark = !scrolled && !open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          hidden && !open ? "-translate-y-full" : "translate-y-0"
        } ${
          open
            ? "bg-transparent"
            : scrolled
              ? "bg-background/85 backdrop-blur-md border-b border-border/60"
              : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-8 md:px-10">
          <a
            href={homeHref}
            onClick={() => setOpen(false)}
            className={`font-display text-4xl md:text-5xl tracking-tight transition-colors ${
              lightOnDark ? "text-cream" : "text-foreground"
            } ${open ? "text-cream" : ""}`}
          >
            Kiru
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={`group transition-colors duration-500 ${
              open
                ? "text-cream"
                : lightOnDark
                  ? "text-cream hover:text-cream/80"
                  : "text-foreground hover:text-terracotta"
            }`}
          >
            <svg
              className="h-10 w-10 md:h-12 md:w-12"
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line
                x1="6"
                y1="10"
                x2="26"
                y2="10"
                className={`transition-all duration-500 ease-out origin-center ${
                  open ? "rotate-45 translate-y-[6px]" : "rotate-0"
                }`}
              />
              <line
                x1="6"
                y1="22"
                x2="26"
                y2="22"
                className={`transition-all duration-500 ease-out origin-center ${
                  open ? "-rotate-45 -translate-y-[6px]" : "rotate-0"
                }`}
              />
            </svg>
          </button>
        </div>
      </header>

      <MenuOverlay open={open} onClose={() => setOpen(false)} navItems={navItems} />
      <div className="min-h-screen bg-background text-foreground">{children}</div>
      <footer className="bg-charcoal text-cream">
        <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-16 md:grid-cols-[1.4fr_1fr]">
            <div>
              <div className="font-display font-black text-[clamp(1.5rem,6vw,3.5rem)] leading-[0.85] tracking-[-0.03em] text-cream space-y-0">
                <div className="ml-0">The</div>
                <div className="ml-12">World</div>
                <div className="ml-0">Is</div>
                <div className="ml-12">Waiting</div>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <FooterCol
                title="Product"
                items={[
                  { label: "Features", href: "/features" },
                  { label: "How It Works", href: "/how-it-works" },
                  { label: "Download", href: "/#download" },
                ]}
              />
              <FooterCol
                title="Company"
                items={[
                  { label: "About", href: "/about" },
                  { label: "Contact", href: "/contact" },
                ]}
              />
              <FooterCol title="Legal" items={[{ label: "Privacy Policy", href: "/privacy-policy" }]} />
            </div>
          </div>

          <div className="mt-20 flex flex-col-reverse items-start justify-between gap-6 border-t border-cream/15 pt-8 md:flex-row md:items-center">
            <p className="text-xs text-cream/50">
              © {new Date().getFullYear()} Kiru Studio. All rights reserved.
            </p>
            <div className="flex items-center gap-5 text-cream/70">
              <a
                href="#"
                aria-label="Instagram"
                className="transition-all hover:text-cream hover:underline underline-offset-2"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="transition-all hover:text-cream hover:underline underline-offset-2"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="transition-all hover:text-cream hover:underline underline-offset-2"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

type FooterLink = {
  label: string;
  href: string;
};

type FooterColProps = {
  title: string;
  items: FooterLink[];
};

function FooterCol({ title, items }: FooterColProps) {
  return (
    <div>
      <h3 className="text-sm font-medium uppercase tracking-[0.24em] text-cream/70">{title}</h3>
      <ul className="mt-5 space-y-3 text-sm text-cream/70">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="transition-all hover:text-cream hover:underline underline-offset-2"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

type MenuOverlayProps = {
  open: boolean;
  onClose: () => void;
  navItems: PageNavItem[];
};

function MenuOverlay({ open, onClose, navItems }: MenuOverlayProps) {
  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-40 text-cream transition-[clip-path,opacity] duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
        open
          ? "pointer-events-auto opacity-100 [clip-path:circle(150%_at_100%_0%)]"
          : "pointer-events-none opacity-0 [clip-path:circle(0%_at_100%_0%)]"
      }`}
    >
      <div className="absolute inset-0 bg-charcoal/85 backdrop-blur-sm" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,color-mix(in_oklab,var(--terracotta)_15%,transparent),transparent_70%)]" />

      <div className="relative flex h-full flex-col justify-end px-6 pb-12 pt-24 md:px-16 md:pb-16 md:pt-28">
        <div className="grid gap-14 md:grid-cols-[1.6fr_1fr] md:items-end md:gap-20">
          <nav>
            <ul className="space-y-1 md:space-y-2">
              {navItems.map((n, i) => (
                <li key={n.href} className="overflow-hidden">
                  <a
                    href={n.href}
                    onClick={onClose}
                    style={{ transitionDelay: open ? `${200 + i * 90}ms` : "0ms" }}
                    className={`group block whitespace-nowrap font-display text-[15vw] font-medium uppercase leading-[0.9] tracking-[-0.03em] transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:text-[9vw] ${
                      open ? "translate-y-0 opacity-100" : "translate-y-[110%] opacity-0"
                    }`}
                  >
                    <span className="inline-block transition-all duration-500 group-hover:translate-x-3 group-hover:text-terracotta group-hover:border-b-2 group-hover:border-terracotta pb-1">
                      {n.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div
            className={`grid grid-cols-2 gap-x-8 gap-y-4 border-t border-cream/20 pt-8 text-base transition-all duration-700 md:border-t-0 md:pt-0 ${open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
            style={{ transitionDelay: open ? "600ms" : "0ms" }}
          >
            {DEFAULT_SECONDARY_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                onClick={onClose}
                className="text-cream/85 hover:text-terracotta"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div
          className={`mt-14 flex flex-col-reverse items-start justify-between gap-4 border-t border-cream/15 pt-6 text-xs uppercase tracking-[0.24em] text-cream/50 transition-all duration-700 md:flex-row md:items-center ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          style={{ transitionDelay: open ? "780ms" : "0ms" }}
        >
          <span>© {new Date().getFullYear()} Kiru Studio</span>
          <div className="flex items-center gap-5 text-cream/70">
            <a
              href="#"
              aria-label="Instagram"
              className="transition-all hover:text-cream hover:underline underline-offset-2"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="transition-all hover:text-cream hover:underline underline-offset-2"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="transition-all hover:text-cream hover:underline underline-offset-2"
            >
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
