import type { Meta, StoryObj } from "@storybook/html-vite";
import { siteFrame } from "./helpers";
import { sparkleCornersHtml } from "./sparkleFrame";

const meta: Meta = {
  title: "Ornamental Frames/Daily Grind — Lauren's journal",
};
export default meta;

/**
 * A dated journal ("daily grind") framed by sparkle-corner brackets, with
 * a right rail of cursive-script section headers sitting on solid tan
 * blocks. Not Laura's site — found via a link on the I Play Piano Clique
 * member directory. Journal text is placeholder; the frame/layout pattern
 * is what's being preserved here, not the original writer's words.
 */
export const SparkleCorners: StoryObj = {
  name: "Sparkle-corner frame",
  render: () =>
    siteFrame({
      background: "#ffffff",
      extraCss: `
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap');

        /* "Dancing Script" stands in for the feel of the original header
           art — that text was baked into GIFs, not a live web font, so
           there's no exact match to recreate here. */
        .dg-script { font-family: "Dancing Script", cursive; }

        .dg-frame {
          position: relative;
          width: 480px;
          background: #EAE0C8;
          border: 1px solid #111111;
        }

        .dg-links a { color: #C1572A; text-decoration: none; }
        .dg-links a:hover { text-decoration: underline; }
      `,
      bodyHtml: `
        <div class="dg-frame" style="display:flex; font-family: 'Courier New', monospace;">
          ${sparkleCornersHtml({ color: "#E3A45D", size: 32, inset: -16 })}
          <div style="flex:1; padding:18px; color:#C1572A; font-size:12px; line-height:1.6;">
            <div class="dg-script" style="font-size:30px; color:#C1572A; margin-bottom:10px;">daily grind</div>
            <div style="text-decoration:underline; font-weight:bold;">1.2.02 @ 5:53 PM</div>
            <div style="margin:6px 0 14px;">[placeholder entry text stands in for the real journal content here.]<br>lauren // guestbook //</div>
            <div style="text-decoration:underline; font-weight:bold;">1.1.02 @ 10:20 PM</div>
            <div style="margin:6px 0;">[another placeholder entry, same recurring sign-off format.]<br>Lauren // guestbook // stalk</div>
          </div>
          <div class="dg-links" style="width:150px; flex-shrink:0; padding:14px; display:flex; flex-direction:column; gap:14px;">
            <div style="background:#E3A45D; padding:8px;">
              <div class="dg-script" style="font-size:22px; color:#111111;">chick</div>
              <div style="display:flex; flex-direction:column; gap:2px; margin-top:4px; font-size:11px; font-family: 'Courier New', monospace;">
                <a href="#">profile</a>
                <a href="#">sign my guestbook</a>
                <a href="#">aim logs</a>
                <a href="#">e-mail me</a>
              </div>
            </div>
            <div style="background:#E3A45D; padding:8px;">
              <div class="dg-script" style="font-size:22px; color:#111111;">viewers like you</div>
              <div style="display:flex; flex-direction:column; gap:2px; margin-top:4px; font-size:11px; font-family: 'Courier New', monospace;">
                <a href="#">quotes</a>
                <a href="#">zany name</a>
                <a href="#">yearbook</a>
              </div>
            </div>
          </div>
        </div>
      `,
    }),
};
