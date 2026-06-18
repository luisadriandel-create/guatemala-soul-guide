import { createFileRoute } from "@tanstack/react-router";
import { CategoryHero } from "@/components/category-hero";
import { ExperienceCard } from "@/components/experience-card";
import { categoryMeta } from "@/lib/experiences";
import { useByCategory, useT } from "@/lib/i18n";

export const Route = createFileRoute("/adventure")({
  head: () => ({
    meta: [
      { title: "Adventure — Experience GT" },
      { name: "description", content: "Volcanoes, cloud forests, hidden rivers. Curated outdoor experiences across Guatemala." },
      { property: "og:title", content: "Adventure — Experience GT" },
      { property: "og:description", content: "Volcanoes, cloud forests, hidden rivers. Curated outdoor experiences across Guatemala." },
      { property: "og:image", content: categoryMeta.adventure.image },
    ],
  }),
  component: AdventurePage,
});

function AdventurePage() {
  const t = useT();
  const items = useByCategory("adventure");
  return (
    <>
      <CategoryHero
        eyebrow={t("nav.adventure")}
        title={t("adventure.title")}
        intro={t("adventure.intro")}
        image={categoryMeta.adventure.image}
      />
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {items.map((e) => <ExperienceCard key={e.slug} exp={e} />)}
        </div>
      </section>
    </>
  );
}
