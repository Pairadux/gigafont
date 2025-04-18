<script lang="ts">
	// import { darkMode, toggleDarkMode } from './darkMode.svelte';
	import { increaseFontSize, decreaseFontSize } from './store.svelte';
</script>

<div id="font-scaler-wrapper">
	<button type="button" id="font-scaler" onclick={decreaseFontSize}> \/ </button>
	<button type="button" id="font-scaler" onclick={increaseFontSize}> /\ </button>
</div>

<style>
	#font-scaler-wrapper {
		position: absolute;
        display: flex;
        justify-items: center;
        align-items: center;
        gap: 1rem;
		left: 50%;
		top: 5%;
		transform: translate(-50%, 0%);
	}
	#font-scaler {
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
        font-size: 1.5rem;
	}
	/* .theme-icon { */
	/* 	height: 2rem; */
	/* 	width: 2rem; */
	/* } */
</style>
