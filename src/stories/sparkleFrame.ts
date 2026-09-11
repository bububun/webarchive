/**
 * Y2K-era personal sites often tiled a hand-drawn star/sparkle GIF sprite
 * around a content box's corners. There's no CSS-native way to reproduce
 * that exact bitmap, so this generates a comparable star shape as an
 * inline SVG data URI instead — same idea (four sparkles anchoring the
 * corners), not a pixel trace of any specific original graphic.
 *
 * These render as absolutely-positioned elements rather than a CSS
 * `background-image` on the frame itself: a background is always clipped
 * to its own element's box, so a negative background-position just gets
 * cut off at the edge instead of poking out past it. Real DOM nodes with
 * negative top/left/right/bottom aren't clipped that way.
 */
function sparkleSvg(color: string, size: number): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24"><path d="M12 0 L14.2 9.2 L24 12 L14.2 14.8 L12 24 L9.8 14.8 L0 12 L9.8 9.2 Z" fill="${color}"/></svg>`;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

export function sparkleCornersHtml(opts: {
  color: string;
  size?: number;
  inset?: number;
}): string {
  const size = opts.size ?? 32;
  const inset = opts.inset ?? -16;
  const url = sparkleSvg(opts.color, size);
  const base = `position:absolute; width:${size}px; height:${size}px; background-image:url('${url}'); background-size:contain; background-repeat:no-repeat; pointer-events:none;`;
  return `
    <div style="${base} top:${inset}px; left:${inset}px;"></div>
    <div style="${base} top:${inset}px; right:${inset}px;"></div>
    <div style="${base} bottom:${inset}px; left:${inset}px;"></div>
    <div style="${base} bottom:${inset}px; right:${inset}px;"></div>
  `;
}
