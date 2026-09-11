import type { Meta, StoryObj } from "@storybook/html-vite";
import { scrollBox } from "../scrollbar";

const meta: Meta = {
  title: "Scrollbars/Bloodlust — fizzat.com",
};
export default meta;

export const Scroll: StoryObj = {
  name: "Scroll",
  render: () =>
    scrollBox({
      recipe: { face: "#000000", track: "#000000", arrow: "#990000", highlight: "#000000" },
      background: "#000000",
      color: "#808080",
      fontFamily: "Arial, sans-serif",
      bodyHtml: `
        <div>chromeless</div>
        <div>800x600 + ie + javascript + frames + arial font</div>
        <br>
        <div>cliques & webrings + awards + personality tests</div>
      `,
    }),
};
