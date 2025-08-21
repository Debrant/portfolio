import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    })
  ],
  site: 'https://originathan.com',
  base: '/',
  adapter: netlify(),
  vite: {
    optimizeDeps: {
      exclude: ['@astrojs/react']
    }
  }
});