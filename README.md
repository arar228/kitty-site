# $KITTY — landing page

🌐 **Live site:** https://kitty-site.up.railway.app

Static site (HTML + CSS + JS). No build step. Just open `index.html` or upload the folder to any host.

## Files
- `index.html` — page structure / content
- `styles.css` — all styling, fully responsive (desktop + mobile)
- `script.js` — mobile menu, copy-contract, scroll animations
- `assets/kitty.svg` — the mascot (clean vector recreation, used as logo + hero)

## Use your real cat artwork
The page currently uses the vector cat (`assets/kitty.svg`). To swap in your real PNGs:

1. Save your images into `assets/`, e.g.:
   - `assets/kitty.png`       (the plain standing cat — hero / logo)
   - `assets/kitty-buy.png`   (cat holding the diamond — for the CTA strip)
   - `assets/cats.png`        (the wall of cats — nice as a section background)
2. In `index.html`, replace `assets/kitty.svg` with your file where you want the real art.
   (Search & replace `assets/kitty.svg` → `assets/kitty.png`.)

Tip: square, transparent-background PNGs look best for the hero and logo.

## Edit the basics
- Contract address: search `EQCo0bIynpFOtt...` in `index.html` **and** `script.js` (the copy button).
- Links: `https://t.me/grambokitty`, `https://x.com/GramKittyCto`, `https://grambo.fun/`.
- Tokenomics numbers: in the `#tokenomics` section — placeholders marked, drop in your real figures.

## Deploy (free options)
- **Netlify / Vercel**: drag-and-drop this folder.
- **GitHub Pages**: push the folder, enable Pages on the branch.
- **Any web host**: upload the folder contents to the web root.

## Brand
- Colors: TON blue `#0098EA`, sky `#A6DCEC`, ink `#0B1220`.
- Fonts: Fredoka (display) + Inter (body), loaded from Google Fonts.
