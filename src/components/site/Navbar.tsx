import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { CalendarCheck, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { CLINIC } from "@/data/clinic";
import { cn } from "@/lib/utils";

const LINKS: { label: string; to: "/" | "/about" | "/services" | "/gallery" | "/contact"; hash?: string }[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "Testimonials", to: "/", hash: "testimonials" },
  { label: "FAQ", to: "/", hash: "faq" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/10 bg-navy-deep/85 backdrop-blur-xl shadow-lift"
          : "bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 lg:px-8"
      >
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid size-10 place-items-center rounded-2xl gradient-emerald text-white shadow-glow">
            <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
              <path d="M12 2c-1.6 0-2.4.7-4 .7S5.2 2 4 3.2C2.5 4.7 2.4 7.5 3.2 10c.6 1.9.7 3 1 5 .3 1.8.8 4.6 2.3 4.9 1.3.2 1.7-1.7 2.2-3.6.4-1.6.8-3 1.9-3s1.5 1.4 1.9 3c.5 1.9.9 3.8 2.2 3.6 1.5-.3 2-3.1 2.3-4.9.3-2 .4-3.1 1-5 .8-2.5.7-5.3-.8-6.8C16 2 14.9 2.7 13.6 2.7 12.9 2.7 12.4 2 12 2Z" />
            </svg>
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-semibold text-white">
              Mom&apos;s Smile
            </span>
            <span className="block text-[10px] font-medium tracking-[0.22em] text-white/60 uppercase">
              Dental &amp; Cosmetic
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 xl:flex">
          {LINKS.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                {...(l.hash ? { hash: l.hash } : {})}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white"
                activeOptions={{ exact: l.to === "/" && !l.hash }}
                activeProps={{ className: "text-white" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={`tel:${CLINIC.phone}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Phone className="size-4" /> Call Now
          </a>
          <Link
            to="/contact"
            hash="book"
            className="inline-flex items-center gap-2 rounded-full gradient-emerald px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03]"
          >
            <CalendarCheck className="size-4" /> Book Appointment
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="grid size-11 place-items-center rounded-2xl border border-white/20 text-white xl:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-white/10 bg-navy-deep/95 px-5 pb-8 backdrop-blur-xl xl:hidden"
        >
          <ul className="grid gap-1 py-4">
            {LINKS.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  {...(l.hash ? { hash: l.hash } : {})}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3.5 text-base font-medium text-white/85 transition-colors hover:bg-white/10"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="grid gap-3">
            <a
              href={`tel:${CLINIC.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 px-5 py-3.5 text-base font-semibold text-white"
            >
              <Phone className="size-4" /> {CLINIC.phoneDisplay}
            </a>
            <Link
              to="/contact"
              hash="book"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-2xl gradient-emerald px-5 py-3.5 text-base font-semibold text-white shadow-glow"
            >
              <CalendarCheck className="size-4" /> Book Appointment
            </Link>
          </div>
        </motion.div>
      ) : null}
    </header>
  );
}