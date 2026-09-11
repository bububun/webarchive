import type { Meta, StoryObj } from "@storybook/html-vite";
import { scrollBox } from "../scrollbar";

const meta: Meta = {
  title: "Scrollbars/Riot Girls — fizzat.com",
};
export default meta;

export const Scroll: StoryObj = {
  name: "Scroll",
  render: () =>
    scrollBox({
      recipe: { face: "#000000", track: "#000000", arrow: "#FF0000", highlight: "#FF0000" },
      background: "#000000",
      color: "#FF0000",
      fontFamily: '"Arial Narrow", Arial, sans-serif',
      bodyHtml: `
        <div>[x] about</div>
        <div>[x] rules</div>
        <div>[x] codes</div>
        <div>[x] join</div>
        <div>[x] members</div>
        <br>
        <div>I am very passionate about the riot girl movement. I have been into it since I was in 8th grade.</div>
      `,
    }),
};
