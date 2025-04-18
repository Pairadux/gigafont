<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { fontSize } from './store.svelte';

	let textarea: HTMLTextAreaElement;

	function autoResize() {
		if (!textarea) return;
		const maxH = window.innerHeight * 0.8;

		textarea.style.height = 'auto';
		const h = Math.min(textarea.scrollHeight, maxH);
		textarea.style.height = h + 'px';
		textarea.style.overflowY = textarea.scrollHeight > maxH ? 'auto' : 'hidden';
	}

	// 1) Initial client‑only sizing
	onMount(() => {
		autoResize();
	});

	// 2) Whenever fontSize.value changes, rerun autoResize (client only)
	$: if (browser) {
		fontSize.value; // subscribe to store change
		// schedule in next microtask so DOM style has updated
		Promise.resolve().then(autoResize);
	}
</script>

<div class="wrapper">
	<!-- svelte-ignore a11y_autofocus -->
	<textarea
		bind:this={textarea}
		autofocus
		placeholder="Type here…"
		on:input={autoResize}
		style="font-size: {fontSize.value}vw;"
	></textarea>
</div>

<style>
	.wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 80vh;
		width: 100%;
	}
	textarea {
		width: 100%;
		max-width: 90%;
		max-height: 80%;
		resize: none;
		padding: 1rem;
		line-height: 1.5;
		box-sizing: border-box;
		font-family: inherit;
		color: inherit;
		background: transparent;
		border: none;
		outline: none;
		text-align: center;
		overflow-wrap: break-word;
		overflow-y: hidden;
	}
</style>
