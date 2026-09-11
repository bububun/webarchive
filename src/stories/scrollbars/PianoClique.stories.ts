import type { Meta, StoryObj } from "@storybook/html-vite";
import { scrollBox } from "../scrollbar";

const meta: Meta = {
  title: "Scrollbars/I Play Piano Clique",
};
export default meta;

export const Scroll: StoryObj = {
  name: "Scroll",
  render: () =>
    scrollBox({
      recipe: { face: "#FF3737", track: "#F60000", arrow: "#000000", highlight: "#FF5F5F" },
      background: "#9C3131",
      color: "#FFFFFF",
      fontFamily: "Verdana, sans-serif",
      bodyHtml: `
        <div>» about</div>
        <div>» join</div>
        <div>» codes</div>
        <div>» members</div>
        <div>» other</div>
        <br>
        <div>The title says it all doesn't it? This is a clique for pianists.</div>
        <div>There are only two basic requirements: you must have a webpage, and you must play piano.</div>
      `,
    }),
};
