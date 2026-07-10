import { createFileRoute } from "@tanstack/react-router";
import { PageFrame } from "../components/site-shell";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicy,
});

const NAV = [
  { label: "Features", href: "/features" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Download", href: "/#download" },
  { label: "Contact", href: "/contact" },
];

export default function PrivacyPolicy() {
  return (
    <PageFrame navItems={NAV} homeHref="/">
      <section className="relative min-h-screen overflow-hidden bg-charcoal text-cream">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(17,17,17,0.9)_10%,rgba(17,17,17,0.55)_55%,rgba(17,17,17,0.82)_100%)]" />
        <div className="relative mx-auto flex min-h-screen max-w-[1600px] flex-col justify-center px-6 py-28 md:px-16 md:py-36">
          <div className="max-w-4xl space-y-6" data-reveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-cream/70">LEGAL</p>
            <h1 className="font-display text-[clamp(2.5rem,6vw,4rem)] leading-[0.95] tracking-[-0.03em]">Privacy Policy</h1>
            <p className="text-lg text-cream/80">Last updated: August 2026</p>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-5xl px-6 py-16 md:py-24 text-foreground bg-background text-lg">
        <div className="space-y-12">
          <section data-reveal className="md:grid md:grid-cols-[220px_1fr] md:gap-10">
            <div className="md:pr-4">
              <h2 className="text-2xl md:text-3xl font-display font-semibold">Overview</h2>
              <p className="text-sm text-muted-foreground mt-2">Short summary and scope</p>
            </div>
            <div>
              <p className="mb-4 leading-8">
                At <strong>Kiru</strong>, we believe great travel experiences begin with trust. This Privacy Policy explains how we collect, use, and protect your information when you use our website, applications, and related services.
              </p>
              <p className="mb-6 leading-8">By using Kiru, you agree to the practices described in this policy.</p>
            </div>
          </section>

          <section data-reveal className="md:grid md:grid-cols-[220px_1fr] md:gap-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-semibold">Our Commitment</h2>
            </div>
            <div>
              <p className="mb-6 leading-8">Kiru was built to help travelers pack smarter, dress better, and make the most of their wardrobes. To provide personalized recommendations, we collect certain information about your preferences, wardrobe, and travel plans. We are committed to handling that information responsibly and transparently.</p>
              <p className="mb-6 leading-8">Your data belongs to you. We do not sell personal information to third parties.</p>
            </div>
          </section>

          <section data-reveal className="md:grid md:grid-cols-[220px_1fr] md:gap-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-semibold">Information We Collect</h2>
            </div>
            <div>
              <p className="mb-4 leading-8">To provide our services, we may collect information including:</p>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold mt-4">Account Information</h3>
                  <ul className="list-disc ml-6 mb-4 space-y-2">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Profile picture</li>
                    <li>Authentication information</li>
                  </ul>

                  <h3 className="font-semibold mt-4">Profile Information</h3>
                  <ul className="list-disc ml-6 mb-4 space-y-2">
                    <li>Style preferences</li>
                    <li>Travel preferences</li>
                    <li>Clothing sizes</li>
                    <li>Preferred fit and comfort settings</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mt-4">Wardrobe Information</h3>
                  <ul className="list-disc ml-6 mb-4 space-y-2">
                    <li>Clothing photos</li>
                    <li>Garment details</li>
                    <li>Saved outfits</li>
                    <li>Wardrobe organization data</li>
                  </ul>

                  <h3 className="font-semibold mt-4">Travel Information</h3>
                  <ul className="list-disc ml-6 mb-4 space-y-2">
                    <li>Destinations</li>
                    <li>Travel dates</li>
                    <li>Itineraries</li>
                    <li>Activities and travel preferences</li>
                  </ul>
                </div>
              </div>

              <h3 className="font-semibold mt-4">Usage Information</h3>
              <ul className="list-disc ml-6 mb-6 space-y-2">
                <li>App interactions</li>
                <li>Feature usage</li>
                <li>Device information</li>
                <li>Performance analytics</li>
              </ul>
            </div>
          </section>

          <section data-reveal className="md:grid md:grid-cols-[220px_1fr] md:gap-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-semibold">How We Use Your Information</h2>
            </div>
            <div>
              <p className="mb-4 leading-8">We use collected information to:</p>
              <ul className="list-disc ml-6 mb-6 space-y-2">
                <li>Create personalized outfit recommendations</li>
                <li>Generate packing lists</li>
                <li>Provide destination-specific insights</li>
                <li>Improve recommendation accuracy</li>
                <li>Deliver weather-aware styling suggestions</li>
                <li>Enhance user experience</li>
                <li>Improve platform performance</li>
                <li>Provide customer support</li>
                <li>Develop future features</li>
              </ul>
            </div>
          </section>

          <section data-reveal>
            <h2 className="text-xl font-medium mb-3">Artificial Intelligence &amp; Personalization</h2>
            <p className="mb-4">Kiru uses artificial intelligence to analyze wardrobe items, understand travel contexts, and generate personalized recommendations.</p>
            <p className="mb-6">AI-generated suggestions are based on your wardrobe, travel plans, weather conditions, destination insights, and personal preferences. While we strive for accuracy, recommendations are intended as guidance and should not replace personal judgment.</p>
          </section>

          <section data-reveal>
            <h2 className="text-xl font-medium mb-3">Data Security</h2>
            <p className="mb-4">We take reasonable measures to protect your information from unauthorized access, misuse, alteration, or disclosure.</p>
            <p className="mb-6">These measures may include encrypted data transmission, secure authentication systems, access controls, and regular security monitoring. No internet-based service can guarantee absolute security, but protecting user information remains one of our highest priorities.</p>
          </section>

          <section data-reveal>
            <h2 className="text-xl font-medium mb-3">Sharing Information</h2>
            <p className="mb-4">Kiru does not sell personal information. We may share limited information only when necessary with:</p>
            <h3 className="font-semibold mt-4">Service Providers</h3>
            <p className="mb-4">Trusted partners that help operate our platform, including hosting, analytics, authentication, and cloud infrastructure providers.</p>
            <h3 className="font-semibold mt-4">Legal Requirements</h3>
            <p className="mb-4">When required by law, regulation, legal process, or governmental request.</p>
            <h3 className="font-semibold mt-4">Business Transfers</h3>
            <p className="mb-6">In the event of a merger, acquisition, or asset transfer, user information may be transferred as part of the transaction.</p>
          </section>

          <section data-reveal>
            <h2 className="text-xl font-medium mb-3">Your Choices</h2>
            <p className="mb-4">You remain in control of your information. You may update profile information, modify wardrobe data, remove uploaded content, manage communication preferences, or request account deletion. When an account is deleted, we will remove or anonymize personal information in accordance with applicable laws and operational requirements.</p>
          </section>

          <section data-reveal>
            <h2 className="text-xl font-medium mb-3">Cookies &amp; Analytics</h2>
            <p className="mb-6">Kiru may use cookies and similar technologies to remember preferences, improve performance, analyze usage patterns, and enhance user experience. You may control cookie preferences through your browser settings.</p>
          </section>

          <section data-reveal>
            <h2 className="text-xl font-medium mb-3">Children's Privacy</h2>
            <p className="mb-6">Kiru is not intended for children under the age of 13. We do not knowingly collect personal information from children. If we become aware that such information has been collected, we will take appropriate steps to remove it.</p>
          </section>

          <section data-reveal>
            <h2 className="text-xl font-medium mb-3">International Users</h2>
            <p className="mb-6">Kiru may be accessed from countries around the world. By using our services, you acknowledge that information may be processed and stored in locations where data protection laws may differ from those in your country of residence.</p>
          </section>

          <section data-reveal>
            <h2 className="text-xl font-medium mb-3">Changes to This Policy</h2>
            <p className="mb-6">As Kiru evolves, this Privacy Policy may be updated periodically to reflect new features, legal requirements, or operational changes. When significant changes are made, we will provide notice through the platform or other appropriate channels.</p>
          </section>

          <section data-reveal>
            <h2 className="text-xl font-medium mb-3">Contact Us</h2>
            <p className="mb-6">Questions about this Privacy Policy?</p>
            <p className="mb-6">Kiru<br/>AI-Powered Travel Stylist<br/>Email: <a href="mailto:privacy@kiru.app" className="text-terracotta transition-all hover:underline hover:text-terracotta/90">privacy@kiru.app</a><br/>Support: <a href="mailto:support@kiru.app" className="text-terracotta transition-all hover:underline hover:text-terracotta/90">support@kiru.app</a></p>
          </section>

          <section data-reveal>
            <h2 className="text-xl font-medium mb-3">Our Philosophy</h2>
            <blockquote className="pl-4 border-l-4 border-terracotta/80 italic">Your wardrobe is personal. Your journeys are personal. Your data should be treated the same way.</blockquote>
          </section>
        </div>
      </main>
    </PageFrame>
  );
}
