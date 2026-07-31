// Master timeline — SPEC.md §4. Stage A: one pinned, scrubbed tween of the
// :root tokens (colour + variable-font axes) from raw to final.
// gsap.matchMedia() is a context internally, so no extra gsap.context() here;
// reverting a media handler cleans up its ScrollTriggers and inline vars.
import { gsap, ScrollTrigger } from '../lib/gsap.js';
import { FINAL_TOKENS } from './tokens.js';

export async function initTimeline() {
	// §4.3 — fonts must be in before the pin measures anything.
	await document.fonts.ready;

	const mm = gsap.matchMedia();

	mm.add('(prefers-reduced-motion: reduce)', () => {
		// Final state, no pin, no build (§4.4). The inline script in
		// index.astro never added .raw for these users; removing it here
		// also covers a live toggle of the OS setting.
		document.documentElement.classList.remove('raw');
	});

	mm.add('(prefers-reduced-motion: no-preference)', () => {
		// Idempotent re-add so a live reduce → no-preference toggle
		// still starts from the raw state.
		document.documentElement.classList.add('raw');

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '#stage',
				start: 'top top',
				end: '+=300%',
				pin: true,
				scrub: 1, // slight smoothing; do not use `true` here (§4.2)
				anticipatePin: 1,
			},
		});

		// Stage A is deliberately one flat tween; beats get their own
		// labelled segments in the next stage.
		tl.to(document.documentElement, { ...FINAL_TOKENS, ease: 'none' });

		return () => document.documentElement.classList.remove('raw');
	});

	ScrollTrigger.refresh();
}
