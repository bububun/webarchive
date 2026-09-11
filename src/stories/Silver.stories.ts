import type { Meta, StoryObj } from "@storybook/html-vite";
import { siteFrame } from "./helpers";

const meta: Meta = {
  title: "Hover Effects/5ilver.net",
};
export default meta;

export const LinkHover: StoryObj = {
  name: "Hover",
  render: () =>
    siteFrame({
      background: "#000000",
      extraCss: `
        a.sv { color: #F62477; text-decoration: none; font-weight: bold; font-family: Arial, sans-serif; font-size: 14px; }
        a.sv:hover { color: #59177D; text-decoration: none; font-weight: bold; }
      `,
      bodyHtml: `
        <a class="sv" href="#">The Journal List</a>
      `,
    }),
};
