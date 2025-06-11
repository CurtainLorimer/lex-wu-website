// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

import sentry from '@sentry/astro';
import spotlightjs from '@spotlightjs/astro';

import mdx from '@astrojs/mdx';


import cloudflare from '@astrojs/cloudflare';


import tailwindcss from '@tailwindcss/vite';


// https://astro.build/config
export default defineConfig({
  site: 'https://lexwu.com',

  integrations: [
    sitemap(),
    sentry(),
    spotlightjs(),
    mdx()
  ],

  adapter: cloudflare(),

  vite: {
    plugins: [tailwindcss()]
  }
});