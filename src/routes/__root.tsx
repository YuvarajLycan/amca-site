import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { SiteControls } from '../components/SiteControls'
import { ThemeProvider } from '../lib/theme'
import { RationaleProvider } from '../lib/rationale'
import { AccessProvider } from '../lib/access'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        title: 'AMCA Australia — Home of HVAC',
      },
      {
        name: 'description',
        content:
          "AMCA is the national industry body for Australia's HVAC&R sector — representing contractors, training the workforce, and connecting the trade.",
      },
      { name: 'theme-color', content: '#0a1f3d' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="flex min-h-screen flex-col">
        <ThemeProvider>
          <RationaleProvider>
            <AccessProvider>
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
              <SiteControls />
            </AccessProvider>
          </RationaleProvider>
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  )
}
