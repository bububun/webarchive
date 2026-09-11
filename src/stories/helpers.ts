export function siteFrame(opts: {
  background: string;
  padding?: string;
  extraCss?: string;
  bodyHtml: string;
}): HTMLElement {
  const wrapper = document.createElement("div");
  wrapper.style.background = opts.background;
  wrapper.style.padding = opts.padding ?? "48px 64px";
  wrapper.style.display = "inline-block";
  wrapper.style.minWidth = "280px";

  const style = document.createElement("style");
  style.textContent = opts.extraCss ?? "";

  const body = document.createElement("div");
  body.innerHTML = opts.bodyHtml;

  wrapper.appendChild(style);
  wrapper.appendChild(body);
  return wrapper;
}
