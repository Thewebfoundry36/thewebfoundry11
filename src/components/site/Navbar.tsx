import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/web-foundry-logo.png.asset.json";
import { NAV_LINKS, BRAND } from "@/data/foundry";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled
          ? "border-b border-gold/15 bg-[#050505]/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="shell flex items-center justify-between py-4" aria-label="Primary">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo.url} alt={`${BRAND.name} monogram`} className="h-9 w-9 object-contain" width={36} height={36} />
          <span className="font-display text-lg tracking-[0.24em] text-white/90 uppercase">Web Foundry</span>
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.hash}
                className="relative text-[0.7rem] uppercase tracking-[0.28em] text-white/65 transition-colors duration-500 hover:text-gold after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-500 hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] border border-gold/20 md:hidden"
        >
          <span className={`h-px w-4 bg-gold transition-transform duration-500 ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px w-4 bg-gold transition-transform duration-500 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-gold/10 bg-[#050505]/95 backdrop-blur-xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="shell flex flex-col gap-6 py-8">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.hash}
                onClick={() => setOpen(false)}
                className="text-[0.72rem] uppercase tracking-[0.3em] text-white/70"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
