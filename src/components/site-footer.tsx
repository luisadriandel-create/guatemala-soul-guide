import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-[oklch(0.16_0.018_50)] text-bone">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="text-display text-3xl">Experience<span className="text-accent">.</span>GT</div>
            <p className="mt-4 max-w-sm text-sm text-bone/70 leading-relaxed">
              A curated discovery platform for travelers who want to meet the real Guatemala —
              its people, its landscapes, its quiet rituals.
            </p>
            <p className="mt-6 text-eyebrow text-bone/50">Based in Antigua</p>
          </div>

          <div>
            <p className="text-eyebrow text-bone/50">Explore</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/adventure" className="hover:text-accent">Adventure</Link></li>
              <li><Link to="/culture" className="hover:text-accent">Culture</Link></li>
              <li><Link to="/hidden" className="hover:text-accent">Hidden Guatemala</Link></li>
              <li><Link to="/happening" className="hover:text-accent">Happening Now</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-eyebrow text-bone/50">Help</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/concierge" className="hover:text-accent">Local Concierge</Link></li>
              <li><a href="#" className="hover:text-accent">For Providers</a></li>
              <li><a href="#" className="hover:text-accent">About</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-bone/10 pt-6 text-xs text-bone/50 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Experience GT — Curated in Guatemala.</span>
          <span>Hecho con cariño · Made with care</span>
        </div>
      </div>
    </footer>
  );
}
