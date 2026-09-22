import { createFileRoute } from '@tanstack/react-router'
import { CalendarDays, GraduationCap, Percent, ShieldCheck } from 'lucide-react'
import { Container } from '../components/Container'
import { Button } from '../components/Button'
import { PageHero, SectionHeading } from '../components/SectionHeading'
import { trainingCategories } from '../lib/content'

export const Route = createFileRoute('/training')({ component: Training })

const shortCourses = [
  { name: 'Refrigerant handling & recovery', length: '1 day', member: '$195', nonMember: '$295' },
  { name: 'Safe isolation procedures', length: '1 day', member: '$165', nonMember: '$250' },
  { name: 'Commissioning fundamentals', length: '2 days', member: '$340', nonMember: '$510' },
  { name: 'Working at height for HVAC sites', length: 'Half day', member: '$120', nonMember: '$180' },
]

const calendar = [
  { course: 'Refrigerant handling & recovery', location: 'Melbourne, VIC', date: '14 Oct 2026' },
  { course: 'Safe isolation procedures', location: 'Adelaide, SA', date: '21 Oct 2026' },
  { course: 'Commissioning fundamentals', location: 'Sydney, NSW', date: '4 Nov 2026' },
  { course: 'Certificate IV info session', location: 'Online', date: '11 Nov 2026' },
]

function Training() {
  return (
    <div>
      <PageHero
        eyebrow="Training"
        title="Training run by people who still do the work."
        description="This is the most-visited part of amca.com.au — more traffic than events, news and membership combined. Certificate IV, short courses, and the apprenticeship pathway, all through RTO 5139."
      />

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Course catalogue"
            title="Four ways to build capability"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {trainingCategories.map((course) => (
              <div key={course.title} className="rounded-2xl border border-ink-100 bg-white p-7 shadow-card">
                <GraduationCap size={22} className="text-signal-500" />
                <h3 className="mt-4 text-lg font-bold text-navy-950">{course.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{course.description}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink-300">
                  {course.meta}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Member discount */}
      <section className="bg-navy-950 py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <Percent size={26} className="text-teal-500" />
            <h2 className="mt-4 text-3xl font-bold text-white">
              Members save around a third on every short course.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              That discount used to be visible only after you left amca.com.au for the
              enrolment site. It&apos;s on this page now — pricing, member and non-member, side
              by side.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-white/[0.06] text-xs uppercase tracking-wide text-white/50">
                  <th className="px-5 py-3 font-semibold">Course</th>
                  <th className="px-5 py-3 font-semibold">Length</th>
                  <th className="px-5 py-3 font-semibold">Member</th>
                  <th className="px-5 py-3 font-semibold">Non-member</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {shortCourses.map((c) => (
                  <tr key={c.name} className="text-white/80">
                    <td className="px-5 py-4 font-medium text-white">{c.name}</td>
                    <td className="px-5 py-4 text-white/55">{c.length}</td>
                    <td className="px-5 py-4 font-semibold text-teal-400">{c.member}</td>
                    <td className="px-5 py-4 text-white/45 line-through decoration-white/30">
                      {c.nonMember}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Calendar */}
      <section className="py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Training calendar" title="Upcoming sessions" />
            <Button to="/contact" withArrow={false} variant="ghost">
              Enrol a team
            </Button>
          </div>
          <div className="mt-10 divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white shadow-card">
            {calendar.map((session) => (
              <div
                key={`${session.course}-${session.date}`}
                className="flex flex-col gap-1.5 p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-3">
                  <CalendarDays size={18} className="shrink-0 text-signal-500" />
                  <div>
                    <p className="text-sm font-bold text-navy-950">{session.course}</p>
                    <p className="text-xs text-ink-500">{session.location}</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-navy-950">{session.date}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* RTO compliance */}
      <section className="pb-24">
        <Container>
          <div className="flex flex-col gap-6 rounded-3xl bg-sand-100 p-10 sm:flex-row sm:items-center sm:justify-between sm:p-14">
            <div className="flex items-start gap-4">
              <ShieldCheck size={26} className="mt-0.5 shrink-0 text-navy-950" />
              <div>
                <h2 className="text-xl font-bold text-navy-950">RTO 5139</h2>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink-500">
                  AMCA training is delivered under our own registered training organisation,
                  audited against the same standards as every other RTO in the country — the
                  difference is the content is written by HVAC&amp;R contractors, for
                  HVAC&amp;R contractors.
                </p>
              </div>
            </div>
            <Button to="/contact" variant="secondary" className="shrink-0">
              Ask about RTO compliance
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}
