import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://meteora-dlmm-recap.pages.dev',
  integrations: [mdx()],
});
