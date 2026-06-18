import { createFileRoute } from "@tanstack/react-router";
import conciergeImg from "@/assets/concierge.jpg";
import { MessageCircle, Languages, Compass, Heart } from "lucide-react";

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
  return (
    <>
      <section className="border-b border-border/60">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
          <div>
            <p className="text-eyebrow text-accent">Local concierge</p>
            <h1 className="mt-4 text-display text-5xl sm:text-6xl lg:text-7xl">
              Talk to someone <span className="italic font-light">who actually lives here.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground leading-relaxed sm:text-lg">
              Plan your Guatemala trip with a real person — not a chatbot, not a sales rep.
              Our concierge is based in Antigua and works directly with the families, guides,
              and providers behind every experience on this site.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-ember">
                <MessageCircle size={16} /> Message us on WhatsApp
              </a>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              +502 1234 5678 · Replies within 24 hours · Free for travelers
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl lg:aspect-[3/4]">
            <img src={conciergeImg} alt="Local concierge in Antigua, Guatemala" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="text-eyebrow text-accent">How we can help</p>
        <h2 className="mt-3 text-display text-4xl sm:text-5xl max-w-3xl">No itineraries. Just honest answers.</h2>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <Help icon={<Compass size={20} />} title="Recommendations" body="Based on what you actually want — not what's easy to sell." />
          <Help icon={<Heart size={20} />} title="Planning support" body="Sequencing, timing, what's realistic in one week vs two." />
          <Help icon={<MessageCircle size={20} />} title="Transportation guidance" body="When to hire a driver, when the chicken bus is fine, when to fly." />
          <Help icon={<Languages size={20} />} title="Local insights" body="What's actually open, what's a tourist trap, what's worth the drive." />
        </div>
      </section>

      <section className="border-t border-border/60 bg-mist/40">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div>
              <p className="text-eyebrow text-accent">Languages</p>
              <h2 className="mt-3 text-display text-4xl">We speak your language.</h2>
            </div>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center justify-between border-b border-border pb-4">
                <span className="text-display text-2xl">English</span>
                <span className="text-eyebrow text-jade">Available</span>
              </li>
              <li className="flex items-center justify-between border-b border-border pb-4">
                <span className="text-display text-2xl">Español</span>
                <span className="text-eyebrow text-jade">Disponible</span>
              </li>
              <li className="flex items-center justify-between border-b border-border pb-4">
                <span className="text-display text-2xl text-muted-foreground">Français</span>
                <span className="text-eyebrow text-muted-foreground">Coming soon</span>
              </li>
            </ul>
          </div>

          <div className="mt-16 rounded-xl bg-ink p-8 text-center text-bone sm:p-14">
            <h3 className="text-display text-3xl sm:text-4xl">Ready when you are.</h3>
            <p className="mx-auto mt-3 max-w-md text-bone/75">
              Send a message. Tell us when you're coming and what you care about. We'll take it from there.
            </p>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-ember mt-8 inline-flex">
              <MessageCircle size={16} /> Start the conversation
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
