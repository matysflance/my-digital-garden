import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: vercel(),
  integrations: [tailwind(), react(), sitemap()],
  site: 'https://smatysiak.dev',
});
