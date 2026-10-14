import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { cloudflare } from '@cloudflare/vite-plugin'

// `GITHUB_PAGES=true npm run build` produces a fully prerendered static site
// for GitHub Pages (project site served under /amca-site/). The default build
// remains the Cloudflare Workers SSR target.
const isPages = process.env.GITHUB_PAGES === 'true'

const config = defineConfig({
  base: isPages ? '/amca-site/' : '/',
  resolve: { tsconfigPaths: true },
  plugins: [
    !isPages && devtools(),
    !isPages && cloudflare({ viteEnvironment: { name: 'ssr' } }),
    tailwindcss(),
    tanstackStart(
      isPages
        ? {
            prerender: {
              enabled: true,
              crawlLinks: true,
              autoSubfolderIndex: true,
            },
          }
        : {},
    ),
    viteReact(),
  ],
})

export default config
