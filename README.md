# Katherine Wong — Writing Website

Personal website for writer Katherine Wong, built with [Astro](https://astro.build/) and deployed on [Vercel](https://vercel.com/).

Live site: [katherinevwong.com](https://katherinevwong.com)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in a browser.

To create a production build:

```bash
npm run build
```

## Project structure

- `src/pages/` — Home, About, Writing, Contact, and error pages
- `src/components/` — Shared header, footer, and icons
- `src/layouts/` — Shared page layout and metadata
- `src/styles/global.css` — Global typography, colors, and layout styles
- `src/config.ts` — Site URL and external profile links
- `public/` — Static images, fonts, and `robots.txt`

Pushes to `main` are automatically deployed by Vercel.
