<script lang="ts">
	import { onMount } from 'svelte';

	let userText: string = "";
	let storedText: string[] = [];
	let errorStr: string = "";
	let requestOngoing = false;

	const saveText = async () => {
		requestOngoing = true;
		fetch("https://multi-serve.onrender.com/api/clipboard", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({text: userText})
		})
			.then(res => {
				if (!res.ok) {
					errorStr = "Error storing. L"
					return
				}

				requestOngoing = false;
				userText = ""
				// res.json()
				// 	.then(data => console.log(data))
				// 	.catch(err => console.log(err))
			})
			.catch(err => errorStr = "Error sending request."+err)
	}

	onMount(() => {
		fetch("https://multi-serve.onrender.com/api/clipboard")
			.then(data => {
				data.json()
					.then((data: string[]) => storedText = data)
					.catch(err => errorStr = "Erro decoding json. "+err)
			})
			.catch(err => {
				errorStr = "Error fetching. "+err
		})
	})
</script>

<div class="flex flex-col justify-evenly">
	<div class="py-4 px-4 flex flex-col gap-2 border-b-2 border-gray-200">
		<textarea bind:value={userText} name="userInput" id="userInputTA" cols="30" rows="3" class="text-stone-600 px-2 py-1 rounded-sm h-fit scrollbar" placeholder="Type here"></textarea>
		<button on:click={saveText} class={`border-2 border-gray-200 w-fit py-2 px-8 rounded-sm hover:bg-stone-800 ${requestOngoing ? "pointer-events-none opacity-50 " : " pointer-events-auto opacity-100 "}`}>Save</button>
	</div>
	{#if errorStr !== ""}
		<div class="py-4 px-4 flex flex-col gap-2 border-b-2 border-gray-200">
			<span>Something went wrong</span>
			<span>{errorStr}</span>
		</div>
	{/if}
	{#if errorStr === ""}
		<div class="py-4 px-4 flex flex-col gap-2 ">
			{#each storedText as sText}
				<p class="text-white text-wrap">{sText}</p>
			{/each}
		</div>
	{/if}
</div>
