import type { Meta, StoryObj } from "@storybook/html-vite";
import { siteFrame } from "./helpers";

const meta: Meta = {
  title: "Site Archaeology/The Diary/Charm Attack!",
};
export default meta;

export const LinkHover: StoryObj = {
  name: "Link hover — inverts to filled amber, overline",
  render: () =>
    siteFrame({
      background: "#ffffff",
      extraCss: `
        a.ca { color: #ef9c00; text-decoration: none; font-family: Tahoma, sans-serif; font-size: 14px; }
        a.ca:hover { color: #000000; background: #ef9c00; text-decoration: overline; cursor: crosshair; }
      `,
      bodyHtml: `
        <a class="ca" href="#">Minus</a> &nbsp;
        <a class="ca" href="#">PezPunka</a> &nbsp;
        <a class="ca" href="#">GirlGenie</a> &nbsp;
        <a class="ca" href="#">Scott</a>
      `,
    }),
};
