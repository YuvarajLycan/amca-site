import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
import { Container } from '../components/Container'
import { AccessBadge, AccessGate } from '../components/AccessGate'
import { newsItems } from '../lib/content'

export const Route = createFileRoute('/news_/$slug')({
  loader: ({ params }) => {
    const item = newsItems.find((n) => n.slug === params.slug)
    if (!item) throw notFound()
    return item
  },
  component: NewsDetail,
})

function NewsDetail() {
  const item = Route.useLoaderData()

  return (
    <div className="py-20">
      <Container className="max-w-3xl">
        <Link
          to="/news"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-500 hover:text-navy-950"
        >
          <ArrowLeft size={15} />
          All news
        </Link>

        <div className="mt-6 flex items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-wide text-teal-600">
            {item.category}
          </span>
          <AccessBadge tier={item.tier} />
        </div>
        <h1 className="mt-3 text-3xl font-bold text-navy-950 sm:text-4xl">{item.title}</h1>
        <p className="mt-3 text-sm text-ink-500">
          {item.date} · {item.readTime}
        </p>

        <div className="mt-10">
          <AccessGate
            tier={item.tier}
            teaser={
              <p className="prose-body text-base leading-relaxed text-ink-700">{item.excerpt}</p>
            }
          >
            <div className="prose-body text-base leading-relaxed text-ink-700">
              {item.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </AccessGate>
        </div>
      </Container>
    </div>
  )
}
