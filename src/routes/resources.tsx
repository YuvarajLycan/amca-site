import { createFileRoute, Link } from '@tanstack/react-router'
import { useMemo, useState } from 'react'
import { ArrowUpRight, ScrollText } from 'lucide-react'
import { Container } from '../components/Container'
import { AccessBadge } from '../components/AccessGate'
import { PageHero, SectionHeading } from '../components/SectionHeading'
import { Why } from '../lib/rationale'
import { guides } from '../lib/content'

export const Route = createFileRoute('/resources')({ component: Resources })

function Resources() {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(guides.map((g) => g.category)))],
    [],
  )
  const [active, setActive] = useState('All')
  const filtered = guides.filter((g) => active === 'All' || g.category === active)

  return (
    <div>
      <PageHero
        eyebrow="Resources"
        title="The knowledge hub — standards, safety and data, honestly labelled."
        description="Everything AMCA publishes as a plain-English guide, tagged by how open it is: free to read, free after a quick email check, or reserved for members."
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
            This maps directly onto the real sitemap the ARM Hub audit proposed — a Resources
            section pulled out from under Membership, with Technical &amp; standards, Toolbox
            Talks and Guides &amp; documents as its actual content, not a stub.
          </Why>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((guide) => (
              <Link
                key={guide.slug}
                to="/resources/$slug"
                params={{ slug: guide.slug }}
                className="flex flex-col rounded-2xl border border-ink-100 bg-white p-7 shadow-card transition-shadow hover:shadow-lift"
              >
                <div className="flex items-center justify-between gap-2">
                  <ScrollText size={18} className="text-navy-950" />
                  <AccessBadge tier={guide.tier} />
                </div>
                <span className="mt-4 text-xs font-semibold uppercase tracking-wide text-teal-600">
                  {guide.category}
                </span>
                <h3 className="mt-1.5 text-lg font-bold text-navy-950">{guide.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{guide.summary}</p>
                <div className="mt-5 flex items-center justify-between text-xs text-ink-500">
                  <span>{guide.readTime}</span>
                  <ArrowUpRight size={15} className="text-navy-950" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <SectionHeading
            eyebrow="A note on accuracy"
            title="These are AMCA's explainers, not the regulation itself"
            description="Every guide here is AMCA's own plain-English summary of a standard, code or piece of legislation — written to be useful, not to replace the official text. Always confirm the current, official version (the NCC, the relevant Australian Standard, or the WHS Act and Regulations in your state) before relying on anything here for a live project."
          />
        </Container>
      </section>
    </div>
  )
}
