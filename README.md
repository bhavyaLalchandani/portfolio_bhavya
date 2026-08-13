# Bhavya Lalchandani — Portfolio v2

A dual-mode portfolio: one switch, two identities.
- **Build mode** — Software Engineer (experience, skills, projects, achievements, résumé)
- **Create mode** — Designer & Content Creator (Instagram, design work, community leadership)

Plain HTML/CSS/JS. No build step, no dependencies — works straight out of the folder.

## Files
```
index.html     structure + content
styles.css     lavender-purple design system (all colors as CSS variables)
script.js      mode toggle, scroll reveal, GfG link config
assets/        your résumé PDF lives here
```

## Before you deploy — 2 things to finish

1. **GeeksforGeeks link.** Open `script.js`, first line:
   ```js
   const GFG_INTERVIEW_URL = "";
   ```
   Paste your article URL between the quotes. Until you do, the button falls
   back to geeksforgeeks.org and shows "add your article link" as a hint —
   nothing breaks, it just won't point anywhere useful yet.

2. **Design gallery.** In `index.html`, search for `id="gallery"` — there are
   4 placeholder tiles (`<div class="gallery-tile">`). Replace each with an
   `<img src="assets/your-file.jpg" alt="...">` once you've picked pieces to
   show. Drop the image files into `assets/`.

Everything else (résumé download, Instagram links, GitHub/LinkedIn, all resume
content) is already wired up.

## Preview locally
No build tools needed — just open `index.html` in a browser, or for a local
server (recommended so relative paths behave):
```bash
npx serve .
```

## Deploy to Vercel

**Option A — Vercel CLI (fastest, no GitHub needed)**
```bash
npm i -g vercel        # one-time
cd portfolio-v2
vercel                 # first deploy, follow the prompts
vercel --prod          # promote to your production URL
```
Vercel auto-detects this as a static site — no framework, no build command needed.

**Option B — GitHub + Vercel dashboard (recommended if you'll keep editing)**
1. Create a new repo and push this folder:
   ```bash
   git init
   git add .
   git commit -m "portfolio v2"
   git branch -M main
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```
2. Go to vercel.com/new, import the repo.
3. Framework preset: **Other**. Build command: leave blank. Output directory: leave blank (root).
4. Deploy. Every future `git push` auto-redeploys.

**Option C — Drag and drop**
Go to vercel.com/new, drag the whole `portfolio-v2` folder onto the page. Done.

## Custom domain
Once deployed, add a custom domain under Project → Settings → Domains if you
want something other than the `*.vercel.app` URL.
