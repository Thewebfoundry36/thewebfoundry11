import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { useRef } from "react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceCard } from "@/components/site/ServiceCard";
import { Testimonials } from "@/components/site/Testimonials";
import { Counter } from "@/components/site/Counter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CLINIC, FAQS, JOURNEY, SERVICES, TRUST_POINTS, WHY_US } from "@/data/clinic";
import heroClinic from "@/assets/hero-clinic.jpg";
import smilePortrait from "@/assets/smile-portrait.jpg";
import galleryWhitening from "@/assets/gallery-whitening.jpg";
import galleryTreatment from "@/assets/gallery-treatment.jpg";
import galleryBraces from "@/assets/gallery-braces.jpg";
import galleryEquipment from "@/assets/gallery-equipment.jpg";

const TITLE = "Mom's Smile Dental & Cosmetic Clinic | Dentist in Kalavakkam, OMR";
const DESC =
  "Premium dental & cosmetic care in Kalavakkam, Chennai. Implants, single-sitting root canals, smile makeovers, aligners and pain-free family dentistry. Rated 4.8★.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
  }),
  component: Index,
});

const FLOATING = ["Dental Implants", "Root Canal", "Smile Makeover", "Teeth Whitening"];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: CLINIC.name,
  description: DESC,
  telephone: CLINIC.phoneDisplay,
  email: CLINIC.email,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: CLINIC.addressLine1,
    addressLocality: "Kalavakkam, Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "603110",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 12.7862, longitude: 80.2205 },
  openingHours: ["Mo-Fr 09:30-21:00", "Sa 09:30-20:00", "Su 10:00-14:00"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: CLINIC.rating,
    reviewCount: CLINIC.reviews,
  },
  medicalSpecialty: "Dentistry",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

function Index() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <section ref={heroRef} className="relative isolate min-h-[100svh] overflow-hidden">
        <motion.img
          src={heroClinic}
          alt="Modern treatment room at Mom's Smile Dental & Cosmetic Clinic in Kalavakkam"
          width={1600}
          height={1104}
          fetchPriority="high"
          style={{ y: imgY }}
          className="absolute inset-0 -z-20 size-full scale-110 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(105deg,oklch(0.29_0.063_246/0.94)_0%,oklch(0.29_0.063_246/0.82)_45%,oklch(0.29_0.063_246/0.45)_100%)]" />

        <motion.div
          style={{ opacity: fade }}
          className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pt-28 pb-24 lg:px-8"
        >
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-white/85 uppercase backdrop-blur-md"
              >
                <Sparkles className="size-3.5 text-emerald-light" />
                Kalavakkam · OMR, Chennai
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.08 }}
                className="mt-6 text-4xl leading-[1.08] text-white sm:text-5xl lg:text-6xl xl:text-7xl"
              >
                Your Smile Deserves <span className="text-gradient">the Best Care</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.16 }}
                className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
              >
                Providing advanced dental and cosmetic treatments in Kalavakkam with modern
                technology, experienced dentists, and personalized patient care.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.24 }}
                className="mt-9 flex flex-wrap gap-3"
              >
                <Link
                  to="/contact"
                  hash="book"
                  className="inline-flex items-center gap-2 rounded-2xl gradient-emerald px-7 py-4 text-base font-semibold text-white shadow-glow transition-transform hover:scale-[1.03]"
                >
                  <CalendarCheck className="size-5" /> Book Appointment
                </Link>
                <a
                  href={`tel:${CLINIC.phone}`}
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20"
                >
                  <Phone className="size-5" /> Call Now
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.32 }}
                className="mt-10 inline-flex flex-wrap items-center gap-x-6 gap-y-3 rounded-3xl border border-white/15 bg-white/8 px-6 py-4 backdrop-blur-md"
              >
                <span className="flex items-center gap-2">
                  <span className="flex text-gold" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4 fill-current" />
                    ))}
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {CLINIC.rating} Google Rating
                  </span>
                </span>
                <span className="h-6 w-px bg-white/20" />
                <span className="text-sm font-medium text-white/75">
                  {CLINIC.reviews}+ Happy Reviews
                </span>
              </motion.div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative mx-auto aspect-4/5 w-full max-w-sm overflow-hidden rounded-[2rem] border border-white/20 shadow-lift">
                <img
                  src={smilePortrait}
                  alt="Patient smiling after cosmetic dental treatment"
                  width={1008}
                  height={1200}
                  className="size-full object-cover"
                />
              </div>
              {FLOATING.map((label, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.12 }}
                  className={[
                    "glass-card animate-float absolute flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold text-navy",
                    i === 0 ? "-top-4 -left-6" : "",
                    i === 1 ? "top-1/3 -right-8" : "",
                    i === 2 ? "bottom-24 -left-10" : "",
                    i === 3 ? "-bottom-4 right-0" : "",
                  ].join(" ")}
                  style={{ animationDelay: `${i * 0.8}s` }}
                >
                  <CheckCircle2 className="size-4 text-emerald" />
                  {label}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border bg-secondary/60">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-5 px-5 py-8 sm:grid-cols-3 lg:grid-cols-6 lg:px-8">
          {TRUST_POINTS.map((t, i) => (
            <Reveal key={t} delay={i * 0.05}>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="size-5 shrink-0 text-emerald" />
                <span className="text-sm font-semibold text-navy">{t}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="section-y bg-background">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-lift">
              <img
                src={galleryTreatment}
                alt="Dentist treating a relaxed patient at the clinic"
                loading="lazy"
                width={1200}
                height={1500}
                className="aspect-4/5 w-full object-cover"
              />
            </div>
            <div className="glass-card absolute -right-2 -bottom-8 hidden rounded-3xl px-6 py-5 sm:block">
              <p className="font-display text-3xl font-semibold text-navy">16+</p>
              <p className="text-sm text-muted-foreground">Years of clinical experience</p>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="About the clinic"
              title="Dentistry that puts the patient first — always"
              subtitle="Mom's Smile was founded on a simple idea: people deserve honest advice, gentle hands and a clinic that feels calm rather than clinical. Every treatment plan starts with listening."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["Patient-first care", "Your comfort and consent guide every decision we make."],
                ["Latest technology", "Digital imaging, rotary endodontics and 3D smile planning."],
                ["Comfortable experience", "Quiet operatories designed to ease dental anxiety."],
                ["Ethical treatment", "We recommend only what is genuinely needed — in writing."],
                ["Family dentistry", "One trusted clinic for toddlers, parents and grandparents."],
                ["Cosmetic dentistry", "Veneers, whitening and makeovers designed around your face."],
              ].map(([title, body], i) => (
                <Reveal key={title} delay={i * 0.06}>
                  <div className="surface-card h-full p-5">
                    <p className="flex items-center gap-2 font-semibold text-navy">
                      <CheckCircle2 className="size-4 text-emerald" />
                      {title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-emerald"
            >
              Read our story <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section-y bg-secondary/50">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Our treatments"
            title="Complete dental care under one roof"
            subtitle="From a routine cleaning to a full smile transformation — delivered by specialists using equipment you would expect from a city-centre practice."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 9).map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.08}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-2xl bg-navy px-7 py-4 text-base font-semibold text-white shadow-lift transition-transform hover:scale-[1.02]"
            >
              View all 14 treatments <ArrowRight className="size-5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* WHY US */}
      <section className="section-y gradient-navy relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -right-32 size-96 rounded-full bg-emerald/20 blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <SectionHeading
              align="left"
              invert
              eyebrow="Why choose us"
              title="Eight reasons families across OMR trust us"
              subtitle="We built the clinic we would want our own family treated in — precise, transparent and genuinely kind."
            />
            <Reveal delay={0.15}>
              <Link
                to="/contact"
                hash="book"
                className="mt-8 inline-flex items-center gap-2 rounded-2xl gradient-emerald px-7 py-4 text-base font-semibold text-white shadow-glow"
              >
                <CalendarCheck className="size-5" /> Book a consultation
              </Link>
            </Reveal>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {WHY_US.map((w, i) => (
              <Reveal key={w.title} delay={(i % 2) * 0.08}>
                <div className="glass-dark h-full rounded-2xl p-6 transition-colors hover:border-emerald/40">
                  <p className="flex items-start gap-2.5 font-semibold text-white">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-light" />
                    {w.title}
                  </p>
                  <p className="mt-2.5 pl-7.5 text-sm leading-relaxed text-white/65">{w.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="section-y bg-background">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Patient journey"
            title="Five simple steps to a healthier smile"
            subtitle="No confusion, no surprises — you always know what happens next."
          />
          <ol className="relative mt-14 space-y-6 before:absolute before:top-2 before:bottom-2 before:left-6 before:w-px before:bg-gradient-to-b before:from-emerald before:via-emerald/40 before:to-transparent sm:before:left-1/2">
            {JOURNEY.map((step, i) => (
              <li key={step.title} className="relative">
                <Reveal delay={i * 0.08}>
                  <div
                    className={`flex items-start gap-5 sm:w-1/2 ${
                      i % 2 === 0 ? "sm:ml-auto sm:pl-10" : "sm:flex-row-reverse sm:pr-10 sm:text-right"
                    }`}
                  >
                    <span className="relative z-10 grid size-12 shrink-0 place-items-center rounded-2xl gradient-emerald font-display text-lg font-semibold text-white shadow-glow">
                      {i + 1}
                    </span>
                    <div className="surface-card flex-1 p-5">
                      <h3 className="text-lg text-navy">{step.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="section-y scroll-mt-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Patient stories"
            title="Rated 4.8★ by 53 patients on Google"
            subtitle="Real experiences from families in Kalavakkam, Siruseri, Navalur and Thiruporur."
          />
          <Testimonials />
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="section-y bg-background">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Smile gallery"
            title="Results we are proud of"
            subtitle="Smile makeovers, whitening, implants and orthodontics carried out at our Kalavakkam clinic."
          />
          <div className="mt-14 columns-2 gap-4 [column-fill:_balance] lg:columns-4">
            {[
              { src: smilePortrait, label: "Smile Makeovers", h: 1200, w: 1008 },
              { src: galleryWhitening, label: "Teeth Whitening", h: 900, w: 1200 },
              { src: galleryTreatment, label: "Dental Implants", h: 1500, w: 1200 },
              { src: galleryBraces, label: "Braces & Aligners", h: 900, w: 1200 },
              { src: galleryEquipment, label: "Before & After", h: 1400, w: 1200 },
              { src: heroClinic, label: "Our Clinic", h: 1104, w: 1600 },
            ].map((g, i) => (
              <Reveal key={g.label} delay={(i % 4) * 0.06} className="mb-4 break-inside-avoid">
                <figure className="group relative overflow-hidden rounded-3xl shadow-soft">
                  <img
                    src={g.src}
                    alt={`${g.label} at Mom's Smile Dental & Cosmetic Clinic`}
                    loading="lazy"
                    width={g.w}
                    height={g.h}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/85 to-transparent p-4 text-sm font-semibold text-white">
                    {g.label}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald"
            >
              Explore the full gallery <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-secondary/60">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-16 lg:grid-cols-4 lg:px-8">
          {[
            { value: 53, suffix: "+", label: "Google Reviews" },
            { value: 1000, suffix: "+", label: "Happy Smiles" },
            { value: 10, suffix: "+", label: "Dental Treatments" },
            { value: 4.8, suffix: "★", label: "Average Rating", decimals: 1 },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <p className="font-display text-4xl font-semibold text-navy sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
              </p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-y scroll-mt-24 bg-background">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Questions"
            title="Everything patients ask us"
            subtitle="Still unsure about something? Call or WhatsApp us — we answer honestly, no appointment needed."
          />
          <Reveal className="mt-12">
            <Accordion type="single" collapsible className="space-y-3">
              {FAQS.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`item-${i}`}
                  className="surface-card overflow-hidden border-b px-5"
                >
                  <AccordionTrigger className="py-5 text-left font-display text-base text-navy hover:no-underline sm:text-lg">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-y gradient-navy relative overflow-hidden">
        <div className="pointer-events-none absolute -bottom-40 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-emerald/20 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-5 text-center lg:px-8">
          <Reveal>
            <h2 className="text-3xl leading-tight text-white sm:text-5xl">
              Ready for Your <span className="text-gradient">Best Smile</span>?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-white/70 sm:text-lg">
              Same-week appointments available. Walk in for a consultation and leave with a clear,
              written plan — no obligation.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                hash="book"
                className="inline-flex items-center gap-2 rounded-2xl gradient-emerald px-8 py-4 text-base font-semibold text-white shadow-glow transition-transform hover:scale-[1.03]"
              >
                <CalendarCheck className="size-5" /> Book Your Appointment Today
              </Link>
              <a
                href={`tel:${CLINIC.phone}`}
                className="inline-flex items-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-md hover:bg-white/20"
              >
                <Phone className="size-5" /> {CLINIC.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
