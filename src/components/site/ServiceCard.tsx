import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/clinic";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <article className="group surface-card relative flex h-full flex-col overflow-hidden p-7 hover:-translate-y-1.5 hover:border-emerald/30 hover:shadow-lift">
      <span className="pointer-events-none absolute -top-16 -right-16 size-40 rounded-full bg-emerald/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
      <span className="grid size-13 place-items-center rounded-2xl bg-secondary text-navy transition-colors duration-500 group-hover:gradient-emerald group-hover:text-white">
        <Icon className="size-6" />
      </span>
      <h3 className="mt-5 text-xl text-navy">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{service.short}</p>
      <Link
        to="/services"
        hash={service.slug}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald"
      >
        Learn More
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </article>
  );
}