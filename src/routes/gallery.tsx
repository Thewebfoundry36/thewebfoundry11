import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { CalendarCheck } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import heroClinic from "@/assets/hero-clinic.jpg";
import waiting from "@/assets/gallery-waiting.jpg";
import equipment from "@/assets/gallery-equipment.jpg";
import whitening from "@/assets/gallery-whitening.jpg";
import treatment from "@/assets/gallery-treatment.jpg";
import braces from "@/assets/gallery-braces.jpg";
import portrait from "@/assets/smile-portrait.jpg";

const TITLE = "Smile Gallery | Mom's Smile Dental Clinic, Kalavakkam";
const DESC =
  "See our Kalavakkam clinic, equipment and patient results — smile makeovers, whitening, implants, braces and before & after transformations.";

export const Route = createFileRoute("/gallery")({
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
  component: GalleryPage,
});

type Item = { src: string; w: number; h: number; cat: string; caption: string };

const ITEMS: Item[] = [
  { src: heroClinic, w: 1600, h: 1104, cat: "Clinic", caption: "Primary operatory" },
  { src: waiting, w: 1200, h: 900, cat: "Waiting Area", caption: "Patient lounge" },
  { src: equipment, w: 1200, h: 1400, cat: "Equipment", caption: "Digital imaging suite" },
  { src: whitening, w: 1200, h: 900, cat: "Before & After", caption: "Whitening result" },
  { src: treatment, w: 1200, h: 1500, cat: "Treatments", caption: "Painless treatment" },
  { src: braces, w: 1200, h: 900, cat: "Treatments", caption: "Clear aligner therapy" },
  { src: portrait, w: 1008, h: 1200, cat: "Patient Smiles", caption: "Smile makeover patient" },
  { src: waiting, w: 1200, h: 900, cat: "Clinic", caption: "Reception area" },
  { src: equipment, w: 1200, h: 1400, cat: "Equipment", caption: "Sterilisation zone" },
  { src: whitening, w: 1200, h: 900, cat: "Patient Smiles", caption: "Post-treatment shade" },
  { src: treatment, w: 1200, h: 1500, cat: "Before & After", caption: "Restorative case" },
  { src: heroClinic, w: 1600, h: 1104, cat: "Waiting Area", caption: "Consultation corner" },
];

const CATEGORIES = [
  "All",
  "Clinic",
  "Equipment",
  "Treatments",
  "Before & After",
  "Waiting Area",
  "Patient Smiles",
];

function GalleryPage() {
  const [active, setActive] = useState("All");
  const items = active === "All" ? ITEMS : ITEMS.filter((i) => i.cat === active);

  return (
    <>
      <section className="gradient-navy relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-28">
        <div className="pointer-events-none absolute -bottom-24 right-0 size-96 rounded-full bg-emerald/20 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-5 text-center lg:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-emerald-light uppercase">
            <Link to="/" className="hover:text-white">
              Home
            </Link>{" "}
            / Gallery
          </p>
          <h1 className="mt-5 text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Inside the clinic, and the <span className="text-gradient">smiles we build</span>
          </h1>
          <p className="mt-5 text-base text-white/70 sm:text-lg">
            A look at our spaces, our technology and results from real treatments carried out in
            Kalavakkam.
          </p>
        </div>
      </section>

      <section className="section-y bg-background">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  active === c
                    ? "gradient-emerald text-white shadow-glow"
                    : "border border-border bg-card text-navy hover:bg-secondary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {items.map((item, i) => (
              <motion.figure
                key={`${item.caption}-${i}`}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
                className="group relative mb-5 break-inside-avoid overflow-hidden rounded-3xl shadow-soft"
              >
                <img
                  src={item.src}
                  alt={`${item.caption} — ${item.cat} at Mom's Smile Dental Clinic`}
                  loading="lazy"
                  width={item.w}
                  height={item.h}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-navy-deep/90 to-transparent p-4">
                  <span className="text-sm font-semibold text-white">{item.caption}</span>
                  <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
                    {item.cat}
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </div>

          <Reveal className="mt-14 text-center">
            <Link
              to="/contact"
              hash="book"
              className="inline-flex items-center gap-2 rounded-2xl gradient-emerald px-8 py-4 text-base font-semibold text-white shadow-glow"
            >
              <CalendarCheck className="size-5" /> Start your transformation
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}