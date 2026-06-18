import { createFileRoute } from "@tanstack/react-router";
import { CategoryHero } from "@/components/category-hero";
import { ExperienceCard } from "@/components/experience-card";
import { byCategory, categoryMeta } from "@/lib/experiences";

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
  const items = byCategory("adventure");
  return (
    <>
      <CategoryHero
        eyebrow="Adventure"
        title="Volcanoes & wild country."
        intro="Guatemala has 37 volcanoes, four of them active, and the kind of cloud forest you only get in this narrow band of Central America. These are the outdoor experiences we send people on — small groups, honest guides, real terrain."
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
