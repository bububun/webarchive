import type { Meta, StoryObj } from "@storybook/html-vite";
import { scrollBox } from "../scrollbar";

const meta: Meta = {
  title: "Scrollbars/absolute-terror.net",
};
export default meta;

export const Scroll: StoryObj = {
  name: "Scroll",
  render: () =>
    scrollBox({
      recipe: { face: "#FFFFFF", track: "#FFFFFF", arrow: "#336699", highlight: "#336699" },
      background: "#FFFFFF",
      color: "#111111",
      fontFamily: "Arial, sans-serif",
      bodyHtml: `
        <div>click above to enter x internet explorer x 800x600+ x iframe x arial font</div>
        <br>
        <div>cliques x web rings x personality test x quilting bee</div>
        <br>
        <div>Sister Sites</div>
        <div>Listed</div>
        <div>Site Meter since 11/25/02</div>
      `,
    }),
};
