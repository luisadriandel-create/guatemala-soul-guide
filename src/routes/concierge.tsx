import { createFileRoute } from "@tanstack/react-router";
import conciergeImg from "@/assets/concierge.jpg";
import { MessageCircle, Languages, Compass, Heart } from "lucide-react";
import { useT } from "@/lib/i18n";

const WHATSAPP = "https://wa.me/50212345678?text=Hola%20Experience%20GT%2C%20me%20gustar%C3%ADa%20planear%20mi%20viaje%20a%20Guatemala";

export const Route = createFileRoute("/concierge")({
  head: () => ({
    meta: [
      { title: "Local Concierge — Experience GT" },
      { name: "description", content: "Plan your Guatemala trip with a real person who lives in Antigua. Free travel guidance in English and Spanish." },
      { property: "og:title", content: "Local Concierge — Experience GT" },
      { property: "og:description", content: "Plan your Guatemala trip with a real person who lives here." },
      { property: "og:image", content: conciergeImg },
    ],
  }),
  component: ConciergePage,
});

function ConciergePage() {
  const t = useT();
  return (
    <>
      <section className="border-b border-border/60">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
          <div>
            <p className="text-eyebrow text-accent">{t("concierge.eyebrow")}</p>
            <h1 className="mt-4 text-display text-5xl sm:text-6xl lg:text-7xl">
              {t("concierge.title1")} <span className="italic font-light">{t("concierge.title2")}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground leading-relaxed sm:text-lg">
              {t("concierge.body")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-ember">
                <MessageCircle size={16} /> {t("concierge.whatsapp")}
              </a>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              {t("concierge.replyMeta")}
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl lg:aspect-[3/4]">
            <img src={conciergeImg} alt="Local concierge in Antigua, Guatemala" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="text-eyebrow text-accent">{t("concierge.howEyebrow")}</p>
        <h2 className="mt-3 text-display text-4xl sm:text-5xl max-w-3xl">{t("concierge.howTitle")}</h2>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <Help icon={<Compass size={20} />} title={t("concierge.help1Title")} body={t("concierge.help1Body")} />
          <Help icon={<Heart size={20} />} title={t("concierge.help2Title")} body={t("concierge.help2Body")} />
          <Help icon={<MessageCircle size={20} />} title={t("concierge.help3Title")} body={t("concierge.help3Body")} />
          <Help icon={<Languages size={20} />} title={t("concierge.help4Title")} body={t("concierge.help4Body")} />
        </div>
      </section>

      <section className="border-t border-border/60 bg-mist/40">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div>
              <p className="text-eyebrow text-accent">{t("concierge.langEyebrow")}</p>
              <h2 className="mt-3 text-display text-4xl">{t("concierge.langTitle")}</h2>
            </div>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center justify-between border-b border-border pb-4">
                <span className="text-display text-2xl">English</span>
                <span className="text-eyebrow text-jade">{t("concierge.langAvailable")}</span>
              </li>
              <li className="flex items-center justify-between border-b border-border pb-4">
                <span className="text-display text-2xl">Español</span>
                <span className="text-eyebrow text-jade">{t("concierge.langDisponible")}</span>
              </li>
              <li className="flex items-center justify-between border-b border-border pb-4">
                <span className="text-display text-2xl text-muted-foreground">Français</span>
                <span className="text-eyebrow text-muted-foreground">{t("concierge.langSoon")}</span>
              </li>
            </ul>
          </div>

          <div className="mt-16 rounded-xl bg-ink p-8 text-center text-bone sm:p-14">
            <h3 className="text-display text-3xl sm:text-4xl">{t("concierge.readyTitle")}</h3>
            <p className="mx-auto mt-3 max-w-md text-bone/75">
              {t("concierge.readyBody")}
            </p>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-ember mt-8 inline-flex">
              <MessageCircle size={16} /> {t("concierge.startConv")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function Help({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div>
      <div className="grid h-11 w-11 place-items-center rounded-full bg-accent/10 text-accent">{icon}</div>
      <h3 className="mt-5 text-display text-2xl">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
}
