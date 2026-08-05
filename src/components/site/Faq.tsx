import { useState } from "react";
import { FAQS } from "@/data/foundry";
import { Reveal } from "./Reveal";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto mt-16 max-w-3xl divide-y divide-gold/12 border-y border-gold/12">
      {FAQS.map((item, i) => {
        const isOpen = open === i;
        return (
          <Reveal key={item.q} delay={i * 0.05}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="group flex w-full items-center justify-between gap-6 py-7 text-left transition-colors duration-500"
              >
                <span className="font-display text-xl text-white/90 transition-colors duration-500 group-hover:text-gold sm:text-2xl">
                  {item.q}
                </span>
                <span
                  aria-hidden="true"
                  className={`relative h-3 w-3 shrink-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? "rotate-45" : ""}`}
                >
                  <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gold" />
                  <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-gold" />
                </span>
              </button>
            </h3>
            <div
              className={`grid transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-8 pr-10 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {item.a}
                </p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
