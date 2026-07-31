// Tweenable design tokens — SPEC.md §2 (colour, type axes) + stage B layout.
// Keep in sync manually with src/styles/tokens.css
// (:root = FINAL_TOKENS, :root.raw = RAW_TOKENS).
//
// Layout tokens are px so GSAP interpolates them cleanly. Raw layout values
// collapse the design to document flow: max-widths and grid minimums blow
// past any viewport (full bleed / stacked), paddings and gaps hit UA zero,
// and --ui 0 removes button/nav chrome via color-mix().
//
// §2 lists no raw value for --signal; black (raw ink) is the neutral stand-in
// so the cursor reads as a plain terminal block until the palette matures.
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
};

export const FINAL_TOKENS = {
	'--paper': '#f7f5f2',
	'--ink': '#141110',
	'--accent': '#1b2fd8',
	'--visited': '#6b3fa0',
	'--rule': '#d6d0c8',
	'--signal': '#e8501f',
	'--wght': 640,
	'--wdth': 100,
	'--opsz': 96,
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
