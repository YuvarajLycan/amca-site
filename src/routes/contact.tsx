import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { CheckCircle2, Mail, MapPin, Phone } from 'lucide-react'
import { Container } from '../components/Container'
import { PageHero } from '../components/SectionHeading'

export const Route = createFileRoute('/contact')({ component: Contact })

const reasons = [
  'General enquiry',
  'Membership enquiry',
  'Training & enrolments',
  'Media & press',
  'Careers',
]

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="One form, routed by reason — not a dead-end button."
        description="Tell us why you're getting in touch and it goes straight to the right team. Every submission gets a visible confirmation, not silence."
      />

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-8">
            <div className="rounded-2xl border border-ink-100 bg-white p-7 shadow-card">
              <Phone size={20} className="text-signal-500" />
              <h3 className="mt-3 text-sm font-bold text-navy-950">Call general enquiries</h3>
              <p className="mt-1 text-lg font-semibold text-navy-950">1300 475 615</p>
              <p className="mt-1 text-sm text-ink-500">Mon–Fri, 9am–5pm AEST</p>
            </div>
            <div className="rounded-2xl border border-ink-100 bg-white p-7 shadow-card">
              <Mail size={20} className="text-signal-500" />
              <h3 className="mt-3 text-sm font-bold text-navy-950">Email</h3>
              <p className="mt-1 text-sm text-ink-500">membership@amca.com.au</p>
            </div>
            <div className="rounded-2xl border border-ink-100 bg-white p-7 shadow-card">
              <MapPin size={20} className="text-signal-500" />
              <h3 className="mt-3 text-sm font-bold text-navy-950">National office</h3>
              <p className="mt-1 text-sm text-ink-500">
                Melbourne, VIC — with state chapter contacts across every territory.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-ink-100 bg-white p-8 shadow-card sm:p-10">
            {submitted ? (
              <div className="flex flex-col items-start gap-4 py-8">
                <CheckCircle2 size={36} className="text-teal-600" />
                <h3 className="text-xl font-bold text-navy-950">
                  Thanks — that&apos;s been sent.
                </h3>
                <p className="text-sm text-ink-500">
                  A member of the right team will get back to you, usually within one business
                  day.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-sm font-semibold text-navy-950 underline underline-offset-4"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form
                className="grid gap-5"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
              >
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                    Reason for contact
                  </label>
                  <select
                    required
                    defaultValue=""
                    className="mt-2 w-full rounded-xl border border-ink-200 px-4 py-3 text-sm text-navy-950 focus:border-navy-950 focus:outline-none"
                  >
                    <option value="" disabled>
                      Select a reason
                    </option>
                    {reasons.map((r) => (
                      <option key={r}>{r}</option>
                    ))}
                  </select>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                      Name
                    </label>
                    <input
                      required
                      type="text"
                      className="mt-2 w-full rounded-xl border border-ink-200 px-4 py-3 text-sm text-navy-950 focus:border-navy-950 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      className="mt-2 w-full rounded-xl border border-ink-200 px-4 py-3 text-sm text-navy-950 focus:border-navy-950 focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="mt-2 w-full rounded-xl border border-ink-200 px-4 py-3 text-sm text-navy-950 focus:border-navy-950 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-signal-500 px-6 py-3.5 text-sm font-semibold text-white hover:bg-signal-600"
                >
                  Send enquiry
                </button>
              </form>
            )}
          </div>
        </Container>
      </section>
    </div>
  )
}
