// Tweenable design tokens — SPEC.md §2 + stage B layout, grouped by the §3
// beats the timeline lands them in (stage C). Keep in sync manually with
// src/styles/tokens.css (:root = finals, :root.raw = RAW_TOKENS).

// Beat 1 — structure. px so GSAP interpolates cleanly. Raw values collapse
// the design to document flow: max-widths and grid minimums blow past any
// viewport, paddings and gaps hit UA zero, --ui 0 removes button/nav chrome.
export const FINAL_LAYOUT = {
	'--radius': '8px',
	'--gap': '24px',
	'--wrap-max': '1088px',
	'--pad-x': '40px',
	'--hero-pad': '112px',
	'--sec-pad': '72px',
	'--col-min': '288px',
	'--chip-min': '184px',
	'--measure': '544px',
	'--lh': 1.55,
	'--ui': 1,
};

// Beat 2a — the font swap, applied as a near-zero .fromTo() so it reverses
// under scrub. The from-state must be explicit: `initial` computes to the
// empty string, and GSAP cannot capture-and-restore an empty start value
// (the cascade's :root.raw values would never come back on reverse).
// --h1-max snaps with it: the 760px headline cap only makes sense once
// Bricolage exists (Times/Courier need full bleed).
export const RAW_FONT_SWAP = {
	'--font-display': 'initial',
	'--font-body': 'initial',
	'--font-mono': 'initial',
	'--h1-max': '3200px',
	'--h1-size': '2em', // genuine UA h1 size
	'--hero-min': 'auto',
};

export const FONT_SWAP = {
	'--font-display': "'Bricolage Grotesque Variable', 'Times New Roman', serif",
	'--font-body': "'Public Sans Variable', 'Times New Roman', serif",
	'--font-mono': "'JetBrains Mono Variable', 'Courier New', monospace",
	'--h1-max': '760px',
	'--h1-size': '7em', // ≡ 112px; same unit as raw so GSAP can't garble it
	'--hero-min': '1.96em',
};

// Beat 2b — the variable-axis morph (§2 signature element).
export const FINAL_AXES = {
	'--wght': 640,
	'--wdth': 100,
	'--opsz': 96,
};

// Beat 3 — colour. §2 lists no raw value for --signal; black (raw ink) is
// the stand-in so the cursor reads as a plain block until the palette lands.
export const FINAL_COLOUR = {
	'--paper': '#f7f5f2',
	'--ink': '#141110',
	'--accent': '#1b2fd8',
	'--visited': '#6b3fa0',
	'--rule': '#d6d0c8',
	'--signal': '#e8501f',
};

export const FINAL_TOKENS = {
	...FINAL_LAYOUT,
	...FONT_SWAP,
	...FINAL_AXES,
	...FINAL_COLOUR,
};

// The raw state, as CSS applies it via :root.raw. The timeline never sets
// these (reverse scrub restores them through the cascade); kept for
// reference and sync with tokens.css.
export const RAW_TOKENS = {
	'--paper': '#ffffff',
	'--ink': '#000000',
	'--accent': '#0000ee',
	'--visited': '#551a8b',
	'--rule': '#808080',
	'--signal': '#000000',
	'--wght': 200,
	'--wdth': 75,
	'--opsz': 12,
	'--radius': '0px',
	'--gap': '0px',
	'--wrap-max': '3200px',
	'--pad-x': '0px',
	'--hero-pad': '0px',
	'--sec-pad': '0px',
	'--col-min': '3200px',
	'--chip-min': '3200px',
	'--measure': '3200px',
	'--lh': 1.2,
	'--ui': 0,
	'--font-display': 'initial',
	'--font-body': 'initial',
	'--font-mono': 'initial',
	'--h1-max': '3200px',
};
