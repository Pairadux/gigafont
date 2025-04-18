<script lang="ts">
	import { darkMode, toggleDarkMode } from './store.svelte';
	import { assets } from '$app/paths';
</script>

<button type="button" id="theme-toggler" onclick={toggleDarkMode}>
	{#if darkMode.value}
		<img class="theme-icon" src="{assets}/moon.svg" alt="" />
	{:else}
		<img class="theme-icon" src="{assets}/sun.svg" alt="" />
	{/if}
</button>

<style>
	#theme-toggler {
		background: none;
		border: none;
		padding: 0;
		margin: 0;
		font: inherit;
		color: inherit;
		cursor: pointer;
		outline: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		position: absolute;
		right: 5%;
		top: 5%;
	}
	.theme-icon {
		height: 2rem;
		width: 2rem;
	}
</style>
