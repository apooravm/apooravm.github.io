<script lang="ts">
	import type { PageData } from '../$types';
	import type { Note, NoteInfoResponse } from '$lib/utils';

	export let data: PageData;
</script>

<div class="main-container">
	{#await JSON.parse(data.message)}
		<div class="loader" />
	{:then data}
		{#each data.notes as { title, description, slug, date, time }}
			<div class="note-container">
				<div class="note-title">
					{title}
				</div>
				<br>
				<div class="note-datetime">
					{date}, {time}
				</div>
				<div class="note-desc">
					{description}
				</div>
				<div class="note-link">
					<a href={`https://multi-serve.onrender.com/api/notes/${slug}.md`}>Link Here</a>
				</div>
			</div>
		{/each}
	{/await}
</div>

<!-- 

vim.opt.backspace = '2'
vim.opt.showcmd = true
vim.opt.laststatus = 2
vim.opt.autowrite = true
vim.opt.autoread = true

 -->

<style>
	.main-container {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;

		padding-block: 50px;

		padding-inline: 200px;
		margin: auto;

		gap: 50px;
	}
	.loader {
		border: 16px solid #f3f3f3;
		border-radius: 50%;
		border-top: 16px solid #3498db;
		width: 120px;
		height: 120px;
		-webkit-animation: spin 2s linear infinite; /* Safari */
		animation: spin 2s linear infinite;
	}

	.note-container {
		display: flex;
		flex-direction: column;
		justify-content: center;

		font-family: monospace;

		background-color: white;
		border: 1px solid #ccc;
		border-radius: 8px;
		box-shadow: 0 0 0px rgba(0, 0, 0, 0.1);

		height: 100px;
		width: 100%;

		padding-block: 60px;
		padding-inline: 40px;

		font-size: 100%;

		transition: all 0.6s;
		/* border: 0.1px transparent solid; */
		/* margin: 20px; */
	}

	.note-title {
		font-size: 190%;
		font-weight: 900;
	}

	.note-desc {
		font-size: 110%;
		font-weight: lighter;
	}

	.note-datetime {
		font-weight: 500;
	}

	.note-link {
		font-size: 100%;
		font-weight: lighter;

		text-decoration: none;
	}

	.note-container:hover {
		cursor: pointer;

		background: none;

		background-color: rgb(235, 235, 235);

		transition: all 0.1s;
		/* border: 0.1px rgba(42, 42, 42, 0.223) solid; */
	}

	@-webkit-keyframes spin {
		0% {
			-webkit-transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(360deg);
		}
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
