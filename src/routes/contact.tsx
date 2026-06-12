import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { Reveal } from "@/components/Reveal";

import heroImage from "@/assets/hero-image.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — L'OISEAU DÉ" },
      { name: "description", content: "Reach the L'OISEAU DÉ studio for press, wholesale, custom commissions or personal enquiries. We answer every message within two working days." },
      { property: "og:title", content: "Contact Us — L'OISEAU DÉ" },
      { property: "og:description", content: "Get in touch with the atelier — press, wholesale, or personal enquiries." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Contact Us — L'OISEAU DÉ" },
      { name: "twitter:description", content: "Get in touch with the atelier — press, wholesale, or personal enquiries." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden border-b border-charcoal bg-foreground text-background">
          <img src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/70 to-transparent" />
          <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-14 md:px-10 md:pb-20">
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
              className="font-display text-sm italic text-background/70"
            >
              We'd love to hear from you
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="mt-4 font-display font-medium leading-[0.88] tracking-[-0.03em] text-[16vw] md:text-[8vw]"
            >
              Contact <span className="italic text-sand">us</span>
            </motion.h1>
          </div>
        </section>

        {/* Body */}
        <section className="border-b border-charcoal py-24 md:py-32">
          <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-16 px-6 md:px-10 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
            {/* Info */}
            <div>
              <Reveal as="p" className="text-[11px] tracking-[0.3em] text-sand">— THE STUDIO</Reveal>
              <Reveal as="h2" className="mt-6 font-display text-4xl leading-tight tracking-tight md:text-5xl">
                A note, a question, <span className="italic text-sand">a collaboration.</span>
              </Reveal>
              <Reveal delay={0.2} className="mt-6 max-w-md text-sm leading-relaxed text-foreground/70">
                Reach out for press, wholesale, custom commissions, or simply to talk about scent.
                We answer every message within two working days.
              </Reveal>

              <div className="mt-12 space-y-6">
                <InfoRow icon={<MapPin size={16} />} label="Studio">
                  Market str. 42, CA 10028, USA
                </InfoRow>
                <InfoRow icon={<Mail size={16} />} label="Email">
                  <a href="mailto:sales@loiseau.com" className="hover:text-sand">sales@loiseau.com</a>
                </InfoRow>
                <InfoRow icon={<Phone size={16} />} label="Phone">
                  <a href="tel:+12345678910" className="hover:text-sand">+1 234 56 7890</a>
                </InfoRow>
              </div>
            </div>

            {/* Form */}
            <Reveal delay={0.2}>
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="space-y-7 border border-charcoal bg-cream p-8 md:p-12"
              >
                <Field label="Your name" name="name" type="text" required />
                <Field label="Email address" name="email" type="email" required />
                <Field label="Subject" name="subject" type="text" />
                <div>
                  <label className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-foreground/60">Message</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full resize-none border-b border-foreground/30 bg-transparent py-2 text-sm focus:border-sand focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="group relative inline-flex items-center gap-3 overflow-hidden bg-foreground px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-background"
                >
                  <span className="absolute inset-0 -translate-x-full bg-sand transition-transform duration-500 group-hover:translate-x-0" />
                  <span className="relative">{sent ? "Message sent ✦" : "Send message"}</span>
                </button>
              </form>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function InfoRow({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4 border-t border-charcoal pt-6">
      <span className="mt-1 text-sand">{icon}</span>
      <div>
        <p className="text-[11px] uppercase tracking-[0.2em] text-foreground/50">{label}</p>
        <p className="mt-1 font-display text-xl text-foreground">{children}</p>
      </div>
    </div>
  );
}

function Field({ label, name, type, required }: { label: string; name: string; type: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-foreground/60">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full border-b border-foreground/30 bg-transparent py-2 text-sm focus:border-sand focus:outline-none"
      />
    </div>
  );
}
