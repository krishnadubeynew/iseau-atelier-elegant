import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { Reveal, Stagger, itemVariants } from "@/components/Reveal";

import heroImage from "@/assets/hero-image.jpg";
import velvetCitrus from "@/assets/velvet-citrus.jpg";
import earthNoir from "@/assets/earth-noir.jpg";
import catSkincare from "@/assets/cat-skincare.jpg";
import catCosmetics from "@/assets/cat-cosmetics.jpg";
import catFace from "@/assets/cat-face.jpg";
import campaign1 from "@/assets/campaign-1.jpg";
import campaign2 from "@/assets/campaign-2.jpg";
import campaign3 from "@/assets/campaign-3.jpg";
import prodAmber from "@/assets/prod-amber.jpg";
import prodPump from "@/assets/prod-pump.jpg";
import prodSerene from "@/assets/prod-serene.jpg";
import mosaic1 from "@/assets/mosaic-1.jpg";
import mosaic2 from "@/assets/mosaic-2.jpg";
import mosaic3 from "@/assets/mosaic-3.jpg";
import mosaic4 from "@/assets/mosaic-4.jpg";
import mosaic5 from "@/assets/mosaic-5.jpg";
import mosaic6 from "@/assets/mosaic-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "L'OISEAU DÉ — Modern Atelier of Cosmetics" },
      { name: "description", content: "Luxury skincare, cosmetics and face-health, curated for a deliberate beauty ritual." },
      { property: "og:title", content: "L'OISEAU DÉ — Modern Atelier of Cosmetics" },
      { property: "og:description", content: "Luxury skincare, cosmetics and face-health, curated for a deliberate beauty ritual." },
    ],
  }),
  component: Home,
});

const tickerItem = "NEW IN ✦ 50% OFF ✦ DISCOUNT ✦ ★ ";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Statement />
        <Categories />
        <Mosaic />
        <Campaign />
        <Featured />
        <Brands />
      </main>
      <Footer />
    </div>
  );
}

/* ----- Hero ----- */
function Hero() {
  const pills = ["Paradis", "E-commerce", "Cosmetics", "Beauty"];
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden border-b border-charcoal">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt="Luxury cosmetics editorial"
          className="h-full w-full object-cover"
        />
        {/* Readability overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      <div className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-center px-6 pt-28 md:px-10 md:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center gap-3"
        >
          {pills.map((p, i) => (
            <span key={p} className="flex items-center gap-3 font-display text-sm italic text-cream/70">
              {i > 0 && <span className="text-sand">·</span>}
              {p}
            </span>
          ))}
        </motion.div>

        <div className="animate-hero-in mt-8 md:mt-12">
          <h1 className="font-display font-medium leading-[0.88] tracking-[-0.03em] text-cream">
            <span className="block text-[16vw] md:text-[11vw]">L'OISEAU</span>
            <span className="block -mt-1 text-[16vw] italic text-sand md:-mt-2 md:text-[11vw]">DÉ</span>
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/80 md:text-base">
            A modern atelier of cosmetics — composed slowly, lived with daily.
            Small-batch formulas for a deliberate beauty ritual.
          </p>
        </div>

        <div className="mt-10 pb-10 text-[11px] tracking-[0.3em] text-cream/60 md:mt-24 md:pb-16">
          SCROLL TO EXPLORE
        </div>
      </div>

      {/* Marquee */}
      <div className="relative border-y border-charcoal bg-background py-5">
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 whitespace-nowrap font-display text-2xl md:text-3xl">
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className={`mx-6 ${i % 3 === 0 ? "italic text-sand" : ""}`}>{tickerItem}</span>
            ))}
          </div>
          <div className="animate-marquee flex shrink-0 whitespace-nowrap font-display text-2xl md:text-3xl" aria-hidden>
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className={`mx-6 ${i % 3 === 0 ? "italic text-sand" : ""}`}>{tickerItem}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----- Brand statement + product scroller ----- */
function Statement() {
  const words = "L'OISEAU DÉ IS A MODERN ATELIER offering pieces people love to wear, best style for and live with.".split(" ");
  const products = [
    { name: "VELVET CITRUS", tagline: "fresh, radiant, uplifting", img: velvetCitrus, tone: "bg-[#3a2516]" },
    { name: "EARTH NOIR", tagline: "warm, sensual, timeless", img: earthNoir, tone: "bg-[#15151a]" },
    { name: "PARADIS BLOOM", tagline: "soft, floral, dreamlike", img: mosaic1, tone: "bg-[#3a2f1e]" },
  ];

  return (
    <section className="border-b border-charcoal py-28 md:py-40">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-16 px-6 md:px-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <Reveal as="p" className="mb-8 text-[11px] tracking-[0.3em] text-sand">— ATELIER NO. 02</Reveal>
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            className="font-display text-4xl leading-[1.05] tracking-[-0.02em] md:text-6xl"
          >
            {words.map((w, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
                  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
                }}
                className={`mr-3 inline-block ${i >= 4 && i <= 6 ? "italic text-sand" : ""}`}
              >
                {w}
              </motion.span>
            ))}
          </motion.h2>
          <Reveal delay={0.3} className="mt-10 max-w-md text-sm leading-relaxed text-foreground/70">
            Each formula is composed in small batches, slowly — the way couture is sewn. We work with botanical actives, mineral pigments, and a refusal to rush.
          </Reveal>
        </div>

        <div className="-mr-6 md:-mr-10">
          <div className="scrollbar-none flex snap-x snap-mandatory gap-6 overflow-x-auto pr-6 md:pr-10">
            {products.map((p) => (
              <Reveal key={p.name} className="group w-[78vw] shrink-0 snap-start md:w-[460px]">
                <div className={`relative aspect-[4/5] overflow-hidden ${p.tone}`} data-cursor-hover>
                  <img src={p.img} alt={p.name} loading="lazy" className="img-hover h-full w-full object-cover" />
                  <div className="absolute left-5 top-5 rounded-full border border-cream/40 bg-black/30 px-3 py-1 text-[10px] tracking-[0.2em] text-cream backdrop-blur">
                    SIGNATURE
                  </div>
                </div>
                <div className="mt-5 flex items-end justify-between">
                  <div>
                    <h3 className="font-display text-2xl tracking-tight">{p.name}</h3>
                    <p className="mt-1 text-sm text-foreground/60">{p.tagline}</p>
                  </div>
                  <ArrowUpRight className="text-sand" />
                </div>
              </Reveal>
            ))}
            <div className="w-2 shrink-0" />
          </div>
          <p className="mt-6 text-[11px] tracking-[0.3em] text-foreground/40">← DRAG TO EXPLORE</p>
        </div>
      </div>
    </section>
  );
}

/* ----- Categories ----- */
function Categories() {
  const cats = [
    { title: "Skin Care", sub: "Rituals for daily renewal", img: catSkincare },
    { title: "Cosmetics", sub: "Pigments composed slowly", img: catCosmetics },
    { title: "Face Health", sub: "Science meets ceremony", img: catFace },
  ];
  return (
    <section className="border-b border-charcoal py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="mb-14 flex items-end justify-between">
          <Reveal as="h2" className="font-display text-4xl leading-none tracking-tight md:text-6xl">
            The collections
          </Reveal>
          <Reveal delay={0.2} className="hidden text-[11px] tracking-[0.3em] text-foreground/50 md:block">
            03 — CATEGORIES
          </Reveal>
        </div>
        <Stagger stagger={0.15} className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {cats.map((c) => (
            <motion.a
              href="#"
              variants={itemVariants}
              key={c.title}
              className="group relative block aspect-[3/5] overflow-hidden md:aspect-[3/4.4]"
              data-cursor-hover
            >
              <img src={c.img} alt={c.title} loading="lazy" className="img-hover h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <p className="text-[11px] tracking-[0.3em] text-sand">— SHOP</p>
                <h3 className="mt-2 font-display text-3xl md:text-5xl">{c.title}</h3>
                <div className="mt-3 flex items-center justify-between text-sm text-cream/80">
                  <span>{c.sub}</span>
                  <span className="flex items-center gap-2">
                    Explore
                    <span className="relative block h-px w-6 overflow-hidden bg-cream/40">
                      <span className="absolute inset-0 -translate-x-full bg-sand transition-transform duration-500 group-hover:translate-x-0" />
                    </span>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ----- Mosaic ----- */
function Mosaic() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -140]);

  return (
    <section className="relative overflow-hidden border-b border-charcoal py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal as="h2" className="font-display text-4xl leading-[0.95] tracking-tight md:text-7xl">
            <span className="block">An editorial</span>
            <span className="block italic text-sand">of small pleasures.</span>
          </Reveal>
          <Reveal delay={0.2} className="self-end text-sm text-foreground/60 md:max-w-sm">
            We see beauty as a quiet practice — light, water, fabric, scent. A few objects, chosen with care, repeated daily.
          </Reveal>
        </div>

        <div className="relative grid grid-cols-6 gap-3 md:gap-4">
          <Reveal className="col-span-3 row-span-2 md:col-span-2">
            <motion.div style={{ y: y1 }} className="group h-full overflow-hidden">
              <img src={mosaic1} loading="lazy" alt="" className="img-hover h-full w-full object-cover" />
            </motion.div>
          </Reveal>
          <Reveal delay={0.1} className="col-span-3 md:col-span-2">
            <div className="group h-72 overflow-hidden md:h-[260px]">
              <img src={mosaic2} loading="lazy" alt="" className="img-hover h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.2} className="col-span-3 md:col-span-2">
            <motion.div style={{ y: y2 }} className="group h-72 overflow-hidden md:h-[260px]">
              <img src={mosaic3} loading="lazy" alt="" className="img-hover h-full w-full object-cover" />
            </motion.div>
          </Reveal>
          <Reveal delay={0.15} className="col-span-3 md:col-span-2">
            <div className="group h-72 overflow-hidden md:h-[300px]">
              <img src={mosaic5} loading="lazy" alt="" className="img-hover h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.25} className="col-span-3 md:col-span-2">
            <motion.div style={{ y: y1 }} className="group h-72 overflow-hidden md:h-[300px]">
              <img src={mosaic4} loading="lazy" alt="" className="img-hover h-full w-full object-cover" />
            </motion.div>
          </Reveal>
          <Reveal delay={0.3} className="col-span-6 md:col-span-2">
            <div className="group h-72 overflow-hidden md:h-[300px]">
              <img src={mosaic6} loading="lazy" alt="" className="img-hover h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>

        {/* Floating editorial words */}
        <div className="pointer-events-none absolute inset-0">
          <Word text="CURATED" className="left-[6%] top-[26%] text-7xl md:text-9xl" />
          <Word text="Grace" italic className="right-[8%] top-[32%] text-5xl md:text-8xl" delay={0.1} />
          <Word text="DAILY LIFE" className="left-[40%] top-[50%] text-5xl md:text-7xl" delay={0.2} />
          <Word text="For" italic className="left-[14%] top-[68%] text-6xl md:text-8xl" delay={0.3} />
          <Word text="The" italic className="right-[24%] top-[70%] text-5xl md:text-7xl" delay={0.4} />
          <Word text="Simplicity" italic className="right-[6%] top-[82%] text-5xl md:text-7xl text-sand" delay={0.5} />
        </div>
      </div>
    </section>
  );
}

function Word({ text, className = "", italic, delay = 0 }: { text: string; className?: string; italic?: boolean; delay?: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
      className={`absolute font-display leading-none text-cream mix-blend-difference ${italic ? "italic" : ""} ${className}`}
      style={{ textShadow: "0 2px 30px rgba(0,0,0,0.5)" }}
    >
      {text}
    </motion.span>
  );
}

/* ----- Campaign banner ----- */
function Campaign() {
  const images = [campaign1, campaign2, campaign3];
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % images.length), 4500);
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <section className="relative h-[60vh] w-full overflow-hidden border-b border-charcoal md:h-[80vh]">
      {images.map((src, idx) => (
        <motion.img
          key={src}
          src={src}
          alt=""
          loading="lazy"
          className="animate-kenburns absolute inset-0 h-full w-full object-cover"
          animate={{ opacity: i === idx ? 1 : 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />
      <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-between px-6 py-12 md:px-10 md:py-16">
        <Reveal as="p" className="text-[11px] tracking-[0.3em] text-cream">CAMPAIGN — SS '26</Reveal>
        <div>
          <Reveal as="h2" className="font-display text-5xl leading-[0.95] tracking-tight md:text-8xl">
            A season <span className="italic text-sand">of light.</span>
          </Reveal>
          <Reveal delay={0.2} className="mt-6 flex items-center gap-3 text-[11px] tracking-[0.3em]">
            <span className="block h-px w-10 bg-sand" />
            VIEW THE FILM
          </Reveal>
        </div>
        <div className="flex gap-1.5">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-px w-10 transition-colors ${i === idx ? "bg-sand" : "bg-cream/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----- Featured products ----- */
function Featured() {
  const items = [
    { name: "Flumam Amber", price: "$180", discount: "%30", img: prodAmber },
    { name: "Black Pump", price: "$85", discount: "%20", img: prodPump },
    { name: "Serene Aesthetic", price: "$140", discount: "%15", img: prodSerene },
  ];
  return (
    <section className="border-b border-charcoal py-28 md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="mb-14 grid grid-cols-1 items-end gap-6 md:grid-cols-2">
          <Reveal as="h2" className="font-display text-4xl tracking-tight md:text-6xl">
            Most-loved <span className="italic text-sand">objects</span>
          </Reveal>
          <Reveal delay={0.15} className="md:justify-self-end">
            <a href="#" className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] text-foreground/70 hover:text-foreground">
              SHOP ALL <ArrowRight size={14} />
            </a>
          </Reveal>
        </div>

        <Stagger stagger={0.15} className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((p) => (
            <motion.div
              key={p.name}
              variants={itemVariants}
              className="group flex flex-col bg-cream text-foreground"
              data-cursor-hover
            >
              <div className="relative aspect-square overflow-hidden">
                <img src={p.img} alt={p.name} loading="lazy" className="img-hover h-full w-full object-cover" />
                <span className="absolute left-4 top-4 rounded-full bg-sand px-3 py-1 text-[11px] font-medium text-foreground">
                  {p.discount}
                </span>
                <div className="absolute inset-x-0 bottom-0 translate-y-full bg-foreground py-4 text-center text-[11px] tracking-[0.3em] text-background transition-transform duration-300 group-hover:translate-y-0">
                  ADD TO CART
                </div>
              </div>
              <div className="flex items-end justify-between p-5">
                <div>
                  <p className="text-[10px] tracking-[0.3em] text-foreground/60">FRAGRANCE</p>
                  <h3 className="mt-1 font-display text-2xl text-foreground">{p.name}</h3>
                </div>
                <span className="text-base font-medium text-foreground">{p.price}</span>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ----- Brands ----- */
function Brands() {
  const brands = [
    { name: "Dior", tag: "Couture parfum & rouge", count: 124 },
    { name: "Estée Lauder", tag: "Modern American skincare", count: 98 },
    { name: "Clinique", tag: "Allergy-tested, dermatologist developed", count: 76 },
    { name: "Kiehl's", tag: "Apothecary since 1851", count: 64 },
    { name: "L'Oréal", tag: "Because you're worth it", count: 142 },
    { name: "Lancôme", tag: "French art of beauty", count: 88 },
    { name: "Mac Cosmetics", tag: "All ages, all races, all genders", count: 110 },
  ];
  return (
    <section className="border-b border-charcoal py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="mb-14 flex items-end justify-between">
          <Reveal as="h2" className="font-display text-4xl tracking-tight md:text-6xl">
            Maisons we carry
          </Reveal>
          <Reveal delay={0.15} className="hidden text-[11px] tracking-[0.3em] text-foreground/50 md:block">
            04 — DIRECTORY
          </Reveal>
        </div>

        <ul>
          {brands.map((b, idx) => (
            <Reveal as="li" key={b.name} delay={idx * 0.04}>
              <a
                href="#"
                className="group relative grid grid-cols-12 items-center gap-4 overflow-hidden border-t border-charcoal py-7 md:py-9"
                data-cursor-hover
              >
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-sand transition-transform duration-700 ease-out group-hover:translate-x-0" />
                <span className="relative col-span-7 font-display text-3xl tracking-tight transition-colors duration-500 group-hover:text-background md:col-span-5 md:text-5xl">
                  {b.name}
                </span>
                <span className="relative col-span-3 hidden text-sm text-foreground/60 transition-colors duration-500 group-hover:text-background/70 md:block">
                  {b.tag}
                </span>
                <span className="relative col-span-4 justify-self-end text-sm text-foreground/60 transition-colors duration-500 group-hover:text-background/70 md:col-span-3">
                  {b.count} products
                </span>
                <ArrowRight
                  className="relative col-span-1 justify-self-end text-foreground transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-background"
                  size={18}
                />
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}


