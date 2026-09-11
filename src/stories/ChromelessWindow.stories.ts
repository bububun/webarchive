import type { Meta, StoryObj } from "@storybook/html-vite";

const meta: Meta = {
  title: "Window Chrome/Bloodlust — fizzat.com",
};
export default meta;

/**
 * The Bloodlust layout (Aug 2002) opened the entire site inside a
 * JS-drawn "chromeless" popup — no real browser toolbar or address bar,
 * just a custom titlebar the page drew itself: dark gray fill, a small
 * clock glyph, the site's own name as the window title, and a close
 * button that actually closed the window. Recreated here with a real
 * working close button rather than a static screenshot.
 */
export const ChromelessWindow: StoryObj = {
  name: "Fake window, working close button",
  render: () => {
    const wrapper = document.createElement("div");
    wrapper.style.cssText = "background:#1a1a1a; padding:40px; display:inline-block;";

    const win = document.createElement("div");
    win.style.cssText = `
      width: 350px; background: #000000; border: 2px solid #990000;
      font-family: Arial, sans-serif; box-shadow: 4px 4px 0 rgba(0,0,0,0.4);
    `;

    const titlebar = document.createElement("div");
    titlebar.style.cssText = `
      display:flex; align-items:center; justify-content:space-between;
      background:#333333; color:#ffffff; font-size:11px; padding:4px 6px;
      border-bottom: 1px solid #990000;
    `;
    titlebar.innerHTML = `
      <span>⏱ FizzaT.CoM</span>
      <button type="button" aria-label="Close" style="
        width:16px; height:16px; background:#990000; color:#ffffff; border:1px solid #000000;
        font-size:10px; line-height:1; cursor:pointer; padding:0;
      ">✕</button>
    `;

    const body = document.createElement("div");
    body.style.cssText = "padding:20px; color:#808080; font-size:13px; text-align:center;";
    body.innerHTML = `
      <div style="color:#990000; font-weight:bold; font-size:20px; font-family: Arial, sans-serif;">BloodlusT</div>
      <div style="margin-top:10px;">chromeless + 800x600 + ie + javascript + frames + arial font</div>
      <div style="margin-top:10px;">cliques &amp; webrings + awards + personality tests</div>
    `;

    win.appendChild(titlebar);
    win.appendChild(body);
    wrapper.appendChild(win);

    const closeBtn = titlebar.querySelector("button")!;
    closeBtn.addEventListener("click", () => {
      win.style.display = "none";
      const reopened = document.createElement("button");
      reopened.type = "button";
      reopened.textContent = "window closed — reopen";
      reopened.style.cssText = `
        background:#333333; color:#ffffff; border:1px solid #990000; font-family: Arial, sans-serif;
        font-size:12px; padding:8px 14px; cursor:pointer;
      `;
      reopened.addEventListener("click", () => {
        win.style.display = "";
        reopened.remove();
      });
      wrapper.appendChild(reopened);
    });

    return wrapper;
  },
};
