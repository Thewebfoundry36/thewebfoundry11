import { Link } from "@tanstack/react-router";
import { Clock, Facebook, Instagram, Mail, MapPin, Phone, Star, Youtube } from "lucide-react";
import { CLINIC, SERVICES } from "@/data/clinic";

export function Footer() {
  return (
    <footer className="gradient-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-4 lg:px-8 lg:py-20">
        <div>
          <p className="font-display text-2xl font-semibold">Mom&apos;s Smile</p>
          <p className="mt-1 text-xs font-medium tracking-[0.22em] text-emerald-light uppercase">
            Dental &amp; Cosmetic Clinic
          </p>
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            Premium, ethical dental care on OMR — combining modern technology with the warmth of a
            family clinic.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-2.5">
            <span className="flex text-gold" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </span>
            <span className="text-sm font-semibold">
              {CLINIC.rating} · {CLINIC.reviews} Google reviews
            </span>
          </div>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="https://www.google.com/maps"
                aria-label="Social profile"
                className="grid size-10 place-items-center rounded-xl border border-white/15 bg-white/5 transition-colors hover:bg-white/15"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.18em] text-white uppercase">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            {[
              { label: "Home", to: "/" as const },
              { label: "About Us", to: "/about" as const },
              { label: "Services", to: "/services" as const },
              { label: "Smile Gallery", to: "/gallery" as const },
              { label: "Contact", to: "/contact" as const },
            ].map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="transition-colors hover:text-emerald-light">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.18em] text-white uppercase">Services</h3>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services"
                  hash={s.slug}
                  className="transition-colors hover:text-emerald-light"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.18em] text-white uppercase">
            Working Hours &amp; Contact
          </h3>
          <ul className="mt-5 space-y-2.5 text-sm text-white/70">
            {CLINIC.hours.map((h) => (
              <li key={h.day} className="flex items-start gap-2">
                <Clock className="mt-0.5 size-4 shrink-0 text-emerald-light" />
                <span>
                  <span className="block text-white/90">{h.day}</span>
                  {h.time}
                </span>
              </li>
            ))}
          </ul>
          <ul className="mt-6 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-emerald-light" />
              <span>
                {CLINIC.addressLine1}
                <br />
                {CLINIC.addressLine2}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-emerald-light" />
              <a href={`tel:${CLINIC.phone}`} className="hover:text-emerald-light">
                {CLINIC.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0 text-emerald-light" />
              <a href={`mailto:${CLINIC.email}`} className="hover:text-emerald-light">
                {CLINIC.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-white/55 sm:flex-row lg:px-8">
          <p>
            © {new Date().getFullYear()} {CLINIC.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}