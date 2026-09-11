import type { Meta, StoryObj } from "@storybook/html-vite";
import { scrollBox } from "../scrollbar";

const meta: Meta = {
  title: "Scrollbars/El Scorcho — fizzat.com",
};
export default meta;

export const Scroll: StoryObj = {
  name: "Scroll",
  render: () =>
    scrollBox({
      recipe: { face: "#FFFFFF", track: "#FFFFFF", arrow: "#000000", highlight: "#000000" },
      background: "#FFFFFF",
      color: "#111111",
      fontFamily: "Arial, sans-serif",
      bodyHtml: `
        <div>800x600+ x ie x iframe x arial font x pixel font</div>
        <br>
        <div>cliques x web rings x personality test x quilting bee</div>
        <br>
        <div>since 11/25/02</div>
      `,
    }),
};
