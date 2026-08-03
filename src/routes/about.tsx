import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarCheck, CheckCircle2, Compass, Eye, Microscope, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { DOCTORS } from "@/data/clinic";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";
import clinicImg from "@/assets/gallery-waiting.jpg";
import equipmentImg from "@/assets/gallery-equipment.jpg";

const TITLE = "About Mom's Smile Dental & Cosmetic Clinic | Kalavakkam Dentists";
const DESC =
  "Meet the dentists behind Mom's Smile in Kalavakkam, OMR — our story, mission, sterilisation protocol and the technology we use for safe, comfortable care.";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

const PHOTOS = [doctor1, doctor2, doctor3];

const VALUES = [
  ["Honesty", "If a tooth does not need treatment, we say so — even when it costs us the case."],
  ["Gentleness", "Slow anaesthesia, warm rooms and pauses whenever you raise a hand."],
  ["Precision", "Magnification, digital scans and measured outcomes on every procedure."],
  ["Accessibility", "Fair pricing, EMI options and evening slots for working families."],
];

const STERILISATION = [
  "Instruments scrubbed, ultrasonically cleaned and pouch-sealed after every patient",
  "Class B vacuum autoclave with printed cycle validation",
  "Single-use needles, gloves, suction tips and bibs",
  "Surface disinfection between appointments with hospital-grade agents",
  "Separate zones for sterilisation, treatment and recovery",
];

function AboutPage() {
  return (
    <>
      <section className="gradient-navy relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-28">
        <div className="pointer-events-none absolute -top-24 left-0 size-96 rounded-full bg-emerald/20 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-5 text-center lg:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-emerald-light uppercase">
            <Link to="/" className="hover:text-white">
              Home
            </Link>{" "}
            / About
          </p>
          <h1 className="mt-5 text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            A neighbourhood clinic with <span className="text-gradient">city-grade care</span>
          </h1>
          <p className="mt-5 text-base text-white/70 sm:text-lg">
            Mom&apos;s Smile Dental &amp; Cosmetic Clinic has looked after families along OMR since
            2016 — built on precision, patience and plain-spoken advice.
          </p>
        </div>
      </section>

      <section className="section-y bg-background">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <img
              src={clinicImg}
              alt="Waiting lounge at Mom's Smile Dental & Cosmetic Clinic"
              loading="lazy"
              width={1200}
              height={900}
              className="w-full rounded-[2rem] object-cover shadow-lift"
            />
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our story"
              title="Started by a mother who hated dental fear"
              subtitle="Dr. Anitha Raghavan opened a two-chair clinic in Kalavakkam after years of watching patients delay treatment out of anxiety and mistrust."
            />
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                What began as a small practice is today a full-service dental and cosmetic centre
                serving Kalavakkam, Siruseri, Navalur and Thiruporur — with specialists across
                endodontics, implantology, orthodontics and paediatric dentistry.
              </p>
              <p>
                The name stayed the same for a reason. We treat every patient the way we would want
                our own mother treated: unhurried, respected and fully informed before anything
                begins.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="surface-card p-5">
                <Compass className="size-5 text-emerald" />
                <p className="mt-3 font-semibold text-navy">Our mission</p>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Make world-class dentistry accessible, affordable and completely painless for
                  every family on OMR.
                </p>
              </div>
              <div className="surface-card p-5">
                <Eye className="size-5 text-emerald" />
                <p className="mt-3 font-semibold text-navy">Our vision</p>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  To be the most trusted dental destination in South Chennai — known for ethics
                  before revenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-secondary/50">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Core values"
            title="Four principles we refuse to compromise"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(([title, body], i) => (
              <Reveal key={title} delay={i * 0.07}>
                <div className="surface-card h-full p-6">
                  <span className="font-display text-4xl font-semibold text-emerald/30">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 text-lg text-navy">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-background">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Technology"
              title="Equipment that makes treatment faster and safer"
              subtitle="Better diagnostics mean smaller interventions. We invest so you need less dentistry, not more."
            />
            <ul className="mt-8 grid gap-3">
              {[
                "Digital RVG and OPG imaging with up to 80% less radiation",
                "Intraoral scanner for impression-free crowns and aligners",
                "Rotary endodontics with apex locator for single-sitting RCT",
                "Painless computer-controlled anaesthesia delivery",
                "Implant physio-dispenser with guided surgical planning",
                "Chairside intraoral camera so you see what we see",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <Microscope className="mt-0.5 size-4 shrink-0 text-emerald" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <Reveal>
            <img
              src={equipmentImg}
              alt="Digital dental X-ray equipment at the clinic"
              loading="lazy"
              width={1200}
              height={1400}
              className="w-full rounded-[2rem] object-cover shadow-lift"
            />
          </Reveal>
        </div>
      </section>

      <section className="section-y gradient-navy">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <SectionHeading
            invert
            eyebrow="Sterilisation"
            title="A protocol you can watch us follow"
            subtitle="Infection control is not a checkbox here. Every pouch is opened in front of you."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {STERILISATION.map((s, i) => (
              <Reveal key={s} delay={(i % 2) * 0.08}>
                <div className="glass-dark flex h-full items-start gap-3 rounded-2xl p-5 text-sm text-white/75">
                  <ShieldCheck className="mt-0.5 size-5 shrink-0 text-emerald-light" />
                  {s}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-background">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Meet our dentists"
            title="The people who will look after you"
            subtitle="Specialists who explain first and treat second."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {DOCTORS.map((d, i) => (
              <Reveal key={d.name} delay={i * 0.08}>
                <article className="surface-card group h-full overflow-hidden hover:-translate-y-1.5">
                  <img
                    src={PHOTOS[i]}
                    alt={`${d.name}, ${d.role}`}
                    loading="lazy"
                    width={900}
                    height={1100}
                    className="aspect-4/5 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="p-6">
                    <h3 className="text-xl text-navy">{d.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-emerald">{d.role}</p>
                    <p className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">
                      {d.creds}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.bio}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 text-center">
            <Link
              to="/contact"
              hash="book"
              className="inline-flex items-center gap-2 rounded-2xl gradient-emerald px-8 py-4 text-base font-semibold text-white shadow-glow"
            >
              <CalendarCheck className="size-5" /> Meet us in person
            </Link>
            <p className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="size-4 text-emerald" /> Same-week consultations available
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}