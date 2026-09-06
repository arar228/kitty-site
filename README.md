# GRAMBO KITTY · $KITTY

Responsive static landing-page source for the GRAMBO KITTY community identity on TON.
The implementation focuses on mobile navigation, typography, lightweight animation,
and readable project information in a browser-only page.

**Status:** static frontend with an existing [GitHub Pages demo](https://arar228.github.io/kitty-site/)
(HTTP 200 checked on 2026-09-07). The external token's commercial, ownership, and
endorsement claims remain outside this engineering review.

## Implementation highlights

- HTML sections with a responsive CSS layout and a collapsible mobile menu.
- Contract-address copy control with browser clipboard handling and toast feedback.
- Scroll-aware navigation and one-time reveal animations through `IntersectionObserver`.
- Local artwork assets, SVG decorations, and Google Fonts typography.
- A small Python development server that binds to loopback and disables caching.

## Source map

| File | Responsibility |
| --- | --- |
| [index.html](index.html) | Content, navigation, links, metadata, and asset references |
| [styles.css](styles.css) | Responsive layout, colors, typography, and animation |
| [script.js](script.js) | Menu, copy control, navigation state, and reveal effects |
| [serve.py](serve.py) | Local development HTTP server |
| [assets/kitty.png](assets/kitty.png) | Current hero, logo, and section artwork |
| [assets/kitty.svg](assets/kitty.svg) | Retained vector variant |
| [assets/diamond.svg](assets/diamond.svg) | Decorative diamond asset |

## Local preview

Requirements: Python 3 and a modern browser. From the repository root:

```sh
python serve.py 4321
```

Open `http://127.0.0.1:4321`. There is no package installation or build stage.
An alternative is `python -m http.server 8000 --bind 127.0.0.1`.
Use localhost or HTTPS when checking browser clipboard behavior.

## Content and visual maintenance

- Keep the displayed contract in `index.html` and the `CA` constant in `script.js` aligned.
- Review the `#tokenomics` content and every external destination before publishing updates.
- The current page uses `assets/kitty.png`; replace references deliberately when switching artwork.
- Additional artwork can live in `assets/`, such as `kitty-buy.png` or `cats.png`.
  Those optional filenames are suggestions, not files included in this repository.
- The retained visual palette uses TON blue `#0098EA`, sky `#A6DCEC`, and ink `#0B1220`.
  Fredoka and Inter are requested from Google Fonts.

## Hosting and references

Publish the static files and `assets/` to a static host; this repository has no deployment workflow.
GitHub Pages, Netlify, Vercel, or an existing web server can serve this source with the
repository root as the site directory. Host-specific settings need their own verification.

The existing GitHub Pages deployment serves the root of `main`. Its demo returned
HTTP 200 on 2026-09-07; the earlier Railway endpoint returned 404 on the same check.
Community references retained from the original README:
[Telegram](https://t.me/grambokitty), [X](https://x.com/GramKittyCto), [Grambo](https://grambo.fun/).

## Verification and rights

Documentation checks cover repository-relative links, declared entrypoints, and JavaScript syntax.
Automated browser tests and transaction behavior are outside this pass. The HTTP check
is a dated availability observation, rather than a continuous uptime guarantee.
The repository has no automated test suite or license file. Artwork, community branding,
and third-party fonts retain their respective owners' rights; reuse requires the appropriate permission.
