import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ryo780803.github.io',
  base: '/project1/',

  vite: {
    plugins: [tailwindcss()],
  },
});