import { Link } from "@tanstack/react-router";
import type { Experience } from "@/lib/experiences";
import { ArrowUpRight } from "lucide-react";
import { useT } from "@/lib/i18n";

export function ExperienceCard({ exp, priority }: { exp: Experience; priority?: boolean }) {
  const t = useT();
  const label =
    exp.category === "hidden" ? t("cat.hidden") :
    exp.category === "culture" ? t("cat.culture") : t("cat.adventure");
  return (
    <Link
      to="/experience/$slug"
      params={{ slug: exp.slug }}
      className="group block"
    >
      <div className="overflow-hidden rounded-lg bg-muted">
        <img
          src={exp.image}
          alt={exp.title}
          loading={priority ? "eager" : "lazy"}
          className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-eyebrow text-accent">{label}</p>
          <h3 className="mt-2 text-display text-2xl leading-tight">{exp.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{exp.short}</p>
          <p className="mt-3 text-xs text-muted-foreground/80">{exp.location}</p>
        </div>
        <ArrowUpRight size={18} className="mt-1 shrink-0 text-foreground/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
      </div>
    </Link>
  );
}
