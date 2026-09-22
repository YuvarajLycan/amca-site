import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { CheckCircle2, Search, ShieldCheck } from 'lucide-react'
import { Container } from '../components/Container'
import { PageHero, SectionHeading } from '../components/SectionHeading'
import { membershipBenefits, membershipTiers } from '../lib/content'

export const Route = createFileRoute('/membership')({ component: Membership })

const bands = [
  { band: 'Under $2M annual revenue', tier: 'Small business rate' },
  { band: '$2M – $10M annual revenue', tier: 'Standard rate' },
  { band: '$10M – $50M annual revenue', tier: 'Established business rate' },
  { band: 'Over $50M annual revenue', tier: 'Enterprise rate' },
]

function Membership() {
  const [submitted, setSubmitted] = useState(false)
  const [companySize, setCompanySize] = useState('')

  return (
    <div>
      <PageHero
        eyebrow="Membership"
        title="Fee bands, up front — no PDF required."
        description="Tell us roughly what your business turns over and what kind of business it is. We'll tell you which band you fall into before you talk to anyone."
      />

      {/* Fee estimator */}
      <section className="relative z-10">
        <Container>
          <div className="-mt-14 rounded-3xl border border-ink-100 bg-white p-8 shadow-lift sm:p-10">
            {!submitted ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
                className="grid gap-6 lg:grid-cols-[1fr_1fr_auto] lg:items-end"
              >
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                    Business type
                  </label>
                  <select
                    required
                    className="mt-2 w-full rounded-xl border border-ink-200 px-4 py-3 text-sm text-navy-950 focus:border-navy-950 focus:outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    <option>Contractor (install / service & maintenance)</option>
                    <option>Supplier or manufacturer</option>
                    <option>Affiliate (educator, consultant, other)</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                    Annual revenue
                  </label>
                  <select
                    required
                    value={companySize}
                    onChange={(e) => setCompanySize(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-ink-200 px-4 py-3 text-sm text-navy-950 focus:border-navy-950 focus:outline-none"
                  >
                    <option value="" disabled>
                      Select a range
                    </option>
                    {bands.map((b) => (
                      <option key={b.band} value={b.band}>
                        {b.band}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-signal-500 px-6 py-3.5 text-sm font-semibold text-white hover:bg-signal-600"
                >
                  Show me the band
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <CheckCircle2 size={28} className="mt-0.5 shrink-0 text-teal-600" />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-teal-600">
                      {bands.find((b) => b.band === companySize)?.tier ?? 'Standard rate'}
                    </p>
                    <h3 className="mt-1 text-lg font-bold text-navy-950">
                      That puts you in the &ldquo;{companySize}&rdquo; band.
                    </h3>
                    <p className="mt-1 text-sm text-ink-500">
                      An AMCA membership coordinator will follow up with the exact figure and
                      what&apos;s included — no obligation.
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="shrink-0 text-sm font-semibold text-navy-950 underline underline-offset-4"
                >
                  Start over
                </button>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Membership types */}
      <section className="py-24">
        <Container>
          <SectionHeading
            eyebrow="Membership types"
            title="Three ways to belong"
            description="Every membership type gets a vote, a directory listing and access to the knowledge hub. What changes is the committee seats and benefits relevant to your business."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {membershipTiers.map((tier) => (
              <div key={tier.name} className="rounded-2xl border border-ink-100 bg-white p-7 shadow-card">
                <ShieldCheck size={20} className="text-signal-500" />
                <h3 className="mt-4 text-lg font-bold text-navy-950">{tier.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-ink-500">
                  {tier.audience}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">{tier.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits grid */}
      <section className="bg-sand-100 py-24">
        <Container>
          <SectionHeading
            eyebrow="What you get"
            title="Membership, laid out in full"
            description="No benefit here requires downloading a PDF to understand. If it matters enough to be a reason to join, it's on this page."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {membershipBenefits.map((benefit) => (
              <div key={benefit.title} className="rounded-2xl bg-white p-6 shadow-card">
                <h3 className="text-sm font-bold text-navy-950">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Find a member */}
      <section className="py-24">
        <Container className="grid gap-10 rounded-3xl bg-navy-950 bg-grid-navy p-10 lg:grid-cols-[1fr_1fr] lg:items-center sm:p-14">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-signal-400">
              Member directory
            </span>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              Find a member, filtered — not 1,000 rows on one page
            </h2>
            <p className="mt-3 max-w-md text-sm text-white/60">
              Search AMCA&apos;s member directory by state and specialty to find a trusted
              contractor or supplier near you.
            </p>
          </div>
          <div className="flex flex-col gap-3 rounded-2xl bg-white/[0.06] p-6">
            <div className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3">
              <Search size={16} className="text-white/50" />
              <input
                type="text"
                placeholder="Company name"
                className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
            </div>
            <select className="rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-white/80 focus:outline-none">
              <option className="text-navy-950">Any state</option>
              <option className="text-navy-950">Victoria</option>
              <option className="text-navy-950">New South Wales</option>
              <option className="text-navy-950">Queensland</option>
              <option className="text-navy-950">South Australia</option>
              <option className="text-navy-950">Western Australia</option>
            </select>
            <button className="mt-1 rounded-full bg-signal-500 px-5 py-3 text-sm font-semibold text-white hover:bg-signal-600">
              Search the directory
            </button>
          </div>
        </Container>
      </section>
    </div>
  )
}
