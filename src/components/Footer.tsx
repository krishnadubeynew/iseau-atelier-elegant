export function Footer() {
  return (
    <footer className="border-t border-charcoal bg-background">
      <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          <div>
            <h3 className="font-display text-5xl leading-none tracking-tight md:text-7xl">
              L'OISEAU <span className="italic text-sand">DÉ</span>
            </h3>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-foreground/60">
              A modern atelier of cosmetics — composed slowly, lived with daily. Made in small batches, shipped worldwide.
            </p>
          </div>
          <div className="text-sm">
            <p className="mb-3 text-[11px] tracking-[0.3em] text-sand">STUDIO</p>
            <p className="text-foreground/80">Market str. 42</p>
            <p className="text-foreground/80">CA 10028, USA</p>
            <a href="mailto:sales@loiseau.com" className="mt-4 inline-block text-foreground/80 hover:text-foreground">
              sales@loiseau.com
            </a>
          </div>
          <div className="text-sm md:text-right">
            <p className="mb-3 text-[11px] tracking-[0.3em] text-sand">CONTACT</p>
            <a href="tel:+12345678910" className="font-display text-3xl text-foreground hover:text-sand md:text-4xl">
              +1 234 56 7890
            </a>
            <div className="mt-6 flex gap-5 text-foreground/70 md:justify-end">
              <a href="#">Instagram</a><a href="#">Pinterest</a><a href="#">Journal</a>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-3 border-t border-charcoal pt-6 text-[11px] tracking-[0.3em] text-foreground/50 md:flex-row md:items-center">
          <span>© 2026 L'OISEAU DÉ</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-foreground">RETURN POLICY</a>
            <a href="#" className="hover:text-foreground">TERMS OF USE</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
