import type { Meta, StoryObj } from "@storybook/html-vite";
import { siteFrame } from "./helpers";

const meta: Meta = {
  title: "Site Archaeology/fizzat.com (El Scorcho)",
};
export default meta;

export const LinkHover: StoryObj = {
  name: "Link hover — crosshair cursor",
  render: () =>
    siteFrame({
      background: "#ffffff",
      extraCss: `
        a.fz { color: #111111; text-decoration: none; font-family: Arial, sans-serif; font-size: 14px; }
        a.fz:hover { color: #ff0000; font-weight: bold; cursor: crosshair; }
      `,
      bodyHtml: `
        <a class="fz" href="#">cliques</a> &nbsp; x &nbsp;
        <a class="fz" href="#">web rings</a> &nbsp; x &nbsp;
        <a class="fz" href="#">personality test</a> &nbsp; x &nbsp;
        <a class="fz" href="#">quilting bee</a>
      `,
    }),
};
