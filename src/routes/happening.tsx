import { createFileRoute, Link } from "@tanstack/react-router";
import { events } from "@/lib/experiences";
import { Calendar, MapPin } from "lucide-react";

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
  return (
    <>
      <section className="border-b border-border/60 bg-mist/40">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="text-eyebrow text-accent">Happening now</p>
          <h1 className="mt-4 max-w-4xl text-display text-5xl sm:text-7xl">
            A curated calendar, <span className="italic font-light">not a complete one.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Festivals, live music, artisan markets, and seasonal moments worth planning a trip around.
            We list only what we'd actually attend.
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
          <p className="text-eyebrow text-accent">Something specific in mind?</p>
          <h3 className="mt-3 text-display text-3xl">We track more than we publish.</h3>
          <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground">
            If you're traveling on specific dates, ask our concierge what's happening.
            We often know about smaller community events that never make it online.
          </p>
          <Link to="/concierge" className="btn-ember mt-7 inline-flex">Ask the Concierge</Link>
        </div>
      </section>
    </>
  );
}
