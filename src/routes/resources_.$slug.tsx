import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { ArrowLeft, Download } from 'lucide-react'
import { Container } from '../components/Container'
import { AccessBadge, AccessGate } from '../components/AccessGate'
import { guides } from '../lib/content'

export const Route = createFileRoute('/resources_/$slug')({
  loader: ({ params }) => {
    const guide = guides.find((g) => g.slug === params.slug)
    if (!guide) throw notFound()
    return guide
  },
  component: GuideDetail,
})

function GuideDetail() {
  const guide = Route.useLoaderData()

  return (
    <div className="py-20">
      <Container className="max-w-3xl">
        <Link
          to="/resources"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-500 hover:text-navy-950"
        >
          <ArrowLeft size={15} />
          All resources
        </Link>

        <div className="mt-6 flex items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-wide text-teal-600">
            {guide.category}
          </span>
          <AccessBadge tier={guide.tier} />
        </div>
        <h1 className="mt-3 text-3xl font-bold text-navy-950 sm:text-4xl">{guide.title}</h1>
        <p className="mt-3 text-sm text-ink-500">{guide.readTime}</p>

        <div className="mt-10">
          <AccessGate
            tier={guide.tier}
            teaser={<p className="prose-body text-base leading-relaxed text-ink-700">{guide.summary}</p>}
          >
            <div className="prose-body text-base leading-relaxed text-ink-700">
              {guide.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <button
              type="button"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink-200 px-5 py-3 text-sm font-semibold text-navy-950 hover:border-navy-950"
              onClick={() => window.print()}
            >
              <Download size={15} />
              Save as PDF
            </button>
          </AccessGate>
        </div>
      </Container>
    </div>
  )
}
