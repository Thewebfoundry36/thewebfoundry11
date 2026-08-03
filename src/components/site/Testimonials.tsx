import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BadgeCheck, ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/clinic";

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i]!;

  useEffect(() => {
    const id = window.setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 7000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="mx-auto mt-14 max-w-3xl">
      <div className="glass-card relative rounded-3xl p-8 sm:p-12">
        <Quote className="absolute top-8 right-8 size-12 text-emerald/15" aria-hidden="true" />
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45 }}
          >
            <span className="flex gap-1 text-gold" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="size-5 fill-current" />
              ))}
            </span>
            <p className="mt-6 font-display text-xl leading-relaxed text-navy sm:text-2xl">
              “{t.quote}”
            </p>
            <footer className="mt-8 flex items-center gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-full gradient-navy font-display text-lg font-semibold text-white">
                {t.name.charAt(0)}
              </span>
              <span>
                <span className="flex items-center gap-2 font-semibold text-navy">
                  {t.name}
                  <BadgeCheck className="size-4 text-emerald" />
                </span>
                <span className="block text-sm text-muted-foreground">
                  {t.treatment} · {t.location}
                </span>
              </span>
              <span className="ml-auto hidden rounded-full bg-emerald/10 px-3 py-1.5 text-xs font-semibold text-emerald sm:block">
                Verified Patient
              </span>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => setI((v) => (v - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
          className="grid size-11 place-items-center rounded-full border border-border bg-card text-navy transition-colors hover:bg-secondary"
        >
          <ChevronLeft className="size-5" />
        </button>
        <div className="flex gap-2">
          {TESTIMONIALS.map((item, idx) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Show testimonial ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === i ? "w-8 bg-emerald" : "w-2 bg-navy/20"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => setI((v) => (v + 1) % TESTIMONIALS.length)}
          className="grid size-11 place-items-center rounded-full border border-border bg-card text-navy transition-colors hover:bg-secondary"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
}