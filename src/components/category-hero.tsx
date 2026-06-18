type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
};

export function CategoryHero({ eyebrow, title, intro, image }: Props) {
  return (
    <section className="relative">
      <div className="relative h-[55vh] min-h-[420px] w-full overflow-hidden">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-background" />
      </div>
      <div className="mx-auto -mt-24 max-w-4xl px-5 sm:px-8 relative">
        <div className="rounded-xl bg-background p-8 sm:p-12 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)]">
          <p className="text-eyebrow text-accent">{eyebrow}</p>
          <h1 className="mt-4 text-display text-5xl sm:text-6xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground leading-relaxed sm:text-lg">
            {intro}
          </p>
        </div>
      </div>
    </section>
  );
}
