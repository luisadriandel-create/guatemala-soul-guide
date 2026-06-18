import { Link } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";

export function SiteFooter() {
  const t = useT();
  return (
    <footer className="mt-24 border-t border-border/60 bg-[oklch(0.16_0.018_50)] text-bone">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="text-display text-3xl">Experience<span className="text-accent">.</span>GT</div>
            <p className="mt-4 max-w-sm text-sm text-bone/70 leading-relaxed">
              {t("footer.tagline")}
            </p>
            <p className="mt-6 text-eyebrow text-bone/50">{t("footer.based")}</p>
          </div>

          <div>
            <p className="text-eyebrow text-bone/50">{t("footer.explore")}</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/adventure" className="hover:text-accent">{t("nav.adventure")}</Link></li>
              <li><Link to="/culture" className="hover:text-accent">{t("nav.culture")}</Link></li>
              <li><Link to="/hidden" className="hover:text-accent">{t("nav.hidden")}</Link></li>
              <li><Link to="/happening" className="hover:text-accent">{t("nav.happening")}</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-eyebrow text-bone/50">{t("footer.help")}</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/concierge" className="hover:text-accent">{t("footer.localConcierge")}</Link></li>
              <li><a href="#" className="hover:text-accent">{t("footer.forProviders")}</a></li>
              <li><a href="#" className="hover:text-accent">{t("footer.about")}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-bone/10 pt-6 text-xs text-bone/50 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Experience GT — {t("footer.copyright")}</span>
          <span>{t("footer.madeWithCare")}</span>
        </div>
      </div>
    </footer>
  );
}
