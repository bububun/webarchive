import type { Meta, StoryObj } from "@storybook/html-vite";
import { siteFrame } from "./helpers";

const meta: Meta = {
  title: "Hover Effects/True Reviews — chiprate.envy.nu",
};
export default meta;

export const LinkHover: StoryObj = {
  name: "Hover",
  render: () =>
    siteFrame({
      background: "#000000",
      extraCss: `
        a.tr { color: #ff0000; text-decoration: none; font-family: "Courier New", monospace; font-size: 14px; cursor: crosshair; }
        a.tr:hover { color: #ffc0cb; cursor: crosshair; }
      `,
      bodyHtml: `<a class="tr" href="#">read a review</a>`,
    }),
};
