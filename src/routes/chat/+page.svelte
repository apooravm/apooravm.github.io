<script lang="ts">
	import { onMount } from 'svelte';
	const username = 'Coolafone';
	const password = '1234';

	interface Message {
		Id: number;
		Sender: string;
		Direction: string;
		Config: string;
		Content: string;
		Password: string;
		Timestamp: string;
	}

	const C2A = 'client-to-all';
	const C2S = 'client-to-server';
	const S2C = 'server-to-client';
	const S2A = 'server-to-all';

	let messages: Message[] = [];
	let inputText: string;
	let socket: WebSocket | null = null;
	let handleSend: () => void;

	// const newMessage: Message = {
	// 	Id: messages.length + 1,
	// 	Content: 'Idk',
	// 	Config: '',
	// 	Direction: C2A,
	// 	Password: password,
	// 	Sender: username,
	// 	Timestamp: new Date().toLocaleTimeString()
	// };
	// messages = [...messages, newMessage];

	onMount(() => {
		// Ensure the WebSocket connection is established after component is mounted
		const url = 'wss://multi-serve.onrender.com/api/chat';
		const url2 = 'ws://localhost:4000/api/chat';
		const ur3 = 'wss://socketsbay.com/wss/v2/1/demo/';
		socket = new WebSocket(url);

		socket!.onerror = () => {
			const newMessage: Message = {
				Id: messages.length + 1,
				Content: 'ERROR',
				Config: '',
				Direction: C2A,
				Password: password,
				Sender: username,
				Timestamp: new Date().toLocaleTimeString()
			};

			messages = [newMessage, ...messages];
		};

		socket!.onopen = () => {
			// Handshake
			const handshakeMessage: Message = {
				Id: messages.length + 1,
				Content: inputText,
				Config: 'config-username',
				Direction: C2S,
				Password: password,
				Sender: username,
				Timestamp: new Date().toLocaleTimeString()
			};

			if (socket) {
				socket.send(JSON.stringify(handshakeMessage));
				// socket.send("Эй, чувак")
			}
		};

		socket!.onmessage = (e) => {
			// setMessages([...messages, JSON.parse(e.data)]);
			let receivedMessage: Message = JSON.parse(e.data);

			receivedMessage.Id = messages.length + 1;
			receivedMessage.Timestamp = new Date().toLocaleTimeString();
			// messages.push(receivedMessage);
			messages = [receivedMessage, ...messages];
		};

		handleSend = () => {
			if (inputText.trim() === '') {
				return;
			}

			const newMessage: Message = {
				Id: messages.length + 1,
				Content: inputText,
				Config: '',
				Direction: C2A,
				Password: password,
				Sender: username,
				Timestamp: new Date().toLocaleTimeString()
			};

			if (socket && socket.readyState === WebSocket.OPEN) {
				socket.send(JSON.stringify(newMessage));
			}

			messages = [newMessage, ...messages];
			inputText = '';
		};
	});
</script>

<!-- Using col-reverse and ordering elements from the bottom keeps the scrollbar at the bottom -->
<div class="h-full border-[0px] border-red-500 relative overflow-hidden font-sans">
	<div class="scrollbar absolute max-h-[calc(100%-4rem)] overflow-y-scroll w-full flex flex-col-reverse gap-2 pt-2 sm:px-4 px-2 z-10">
		{#each messages as message}
			<div class={`w-full border-0 sm:px-4 border-red-500 flex ${message.Sender === username ? " justify-end " : " justify-start "}`}>
                <div class={`flex flex-col w-fit border-2 border-gray-300 pt-1 pb-2 rounded-lg ${message.Sender === username ? " pl-4 pr-3 " : " pl-2 pr-6 "}`}>
                    <span class={`text-[0.7rem] ${message.Sender === username ? " text-end text-lime-400" : " text-start text-pink-400 "}`}>{message.Sender}</span>
                    {message.Content}
                </div>
            </div>
		{/each}
	</div>

	<div class="absolute bottom-0 flex flex-row w-full gap-2 px-2 py-2 z-40">
		<input id="user-input" type="text" placeholder="Your message" on:keypress={(e) => {e.key === "Enter" ? handleSend() : ""}} bind:value={inputText} class="w-full rounded-lg py-2 pl-2 pr-4 text-black placeholder:text-stone-500" />
		<button class="border-2 border-gray-200 px-6 rounded-lg py-1" on:click={handleSend}>Send</button>
	</div>
</div>

<style>
</style>