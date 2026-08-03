import { Link } from "@tanstack/react-router";
import { motion, useScroll, useSpring } from "motion/react";
import { ArrowUp, CalendarCheck, MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { CLINIC, whatsappLink } from "@/data/clinic";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 24, mass: 0.3 });
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-1 origin-left gradient-emerald"
    />
  );
}

export function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed right-4 bottom-24 z-50 flex flex-col items-end gap-3 sm:bottom-6">
        {show ? (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="grid size-11 place-items-center rounded-full border border-border bg-card text-navy shadow-lift transition-transform hover:-translate-y-0.5"
          >
            <ArrowUp className="size-5" />
          </motion.button>
        ) : null}

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="group relative grid size-14 place-items-center rounded-full bg-[oklch(0.72_0.17_145)] text-white shadow-glow transition-transform hover:scale-105"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-[oklch(0.72_0.17_145)] opacity-25" />
          <MessageCircle className="relative size-6" />
        </a>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-border bg-card/95 p-3 backdrop-blur-xl sm:hidden">
        <a
          href={`tel:${CLINIC.phone}`}
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-navy/15 bg-secondary px-4 py-3 text-sm font-semibold text-navy"
        >
          <Phone className="size-4" /> Call Now
        </a>
        <Link
          to="/contact"
          hash="book"
          className="inline-flex items-center justify-center gap-2 rounded-2xl gradient-emerald px-4 py-3 text-sm font-semibold text-white shadow-glow"
        >
          <CalendarCheck className="size-4" /> Book Now
        </Link>
      </div>
    </>
  );
}