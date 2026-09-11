import type { Meta, StoryObj } from "@storybook/html-vite";
import { scrollBox } from "../scrollbar";

const meta: Meta = {
  title: "Scrollbars/5ilver.net",
};
export default meta;

export const Scroll: StoryObj = {
  name: "Scroll",
  render: () =>
    scrollBox({
      recipe: { face: "#8399B1", track: "#FFFFFF", arrow: "#000000", highlight: "#CCCCCC" },
      background: "#000000",
      color: "#F62477",
      fontFamily: "Arial, sans-serif",
      bodyHtml: `
        <div>The 5ilver Cam</div>
        <div>Who blogs here?</div>
        <div>The Journal List</div>
        <div>Hostees Here</div>
        <br>
        <div>Click image to see full size cam and galleries.</div>
      `,
    }),
};
