// Master timeline — SPEC.md §4, beats in §3 order (stage C).
// gsap.matchMedia() is a context internally, so no extra gsap.context() here;
// reverting a media handler cleans up its ScrollTriggers and inline vars.
import { gsap, ScrollTrigger } from '../lib/gsap.js';
import { FINAL_LAYOUT, RAW_FONT_SWAP, FONT_SWAP, FINAL_AXES, FINAL_COLOUR } from './tokens.js';

export async function initTimeline() {
	// §4.3 — fonts must be in before the pin measures anything.
	await document.fonts.ready;

	const html = document.documentElement;
	const mm = gsap.matchMedia();

	mm.add('(prefers-reduced-motion: reduce)', () => {
		// Final state, no pin, no build (§4.4). The inline script in
		// index.astro never added .raw for these users; removing it here
		// also covers a live toggle of the OS setting.
		html.classList.remove('raw');
	});

	mm.add('(prefers-reduced-motion: no-preference)', () => {
		// Idempotent re-add so a live reduce → no-preference toggle
		// still starts from the raw state.
		html.classList.add('raw');

		// Times are fractions of the 300% pin. Total duration is exactly 1
		// (the trailing hold pads it), so label positions read as scrub %.
		const tl = gsap.timeline({
			defaults: { ease: 'none' },
			scrollTrigger: {
				trigger: '#stage',
				start: 'top top',
				end: '+=300%',
				pin: true,
				scrub: 1, // slight smoothing; do not use `true` here (§4.2)
				anticipatePin: 1,
			},
		});

		tl.addLabel('raw', 0) // 0–15%: raw sits uncomfortable (§3 beat 0)
			.addLabel('structure', 0.15)
			.to(html, { ...FINAL_LAYOUT, duration: 0.25 }, 'structure')
			.addLabel('type', 0.4)
			// A snap, not a class toggle, so it reverses under scrub.
			// fromTo instead of set(): GSAP must have an explicit raw state
			// to render below the label — see RAW_FONT_SWAP in tokens.js.
			.fromTo(
				html,
				{ ...RAW_FONT_SWAP },
				{ ...FONT_SWAP, duration: 0.001, immediateRender: false },
				'type'
			)
			.to(html, { ...FINAL_AXES, duration: 0.2 }, 'type')
			.addLabel('colour', 0.6)
			.to(html, { ...FINAL_COLOUR, duration: 0.25 }, 'colour')
			.addLabel('shipped', 0.85)
			.to({}, { duration: 0.15 }); // hold: the finished page rests before release

		return () => html.classList.remove('raw');
	});

	ScrollTrigger.refresh();
}
