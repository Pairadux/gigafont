<script lang="ts">
	import { darkMode } from '$lib/store.svelte';
    import ThemeToggleButton from "$lib/ThemeToggleButton.svelte";
    import FontScaler from "$lib/FontScaler.svelte";
    import Input from "$lib/Input.svelte";
</script>

<div class="container {darkMode.value ? 'dark' : 'light' }">
    <FontScaler />
    <Input />
    <ThemeToggleButton />
</div>

<style>
    :root {
        --dark-color: #000000;
        --light-color: #ffffff;
    }
	.container {
		position: relative;
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
    .dark {
        background-color: var(--dark-color);
        color: var(--light-color);
    }
    .light {
        background-color: var(--light-color);
        color: var(--dark-color);
    }
</style>
