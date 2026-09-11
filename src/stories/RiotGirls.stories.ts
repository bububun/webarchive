import type { Meta, StoryObj } from "@storybook/html-vite";
import { siteFrame } from "./helpers";

const meta: Meta = {
  title: "Visited States/Riot Girls — fizzat.com/riotgirls",
};
export default meta;

export const LinkVisited: StoryObj = {
  name: "Visited",
  render: () =>
    siteFrame({
      background: "#000000",
      extraCss: `
        /* cursor:crosshair was an a:hover-only rule in the original, not part
           of the rest state — left off here since this story compares
           unvisited vs. visited, not rest vs. hover. */
        a.rg { color: #ff0000; text-decoration: none; font-family: "Arial Narrow", Arial, sans-serif;
               font-weight: bold; font-size: 14px; padding: 2px 4px; }
        /* Real browsers block styling :visited beyond color for privacy —
           .rg-visited below simulates what the original a:visited rule did. */
        a.rg-visited { color: #000000; background: #ff0000; text-decoration: none;
               font-family: "Arial Narrow", Arial, sans-serif; font-weight: bold; font-size: 14px;
               padding: 2px 4px; }
      `,
      bodyHtml: `
        <div style="display:flex; gap:16px; align-items:center;">
          <a class="rg" href="#">[x] rules (unvisited)</a>
          <span class="rg-visited">[x] rules (visited)</span>
        </div>
      `,
    }),
};
