import { PACKAGES } from "@/data/foundry";
import { Reveal } from "./Reveal";
import { GoldButton } from "./GoldButton";

export function Pricing() {
  return (
    <div className="mt-20 grid items-stretch gap-8 lg:grid-cols-3">
      {PACKAGES.map((pkg, i) => (
        <Reveal key={pkg.name} delay={i * 0.1} className={`h-full ${pkg.featured ? "lg:-my-8 lg:z-10" : ""}`}>
          <article
            className={`glass-card glass-card-hover relative flex h-full flex-col p-8 sm:p-10 ${
              pkg.featured
                ? "border-gold/45 bg-[#101010]/80 shadow-[0_40px_120px_-50px_rgba(212,175,55,0.5)] lg:p-12"
                : "bg-[#101010]/50"
            }`}
          >
            {pkg.featured ? (
              <span className="absolute -top-px left-1/2 -translate-x-1/2">
                <span className="block h-px w-32 rule-gold" />
              </span>
            ) : null}

            <p className="eyebrow">{pkg.featured ? "Most Chosen" : "Package"}</p>
            <h3 className="mt-5 font-display text-3xl uppercase tracking-[0.14em] text-white sm:text-4xl">
              {pkg.name}
            </h3>
            <p className="mt-6 font-display text-3xl text-gold sm:text-4xl">{pkg.price}</p>

            <div className="rule-gold my-8 h-px w-full" aria-hidden="true" />

            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="text-white/80">Ideal for: </span>
              {pkg.ideal}
            </p>

            {pkg.inherits ? (
              <p className="mt-8 text-[0.68rem] uppercase tracking-[0.28em] text-gold/85">{pkg.inherits}</p>
            ) : null}

            <ul className="mt-6 space-y-3">
              {pkg.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm text-white/75">
                  <span aria-hidden="true" className="mt-[0.55rem] h-px w-3 shrink-0 bg-gold/70" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 border-t border-gold/12 pt-6">
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/45">Delivery</p>
              <p className="mt-2 font-display text-xl text-white/90">{pkg.delivery}</p>
            </div>

            <div className="mt-8 border border-gold/12 bg-black/30 p-6">
              <p className="font-display text-lg text-gold">{pkg.rationaleTitle}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pkg.rationale}</p>
            </div>

            <div className="mt-10 flex justify-center">
              <GoldButton href="#cta" variant={pkg.featured ? "primary" : "ghost"} className="w-full">
                Book Your Project
              </GoldButton>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
