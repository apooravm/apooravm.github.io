<script lang="ts">
	import { onMount } from 'svelte';

	// import { onMount } from 'svelte';
	//
	//    let socketStatus = "Disconnected";

	let socket: WebSocket;
	// let url = 'wss://multi-serve.onrender.com/api/share';
	const url2 = 'ws://localhost:4000/api/share';

	onMount(() => {
		socket = new WebSocket(url2);
		socket.binaryType = 'arraybuffer';
	});
</script>

<div class="">
	<input type="file" }/>
</div>
