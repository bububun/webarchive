import type { Meta, StoryObj } from "@storybook/html-vite";
import { scrollBox } from "../scrollbar";

const meta: Meta = {
  title: "Scrollbars/Charm Attack! — fizzat.com/weblog",
};
export default meta;

export const Scroll: StoryObj = {
  name: "Scroll",
  render: () =>
    scrollBox({
      recipe: { face: "#FFFFFF", track: "#FFFFFF", arrow: "#EF9C00", highlight: "#FFFFFF" },
      background: "#FFFFFF",
      color: "#111111",
      fontFamily: "Tahoma, sans-serif",
      bodyHtml: `
        <div>Friday, [placeholder date]</div>
        <div>[Placeholder entry text stands in for the real diary content here.]</div>
        <div>*[name] watched the stars fall at [time]*</div>
        <br>
        <div>Wednesday, [placeholder date]</div>
        <div>[Another placeholder entry, same recurring sign-off format as every real post.]</div>
      `,
    }),
};
