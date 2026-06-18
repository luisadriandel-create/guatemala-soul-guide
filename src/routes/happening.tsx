import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, MapPin } from "lucide-react";
import { useEvents, useT } from "@/lib/i18n";

export const Route = createFileRoute("/happening")({
  head: () => ({
    meta: [
      { title: "Happening Now — Experience GT" },
      { name: "description", content: "A curated editorial selection of events, festivals, and seasonal happenings across Guatemala." },
      { property: "og:title", content: "Happening Now — Experience GT" },
      { property: "og:description", content: "Curated events, festivals, and seasonal happenings across Guatemala." },
    ],
  }),
  component: HappeningPage,
});

function HappeningPage() {
  const t = useT();
  const events = useEvents();
  return (
    <>
      <section className="border-b border-border/60 bg-mist/40">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="text-eyebrow text-accent">{t("happening.eyebrow")}</p>
          <h1 className="mt-4 max-w-4xl text-display text-5xl sm:text-7xl">
            {t("happening.title1")} <span className="italic font-light">{t("happening.title2")}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            {t("happening.sub")}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="divide-y divide-border">
          {events.map((ev) => (
            <article key={ev.title} className="grid grid-cols-1 gap-3 py-10 sm:grid-cols-[200px_minmax(0,1fr)] sm:gap-10">
              <div>
                <p className="text-eyebrow text-accent">{ev.kind}</p>
                <p className="mt-3 text-display text-2xl">{ev.date.split("·")[0]}</p>
                {ev.date.includes("·") && (
                  <p className="text-sm text-muted-foreground">{ev.date.split("·").slice(1).join("·").trim()}</p>
                )}
              </div>
              <div>
                <h2 className="text-display text-3xl sm:text-4xl">{ev.title}</h2>
                <p className="mt-3 max-w-2xl text-base text-foreground/80 leading-relaxed">{ev.blurb}</p>
                <p className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Calendar size={12} /> {ev.date}</span>
                  <span className="flex items-center gap-1.5"><MapPin size={12} /> {ev.location}</span>
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 rounded-xl border border-border bg-card p-8 text-center sm:p-12">
          <p className="text-eyebrow text-accent">{t("happening.ctaEyebrow")}</p>
          <h3 className="mt-3 text-display text-3xl">{t("happening.ctaTitle")}</h3>
          <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground">
            {t("happening.ctaBody")}
          </p>
          <Link to="/concierge" className="btn-ember mt-7 inline-flex">{t("happening.ctaButton")}</Link>
        </div>
      </section>
    </>
  );
}
