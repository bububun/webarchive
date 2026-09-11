import type { Meta, StoryObj } from "@storybook/html-vite";
import { siteFrame } from "./helpers";

const meta: Meta = {
  title: "Hover Effects/Bloodlust — fizzat.com",
};
export default meta;

export const LinkHover: StoryObj = {
  name: "Hover",
  render: () =>
    siteFrame({
      background: "#000000",
      extraCss: `
        a.bl { color: #808080; text-decoration: none; font-family: Arial, sans-serif; font-size: 14px; }
        a.bl:hover { color: #990000; font-weight: bold; }
      `,
      bodyHtml: `
        <a class="bl" href="#">cliques &amp; webrings</a> &nbsp; + &nbsp;
        <a class="bl" href="#">awards</a> &nbsp; + &nbsp;
        <a class="bl" href="#">personality tests</a>
      `,
    }),
};
