<script>
	// @ts-nocheck

	import { createEventDispatcher, onDestroy } from 'svelte';

	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');

	let modal;

	const handle_keydown = (e) => {
		if (e.key === 'Escape') {
			close();
			return;
		}

		if (e.key === 'Tab') {
			// trap focus
			const nodes = modal.querySelectorAll('*');
			const tabbable = Array.from(nodes).filter((n) => n.tabIndex >= 0);

			let index = tabbable.indexOf(document.activeElement);
			if (index === -1 && e.shiftKey) index = 0;

			index += tabbable.length + (e.shiftKey ? -1 : 1);
			index %= tabbable.length;

			tabbable[index].focus();
			e.preventDefault();
		}
	};

	const previously_focused = typeof document !== 'undefined' && document.activeElement;

	if (previously_focused) {
		onDestroy(() => {
			previously_focused.focus();
		});
	}
</script>

<svelte:window on:keydown={handle_keydown} />

<div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60" on:click={close} />

<div
	class="modal absolute left-2/4 top-2/4 w-[calc(100vw-48px)] max-w-[32em] max-h-[calc(100vh-4em)] overflow-auto -translate-x-2/4 -translate-y-2/4 rounded-md bg-white"
	role="dialog"
	aria-modal="true"
	bind:this={modal}
>
	<slot />
</div>
