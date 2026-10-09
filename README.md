# VANGUARD — Creative Agency Landing Page

Fullscreen hero landing page built with **React + Vite + Tailwind CSS**.

## Run it

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview it with `npm run preview`.

## Deploy to GitHub Pages

The repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`)
that builds and publishes the site automatically on every push to `main`.

1. Create a new repo on GitHub named `vanguard` (do not initialize it).
2. In the project folder, run:
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/vanguard.git
   git branch -M main
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
4. After a minute or two, the site is live at
   `https://YOUR-USERNAME.github.io/Vanguard-/`

Note: `vite.config.ts` sets `base: '/Vanguard-/'` to match the repo name
(case-sensitive). If your repo is named differently, update that one line.

## Structure

- `index.html` — page shell, loads the FSP DEMO Podium Sharp 4.11 and Inter fonts
- `src/main.tsx` — React entry point
- `src/App.tsx` — the entire page: background video, navbar, mobile menu overlay, hero content
- `src/index.css` — Tailwind directives plus the `fade-up` / `fade-in` / `scale-in` keyframes and staggered animation utilities
- `tailwind.config.js` — registers `font-podium` and `font-inter` font families
