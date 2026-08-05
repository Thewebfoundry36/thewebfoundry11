import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
      ) : null}
      <Reveal delay={0.08}>
        <h2 className="mt-6 text-balance font-display text-4xl leading-[1.12] text-white sm:text-5xl md:text-6xl">
          {title}
        </h2>
      </Reveal>
      <Reveal delay={0.16}>
        <div
          className={`rule-gold mt-8 h-px w-40 ${centered ? "mx-auto" : ""}`}
          aria-hidden="true"
        />
      </Reveal>
      {subtitle ? (
        <Reveal delay={0.22}>
          <p className="mt-8 text-base leading-relaxed text-muted-foreground sm:text-lg">{subtitle}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
