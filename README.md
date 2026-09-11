# webarchive

Interactive UI snippets recovered from old personal sites, rebuilt as real HTML/CSS so the interaction states actually work live in Storybook, instead of sitting as static swatches. Stories are grouped by UI pattern (Hover Effects, Visited States, ...), and each one is named for the site it came from.

Companion to two Paper boards:
- **Site Archaeology** — sites Laura built and ran herself
- **Found Sites** — things found along the way, not hers

## Running locally

```bash
npm install
npm run storybook
```

## Groups

- **Hover Effects** — El Scorcho, absolute-terror.net, Bloodlust, Charm Attack!, Akkou, True Reviews
- **Visited States** — Riot Girls (a:visited inverts to a solid fill, rather than just dimming)

Two effects that turned out to be broken in the original CSS (an invalid `#white` hover color, and a `font-color` typo instead of `color`) were left out rather than faithfully reproduced — this library is meant to be a working reference, not an archive of every bug.
