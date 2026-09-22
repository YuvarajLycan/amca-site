import { createFileRoute } from '@tanstack/react-router'
import { FileText, Scale, Send } from 'lucide-react'
import { Container } from '../components/Container'
import { PageHero, SectionHeading } from '../components/SectionHeading'
import { Why } from '../lib/rationale'
import { publications, submissions } from '../lib/content'

export const Route = createFileRoute('/advocacy')({ component: Advocacy })

function Advocacy() {
  return (
    <div>
      <PageHero
        eyebrow="Advocacy"
        title="Every submission AMCA lodges, published in full."
        description="Advocacy is its own section, not a News category — the real work is submissions to government and standards bodies, and the position papers and reports that back them."
      />

      <section className="py-20">
        <Container>
          <div className="flex items-center gap-3">
            <Send size={20} className="text-signal-500" />
            <SectionHeading eyebrow="Submissions" title="Lodged on behalf of members" />
          </div>
          <Why>
            On the real site, Advocacy is its own top-level section — Submissions and
            Publications — separate from News. Folding it into a News category (an earlier draft
            of this site did exactly that) loses the distinction between day-to-day updates and
            formal policy positions.
          </Why>
          <div className="mt-8 divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white shadow-card">
            {submissions.map((s) => (
              <div key={s.slug} className="flex flex-col gap-1.5 p-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-teal-600">
                    To {s.recipient}
                  </p>
                  <h3 className="mt-1 text-base font-bold text-navy-950">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-ink-500">{s.summary}</p>
                </div>
                <span className="shrink-0 text-xs text-ink-500">{s.date}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-sand-100 py-24">
        <Container>
          <div className="flex items-center gap-3">
            <FileText size={20} className="text-signal-500" />
            <SectionHeading eyebrow="Publications" title="Reports and position papers" />
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {publications.map((p) => (
              <div key={p.slug} className="rounded-2xl bg-white p-6 shadow-card">
                <h3 className="text-sm font-bold text-navy-950">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{p.summary}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink-300">
                  {p.date}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="flex flex-col gap-4 rounded-3xl bg-navy-950 bg-grid-navy p-10 sm:flex-row sm:items-center sm:gap-6 sm:p-14">
            <Scale size={28} className="shrink-0 text-teal-400" />
            <p className="text-sm leading-relaxed text-white/70">
              AMCA’s technical and industrial-relations committees review policy and code
              changes before they land, so every submission is grounded in how the work actually
              gets done on site — not just a position drafted at head office.
            </p>
          </div>
        </Container>
      </section>
    </div>
  )
}
