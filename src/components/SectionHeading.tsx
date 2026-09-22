export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = 'light',
  align = 'left',
}: {
  eyebrow?: string
  title: string
  description?: string
  tone?: 'light' | 'dark'
  align?: 'left' | 'center'
}) {
  const isCenter = align === 'center'
  return (
    <div className={`max-w-2xl ${isCenter ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <span
          className={`text-xs font-semibold uppercase tracking-[0.16em] ${
            tone === 'light' ? 'text-signal-600' : 'text-signal-400'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-3 text-3xl font-bold sm:text-4xl ${
          tone === 'dark' ? 'text-white' : 'text-navy-950'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            tone === 'dark' ? 'text-white/65' : 'text-ink-500'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <section className="bg-navy-950 bg-grid-navy pt-28 pb-16 sm:pt-32 sm:pb-20">
      <div className="container-page">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-signal-400">
          {eyebrow}
        </span>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold text-white sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/65">{description}</p>
      </div>
    </section>
  )
}
