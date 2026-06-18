import { createFileRoute } from "@tanstack/react-router";
import { CategoryHero } from "@/components/category-hero";
import { ExperienceCard } from "@/components/experience-card";
import { byCategory, categoryMeta } from "@/lib/experiences";

export const Route = createFileRoute("/culture")({
  head: () => ({
    meta: [
      { title: "Culture — Experience GT" },
      { name: "description", content: "Coffee, cuisine, weaving, ritual. Meaningful cultural encounters across Guatemala." },
      { property: "og:title", content: "Culture — Experience GT" },
      { property: "og:description", content: "Coffee, cuisine, weaving, ritual. Meaningful cultural encounters across Guatemala." },
      { property: "og:image", content: categoryMeta.culture.image },
    ],
  }),
  component: CulturePage,
});

function CulturePage() {
  const items = byCategory("culture");
  return (
    <>
      <CategoryHero
        eyebrow="Culture"
        title="Coffee, cuisine & craft."
        intro="Twenty-two Mayan languages are still spoken here. The coffee is famous; the food deserves to be. These are the encounters that take you past the postcard — into kitchens, cooperatives, and family stories."
        image={categoryMeta.culture.image}
      />
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {items.map((e) => <ExperienceCard key={e.slug} exp={e} />)}
        </div>
      </section>
    </>
  );
}
