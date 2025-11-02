# Doggoflix
<img width="1898" height="916" alt="image" src="https://github.com/user-attachments/assets/50e8b703-17ac-43ce-b1c3-fcede71d3565" />


## Live demo: https://doggoflix.netlify.app


A tiny **Astro + Tailwind** “Netflix-style” portfolio starring your dog.  
Home shows a **random hero** on each request; movie pages are **pre-rendered**.

## Stack
- **Astro 5** (server output; per-page prerender)
- **Tailwind 4** (via `@tailwindcss/vite`)
- **astro-icon** + `@iconify-json/material-symbols`
- **Netlify** adapter (`@astrojs/netlify`)
- **Prettier** (Astro + Tailwind plugins)

## Quick Start
```bash
npm install
npm run dev
```

## Build & Preview

```bash
npm run build
npm run preview
```

## Formatter

```bash
npm run fmt
```

## Config (Short) 



```ts
// astro.config.ts
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import tailwindcss from '@tailwindcss/vite';
import astroIcon from 'astro-icon';

export default defineConfig({
  output: 'server',            // index = SSR; [slug] = SSG (via prerender)
  adapter: netlify(),
  integrations: [astroIcon({ iconSets: ['material-symbols'] })],
  vite: { plugins: [tailwindcss()] },
});

```



## Pages

/ (SSR) – random hero per request

/movies/[slug] (SSG) – generated via getStaticPaths()

## Tiny Structure

```bash
src/
  components/ (Background*, Header, Hero, Carousel/*)
  layouts/Layout.astro
  pages/index.astro
  pages/movies/[slug].astro
  styles/global.css
moviesData.ts
```

Notes

Pass hero background as src string to Background* components.

Use <a href={movie.href}> to link Carousel items to /movies/[slug].

License

MIT
```mathematica
If you want it even shorter, say the word and I’ll compress more.
```
