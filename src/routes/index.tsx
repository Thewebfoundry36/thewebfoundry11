import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import logo from "@/assets/web-foundry-logo.png.asset.json";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { GoldButton } from "@/components/site/GoldButton";
import { Pricing } from "@/components/site/Pricing";
import { Faq } from "@/components/site/Faq";
import {
  BRAND,
  COMPARISON,
  FAQS,
  HERO_STATS,
  PILLARS,
  PORTFOLIO,
  PROCESS,
  SERVICES,
  TESTIMONIALS,
} from "@/data/foundry";

const SITE = "https://momssmile-clinic-pro.lovable.app";
const TITLE = "The Web Foundry | Premium AI Web Design Agency";
const DESCRIPTION =
  "The Web Foundry crafts premium AI-powered websites for luxury brands and ambitious businesses — timeless design, intelligent technology, measurable growth.";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE + "/" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: SITE + "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: BRAND.name,
          slogan: BRAND.tagline,
          description: DESCRIPTION,
          url: SITE,
          areaServed: "IN",
          serviceType: SERVICES.map((s) => s.title),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
});

function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <div id="top" className="relative">
      {/* HERO */}
      <section ref={heroRef} className="relative flex min-h-[100svh] items-center overflow-hidden pt-32 pb-24">
        <motion.div style={{ y, opacity }} className="shell relative z-10 text-center">
          <motion.img
            src={logo.url}
            alt={`${BRAND.name} — ${BRAND.tagline}`}
            width={445}
            height={300}
            className="mx-auto w-64 object-contain sm:w-80 md:w-[26rem]"
            initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          />

          <motion.h1
            className="mx-auto mt-10 max-w-4xl text-balance font-display text-5xl leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-[5.25rem]"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            Websites That <span className="text-gold">Command Attention.</span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-9 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            We craft premium AI-powered websites that elevate businesses, establish authority and convert visitors
            into customers through timeless design and intelligent technology.
          </motion.p>

          <motion.div
            className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <GoldButton href="#pricing">View Packages</GoldButton>
            <GoldButton href="#process" variant="ghost">
              Our Process
            </GoldButton>
          </motion.div>

          <motion.ul
            className="mx-auto mt-24 grid max-w-4xl grid-cols-2 gap-px border border-gold/12 bg-gold/12 sm:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6, delay: 1 }}
          >
            {HERO_STATS.map((s) => (
              <li key={s.label} className="bg-[#050505] px-6 py-8">
                <p className="font-display text-3xl text-gold sm:text-4xl">{s.value}</p>
                <p className="mt-3 text-[0.62rem] uppercase tracking-[0.24em] text-white/50">{s.label}</p>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="section-y relative bg-[#0D0D0D]">
        <div className="shell">
          <SectionHeading
            eyebrow="The Foundry"
            title={
              <>
                Crafted With Precision.
                <br />
                <span className="text-gold">Built For Growth.</span>
              </>
            }
            subtitle="The Web Foundry combines AI technology with premium design principles to build websites that do not simply look beautiful — they generate trust, establish credibility and drive measurable business growth. Every decision, from the weight of a heading to the pace of an animation, is made in service of how your brand is perceived."
          />

          <div className="mt-20 grid gap-px border border-gold/12 bg-gold/12 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <article className="group h-full bg-[#101010] p-10 transition-colors duration-700 hover:bg-[#141414]">
                  <p className="font-display text-2xl text-white transition-colors duration-700 group-hover:text-gold">
                    {p.title}
                  </p>
                  <div className="rule-gold mt-5 h-px w-12 transition-all duration-700 group-hover:w-24" aria-hidden="true" />
                  <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section-y relative scroll-mt-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Services"
            title="Everything Required To Present Your Brand Properly."
            subtitle="A complete studio offering — from flagship brand websites to the integrations, optimisation and ongoing care that keep them performing."
          />

          <div className="mt-20 grid gap-px border border-gold/12 bg-gold/12 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.06}>
                <article className="group relative h-full overflow-hidden bg-[#0A0A0A] p-9 transition-colors duration-700 hover:bg-[#111111]">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px scale-x-0 rule-gold transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                  />
                  <p className="text-[0.6rem] tracking-[0.3em] text-gold/60">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-5 font-display text-2xl leading-snug text-white transition-colors duration-700 group-hover:text-gold">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-y bg-[#0D0D0D]">
        <div className="shell">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="The Difference Is In The Standard."
            subtitle="A candid comparison between how we work and how the typical website agency works."
          />

          <Reveal delay={0.1}>
            <div className="mx-auto mt-20 max-w-4xl overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <caption className="sr-only">The Web Foundry compared with typical website agencies</caption>
                <thead>
                  <tr className="border-b border-gold/25">
                    <th scope="col" className="py-6 pr-4 text-[0.62rem] uppercase tracking-[0.26em] font-normal text-white/45">
                      Standard
                    </th>
                    <th scope="col" className="px-4 py-6 text-center font-display text-lg tracking-[0.14em] text-gold uppercase">
                      The Web Foundry
                    </th>
                    <th scope="col" className="px-4 py-6 text-center text-[0.62rem] uppercase tracking-[0.26em] font-normal text-white/45">
                      Typical Agencies
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row) => (
                    <tr key={row} className="border-b border-gold/10 transition-colors duration-500 hover:bg-white/[0.02]">
                      <th scope="row" className="py-5 pr-4 text-sm font-normal text-white/85">
                        {row}
                      </th>
                      <td className="px-4 py-5 text-center">
                        <span className="font-display text-xl text-gold" aria-label="Included">
                          ✦
                        </span>
                      </td>
                      <td className="px-4 py-5 text-center text-sm text-white/30" aria-label="Rarely included">
                        —
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="section-y">
        <div className="shell">
          <SectionHeading
            eyebrow="Selected Work"
            title="Projects Described In Detail, Not Decoration."
            subtitle="A record of what was built, why it was built that way and what it achieved."
          />

          <div className="mt-20 grid gap-8 lg:grid-cols-2">
            {PORTFOLIO.map((p, i) => (
              <Reveal key={p.name} delay={(i % 2) * 0.08}>
                <article className="glass-card glass-card-hover h-full bg-[#101010]/60 p-9 sm:p-11">
                  <p className="eyebrow">{p.industry}</p>
                  <h3 className="mt-5 font-display text-3xl text-white sm:text-4xl">{p.name}</h3>
                  <div className="rule-gold mt-6 h-px w-full" aria-hidden="true" />
                  <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

                  <p className="mt-8 text-[0.62rem] uppercase tracking-[0.28em] text-white/45">Key Features</p>
                  <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                    {p.features.map((f) => (
                      <li key={f} className="text-sm text-white/75">
                        {f}
                      </li>
                    ))}
                  </ul>

                  <dl className="mt-9 grid grid-cols-1 gap-6 border-t border-gold/12 pt-7 sm:grid-cols-2">
                    <div>
                      <dt className="text-[0.62rem] uppercase tracking-[0.28em] text-white/45">Completion Time</dt>
                      <dd className="mt-2 font-display text-xl text-gold">{p.time}</dd>
                    </div>
                    <div>
                      <dt className="text-[0.62rem] uppercase tracking-[0.28em] text-white/45">Business Outcome</dt>
                      <dd className="mt-2 text-sm leading-relaxed text-white/80">{p.outcome}</dd>
                    </div>
                  </dl>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section-y scroll-mt-24 bg-[#0D0D0D]">
        <div className="shell">
          <SectionHeading
            eyebrow="Our Process"
            title="Eight Deliberate Stages."
            subtitle="Nothing is improvised. Each stage is agreed before the next begins."
          />

          <ol className="relative mx-auto mt-20 max-w-3xl">
            <span
              aria-hidden="true"
              className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-gold/35 to-transparent sm:left-[9px]"
            />
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.05} as="li" className="relative flex gap-8 pb-14 last:pb-0">
                <span
                  aria-hidden="true"
                  className="relative z-10 mt-2 h-[15px] w-[15px] shrink-0 rotate-45 border border-gold/60 bg-[#0D0D0D] sm:h-[19px] sm:w-[19px]"
                />
                <div className="-mt-1">
                  <p className="text-[0.6rem] tracking-[0.3em] text-gold/60">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-3 font-display text-3xl text-white">{p.step}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="section-y scroll-mt-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Investment"
            title="Three Levels Of Craft."
            subtitle="Pricing reflects the depth of strategy, customisation and engineering involved — not merely the number of pages delivered."
          />
          <Pricing />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-y bg-[#0D0D0D]">
        <div className="shell">
          <SectionHeading eyebrow="Client Words" title="Judged By The Standard We Leave Behind." />

          <div className="mt-20 grid gap-8 md:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.author + t.company} delay={(i % 2) * 0.08}>
                <figure className="glass-card glass-card-hover h-full bg-[#101010]/55 p-10">
                  <span aria-hidden="true" className="font-display text-5xl leading-none text-gold/45">
                    &ldquo;
                  </span>
                  <blockquote className="mt-4">
                    <p className="font-display text-xl leading-relaxed text-white/90 sm:text-2xl">{t.quote}</p>
                  </blockquote>
                  <figcaption className="mt-8 border-t border-gold/12 pt-6">
                    <p className="text-sm text-gold">{t.author}</p>
                    <p className="mt-1 text-[0.62rem] uppercase tracking-[0.26em] text-white/45">{t.company}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-y scroll-mt-24">
        <div className="shell">
          <SectionHeading eyebrow="Questions" title="Considered Answers." />
          <Faq />
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="relative scroll-mt-24 overflow-hidden border-y border-gold/12 bg-[#0D0D0D]">
        <div className="shell section-y relative z-10 text-center">
          <Reveal>
            <h2 className="mx-auto max-w-4xl text-balance font-display text-4xl leading-[1.1] text-white sm:text-6xl md:text-7xl">
              Ready To Build Something <span className="text-gold">Exceptional?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-9 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Your website is often the first impression your business makes. Let&rsquo;s create one that reflects the
              quality of your brand and helps you stand apart from the competition.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-14 flex justify-center">
              <GoldButton href="#pricing">Book Your Project</GoldButton>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
