// Tweenable design tokens — SPEC.md §2.
// Keep in sync manually with src/styles/tokens.css
// (:root = FINAL_TOKENS, :root.raw = RAW_TOKENS).

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
};
