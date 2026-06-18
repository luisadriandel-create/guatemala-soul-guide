import { createFileRoute } from "@tanstack/react-router";
import { CategoryHero } from "@/components/category-hero";
import { ExperienceCard } from "@/components/experience-card";
import { categoryMeta } from "@/lib/experiences";
import { useByCategory, useT } from "@/lib/i18n";

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
  const t = useT();
  const items = useByCategory("culture");
  return (
    <>
      <CategoryHero
        eyebrow={t("nav.culture")}
        title={t("culture.title")}
        intro={t("culture.intro")}
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
