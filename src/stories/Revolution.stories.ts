import type { Meta, StoryObj } from "@storybook/html-vite";
import { siteFrame } from "./helpers";

const meta: Meta = {
  title: "Site Archaeology/Past Layouts/Revolution",
};
export default meta;

export const BrokenHover: StoryObj = {
  name: "Hover — broken by design (invalid #white)",
  render: () =>
    siteFrame({
      background: "#000000",
      extraCss: `
        /* The original rule literally read: A:hover{color:#white} — not a valid
           color, so browsers ignored it. Reproduced faithfully: hover does nothing. */
        a.rev { display: inline-block; color: #ffffff; text-decoration: none; font-weight: bold;
                font-family: Arial, sans-serif; font-size: 14px; background: #ff0070; padding: 4px 10px; }
        a.rev:hover { color: #ffffff; }
      `,
      bodyHtml: `
        <a class="rev" href="#">cliques</a> &nbsp;
        <a class="rev" href="#">webrings</a> &nbsp;
        <a class="rev" href="#">personality test</a>
      `,
    }),
};
