// @ts-check
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  trailingSlash: 'never',
  build: {
    format: 'file'
  },
  integrations: [tailwind(), icon()]
})
