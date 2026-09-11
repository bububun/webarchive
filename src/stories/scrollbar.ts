export interface ScrollbarRecipe {
  face: string;
  track: string;
  arrow: string;
  highlight: string;
}

/**
 * Old IE (4–8) exposed non-standard `scrollbar-*` properties on `body`
 * that let a page recolor the entire OS scrollbar — face, track, arrows,
 * and a couple of bevel edges. Those properties are long gone from every
 * modern engine. This maps the same recipe onto `::-webkit-scrollbar`,
 * which is the closest living equivalent (Chromium/Safari only — Firefox
 * has its own much more limited `scrollbar-color`).
 */
export function scrollbarCss(selector: string, r: ScrollbarRecipe): string {
  return `
    ${selector}::-webkit-scrollbar { width: 18px; }
    ${selector}::-webkit-scrollbar-track { background: ${r.track}; }
    ${selector}::-webkit-scrollbar-thumb { background: ${r.face}; border: 2px solid ${r.highlight}; }
    ${selector}::-webkit-scrollbar-button { background: ${r.arrow}; display: block; height: 16px; }
  `;
}

export function scrollBox(opts: {
  recipe: ScrollbarRecipe;
  background: string;
  color: string;
  fontFamily: string;
  bodyHtml: string;
}): HTMLElement {
  const wrapper = document.createElement("div");
  const style = document.createElement("style");
  style.textContent = scrollbarCss(".wb-scrollbox", opts.recipe);

  const box = document.createElement("div");
  box.className = "wb-scrollbox";
  box.style.cssText = `
    width: 280px; height: 160px; overflow-y: scroll; box-sizing: border-box;
    background: ${opts.background}; color: ${opts.color}; font-family: ${opts.fontFamily};
    font-size: 13px; line-height: 1.6; padding: 14px;
  `;
  box.innerHTML = opts.bodyHtml;

  wrapper.appendChild(style);
  wrapper.appendChild(box);
  return wrapper;
}
