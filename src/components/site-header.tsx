import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/adventure", label: "Adventure" },
  { to: "/culture", label: "Culture" },
  { to: "/hidden", label: "Hidden Guatemala" },
  { to: "/happening", label: "Happening Now" },
  { to: "/concierge", label: "Concierge" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-2"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-bone text-display text-sm">
            GT
          </span>
          <span className="text-display text-lg tracking-tight">
            Experience<span className="text-accent">.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="link-underline text-sm font-medium text-foreground/80 hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link to="/concierge" className="hidden lg:inline-flex btn-ember !py-2 !px-5 text-sm">
          Talk to a Local
        </Link>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-display text-2xl py-3 border-b border-border/40"
              >
                {item.label}
              </Link>
            ))}
            <Link to="/concierge" onClick={() => setOpen(false)} className="btn-ember mt-4 w-full">
              Talk to a Local
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
