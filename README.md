# itservices.group

Static website for **Information Technology Services Group Limited** (trading as IT Services Group), company number 17572727, parent company of Layer Eight Studios Limited.

Plain HTML, CSS and a little JavaScript. No framework, no build step. Hosted on GitHub Pages with the custom domain `itservices.group` (DNS on Cloudflare).

## Files

| File | Purpose |
|---|---|
| `index.html` | Home page (hero, services, group, about, contact) |
| `privacy.html` | Privacy policy |
| `styles.css` | All styles, including dark mode (`prefers-color-scheme`) |
| `script.js` | Mobile menu and copyright year |
| `CNAME` | Custom domain for GitHub Pages – keep it |
| `.nojekyll` | Tells GitHub Pages to serve files as-is |
| `favicon.ico`, `favicon.svg`, `favicon-32x32.png`, `apple-touch-icon.png` | Icons |
| `assets/logo/` | Brand logos (SVG) and a 512px PNG of the mark |
| `assets/og-image.png` | 1200×630 social sharing image |

## Editing text

Open `index.html` or `privacy.html` in any text editor and change the words between the tags. Section headings are `<h2>`, card titles `<h3>`, paragraphs `<p>`.

Business details appear in several places. If they change, search the whole folder and update every occurrence:

- Company number `17572727` – contact section, footer, privacy page, and the JSON-LD block in the `<head>` of `index.html`.
- Registered office `8 Chaseville Parade, Chaseville Park Road, London, N21 1PG, United Kingdom` – contact section, footer, privacy page, and the JSON-LD `address` in `index.html`. Use the address **exactly** as shown on Companies House.
- Email `info@itservices.group`.

Keep the legal name, company number, address and email as plain text – Apple's business verification checks them against Companies House and D-U-N-S.

## Changing colours

Brand colours are CSS variables at the top of `styles.css` (`:root`), with dark mode overrides in the `@media (prefers-color-scheme: dark)` block just below.

## Swapping the logo

The header and footer logos are inline SVG inside `index.html` and `privacy.html` (so they use the Inter web font and switch colours in dark mode). To replace them:

1. Put the new SVGs in `assets/logo/` (keep the same file names if you can).
2. In `index.html` and `privacy.html`, replace the `<svg class="logo" ...>` block in the header (and in the footer of `index.html`) with the new SVG markup. Keep `class="logo"` on the `<svg>` element.
3. Regenerate the icons from the mark (requires `librsvg`: `brew install librsvg`):

   ```bash
   rsvg-convert -w 32 -h 32 assets/logo/itsg-mark.svg -o favicon-32x32.png
   rsvg-convert -w 512 -h 512 assets/logo/itsg-mark.svg -o assets/logo/itsg-mark-512.png
   cp assets/logo/itsg-mark.svg favicon.svg
   ```

   Then regenerate `apple-touch-icon.png` (180×180), `favicon.ico` and `assets/og-image.png` (1200×630) with your tool of choice.

## Previewing locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Redeploying

GitHub Pages publishes automatically from the `main` branch (root folder). After editing:

```bash
git add -A
git commit -m "Update site text"
git push
```

The live site updates within a minute or two.

## Hosting setup (one-off, for reference)

- GitHub → repo **Settings → Pages**: Source "Deploy from a branch", branch `main`, folder `/ (root)`, custom domain `itservices.group`, **Enforce HTTPS** ticked.
- Cloudflare DNS for `itservices.group`:
  - `A` `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
  - `CNAME` `www` → `ercanyildiz1.github.io`
  - Leave MX, SPF, DKIM and DMARC records untouched.
