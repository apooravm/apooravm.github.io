<script lang="ts">
	import { marked } from 'marked';
	import { onMount } from 'svelte';

	let markedDiv: HTMLElement;

	onMount(() => {
		fetch("https://multi-serve.onrender.com/api/notes/001_threejs-in-react-three-fiber-and-svelte-cubed.md")
		.then((res) => {
			res.text()
			.then(text => {
				if (markedDiv) {
					markedDiv.innerHTML = marked.parse(text);
				}
			})
		})
		if (markedDiv) {
			markedDiv.innerHTML = marked.parse('# Marked in the browser\n\nRendered by **marked**.');
		}
	});
</script>

<div class="markdown-container">
	<div class="md-note" bind:this={markedDiv} />
</div>

<style>
	.markdown-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		margin: 0;
		padding: 0;

		margin-left: 0rem;
		padding-block: 20px;

		font-size: 80%;

	}

	.md-note {
		/* display: flex;
		flex-direction: column;
		justify-content: center; */
		max-width: 50rem;

		padding-inline: 30px;

		background-color: rgb(255, 255, 255);
		border: 1px solid #ccc;
		border-radius: 8px;
		box-shadow: 0 0 0px rgba(0, 0, 0, 0.1);
	}

	.md-note p {
		max-width: 60%;
		height: auto;
	}
</style>
