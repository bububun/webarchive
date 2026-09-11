import type { Meta, StoryObj } from "@storybook/html-vite";
import { scrollBox } from "../scrollbar";

const meta: Meta = {
  title: "Scrollbars/Smile — Hi-Fi Killer",
};
export default meta;

export const Scroll: StoryObj = {
  name: "Scroll",
  render: () =>
    scrollBox({
      recipe: { face: "#003366", track: "#003366", arrow: "#000000", highlight: "#003366" },
      background: "#FFFFFF",
      color: "#111111",
      fontFamily: "Tahoma, Arial, sans-serif",
      bodyHtml: `
        <div>:: tahoma; arial :: billion colors :: frames :: ie, preferably ::</div>
        <div>~click below to enter~</div>
        <br>
        <div>profile</div>
        <div>love/loathe</div>
        <div>bag</div>
        <div>tests</div>
        <div>friends</div>
        <div>contact</div>
        <div>right now</div>
        <div>schedule</div>
        <div>rants</div>
        <div>playlist</div>
        <div>weblog</div>
      `,
    }),
};
