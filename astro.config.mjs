// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  vite: {
    esbuild: {
      jsxFactory: 'h',
      jsxFragment: 'Fragment'
    }
  },
  output: 'server',
  adapter: vercel({}),
  server: {
    port: 4322
  }
});
