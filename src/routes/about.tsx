import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { Reveal } from "@/components/Reveal";

import heroImage from "@/assets/hero-image.jpg";
import mosaic2 from "@/assets/mosaic-2.jpg";
import mosaic5 from "@/assets/mosaic-5.jpg";
import mosaic3 from "@/assets/mosaic-3.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — L'OISEAU DÉ" },
      { name: "description", content: "The story of L'OISEAU DÉ: a modern atelier composing cosmetics slowly, in small batches." },
      { property: "og:title", content: "About Us — L'OISEAU DÉ" },
      { property: "og:description", content: "A modern atelier of cosmetics composed slowly." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[460px] w-full overflow-hidden border-b border-charcoal bg-foreground text-background">
          <img src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-tr from-foreground via-foreground/60 to-transparent" />
          <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-14 md:px-10 md:pb-20">
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
              className="font-display text-sm italic text-background/70"
            >
              The atelier <span className="text-sand">·</span> Est. 2018
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="mt-4 font-display font-medium leading-[0.88] tracking-[-0.03em] text-[18vw] md:text-[9vw]"
            >
              About <span className="italic text-sand">us</span>
            </motion.h1>
          </div>
        </section>

        {/* Story */}
        <section className="border-b border-charcoal py-28 md:py-40">
          <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-16 px-6 md:px-10 lg:grid-cols-[1fr_1.1fr]">
            <div className="flex flex-col gap-10">
              <Reveal as="p" className="text-[11px] tracking-[0.3em] text-sand">— OUR STORY</Reveal>
              <Reveal delay={0.15}>
                <div className="aspect-[4/3] overflow-hidden bg-charcoal">
                  <img
                    src={mosaic3}
                    alt="Inside the L'OISEAU DÉ atelier"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="mt-4 font-display text-xs italic text-foreground/50">
                  The atelier, Paris — morning light.
                </p>
              </Reveal>
            </div>
            <div>
              <Reveal as="h2" className="font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
                Cosmetics composed slowly, <span className="italic text-sand">the way couture is sewn.</span>
              </Reveal>
              <Reveal delay={0.2} className="mt-10 max-w-xl text-base leading-relaxed text-foreground/70">
                L'OISEAU DÉ began in a small Parisian studio as a single fragrance and a refusal to rush.
                Today we are a modern atelier — formulating in small batches, working with botanical actives
                and mineral pigments, and treating beauty as a quiet daily practice rather than performance.
              </Reveal>
              <Reveal delay={0.35} className="mt-6 max-w-xl text-base leading-relaxed text-foreground/70">
                Every object we ship is meant to be lived with: opened every morning, returned to every
                evening, refilled, never wasted. We design our own packaging, partner with independent
                growers, and write our own copy.
              </Reveal>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="border-b border-charcoal py-24 md:py-32">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <Reveal as="h2" className="mb-14 font-display text-4xl tracking-tight md:text-6xl">
              What we <span className="italic text-sand">believe</span>
            </Reveal>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              {[
                { n: "01", t: "Small batches", d: "Composed by hand, never produced at industrial scale." },
                { n: "02", t: "Honest formulas", d: "Botanical actives, mineral pigments, and nothing we wouldn't wear ourselves." },
                { n: "03", t: "Slow growth", d: "We release one collection a season. No flash sales, no shortcuts." },
              ].map((v, i) => (
                <Reveal key={v.n} delay={i * 0.1}>
                  <p className="font-display text-sm italic text-sand">{v.n}</p>
                  <h3 className="mt-3 font-display text-3xl tracking-tight">{v.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/60">{v.d}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Image pair */}
        <section className="border-b border-charcoal py-20">
          <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-4 px-6 md:grid-cols-2 md:px-10">
            <Reveal><div className="aspect-[4/5] overflow-hidden"><img src={mosaic2} alt="" className="h-full w-full object-cover" /></div></Reveal>
            <Reveal delay={0.15}><div className="aspect-[4/5] overflow-hidden"><img src={mosaic5} alt="" className="h-full w-full object-cover" /></div></Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
