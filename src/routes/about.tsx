import { createFileRoute } from '@tanstack/react-router'
import { Building2, Gavel, GraduationCap, Users2 } from 'lucide-react'
import { Container } from '../components/Container'
import { Button } from '../components/Button'
import { PageHero, SectionHeading } from '../components/SectionHeading'
import { roles } from '../lib/content'

export const Route = createFileRoute('/about')({ component: About })

const governance = [
  {
    icon: Users2,
    title: 'The Board',
    description:
      'Elected from the membership, setting AMCA’s advocacy priorities and holding the organisation to account for delivering on them.',
  },
  {
    icon: Gavel,
    title: 'Technical & standards committees',
    description:
      'Practitioners who review code changes before they land, so AMCA’s submissions are grounded in how the work actually gets done.',
  },
  {
    icon: GraduationCap,
    title: 'RTO 5139',
    description:
      'AMCA’s registered training organisation, audited and compliant, delivering the qualifications the industry is built on.',
  },
  {
    icon: Building2,
    title: 'State chapters',
    description:
      'Local committees that turn national advocacy into regional action — the briefings, events and relationships that don’t scale from Canberra alone.',
  },
]

function About() {
  return (
    <div>
      <PageHero
        eyebrow="About AMCA"
        title="Representing HVAC&R since before most of today's systems existed."
        description="AMCA has spent more than six decades turning site-level experience into industry standing — the reason a mechanical services contractor gets a seat at the table when codes, awards and safety standards are written."
      />

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Our purpose"
              title="An industry body that works for the people doing the work"
              description="AMCA exists because HVAC&R contractors needed a national voice that understood the trade from the inside — not a generic business association that treated mechanical services as an afterthought."
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

      <section className="py-24">
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
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="flex flex-col items-start gap-6 rounded-3xl bg-sand-100 p-10 sm:flex-row sm:items-center sm:justify-between sm:p-14">
            <div>
              <h2 className="text-2xl font-bold text-navy-950 sm:text-3xl">
                Careers at AMCA
              </h2>
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
