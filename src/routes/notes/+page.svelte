<script lang="ts">
	import type { PageData } from '../$types';
	import type { Note, NoteInfoResponse } from '$lib/utils';

	const cleanTime = (timeStr: string) => {
		let parts = timeStr.split(':');
		return `${parts[0]}:${parts[1]}`;
	};

	export let data: PageData;
</script>

<div class="flex flex-col items-center py-6 w-full gap-6">
	{#await JSON.parse(data.message)}
		<div class="loader" />
	{:then data}
		{#each data.notes as { title, description, slug, date, time }}
			<a class="flex flex-col w-full px-20 min-h-44 justify-center rounded-lg max-w-3xl cursor-pointer bg-stone-100 bg-opacity-5 backdrop-blur-[1px] border-[1px] border-stone-700 text-white"
				href={`https://multi-serve.onrender.com/api/notes/${slug}.md`}>
				<div class="text-lg">
					{title}
				</div>
				<div class="">
					{cleanTime(time)}, {date}
				</div>
				<br />
				<div class="text-sm font-normal">
					{description}
				</div>
			</a>
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
