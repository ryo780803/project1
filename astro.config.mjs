import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import githubPages from '@astrojs/github-pages';

export default defineConfig({
  site: 'https://ryo780803.github.io',
  base: '/project1/',
  adapter: githubPages(),
  vite: {
    plugins: [tailwindcss()],
  },
});