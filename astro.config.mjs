// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

import mdx from '@astrojs/mdx';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), mdx()],
  adapter: netlify()
});