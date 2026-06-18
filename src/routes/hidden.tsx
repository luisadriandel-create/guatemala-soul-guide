import { createFileRoute } from "@tanstack/react-router";
import { CategoryHero } from "@/components/category-hero";
import { ExperienceCard } from "@/components/experience-card";
import { byCategory, categoryMeta } from "@/lib/experiences";

export const Route = createFileRoute("/hidden")({
  head: () => ({
    meta: [
      { title: "Hidden Guatemala — Experience GT" },
      { name: "description", content: "Rare, seasonal, deeply local. The experiences most travelers never discover." },
      { property: "og:title", content: "Hidden Guatemala — Experience GT" },
      { property: "og:description", content: "Rare, seasonal, deeply local. The experiences most travelers never discover." },
      { property: "og:image", content: categoryMeta.hidden.image },
    ],
  }),
  component: HiddenPage,
});

function HiddenPage() {
  const items = byCategory("hidden");
  return (
    <>
      <CategoryHero
        eyebrow="Hidden Guatemala"
        title="What most travelers miss."
        intro="The soul of this project. Seasonal traditions, family invitations, places that don't show up on any list because the people who know them prefer to keep it that way. We share them because the right traveler — curious, respectful, slow — keeps them alive."
        image={categoryMeta.hidden.image}
      />
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {items.map((e) => <ExperienceCard key={e.slug} exp={e} />)}
        </div>
      </section>
    </>
  );
}
