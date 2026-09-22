import { createFileRoute } from '@tanstack/react-router'
import { CalendarDays, Download, GraduationCap, Percent, ShieldCheck } from 'lucide-react'
import { Container } from '../components/Container'
import { Button } from '../components/Button'
import { AccessGate } from '../components/AccessGate'
import { PageHero, SectionHeading } from '../components/SectionHeading'
import { Why } from '../lib/rationale'
import { courses, trainingCategories } from '../lib/content'

export const Route = createFileRoute('/training')({ component: Training })

const shortCourses = courses.filter((c) => c.category === 'Short course')

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
          <SectionHeading eyebrow="Course catalogue" title="Four ways to build capability" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {trainingCategories.map((course) => (
              <div
                key={course.title}
                className="rounded-2xl border border-ink-100 bg-white p-7 shadow-card"
              >
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

      {/* Full catalogue */}
      <section className="py-4">
        <Container>
          <SectionHeading
            eyebrow="Every course, listed"
            title="The full catalogue — not four categories and a dead end"
          />
          <Why>
            The real site’s Training tab is the biggest traffic driver on amca.com.au and still
            sends visitors to categories rather than an actual list of bookable courses. This
            table is that list — every entry here is a real, individually priced course.
          </Why>
          <div className="mt-8 overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-ink-100 bg-sand-50 text-xs uppercase tracking-wide text-ink-500">
                  <th className="px-5 py-3 font-semibold">Course</th>
                  <th className="hidden px-5 py-3 font-semibold sm:table-cell">Duration</th>
                  <th className="hidden px-5 py-3 font-semibold md:table-cell">Delivery</th>
                  <th className="px-5 py-3 font-semibold">Member</th>
                  <th className="px-5 py-3 font-semibold">Non-member</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-100">
                {courses.map((c) => (
                  <tr key={c.title}>
                    <td className="px-5 py-4">
                      <p className="font-semibold text-navy-950">{c.title}</p>
                      <p className="text-xs text-ink-500">{c.category}</p>
                    </td>
                    <td className="hidden px-5 py-4 text-ink-500 sm:table-cell">{c.duration}</td>
                    <td className="hidden px-5 py-4 text-ink-500 md:table-cell">{c.delivery}</td>
                    <td className="px-5 py-4 font-semibold text-teal-600">{c.memberPrice}</td>
                    <td className="px-5 py-4 text-ink-500">{c.nonMemberPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Member discount */}
      <section className="mt-20 bg-navy-950 py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <Percent size={26} className="text-teal-500" />
            <h2 className="mt-4 text-3xl font-bold text-white">
              Members save around a third on every short course.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              That discount used to be visible only after you left amca.com.au for the enrolment
              site. It&apos;s on this page now — pricing, member and non-member, side by side.
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
                  <tr key={c.title} className="text-white/80">
                    <td className="px-5 py-4 font-medium text-white">{c.title}</td>
                    <td className="px-5 py-4 text-white/55">{c.duration}</td>
                    <td className="px-5 py-4 font-semibold text-teal-400">{c.memberPrice}</td>
                    <td className="px-5 py-4 text-white/45 line-through decoration-white/30">
                      {c.nonMemberPrice}
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

          <div className="mt-8">
            <AccessGate
              tier="member"
              teaser={
                <p className="text-sm text-ink-500">
                  Want the full year&apos;s calendar in one file — every state, every course? That
                  version is a member benefit.
                </p>
              }
            >
              <button className="inline-flex items-center gap-2 rounded-full bg-navy-950 px-5 py-3 text-sm font-semibold text-white hover:bg-navy-800">
                <Download size={15} />
                Download the full 2026 calendar
              </button>
            </AccessGate>
            <Why>
              Tier three, in context: the calendar itself stays public, but the bulk, all-state
              printable version is a genuine reason to join rather than a paywall on basic
              information.
            </Why>
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
                  difference is the content is written by HVAC&amp;R contractors, for HVAC&amp;R
                  contractors.
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
