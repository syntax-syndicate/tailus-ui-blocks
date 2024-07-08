import { defineConfig, squooshImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), mdx()],
  site: 'https://ui.tailus.io',
  image: {
    service: squooshImageService()
  },
  prefetch: {
    prefetchAll: true
  },
  vite: {
    resolve: {
      preserveSymlinks : true
    }
  }
});