import { createFileRoute, Link } from '@tanstack/react-router'
import { useMemo, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '../components/Container'
import { AccessBadge } from '../components/AccessGate'
import { PageHero, SectionHeading } from '../components/SectionHeading'
import { Why } from '../lib/rationale'
import { newsItems } from '../lib/content'

export const Route = createFileRoute('/news')({ component: News })

function News() {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(newsItems.map((n) => n.category)))],
    [],
  )
  const [active, setActive] = useState('All')

  const filtered = newsItems.filter((n) => active === 'All' || n.category === active)

  return (
    <div>
      <PageHero
        eyebrow="News"
        title="Everything AMCA publishes, in one filterable list."
        description="Advocacy, safety notes, industry data and event announcements — tagged by category, not hidden behind a login unless the underlying document genuinely needs to be."
      />

      <section className="py-20">
        <Container>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  active === cat
                    ? 'border-navy-950 bg-navy-950 text-white'
                    : 'border-ink-200 text-ink-700 hover:border-navy-950'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <Why>
            The real amca.com.au mixes marketing posts, submissions and safety notes under one
            unfiltered "News" tab with no way to tell them apart. Category filtering plus an
            access badge on every card fixes both at once.
          </Why>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {filtered.map((item) => (
              <Link
                key={item.slug}
                to="/news/$slug"
                params={{ slug: item.slug }}
                className="flex flex-col rounded-2xl border border-ink-100 bg-white p-7 shadow-card transition-shadow hover:shadow-lift"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-wide text-teal-600">
                    {item.category}
                  </span>
                  <AccessBadge tier={item.tier} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy-950">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{item.excerpt}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs text-ink-500">{item.date}</span>
                  <ArrowUpRight size={16} className="text-navy-950" />
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-10 text-sm text-ink-500">No articles in this category yet.</p>
          )}
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <SectionHeading
            eyebrow="Our commitment"
            title="Open by default"
            description="If AMCA writes it — a submission, a position paper, an industry note — it's published for the whole industry to read. Some pieces ask for a verified email before unlocking; only the ones with real commercial content, like the full benchmarking dataset, sit inside membership."
          />
        </Container>
      </section>
    </div>
  )
}
