import { createFileRoute, Link } from "@tanstack/react-router";
import heroAntigua from "@/assets/hero-antigua.jpg";
import conciergeImg from "@/assets/concierge.jpg";
import { ExperienceCard } from "@/components/experience-card";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { useByCategory, useEvents, useCategoryMeta, useT } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Experience GT — Start in Antigua. Explore the real Guatemala." },
      { name: "description", content: "A curated travel discovery platform for adventure, culture, and the Guatemala most travelers never see." },
      { property: "og:title", content: "Experience GT — Explore the real Guatemala" },
      { property: "og:description", content: "Curated recommendations for travelers who want more than the usual tourist checklist." },
      { property: "og:image", content: heroAntigua },
    ],
  }),
  component: Home,
});

function Home() {
  const t = useT();
  const events = useEvents();
  const getMeta = useCategoryMeta();
  const featured = [
    useByCategory("adventure")[0],
    useByCategory("culture")[0],
    useByCategory("hidden")[0],
  ];

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative">
        <div className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
          <img
            src={heroAntigua}
            alt="Volcán de Fuego erupting at dawn behind Antigua Guatemala"
            className="h-full w-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-background" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24">
              <p className="text-eyebrow text-bone/80">{t("home.heroEyebrow")}</p>
              <h1 className="mt-5 max-w-4xl text-display text-5xl text-bone sm:text-7xl lg:text-8xl">
                {t("home.heroTitle1")}<br />
                <span className="italic font-light">{t("home.heroTitle2")}</span>
              </h1>
              <p className="mt-6 max-w-xl text-base text-bone/85 sm:text-lg">
                {t("home.heroSub")}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#paths" className="btn-ember">
                  {t("home.startExploring")} <ArrowRight size={16} />
                </a>
                <Link to="/concierge" className="inline-flex items-center justify-center gap-2 rounded-full border border-bone/40 px-6 py-3.5 text-sm font-semibold text-bone hover:bg-bone hover:text-ink transition">
                  {t("nav.talkToLocal")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CHOOSE YOUR PATH ============ */}
      <section id="paths" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid items-end gap-6 sm:grid-cols-[1fr_auto]">
          <div>
            <p className="text-eyebrow text-accent">{t("home.choosePathEyebrow")}</p>
            <h2 className="mt-4 text-display text-4xl sm:text-5xl">{t("home.choosePathTitle")}</h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            {t("home.choosePathSub")}
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {(["adventure", "culture", "hidden"] as const).map((key) => {
            const m = getMeta(key);
            return (
              <Link key={key} to={m.to} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-muted">
                  <img
                    src={m.image}
                    alt={m.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-eyebrow text-bone/80">{m.tag}</p>
                    <h3 className="mt-2 text-display text-3xl text-bone sm:text-4xl">{m.title}</h3>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{m.blurb}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold link-underline">
                  {t("home.exploreLabel")} {m.title} <ArrowRight size={14} />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ============ FEATURED EXPERIENCES ============ */}
      <section className="border-t border-border/60 bg-mist/40">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-eyebrow text-accent">{t("home.featuredEyebrow")}</p>
              <h2 className="mt-4 text-display text-4xl sm:text-5xl">{t("home.featuredTitle")}</h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              {t("home.featuredSub")}
            </p>
          </div>

          <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-3">
            {featured.map((e) => e && <ExperienceCard key={e.slug} exp={e} />)}
          </div>
        </div>
      </section>

      {/* ============ HAPPENING NOW PREVIEW ============ */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-eyebrow text-accent">{t("home.happeningEyebrow")}</p>
            <h2 className="mt-4 text-display text-4xl sm:text-5xl">{t("home.happeningTitle")}</h2>
          </div>
          <Link to="/happening" className="link-underline text-sm font-semibold">
            {t("home.viewAllEvents")}
          </Link>
        </div>

        <div className="mt-12 divide-y divide-border">
          {events.slice(0, 4).map((ev) => (
            <article key={ev.title} className="grid grid-cols-[minmax(0,1fr)_auto] gap-6 py-7 sm:grid-cols-[140px_minmax(0,1fr)_auto] sm:items-center">
              <div className="hidden sm:block">
                <p className="text-eyebrow text-muted-foreground">{ev.kind}</p>
              </div>
              <div className="min-w-0">
                <h3 className="text-display text-2xl sm:text-3xl">{ev.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{ev.blurb}</p>
                <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground/80">
                  <span className="flex items-center gap-1.5"><Calendar size={12} /> {ev.date}</span>
                  <span className="flex items-center gap-1.5"><MapPin size={12} /> {ev.location}</span>
                </p>
              </div>
              <div className="hidden text-right text-xs text-muted-foreground sm:block">
                {ev.kind}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ============ CONCIERGE PREVIEW ============ */}
      <section className="border-t border-border/60 bg-ink text-bone">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg lg:aspect-[3/4]">
            <img src={conciergeImg} alt="A local concierge in Guatemala" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-eyebrow text-accent">{t("home.conciergeEyebrow")}</p>
            <h2 className="mt-4 text-display text-4xl sm:text-5xl">
              {t("home.conciergeTitle1")} <span className="italic font-light">{t("home.conciergeTitle2")}</span>
            </h2>
            <p className="mt-5 max-w-md text-bone/75 leading-relaxed">
              {t("home.conciergeBody")}
            </p>
            <ul className="mt-8 space-y-2 text-sm text-bone/80">
              <li>{t("home.conciergeBullet1")}</li>
              <li>{t("home.conciergeBullet2")}<span className="text-bone/50">{t("home.frenchSoon")}</span></li>
              <li>{t("home.conciergeBullet3")}</li>
            </ul>
            <Link to="/concierge" className="mt-8 inline-flex btn-ember">
              {t("home.conciergeCta")} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
