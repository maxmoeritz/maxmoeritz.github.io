# Project: Beer Brewery GitHub Pages

Static one-page website for a craft brewery. Hosted on GitHub Pages.

## Structure

```
index.html          — single page; all sections in order: hero, brewers, beers, feedback, footer
css/style.css       — all styling; CSS custom properties at :root
js/main.js          — i18n translations object (T), fade-in observer, slider, beer expand/collapse
assets/logo.svg     — placeholder logo (replace with real black SVG)
```

## Sections (in page order)

| Section   | ID          | Content                                          |
|-----------|-------------|--------------------------------------------------|
| Nav       | `#nav`      | Logo + anchor links + SV/EN/DE switcher          |
| Hero      | `#hero`     | Full-viewport, big logo, slogan, CTA button      |
| Brewers   | `#brewers`  | 3 brewer cards (avatar initials, role, bio)      |
| Beers     | `#beers`    | 5 vertical beer cards with expand/collapse       |
| Feedback  | `#feedback` | Image+quote slider, 2 slides, arrow + dot nav    |
| Footer    | —           | Logo + copyright                                 |

## Translations

All user-visible text lives in `js/main.js` inside the `T` object.
Keys follow the pattern `section.subsection.field` (e.g. `beers.1.name`).
Default language: **Swedish (sv)**. Also supports **en** and **de**.

To add a brewer/beer/feedback: duplicate the HTML block in `index.html`,
add a new key group in `T` for all three languages, and add a dot in the slider controls.

## Logo

Replace `assets/logo.svg` with the real black SVG. It appears in:
- Nav (height: 26px)
- Hero (width: min(340px, 65vw))
- Footer (height: 30px)

## Design tokens (css/style.css :root)

| Token      | Value     | Usage                  |
|------------|-----------|------------------------|
| `--bg`     | #F4EFE6   | Page background        |
| `--surface`| #FDFBF7   | Cards / beers section  |
| `--border` | #DDD6C8   | All borders            |
| `--text`   | #1C1917   | Primary text / black   |
| `--muted`  | #78716C   | Secondary text         |

Fonts: DM Sans (body) + DM Serif Display (headings) — loaded from Google Fonts.
