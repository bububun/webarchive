# webarchive

Interactive UI snippets recovered from old personal sites, rebuilt as real HTML/CSS so the interaction states — link hovers, cursor changes, and a couple of period-authentic CSS typos — actually work live in Storybook, instead of sitting as static swatches.

Companion to two Paper boards:
- **Site Archaeology** — sites Laura built and ran herself
- **Found Sites** — things found along the way, not hers

## Running locally

```bash
npm install
npm run storybook
```

## Notes on accuracy

A few of these reproduce real bugs from the original CSS rather than "fixing" them:
- **Revolution** — `a:hover{color:#white}` isn't a valid color, so hover never visibly did anything.
- **I Play Piano Clique** — `a:hover{font-color:#ffffff}` — `font-color` isn't a real property, so the intended white-on-hover silently never fired.

Riot Girls' `a:visited` state is shown as a separate static swatch rather than a real `:visited` selector, since browsers restrict how `:visited` can be styled (and block reading it back) for privacy reasons.
