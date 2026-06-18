import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getExperience, experiences } from "@/lib/experiences";
import { ArrowLeft, Clock, MapPin, DollarSign, Sparkles, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/experience/$slug")({
  loader: ({ params }) => {
    const exp = getExperience(params.slug);
    if (!exp) throw notFound();
    return { exp };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.exp.title} — Experience GT` },
      { name: "description", content: loaderData.exp.short },
      { property: "og:title", content: loaderData.exp.title },
      { property: "og:description", content: loaderData.exp.short },
      { property: "og:image", content: loaderData.exp.image },
    ] : [],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-5 py-32 text-center">
      <p className="text-eyebrow text-accent">Not found</p>
      <h1 className="mt-3 text-display text-4xl">We couldn't find that experience.</h1>
      <Link to="/" className="btn-ember mt-8 inline-flex">Back home</Link>
    </div>
  ),
  component: ExperienceDetail,
});

function ExperienceDetail() {
  const { exp } = Route.useLoaderData();
  const related = experiences.filter((e) => e.slug !== exp.slug && e.category === exp.category).slice(0, 2);

  return (
    <article>
      {/* hero */}
      <div className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
        <img src={exp.image} alt={exp.title} className="h-full w-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-background" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-5xl px-5 pb-12 sm:px-8 sm:pb-16">
          <Link to={exp.category === "hidden" ? "/hidden" : exp.category === "culture" ? "/culture" : "/adventure"} className="inline-flex items-center gap-2 text-sm text-bone/85 hover:text-bone">
            <ArrowLeft size={14} /> {exp.category === "hidden" ? "Hidden Guatemala" : exp.category}
          </Link>
          <h1 className="mt-4 text-display text-5xl text-bone sm:text-6xl lg:text-7xl max-w-4xl">{exp.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-bone/90">{exp.short}</p>
        </div>
      </div>

      {/* body */}
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
          <div>
            <p className="text-eyebrow text-accent">The story</p>
            <p className="mt-5 text-xl leading-relaxed text-foreground/90 first-letter:text-display first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none">
              {exp.story}
            </p>

            <div className="mt-14">
              <p className="text-eyebrow text-accent">Why we recommend it</p>
              <p className="mt-4 text-lg leading-relaxed text-foreground/85">{exp.whyWeRecommend}</p>
            </div>

            <div className="mt-14">
              <p className="text-eyebrow text-accent">What makes it special</p>
              <ul className="mt-5 space-y-3">
                {exp.special.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-base">
                    <Sparkles size={16} className="mt-1 shrink-0 text-accent" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* sticky facts */}
          <aside>
            <div className="rounded-xl border border-border bg-card p-7 lg:sticky lg:top-24">
              <p className="text-eyebrow text-accent">The essentials</p>
              <dl className="mt-5 space-y-5 text-sm">
                <Fact icon={<MapPin size={15} />} label="Location" value={exp.location} />
                <Fact icon={<Clock size={15} />} label="Duration" value={exp.duration} />
                <Fact icon={<DollarSign size={15} />} label="Price range" value={exp.priceRange} />
              </dl>

              <div className="mt-7 space-y-3">
                <a
                  href="#"
                  className="btn-ember w-full"
                  onClick={(e) => { e.preventDefault(); alert("In the live product, this connects you to the experience provider."); }}
                >
                  Contact Provider
                </a>
                <Link to="/concierge" className="btn-outline-ink w-full">
                  <MessageCircle size={15} /> Talk to a Local Concierge
                </Link>
              </div>
              <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                Experience GT is a discovery platform — we connect you with vetted local providers.
                We don't take bookings or payments directly.
              </p>
            </div>
          </aside>
        </div>

        {/* related */}
        {related.length > 0 && (
          <div className="mt-24 border-t border-border pt-16">
            <p className="text-eyebrow text-accent">Keep exploring</p>
            <h2 className="mt-3 text-display text-3xl sm:text-4xl">More in {exp.category === "hidden" ? "Hidden Guatemala" : exp.category}</h2>
            <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2">
              {related.map((r) => (
                <Link key={r.slug} to="/experience/$slug" params={{ slug: r.slug }} className="group flex gap-5">
                  <img src={r.image} alt={r.title} loading="lazy" className="h-28 w-28 shrink-0 rounded-lg object-cover transition-transform group-hover:scale-105" />
                  <div className="min-w-0">
                    <h3 className="text-display text-xl">{r.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{r.short}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

function Fact({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div>
      <dt className="flex items-center gap-2 text-eyebrow text-muted-foreground">
        {icon} <span>{label}</span>
      </dt>
      <dd className="mt-1.5 text-base text-foreground">{value}</dd>
    </div>
  );
}
