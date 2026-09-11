import type { Meta, StoryObj } from "@storybook/html-vite";
import { siteFrame } from "./helpers";

const meta: Meta = {
  title: "Found Sites/Review Culture/Akkou",
};
export default meta;

export const LinkHover: StoryObj = {
  name: "Link hover — pink, n-resize cursor",
  render: () =>
    siteFrame({
      background: "#ffffc6",
      extraCss: `
        a.ak { color: gray; text-decoration: none; cursor: n-resize;
               font-family: Arial, Tahoma, Verdana, Helvetica, sans-serif; font-size: 14px; }
        a.ak:hover { text-decoration: underline; color: #ffc0cb; cursor: n-resize; }
      `,
      bodyHtml: `<a class="ak" href="#">visit our site</a>`,
    }),
};
