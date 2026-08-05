import logo from "@/assets/web-foundry-logo.png.asset.json";
import { BRAND, NAV_LINKS } from "@/data/foundry";

export function Footer() {
  return (
    <footer className="border-t border-gold/12 bg-[#0D0D0D]">
      <div className="shell flex flex-col items-center gap-8 py-16 text-center">
        <img src={logo.url} alt={`${BRAND.name} logo`} className="h-14 w-14 object-contain" width={56} height={56} loading="lazy" />
        <div>
          <p className="font-display text-2xl tracking-[0.22em] uppercase text-white/90">{BRAND.name}</p>
          <p className="eyebrow mt-3">{BRAND.tagline}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.hash}
                  className="text-[0.68rem] uppercase tracking-[0.28em] text-white/55 transition-colors duration-500 hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="rule-gold h-px w-full max-w-md" aria-hidden="true" />
        <p className="text-[0.65rem] tracking-[0.22em] uppercase text-white/35">
          © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
