<!-- <script lang="ts">
	let data: string = '';
	const getHTMLContent = async (url: string): Promise<string> => {
		return fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Bad request');
				}
				return response.text();
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
				throw new Error('Bad request');
			});
	};
</script>

{#await getHTMLContent("https://realpython.github.io/fake-jobs/")}
   Loading... 
{:then data}
    {data}
{/await} -->

<script lang="ts">
	import type { Cheerio } from "cheerio";

	let url = "";
	let data = "";
	
	async function add() {
		const response = await fetch('/api/webscrape', {
			method: 'POST',
			body: JSON.stringify({ url }),
			headers: {
				'content-type': 'application/json',
			},
		});
	
		data = await response.json();
	}
</script>

<input placeholder="url" type="text" bind:value={url}>
{JSON.stringify(data)}

<button on:click={add}>Calculate</button>