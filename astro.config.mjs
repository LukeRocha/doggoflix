import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';
import tailwindcss from '@tailwindcss/vite';
import astroIcon from 'astro-icon';

export default defineConfig({
  output: 'hybrid',
  adapter: netlify(),
  integrations: [
    astroIcon({ iconSets: ['material-symbols'] }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
