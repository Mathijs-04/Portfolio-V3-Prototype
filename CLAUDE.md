# Portfolio V3 (prototype) — handoff for the next agent

This file is the single source of context for anyone (human or agent) picking this project up.
Read it fully before changing anything. Keep it up to date when decisions change.

---

## 1. What this is

A from-scratch rebuild of Mathijs van der Meijde's personal portfolio, in a **dark-fantasy style**.
Mathijs is a Creative Technologist: Full-Stack Developer at NOBEARS (Rotterdam) and a fourth-year
student of Creative Media & Game Technologies at Hogeschool Rotterdam. His work and hobbies lean
heavily into fantasy and games (Warhammer, D&D, Dungeon Synth, The Elder Scrolls, game dev, 3D, AI).

- **Repo:** https://github.com/Mathijs-04/Portfolio-V3-Prototype
- **Status:** "V2 prototype", agreed to be the base for the definitive version. Not deployed yet.
- **Previous site (V1):** https://mathijs-04.github.io/Portfolio/ — a React + Tailwind site
  (`Mathijs-04/Portfolio`). V1 is left untouched; V3 reuses its content (texts, images, links).
  Note: locally the folder is called `Portfolio-V2`; the GitHub repo is `Portfolio-V3-Prototype`.

## 2. How we got here (short history)

1. **Review of V1.** It was a generic "dark SaaS" template: identical card grids on every page,
   typewriter hero, a logo-wall skills page that linked away to react.dev etc., a repetitive About
   page, no hierarchy among 27 projects, and none of Mathijs' personality (fantasy, games) visible.
2. **Direction chosen:** rebuild in the style of Mathijs' own project **The Arcane Archive**
   (a Dungeon Synth music player, `github.com/Mathijs-04/The-Arcane-Archive`; only its `original/`
   folder is the reference — other local versions are experimental). Its signature: night sky with
   a crescent moon, faint forest silhouette, a looping **fog video**, an animated **film-grain
   overlay** (`noise.gif`), a "vintage-print" SVG ink filter on lettering, grey **stone panels with
   rough hand-cut edges**, corner ornaments.
3. **Prototype 1:** Projects became trading cards with rarities; Skills became constellations.
4. **Iterations and user feedback that shaped the current state:**
   - Constellations first were foreground diagrams (too perfect) → then painted into the sky in a
     2x3 grid (still too artificial) → now **irregular clusters drifting through the sky**.
   - Home first had a title-screen menu with parallax and a "dive" transition → user wanted the
     **normal nav** on Home, **no parallax**, a bolder forest/castle, and **a dragon** flying past.
   - About was a scroll-driven ink map ("The Chronicle") → rejected as too AI-generated →
     now a **simple placeholder** with the V1 text, to be designed later.
   - Mythic/alternative page names ("The Collection", "The Firmament", "The Chronicle") → removed;
     pages are just **Home, Projects, Skills, About** (may be renamed later by the user).
   - The Archive's secondary font (Maknin) was **unreadable** → removed; EB Garamond is used instead.
   - Performance complaints (laggy card deal-in) → rebuilt for compositor-only animation (see §8).
   - Generic "AI-ish" flourishes were stripped (see §3).

## 3. The user's preferences (follow these)

- **Fantasy, not D&D.** A d20 hero was rejected: it should not become "a D&D portfolio".
- **Must not feel "vibe coded with Opus".** Avoid: kicker labels in spaced caps above every title,
  italic ledes everywhere, glowing gems/✦ ratings sprinkled around, progress counters, keyboard
  hints, AI-written flavour text, jokey easter-egg copy, light rays, generic gradients. The more it
  looks like a hand-made project such as The Arcane Archive, the better.
- **Brief and focused pages.** One core idea and interaction per page; park extras as ideas.
  Default states are minimal (e.g. constellations show no text until clicked).
- **Butter-smooth animation is a hard requirement.** If something animates, it must hold 60fps.
- **Use the user's own copy.** Project names/subtitles are the "official" V1 ones. Don't invent
  copy and present it as final; mark placeholders clearly.
- The user reviews visually in the browser and gives batched feedback; show, don't just describe.

## 4. Tech stack and running it

- Vite 6 + React 18 + react-router 7 + framer-motion 11. **Plain CSS** (no Tailwind), one stylesheet
  per area in `src/styles/`. No TypeScript, no test setup yet.
- Fonts: **Ransite Medieval** (local, `public/fonts/ransite-medieval.otf`) for titles/nav/name,
  **EB Garamond** (Google Fonts, linked in `index.html`) for everything else.

```bash
npm install
npm run dev      # http://localhost:5173 (the old session ran it on 5174)
npm run build    # outputs dist/
```

Gotcha: after installing a new dependency while the dev server runs, Vite may re-optimise deps and
load two copies of React ("Invalid hook call" / `useContext` of null). Restart the dev server.

## 5. Project structure

```
index.html                 fonts, root
public/
  fx/                      Fog-Loop.mp4 (18 MB!), noise.gif (grain), Forest-Backdrop.png (forest + castle
                           silhouette, 6803x2268), Texture-Overlay.png (stone mask), corner-ornament.svg
                           (Archive ornament as a tintable alpha mask; 240px PNG embedded)
  fonts/ransite-medieval.otf
  projects/*.webp          V1 project screenshots (full size, used on card backs)
  projects/thumbs/*.webp   640px thumbnails for card fronts (generated; see §8)
  about/profile.webp       portrait
src/
  main.jsx                 imports all stylesheets, MotionConfig reducedMotion="user"
  App.jsx                  router, Layout (Atmosphere + Nav + page fade), page titles, sky modes
  components/
    Atmosphere.jsx         shared sky: starfield + deep stars + milky way + moon, forest, fog video,
                           #vintage-print SVG filter, grain. Sets html[data-sky] per page.
    Nav.jsx                the one fixed top nav
    TitleScene.jsx         Home landscape: moon, horizon haze, ridge, fog, forest/castle, fireflies,
                           tree line, the dragon
    ProjectCard.jsx        grid card (tilt + legendary embers)
    CardFace.jsx           card front (also exports Ornaments, RARITY_LABEL)
    CardBack.jsx           card back: gallery, write-up, tech, links
    CardInspector.jsx      fly-out + flip dialog (portalled to <body>)
    useTilt.js             pointer tilt writing CSS vars (--px/--py/--rx/--ry/--hover)
    Gem.jsx                rarity gem (SVG)
    Constellation.jsx      one drifting constellation (procedural shape from a seed)
    Inscription.jsx        Skills info panel
  pages/  Home.jsx  Projects.jsx  Skills.jsx  About.jsx
  data/
    projects.js            27 projects, V1 order, official names/subtitles, rarity, tech, images,
                           lore (V1 paragraphs), links
    skills.js              6 constellations (domains), stars (skills), drift params, projectsForStar()
  styles/  base.css atmosphere.css card.css projects.css skills.css home.css about.css
```

## 6. How each page works

**Shared shell (`App.jsx`, `Atmosphere.jsx`, `Nav.jsx`).** The sky, fog, forest and grain are fixed
layers at negative z-index and never unmount. Each route sets `html[data-sky]` (`home`, `skills`,
`default`) and CSS eases the sky into that mood (star brightness via the registered
`@property --star-boost`, deep-star layer, milky way, fog/forest opacity). Pages are wrapped in
`AnimatePresence mode="wait"`: 0.3s fade out → scroll to top → 0.5s fade in.

**Home.** A title screen. `TitleScene` is portalled to `<body>` at z-index -4 (behind the page, in
front of the starfield). Big textured moon; your name in Ransite inks in across its lower edge
(`--moon-size`/`--moon-top` are shared by moon and title). Horizon haze makes everything in front
read as a silhouette: procedural ridge → fog → forest/castle (sized by viewport height, castle
anchored at ~74% width) → fog → fireflies → blurred tree line. A hand-drawn SVG **dragon** crosses
the moon every 34s (`dragon-fly`), wings flap around the shoulder (`flap`). The full intro plays once
per browser session (`sessionStorage "home:intro-seen"`), afterwards everything uses `--t: 0.25`.
The page fades its portal out via `useIsPresent`.

**Projects.** Title + one grid of trading cards in the V1 order (rarities mixed on purpose).
- Rarity: `legendary` (obsidian card, gold ink, foil, embers, glow), `epic` (violet foil/glow),
  `rare` (steel sheen), `common` (plain stone). Card art is greyscale until hovered.
- Deal-in: one IntersectionObserver adds `.is-dealt`, CSS transitions transform/opacity, small
  stagger per batch.
- Click → `CardInspector` flies the card to the centre and turns it over (framer spring); Esc/×/
  backdrop returns it to its slot.
- Arriving with `location.state.summon = slug` (from Skills) scrolls to and pulses that card.

**Skills.** Six constellations (Front-End, Back-End, Artificial Intelligence, Game Dev & 3D,
Design & Sound, Tooling). Each is a loose star cluster generated from `seed` (random walk with
branches, normalised into a square) and drifts back and forth with a long CSS animation
(`at`, `drift`, `seconds`, `phase` in `skills.js`). Lines are faint and dashed, stopping short of
stars. Hovering pauses the whole sky; clicking a star "wakes" its constellation (names appear,
lines brighten, others dim) and opens `Inscription` on the opposite side (top/bottom on phones) with
the domain, its skills, the selected skill's blurb and "Seen in" links to project cards.

**About.** Placeholder: the V1 About text verbatim on one stone slab with the portrait and
LinkedIn/GitHub links. Expected to be redesigned (see §10).

## 7. Visual system

- Tokens in `src/styles/base.css` (`:root`): `--night`, `--bone`, `--mist`, rarity colours
  (`--legendary #e8b45a`, `--epic`, `--rare`, `--common` + `-hot` variants), `--rough-edge`
  (the shared hand-cut `clip-path` polygon), `--nav-h`, `--ease-out`.
- `[data-rarity]` sets `--r` / `--r-hot` for any element.
- `.ink` applies the Archive's `#vintage-print` SVG filter: use only on large static titles.
- Stone surfaces (cards, About slab): grey `#9d9a94` face, `Texture-Overlay.png` as a black mask,
  SVG noise multiplied on top, double ruled frame, corner ornaments (`.ornament--tl/tr/bl/br`,
  tinted via `--ornament`), offset backing via a clipped `::before` translated 4–6px.
- **Ransite caveat:** its capital E, I and L look like C, 1 and C ("Front-Cnd", "COCCECTION").
  Use Ransite only for words without those capitals (page titles, nav, the name); use EB Garamond
  for project names, domains and anything uppercase.
- The world is monochrome; colour only comes from rarity (and the gold accent).

## 8. Hard-won technical notes (don't regress these)

- **No background on `<body>`**: with one on both `<html>` and `<body>`, the body paints over the
  negative z-index sky layers (stars/fog vanished). The night colour lives on `<html>` only.
- **Performance rules** (the user explicitly demands smoothness):
  - Animate only `transform` / `opacity`. No animated `filter`, no per-frame CSS-var-driven
    gradients on many elements.
  - No `filter: drop-shadow()` / SVG filters on repeated or animated elements (cards used three
    drop-shadows each → laggy). Backing = clipped pseudo-element; shadow = `box-shadow`.
  - Card foil/glare move with `transform` instead of repainting `background-position`.
  - Card fronts use 640px thumbnails (`public/projects/thumbs/`, made with `sips` + `cwebp -q 78`);
    full-size images only on the card back. This took the deal-in from hitches to a steady 60fps.
  - Constellations are DOM elements on composited layers moved by one CSS animation; stars twinkle
    with opacity. Avoid putting animated content inside SVGs that also have filters.
  - Measured last session: card deal-in, Skills drift and the card flip all ~16.7ms/frame.
- **SVG dash + `pathLength` under a CSS scale transform renders lines invisible** in Chrome.
  Avoid that combination (the old Skills zoom hit it).
- React **StrictMode runs `useState` initialisers twice**: don't write to storage inside them
  (it broke the Home "first visit" intro). Write in `useEffect`.
- Things that must cover the nav (card inspector) are portalled to `<body>`; `.page` is its own
  stacking context (z-index 1) under the nav (z-index 20).
- `prefers-reduced-motion` is respected (MotionConfig + CSS media queries) — keep doing that.

## 9. Content and data

- **Projects page, cards and project data are synced from the definitive version**
  (`~/Code/Fantasy-Portfolio`, `Mathijs-04/Portfolio-V3`, commit `647f8fc`): `src/data/projects.js`
  (28 projects, the user's rarities, `cover` thumbnails), `public/projects/`, and the components
  `ProjectCard, CardFace, CardBack, CardGallery, CardInspector, Gem, TechIcon, SortSelect, Button,
  useTilt` plus `card.css`, `projects.css`, `button.css`, `public/fx/Grime.webp`. Keep these files
  identical to the official ones (re-copy them when the official version changes); put
  prototype-only behaviour in separate files. react-icons is pinned to 5.5.0 like the official
  lockfile (5.7.0 dropped `SiCss3`).
- `skills.js`: `level` (1–3 star brightness) and every `blurb` are **placeholders written by the
  agent**. Its "Seen in" matching still uses the old prototype tech names (e.g. "SQL"), so some
  links no longer match the official data.

### Booster packs (prototype feature, 2026-11-12)

The Projects page starts empty: the visitor opens booster packs to collect the project cards.
- `src/data/collection.js` — the collection in `localStorage` (`projects:collection:v1`, an array
  of slugs). `drawPack` takes up to `PACK_SIZE` (8) random projects not yet owned, so no doubles:
  28 projects = packs of 8, 8, 8, 4. The pack is saved the moment it is opened.
- `pages/Projects.jsx` — the official page plus: only owned cards in the deck (sort still works),
  `BoosterPack` above the deck (alone and centred on a first visit), new cards rendered hidden in
  their slots until their flight lands, the deal-in re-observes added cards, textures pre-decoded
  on mount, and a "Reset collection (dev)" link (dev builds only).
- `components/BoosterPack.jsx` — `PackArt` (crimped foil strips, a plain obsidian body with a gold
  double rule, ornaments, "Projects" and the card count; sized in cqw) and the page stack (up to
  3 packs underneath, tilt, gentle bob and glow). The pack itself is the button (the user removed
  the separate "Open pack" button and asked for a plain pack, no moon art).
- `components/CardCover.jsx` — the plain face-down side shared by all cards (dark stone, bone
  rule, ornaments). Not the same as `CardBack` (the detail side in the inspector).
- `components/PackOpening.jsx` — the overlay: rise (pack flies from the page to the centre) →
  tear (shake; the top strip is ripped off: it peels up from the left while hinged at its right
  end, snaps free and flutters away; both torn edges turn ragged with a pale fibrous band, the
  pack's mouth darkens and foil flecks pop off left to right — all in `PackArt`/`packs.css`;
  light in the best card's rarity colour) → spill (wrapper drops,
  cards spring out face down into a spread: 4 across, 3 on tall screens) → reveal (click to turn;
  face-down rare+ cards glow a hint of their colour; a rare gets a small shimmer when turned: one
  faint ring and a few sparks) → "Add to collection" flies each card into its slot. Esc collects
  early.
  Epic and legendary pulls are deliberately big (the user asked for "more extreme"): the card
  first charges up (trembles, glow swells; 0.45s / 0.8s), then turns with a bigger pop and burst,
  shockwave ring(s), sparks in the rarity colour, a full-screen colour flash and a shake of the
  spread (Web Animations on `translate`); legendaries keep slowly turning rays behind them.
- `styles/packs.css` — all of the above. Measured: flips, spill and collect at ~16.7 ms/frame;
  the very first opening/collect can drop a frame or two while textures decode.
- Possible next steps (not built): pack odds/guarantees, a counter of cards owned, a way to see
  which cards are still missing, porting it to the definitive version.

## 10. Plans, ideas and open items

Agreed / parked ideas:
- **Card packs:** prototyped (see "Booster packs" above); to be built in the definitive version.
- **About page redesign:** the user liked the idea of a **map** or a **study** (a candlelit desk with
  objects representing school, work and hobbies) that shows general things like school and work,
  but the scroll-map prototype felt too AI-generated. Keep it brief and hand-made in feel.
- More project-card polish: the user said there are "many things" they still want to change on the
  cards (not yet specified).
- Possible extras discussed earlier (not committed to): ambient sound via the user's Echoes of the
  Realm engine, achievements, a Dungeon-Synth mini player as an About easter egg.

Before going live:
- **Font licence:** Ransite's metadata says "PERSONAL USE". Check/buy a licence (or replace).
- **Compress `Fog-Loop.mp4`** (18 MB) and consider a smaller `Forest-Backdrop.png`.
- **Deployment:** V1 deploys to GitHub Pages under `/Portfolio/`. If V3 goes to Pages under a
  sub-path, set Vite `base`, the router `basename`, and fix the absolute `/fx/...`, `/fonts/...`,
  `/projects/...` URLs in CSS/JSX (they currently assume the site is served from `/`). Also add a
  404 → index redirect for client-side routing.
- Rewrite the placeholder skill blurbs/levels; confirm rarities.
- No tests, linting or CI yet.

## 11. Working agreements from the previous sessions

- Verify changes in the browser (desktop ~1280x800 and phone 375x812) before reporting; measure
  frame times for anything animated.
- Keep commit messages descriptive; the user decides when to commit/push.
- The local V1 repo is `~/Code/Portfolio-deployment/Portfolio`; The Arcane Archive reference is
  `~/Code/The-Arcane-Archive/original` (paths on the original machine).
