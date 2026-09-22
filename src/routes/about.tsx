import { createFileRoute } from '@tanstack/react-router'
import { Building2, Gavel, GraduationCap, Handshake, Layers, Users2 } from 'lucide-react'
import { Container } from '../components/Container'
import { Button } from '../components/Button'
import { PageHero, SectionHeading } from '../components/SectionHeading'
import { Why } from '../lib/rationale'
import { orgProfile, roles } from '../lib/content'

export const Route = createFileRoute('/about')({ component: About })

const governance = [
  {
    icon: Users2,
    title: 'Board of Directors',
    description:
      'Elected from the membership, setting AMCA’s advocacy priorities and holding the organisation to account for delivering on them.',
  },
  {
    icon: Gavel,
    title: 'Technical & IR committees',
    description:
      'Practitioners who review code changes and industrial-relations issues before they land, so AMCA’s submissions are grounded in how the work actually gets done.',
  },
  {
    icon: GraduationCap,
    title: 'RTO 5139',
    description:
      'AMCA’s registered training organisation, audited and compliant, delivering the qualifications the industry is built on.',
  },
  {
    icon: Building2,
    title: 'State offices',
    description:
      'Local offices that turn national advocacy into regional action — the briefings, events and relationships that don’t scale from Canberra alone.',
  },
]

const initiatives = [
  {
    icon: Layers,
    title: 'BIM-MEP AUS',
    year: 'Established 2010',
    description:
      'AMCA’s digital-information-standards initiative for mechanical, electrical and plumbing services — aligning how BIM data is structured so it stays accurate and usable from design through to building handover. Runs an annual Construction Innovation Forum.',
  },
  {
    icon: Handshake,
    title: 'Preferred partners',
    year: 'National program',
    description:
      'Negotiated rates with major suppliers to the trade — the companies AMCA has vetted so members don’t have to, covering equipment, tools and business services.',
  },
]

function About() {
  return (
    <div>
      <PageHero
        eyebrow="About AMCA"
        title={`Established ${orgProfile.founded}. Representing HVAC&R ever since.`}
        description={`${orgProfile.legalName} (AMCA) is the nationwide industry body for Australia’s heating, ventilation and air conditioning sector — the reason a mechanical services contractor gets a seat at the table when codes, awards and safety standards are written.`}
      />

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Our purpose"
              title="An industry body that works for the people doing the work"
              description={orgProfile.purpose}
            />
            <p className="mt-6 text-base leading-relaxed text-ink-500">
              That means advocacy grounded in real site conditions, training delivered by people
              who&apos;ve done the work, and a membership that functions as a genuine professional
              network — not just a logo on a website.
            </p>
          </div>
          <div>
            <SectionHeading
              eyebrow="Our industry"
              title="HVAC&R, at scale"
              description="Heating, ventilation, air conditioning and refrigeration touches almost every building in Australia — hospitals, data centres, cold chains, and the office you're probably sitting in."
            />
            <p className="mt-6 text-base leading-relaxed text-ink-500">
              AMCA members span every part of that supply chain: design and construct
              contractors, service and maintenance businesses, and the manufacturers and
              suppliers who keep them stocked. Members are concentrated in Victoria and South
              Australia, with a growing footprint nationally.
            </p>
          </div>
        </Container>
      </section>

      {/* Vision / Mission / Values — verbatim */}
      <section className="bg-sand-100 py-20">
        <Container>
          <SectionHeading eyebrow="In our own words" title="Vision, mission and values" />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-7 shadow-card">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-signal-600">
                Vision
              </h3>
              <p className="mt-3 text-base leading-relaxed text-navy-950">{orgProfile.vision}</p>
            </div>
            <div className="rounded-2xl bg-white p-7 shadow-card">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-signal-600">
                Mission
              </h3>
              <p className="mt-3 text-base leading-relaxed text-navy-950">{orgProfile.mission}</p>
            </div>
          </div>
          <div className="mt-5 rounded-2xl bg-white p-7 shadow-card">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-signal-600">
              Values
            </h3>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {orgProfile.values.map((v) => (
                <li key={v} className="text-sm leading-relaxed text-ink-700">
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-navy-950 py-20">
        <Container>
          <SectionHeading
            tone="dark"
            eyebrow="How AMCA is run"
            title="Governance built to stay close to the trade"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {governance.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <item.icon size={20} className="text-teal-500" />
                <h3 className="mt-4 text-base font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Industry initiatives */}
      <section className="py-24">
        <Container>
          <SectionHeading
            eyebrow="Beyond membership"
            title="Two programs AMCA runs for the whole industry"
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {initiatives.map((item) => (
              <div key={item.title} className="rounded-2xl border border-ink-100 bg-white p-7 shadow-card">
                <item.icon size={22} className="text-signal-500" />
                <div className="mt-4 flex items-baseline gap-2">
                  <h3 className="text-lg font-bold text-navy-950">{item.title}</h3>
                  <span className="text-xs font-semibold uppercase tracking-wide text-ink-300">
                    {item.year}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">{item.description}</p>
              </div>
            ))}
          </div>
          <Why>
            BIM-MEP AUS and Preferred Partners were both missing from the first pass of this
            redesign — checking the real nav (About → BIM-MEP AUS, About → Preferred
            partners) turned up two genuine, named programs that a rebuild shouldn’t quietly
            drop.
          </Why>
        </Container>
      </section>

      <section className="pb-4">
        <Container>
          <SectionHeading
            eyebrow="Who this site is built for"
            title="Eight roles, eight reasons to visit"
            description="From the owner checking the price of membership to the apprentice looking for a qualification, AMCA's site is built around what each visitor actually came to do."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((role) => (
              <div key={role.title} className="rounded-2xl border border-ink-100 bg-white p-6 shadow-card">
                <h3 className="text-sm font-bold text-navy-950">{role.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{role.focus}</p>
              </div>
            ))}
          </div>
          <Why>
            Pulled directly from the ARM Hub audit&apos;s persona research (eight roles, eight
            expectations). It&apos;s here on About rather than buried in a research deck because
            it explains, to AMCA&apos;s own board, why the rest of the site is organised the way
            it is.
          </Why>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="flex flex-col items-start gap-6 rounded-3xl bg-sand-100 p-10 sm:flex-row sm:items-center sm:justify-between sm:p-14">
            <div>
              <h2 className="text-2xl font-bold text-navy-950 sm:text-3xl">Careers at AMCA</h2>
              <p className="mt-2 max-w-md text-sm text-ink-500">
                Occasionally hiring for policy, training delivery and member services roles.
                Reach out even without an open listing.
              </p>
            </div>
            <Button to="/contact" variant="secondary" className="shrink-0">
              Get in touch
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}
