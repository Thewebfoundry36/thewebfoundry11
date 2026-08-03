import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarCheck, CheckCircle2, Clock, HeartPulse, Sparkles, UserCheck } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SERVICES } from "@/data/clinic";

const TITLE = "Dental Treatments in Kalavakkam | Mom's Smile Dental Clinic";
const DESC =
  "Implants, single-sitting root canals, smile makeovers, aligners, kids dentistry and emergency care in Kalavakkam, OMR. Procedure, timing and recovery explained.";

export const Route = createFileRoute("/services")({
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
  component: ServicesPage,
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "/services" },
  ],
};

function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="gradient-navy relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-28">
        <div className="pointer-events-none absolute -top-24 right-0 size-96 rounded-full bg-emerald/20 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-5 text-center lg:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-emerald-light uppercase">
            <Link to="/" className="hover:text-white">
              Home
            </Link>{" "}
            / Services
          </p>
          <h1 className="mt-5 text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Treatments designed around <span className="text-gradient">your comfort</span>
          </h1>
          <p className="mt-5 text-base text-white/70 sm:text-lg">
            Fourteen specialities, one clinic. Every plan comes with a written estimate, realistic
            timelines and an honest opinion on whether you need treatment at all.
          </p>
        </div>
      </section>

      <section className="section-y bg-background">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8">
            {SERVICES.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.slug} delay={0.04}>
                  <article
                    id={s.slug}
                    className="surface-card scroll-mt-28 overflow-hidden p-7 sm:p-10"
                  >
                    <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
                      <div>
                        <span className="grid size-14 place-items-center rounded-2xl gradient-emerald text-white shadow-glow">
                          <Icon className="size-7" />
                        </span>
                        <h2 className="mt-5 text-2xl text-navy sm:text-3xl">{s.title}</h2>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          {s.short}
                        </p>
                        <dl className="mt-6 grid gap-3 text-sm">
                          <div className="flex items-start gap-2.5">
                            <Clock className="mt-0.5 size-4 shrink-0 text-emerald" />
                            <span>
                              <dt className="inline font-semibold text-navy">Treatment time: </dt>
                              <dd className="inline text-muted-foreground">{s.time}</dd>
                            </span>
                          </div>
                          <div className="flex items-start gap-2.5">
                            <HeartPulse className="mt-0.5 size-4 shrink-0 text-emerald" />
                            <span>
                              <dt className="inline font-semibold text-navy">Recovery: </dt>
                              <dd className="inline text-muted-foreground">{s.recovery}</dd>
                            </span>
                          </div>
                          <div className="flex items-start gap-2.5">
                            <UserCheck className="mt-0.5 size-4 shrink-0 text-emerald" />
                            <span>
                              <dt className="inline font-semibold text-navy">
                                Ideal candidates:{" "}
                              </dt>
                              <dd className="inline text-muted-foreground">{s.candidates}</dd>
                            </span>
                          </div>
                        </dl>
                        <Link
                          to="/contact"
                          hash="book"
                          className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-navy px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                        >
                          <CalendarCheck className="size-4" /> Book {s.title}
                        </Link>
                      </div>

                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="rounded-2xl bg-secondary/70 p-5">
                          <h3 className="flex items-center gap-2 text-sm font-semibold tracking-wide text-navy uppercase">
                            <Sparkles className="size-4 text-emerald" /> Benefits
                          </h3>
                          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                            {s.benefits.map((b) => (
                              <li key={b} className="flex gap-2">
                                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald" />
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="rounded-2xl bg-secondary/70 p-5">
                          <h3 className="text-sm font-semibold tracking-wide text-navy uppercase">
                            The procedure
                          </h3>
                          <ol className="mt-3 space-y-2 text-sm text-muted-foreground">
                            {s.procedure.map((p, idx) => (
                              <li key={p} className="flex gap-2.5">
                                <span className="grid size-5 shrink-0 place-items-center rounded-full bg-emerald/15 text-[11px] font-bold text-emerald">
                                  {idx + 1}
                                </span>
                                {p}
                              </li>
                            ))}
                          </ol>
                        </div>
                        <div className="sm:col-span-2 rounded-2xl border border-border p-5">
                          {s.faqs.map((f) => (
                            <div key={f.q}>
                              <p className="font-semibold text-navy">{f.q}</p>
                              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                                {f.a}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-y bg-secondary/50">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Not sure what you need?"
            title="Start with a consultation"
            subtitle="Bring your concerns, old X-rays or simply a question. We will examine, explain and give you options — including doing nothing, when that is the right advice."
          />
          <Reveal className="mt-10 text-center">
            <Link
              to="/contact"
              hash="book"
              className="inline-flex items-center gap-2 rounded-2xl gradient-emerald px-8 py-4 text-base font-semibold text-white shadow-glow"
            >
              <CalendarCheck className="size-5" /> Book Appointment
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}