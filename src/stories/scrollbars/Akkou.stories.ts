import type { Meta, StoryObj } from "@storybook/html-vite";
import { scrollBox } from "../scrollbar";

const meta: Meta = {
  title: "Scrollbars/Akkou — akkou.tripod.com",
};
export default meta;

export const Scroll: StoryObj = {
  name: "Scroll",
  render: () =>
    scrollBox({
      recipe: { face: "#EFF8AD", track: "#FFFFC6", arrow: "#FFFFC6", highlight: "#808080" },
      background: "#FFFFC6",
      color: "#111111",
      fontFamily: "Arial, Tahoma, Verdana, Helvetica, sans-serif",
      bodyHtml: `
        <div>Oy! Oy! Oy! Welcome to Akkou Website Reviews, "your problems are our hobby."</div>
        <br>
        <div>Critique Sheet:</div>
        <div>Splash Page ... 5 pts max</div>
        <div>Home Page ... 25 pts max</div>
        <div>Navigation ... 10 pts max</div>
        <div>User-Friendly ... 10 pts max</div>
        <div>Content ... 25 pts max</div>
      `,
    }),
};
