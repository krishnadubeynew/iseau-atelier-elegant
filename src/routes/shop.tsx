import { useEffect, useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Search, X } from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";

import heroImage from "@/assets/hero-image.jpg";
import prodAmber from "@/assets/prod-amber.jpg";
import prodPump from "@/assets/prod-pump.jpg";
import prodSerene from "@/assets/prod-serene.jpg";
import velvetCitrus from "@/assets/velvet-citrus.jpg";
import earthNoir from "@/assets/earth-noir.jpg";
import mosaic1 from "@/assets/mosaic-1.jpg";
import mosaic2 from "@/assets/mosaic-2.jpg";
import mosaic3 from "@/assets/mosaic-3.jpg";
import mosaic4 from "@/assets/mosaic-4.jpg";
import mosaic5 from "@/assets/mosaic-5.jpg";
import mosaic6 from "@/assets/mosaic-6.jpg";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop All — L'OISEAU DÉ" },
      { name: "description", content: "Browse the full L'OISEAU DÉ catalogue of luxury fragrance, cleansers and serums. Filter by category, brand and gender." },
      { property: "og:title", content: "Shop All — L'OISEAU DÉ" },
      { property: "og:description", content: "The full atelier collection — luxury fragrance, cleansers and serums, curated and filterable." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Shop All — L'OISEAU DÉ" },
      { name: "twitter:description", content: "The full atelier collection — luxury fragrance, cleansers and serums." },
    ],
    links: [{ rel: "canonical", href: "/shop" }],
  }),
  component: ShopPage,
});

type Gender = "All" | "Women" | "Men" | "Unisex";
type Category = "Fragrance" | "Cleanser" | "Serums";
type Brand = "Dior" | "Estee Lauder" | "Clinique" | "Kiehl's" | "L'oreal" | "Lancome" | "Mac";

type Product = {
  name: string;
  price: number;
  discount?: number;
  img: string;
  gender: Exclude<Gender, "All">;
  category: Category;
  brand: Brand;
};

const PRODUCTS: Product[] = [
  { name: "Flumam Amber", price: 180, discount: 30, img: prodAmber, gender: "Unisex", category: "Fragrance", brand: "Dior" },
  { name: "Eco Display", price: 95, discount: 15, img: mosaic1, gender: "Women", category: "Cleanser", brand: "Clinique" },
  { name: "Marble Mortar", price: 120, discount: 10, img: mosaic2, gender: "Unisex", category: "Serums", brand: "Kiehl's" },
  { name: "Elegant Fragrance", price: 210, discount: 25, img: velvetCitrus, gender: "Women", category: "Fragrance", brand: "Lancome" },
  { name: "Black Pump", price: 85, img: prodPump, gender: "Men", category: "Cleanser", brand: "L'oreal" },
  { name: "White Stone", price: 110, discount: 15, img: mosaic3, gender: "Unisex", category: "Serums", brand: "Estee Lauder" },
  { name: "Noire Amber", price: 105, img: earthNoir, gender: "Men", category: "Fragrance", brand: "Dior" },
  { name: "Serene Aesthetic", price: 140, discount: 20, img: prodSerene, gender: "Women", category: "Serums", brand: "Estee Lauder" },
  { name: "Lavender Soap", price: 60, img: mosaic4, gender: "Unisex", category: "Cleanser", brand: "Kiehl's" },
  { name: "Beauty Flat Lay", price: 75, discount: 15, img: mosaic5, gender: "Women", category: "Cleanser", brand: "Mac" },
  { name: "Tobacco Mint", price: 340, discount: 25, img: mosaic6, gender: "Men", category: "Fragrance", brand: "Lancome" },
  { name: "Eternal Musk", price: 120, discount: 30, img: velvetCitrus, gender: "Unisex", category: "Fragrance", brand: "Dior" },
];

const CATEGORIES: Category[] = ["Fragrance", "Cleanser", "Serums"];
const BRANDS: Brand[] = ["Dior", "Estee Lauder", "Clinique", "Kiehl's", "L'oreal", "Lancome", "Mac"];

function ShopPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Catalogue />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 180]);
  return (
    <section className="relative h-[55vh] min-h-[460px] w-full overflow-hidden border-b border-charcoal bg-foreground text-background">
      <motion.div style={{ y }} className="absolute inset-0">
        <img src={heroImage} alt="" className="h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/70 to-transparent" />
      </motion.div>
      <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-14 md:px-10 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-sm italic text-background/70"
        >
          E-commerce <span className="text-sand">·</span> Cosmetics <span className="text-sand">·</span> Beauty
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="mt-4 font-display font-medium leading-[0.88] tracking-[-0.03em] text-[18vw] md:text-[9vw]"
        >
          SHOP ALL
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-2 font-display text-2xl italic text-sand md:text-3xl"
        >
          Make-up
        </motion.p>
      </div>
    </section>
  );
}

function Catalogue() {
  const [search, setSearch] = useState("");
  const [debounced, setDebounced] = useState("");
  const [gender, setGender] = useState<Gender>("All");
  const [cats, setCats] = useState<Set<Category>>(new Set());
  const [brands, setBrands] = useState<Set<Brand>>(new Set());
  const [mobileOpen, setMobileOpen] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDebounced(search), 200);
    return () => clearTimeout(t);
  }, [search]);

  useEffect(() => {
    setTransitioning(true);
    const t = setTimeout(() => setTransitioning(false), 250);
    return () => clearTimeout(t);
  }, [debounced, gender, cats, brands]);

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (debounced && !p.name.toLowerCase().includes(debounced.toLowerCase())) return false;
      if (gender !== "All" && p.gender !== gender) return false;
      if (cats.size && !cats.has(p.category)) return false;
      if (brands.size && !brands.has(p.brand)) return false;
      return true;
    });
  }, [debounced, gender, cats, brands]);

  const activeCount =
    (gender !== "All" ? 1 : 0) + cats.size + brands.size + (debounced ? 1 : 0);

  const clearAll = () => {
    setSearch("");
    setGender("All");
    setCats(new Set());
    setBrands(new Set());
  };

  const toggleCat = (c: Category) => {
    const n = new Set(cats);
    n.has(c) ? n.delete(c) : n.add(c);
    setCats(n);
  };
  const toggleBrand = (b: Brand) => {
    const n = new Set(brands);
    n.has(b) ? n.delete(b) : n.add(b);
    setBrands(n);
  };

  const filtersNode = (
    <FilterPanel
      search={search}
      onSearch={setSearch}
      gender={gender}
      onGender={setGender}
      cats={cats}
      onToggleCat={toggleCat}
      brands={brands}
      onToggleBrand={toggleBrand}
      onClear={clearAll}
    />
  );

  return (
    <section className="border-b border-charcoal">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-11 px-6 pb-32 pt-12 md:px-10 lg:grid-cols-[260px_1fr]">
        {/* Sidebar desktop */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">{filtersNode}</div>
        </aside>

        {/* Grid */}
        <div>
          <div className="mb-6 flex items-center justify-between">
            <p className="text-[11px] uppercase tracking-[0.3em] text-foreground/50">Products</p>
            <p className="text-[11px] uppercase tracking-[0.3em] text-foreground/50">
              {filtered.length} items
            </p>
          </div>

          <motion.div
            animate={{ opacity: transitioning ? 0.4 : 1 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-2 gap-x-6 gap-y-9 md:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <ProductCard key={p.name} product={p} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="py-32 text-center font-display text-2xl italic text-foreground/40">
              No products found
            </div>
          )}
        </div>
      </div>

      {/* Mobile filters trigger */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2 rounded-full border border-charcoal bg-foreground px-8 py-3 text-[11px] tracking-[0.3em] text-background shadow-xl lg:hidden"
      >
        FILTERS{activeCount > 0 ? ` (${activeCount})` : ""}
      </button>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 lg:hidden"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-0 bottom-0 z-50 max-h-[85vh] overflow-y-auto rounded-t-2xl bg-background p-6 lg:hidden"
            >
              <div className="mb-6 flex items-center justify-between">
                <p className="font-display text-2xl">Filters</p>
                <button onClick={() => setMobileOpen(false)} aria-label="Close">
                  <X size={20} />
                </button>
              </div>
              {filtersNode}
              <button
                onClick={() => setMobileOpen(false)}
                className="mt-8 w-full bg-foreground py-4 text-[11px] tracking-[0.3em] text-background"
              >
                APPLY ({filtered.length})
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

function FilterPanel(props: {
  search: string;
  onSearch: (s: string) => void;
  gender: Gender;
  onGender: (g: Gender) => void;
  cats: Set<Category>;
  onToggleCat: (c: Category) => void;
  brands: Set<Brand>;
  onToggleBrand: (b: Brand) => void;
  onClear: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="mb-5 text-[11px] uppercase tracking-[0.2em] text-foreground/50">Filters</p>

      {/* Search */}
      <FilterGroup delay={0}>
        <div className="relative">
          <input
            value={props.search}
            onChange={(e) => props.onSearch(e.target.value)}
            placeholder="Search"
            className="w-full border-b border-charcoal bg-transparent py-3 pr-7 text-sm text-foreground placeholder:text-foreground/40 focus:border-sand focus:outline-none"
          />
          <Search size={14} className="absolute right-1 top-1/2 -translate-y-1/2 text-foreground/40" />
        </div>
      </FilterGroup>

      {/* Gender */}
      <FilterGroup delay={0.08} label="Gender">
        <div className="space-y-3">
          {(["All", "Women", "Men", "Unisex"] as Gender[]).map((g) => (
            <label key={g} className="flex cursor-pointer items-center gap-3 text-sm">
              <span className="relative flex h-4 w-4 items-center justify-center rounded-full border border-foreground/50">
                {props.gender === g && <span className="h-2 w-2 rounded-full bg-sand" />}
              </span>
              <input
                type="radio"
                className="hidden"
                checked={props.gender === g}
                onChange={() => props.onGender(g)}
              />
              <span className="text-foreground/80">{g}</span>
            </label>
          ))}
        </div>
      </FilterGroup>

      {/* Category */}
      <FilterGroup delay={0.16} label="Category">
        <div className="space-y-3">
          {CATEGORIES.map((c) => (
            <Checkbox
              key={c}
              label={c}
              checked={props.cats.has(c)}
              onToggle={() => props.onToggleCat(c)}
            />
          ))}
        </div>
      </FilterGroup>

      {/* Brand */}
      <FilterGroup delay={0.24} label="Brand">
        <div className="space-y-3">
          {BRANDS.map((b) => (
            <Checkbox
              key={b}
              label={b}
              checked={props.brands.has(b)}
              onToggle={() => props.onToggleBrand(b)}
            />
          ))}
        </div>
      </FilterGroup>

      <button
        onClick={props.onClear}
        className="mt-8 text-xs text-foreground/50 underline underline-offset-4 hover:text-foreground"
      >
        Clear filter
      </button>
    </motion.div>
  );
}

function FilterGroup({
  children,
  label,
  delay = 0,
}: {
  children: React.ReactNode;
  label?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="border-b border-charcoal/70 py-5"
    >
      {label && (
        <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-foreground/70">{label}</p>
      )}
      {children}
    </motion.div>
  );
}

function Checkbox({
  label,
  checked,
  onToggle,
}: {
  label: string;
  checked: boolean;
  onToggle: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-3 text-sm">
      <span
        className={`flex h-4 w-4 items-center justify-center border border-foreground/50 transition-colors ${
          checked ? "border-sand bg-sand" : ""
        }`}
      >
        {checked && (
          <svg viewBox="0 0 12 12" className="h-3 w-3 text-background">
            <path d="M2 6l3 3 5-6" stroke="currentColor" strokeWidth="1.8" fill="none" />
          </svg>
        )}
      </span>
      <input type="checkbox" className="hidden" checked={checked} onChange={onToggle} />
      <span className="text-foreground/80">{label}</span>
    </label>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col"
      data-cursor-hover
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-cream">
        <img
          src={product.img}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[350ms] ease-out group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15" />
        {product.discount && (
          <span className="absolute left-3 top-3 rounded-full bg-foreground px-3 py-1 text-[11px] text-background">
            %{product.discount}
          </span>
        )}
        <button className="absolute inset-x-0 bottom-0 translate-y-full bg-foreground py-3.5 text-[11px] uppercase tracking-[0.3em] text-background transition-transform duration-300 group-hover:translate-y-0">
          Add to cart
        </button>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <h3 className="font-display text-[15px] text-foreground">{product.name}</h3>
        <span className="text-sm text-sand">${product.price}</span>
      </div>
    </motion.div>
  );
}
