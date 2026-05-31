import { Search, ShoppingBag, User } from "lucide-react";

const links = ["NEW IN", "SHOP ALL", "SKIN CARE", "COSMETICS", "FACE HEALTH"];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-charcoal bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-6 md:px-10">
        <a href="#" className="font-display text-xl tracking-tight md:text-2xl">
          L'OISEAU DÉ
        </a>
        <ul className="hidden items-center gap-9 text-[11px] tracking-[0.22em] lg:flex">
          {links.map((l) => (
            <li key={l}>
              <a href="#" className="opacity-80 transition-opacity hover:opacity-100">{l}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-5 text-foreground">
          <button aria-label="Search" className="opacity-80 hover:opacity-100"><Search size={18} /></button>
          <button aria-label="Account" className="opacity-80 hover:opacity-100"><User size={18} /></button>
          <button aria-label="Cart" className="relative opacity-80 hover:opacity-100">
            <ShoppingBag size={18} />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-sand text-[10px] text-background">2</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
