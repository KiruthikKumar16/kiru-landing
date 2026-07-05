import { createFileRoute } from "@tanstack/react-router";
import { PageFrame } from "../components/site-shell";

export const Route = createFileRoute("/travel-assistance")({
  component: TravelAssistance,
});

const NAV = [
  { label: "Features", href: "/features" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Download", href: "/#download" },
  { label: "Contact", href: "/contact" },
];

function TravelAssistance() {
  return (
    <PageFrame navItems={NAV} homeHref="/">
      <main className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="font-display text-4xl">Travel Assistance</h1>
        <p className="mt-4 text-lg text-muted-foreground">Placeholder page for Travel Assistance.</p>
      </main>
    </PageFrame>
  );
}
