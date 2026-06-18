import { createFileRoute } from "@tanstack/react-router";
import { CategoryHero } from "@/components/category-hero";
import { ExperienceCard } from "@/components/experience-card";
import { categoryMeta } from "@/lib/experiences";
import { useByCategory, useT } from "@/lib/i18n";

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
  const t = useT();
  const items = useByCategory("hidden");
  return (
    <>
      <CategoryHero
        eyebrow={t("nav.hidden")}
        title={t("hidden.title")}
        intro={t("hidden.intro")}
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
