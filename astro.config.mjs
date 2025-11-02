import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import astroIcon from 'astro-icon';

export default defineConfig({
  integrations: [
    astroIcon({
      iconSets: ['material-symbols'],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
