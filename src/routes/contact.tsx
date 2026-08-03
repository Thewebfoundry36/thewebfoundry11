import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone, Siren } from "lucide-react";
import { AppointmentForm } from "@/components/site/AppointmentForm";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CLINIC, whatsappLink } from "@/data/clinic";

const TITLE = "Contact & Appointments | Mom's Smile Dental Clinic, Kalavakkam";
const DESC =
  "Book a dental appointment in Kalavakkam, OMR. Clinic address, working hours, phone, WhatsApp and 24×7 emergency dental contact for Mom's Smile Dental Clinic.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="gradient-navy relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-28">
        <div className="pointer-events-none absolute -top-24 left-1/3 size-96 rounded-full bg-emerald/20 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-5 text-center lg:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-emerald-light uppercase">
            <Link to="/" className="hover:text-white">
              Home
            </Link>{" "}
            / Contact
          </p>
          <h1 className="mt-5 text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Book your visit to <span className="text-gradient">Mom&apos;s Smile</span>
          </h1>
          <p className="mt-5 text-base text-white/70 sm:text-lg">
            Choose a time that suits you. Our front desk confirms every request personally within 15
            minutes during clinic hours.
          </p>
        </div>
      </section>

      <section id="book" className="section-y scroll-mt-24 bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <Reveal>
            <div className="surface-card p-7 sm:p-10">
              <h2 className="text-2xl text-navy sm:text-3xl">Appointment request</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fields marked as required help us prepare your chair before you arrive.
              </p>
              <div className="mt-8">
                <AppointmentForm />
              </div>
            </div>
          </Reveal>

          <div className="space-y-5">
            <Reveal>
              <div className="surface-card p-6">
                <h3 className="text-lg text-navy">Clinic details</h3>
                <ul className="mt-4 space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 size-5 shrink-0 text-emerald" />
                    <span className="text-muted-foreground">
                      {CLINIC.addressLine1}
                      <br />
                      {CLINIC.addressLine2}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 size-5 shrink-0 text-emerald" />
                    <a href={`tel:${CLINIC.phone}`} className="font-semibold text-navy">
                      {CLINIC.phoneDisplay}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MessageCircle className="mt-0.5 size-5 shrink-0 text-emerald" />
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-navy"
                    >
                      Chat on WhatsApp
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 size-5 shrink-0 text-emerald" />
                    <a href={`mailto:${CLINIC.email}`} className="text-muted-foreground">
                      {CLINIC.email}
                    </a>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="surface-card p-6">
                <h3 className="flex items-center gap-2 text-lg text-navy">
                  <Clock className="size-5 text-emerald" /> Business hours
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {CLINIC.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-4">
                      <span className="text-muted-foreground">{h.day}</span>
                      <span className="font-semibold text-navy">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="rounded-3xl gradient-navy p-6 text-white">
                <h3 className="flex items-center gap-2 text-lg text-white">
                  <Siren className="size-5 text-emerald-light" /> Dental emergency?
                </h3>
                <p className="mt-2 text-sm text-white/70">
                  Severe pain, swelling, bleeding or a knocked-out tooth — call our emergency line
                  any time, day or night.
                </p>
                <a
                  href={`tel:${CLINIC.phone}`}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl gradient-emerald px-5 py-3.5 text-sm font-semibold text-white shadow-glow"
                >
                  <Phone className="size-4" /> Call 24×7 emergency line
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-y bg-secondary/50">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Find us"
            title="On OMR, minutes from Siruseri and Thiruporur"
            subtitle="Free parking available in front of the clinic. Ground-floor access for wheelchairs and elderly patients."
          />
          <Reveal className="mt-12">
            <div className="overflow-hidden rounded-[2rem] border border-border shadow-lift">
              <iframe
                title="Map to Mom's Smile Dental & Cosmetic Clinic, Kalavakkam"
                src={`https://www.google.com/maps?q=${CLINIC.mapsQuery}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[420px] w-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}