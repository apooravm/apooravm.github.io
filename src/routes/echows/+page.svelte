<script lang="ts">
	import { onMount } from 'svelte';

    let socket: WebSocket;
    let receivedArr: any[] = ["as"];

	const url = 'wss://multi-serve.onrender.com/api/ws/echo';
	const url2 = 'ws://localhost:4000/api/ws/echo';
	onMount(() => {
        socket = new WebSocket(url2);

        socket.onopen = (ev) => {
            socket.send("subscribe");
            socket.send("subscribe1");
            socket.send("subscribe2");
        }

        socket.onmessage = (e) => {
            let receivedMessage = JSON.parse(e.data);
            console.log(receivedMessage)
            receivedArr = [...receivedArr, receivedMessage]
        }
    });
</script>

<div class="">
    {#each receivedArr as message}
        {message}
    {/each}
</div>
