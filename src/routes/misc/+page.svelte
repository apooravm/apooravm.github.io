<script lang="ts">
	// @ts-nocheck
	export let data: PageData;
    console.log(data);

	let me;

	function makeStrong() {
		let newInnerHTML = '<strong>' + me.innerHTML + '</strong>';
		me.innerHTML = data.message;
	}
</script>

<button on:click={makeStrong}>Make Strong</button>
<div bind:this={me}>This should be strong.</div>
