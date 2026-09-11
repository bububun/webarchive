/**
 * The "AT.THE.MOMENT" status table was a recurring Y2K blog convention:
 * a fixed set of fill-in-the-blank categories (Wearing, Feeling, Hearing...)
 * rendered as a two-column table, with the header letter-spaced and
 * dot-separated ("A T . T H E . M O M E N T"). Reusable across any site
 * that had one — pass your own header text and rows.
 */
export interface MoodRow {
  label: string;
  value: string;
}

export function moodTable(opts: {
  header: string;
  labelColor: string;
  valueColor: string;
  background: string;
  fontFamily: string;
  rows: MoodRow[];
}): HTMLElement {
  const wrapper = document.createElement("div");
  wrapper.style.cssText = `
    background: ${opts.background}; padding: 20px; display: inline-block;
    font-family: ${opts.fontFamily}; font-size: 12px;
  `;

  const header = document.createElement("div");
  header.style.cssText = `letter-spacing: 0.3em; color: ${opts.valueColor}; font-size: 13px; margin-bottom: 10px;`;
  header.textContent = opts.header;
  wrapper.appendChild(header);

  const table = document.createElement("div");
  table.style.cssText = "display: flex; flex-direction: column; gap: 2px;";
  for (const row of opts.rows) {
    const line = document.createElement("div");
    line.style.cssText = "display: flex; gap: 10px;";
    line.innerHTML = `
      <span style="color:${opts.labelColor}; font-weight:bold; width:90px; flex-shrink:0;">${row.label}:</span>
      <span style="color:${opts.valueColor};">${row.value}</span>
    `;
    table.appendChild(line);
  }
  wrapper.appendChild(table);

  return wrapper;
}
