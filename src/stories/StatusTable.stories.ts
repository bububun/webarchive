import type { Meta, StoryObj } from "@storybook/html-vite";
import { moodTable } from "./moodTable";

const meta: Meta = {
  title: "Status Tables/5ilver.net — AT.THE.MOMENT",
};
export default meta;

/**
 * Row values are placeholders, not the real journal's answers — the
 * category labels and the dot-spaced header are the reproducible part
 * of this pattern, not any one day's specifics.
 */
export const MoodTable: StoryObj = {
  name: "Status table",
  render: () =>
    moodTable({
      header: "A T . T H E . M O M E N T",
      labelColor: "#F62477",
      valueColor: "#FFFFFF",
      background: "#000000",
      fontFamily: "Arial, sans-serif",
      rows: [
        { label: "Date & Time", value: "[placeholder]" },
        { label: "Wearing", value: "[placeholder]" },
        { label: "Feeling", value: "[placeholder]" },
        { label: "Hearing", value: "[placeholder]" },
        { label: "Tasting", value: "[placeholder]" },
        { label: "Thinking", value: "[placeholder]" },
        { label: "Talking", value: "[placeholder]" },
        { label: "Seeing", value: "[placeholder]" },
        { label: "Wanting", value: "[placeholder]" },
      ],
    }),
};
