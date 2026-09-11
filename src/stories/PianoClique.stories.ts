import type { Meta, StoryObj } from "@storybook/html-vite";
import { siteFrame } from "./helpers";

const meta: Meta = {
  title: "Found Sites/I Play Piano Clique",
};
export default meta;

export const BrokenHover: StoryObj = {
  name: 'Hover — broken by typo ("font-color" isn\'t real CSS)',
  render: () =>
    siteFrame({
      background: "#9c3131",
      extraCss: `
        /* Original rule: A:hover{font-color:#ffffff} — "font-color" doesn't exist,
           so the intended white-on-hover never actually happened. */
        a.pc { display: inline-block; color: #000000; text-decoration: none;
               font-family: Arial, sans-serif; font-size: 14px; background: #ffffff; padding: 4px 10px; }
        a.pc:hover { color: #000000; }
      `,
      bodyHtml: `
        <a class="pc" href="#">about</a> &nbsp;
        <a class="pc" href="#">join</a> &nbsp;
        <a class="pc" href="#">codes</a> &nbsp;
        <a class="pc" href="#">members</a>
      `,
    }),
};
