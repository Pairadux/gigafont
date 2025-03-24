<script lang="ts">
	//let text = 'Start typing...';
	function autoResize(event: Event) {
		const textArea = event.target as HTMLTextAreaElement;
		const maxHeight = window.innerHeight * 0.75; // 75% of the viewport height

		// Reset the height so it can shrink when text is removed
		textArea.style.height = 'auto';

		// If the content exceeds maxHeight, cap the height and enable vertical scrolling
		if (textArea.scrollHeight > maxHeight) {
			textArea.style.height = maxHeight + 'px';
			textArea.style.overflowY = 'auto';
		} else {
			textArea.style.height = textArea.scrollHeight + 'px';
			textArea.style.overflowY = 'hidden';
		}
	}
</script>

<!-- svelte-ignore a11y_autofocus -->
<textarea id="input-area" autofocus on:input={autoResize} placeholder="Type here..."></textarea>

<style>
	#input-area {
		/* Reset most of the default styles */
		appearance: none;
		-webkit-appearance: none;
		border: none;
		outline: none;
		background: transparent;
		box-shadow: none;
		resize: none;

		/* Apply custom styling */
		font-size: 5vw;
		line-height: 1.5;
		padding: 1rem;
		box-sizing: border-box;
		width: 100%;
		max-width: 75%;

		/* Inherit fonts/colors from your design */
		font-family: inherit;
		color: inherit;

		text-align: center;
	}
</style>
