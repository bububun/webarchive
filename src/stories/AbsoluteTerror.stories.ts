import type { Meta, StoryObj } from "@storybook/html-vite";
import { siteFrame } from "./helpers";

const meta: Meta = {
  title: "Hover Effects/absolute-terror.net",
};
export default meta;

export const LinkHover: StoryObj = {
  name: "Hover",
  render: () =>
    siteFrame({
      background: "#ffffff",
      extraCss: `
        a.at { color: #000000; text-decoration: none; font-family: Arial, sans-serif; font-size: 14px; }
        a.at:hover { color: #336699; font-weight: bold; cursor: crosshair; }
      `,
      bodyHtml: `
        <a class="at" href="#">cliques</a> &nbsp; x &nbsp;
        <a class="at" href="#">web rings</a> &nbsp; x &nbsp;
        <a class="at" href="#">personality test</a> &nbsp; x &nbsp;
        <a class="at" href="#">quilting bee</a>
      `,
    }),
};
