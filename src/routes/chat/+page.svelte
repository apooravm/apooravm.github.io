<script lang="ts">
	import { onMount } from 'svelte';

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

    const newMessage: Message = {
				Id: messages.length + 1,
				Content: 'ERROR',
				Config: '',
				Direction: C2A,
				Password: '1234',
				Sender: 'CoolAfone',
				Timestamp: new Date().toLocaleTimeString()
			};
			messages.push(newMessage);

	onMount(() => {
		// Ensure the WebSocket connection is established after component is mounted
        const url = "wss://multi-serve.onrender.com/api/chat";
        const url2 = "ws://localhost:4400/chat";
		socket = new WebSocket(url);

		socket.onerror = () => {
			const newMessage: Message = {
				Id: messages.length + 1,
				Content: 'ERROR',
				Config: '',
				Direction: C2A,
				Password: '1234',
				Sender: 'CoolAfone',
				Timestamp: new Date().toLocaleTimeString()
			};
			messages.push(newMessage);
		};

		socket.onopen = () => {
			// Handshake
			const handshakeMessage: Message = {
				Id: messages.length + 1,
				Content: inputText,
				Config: 'config-username',
				Direction: C2S,
				Password: '1234',
				Sender: 'CoolAfone',
				Timestamp: new Date().toLocaleTimeString()
			};

			if (socket) {
				socket.send(JSON.stringify(handshakeMessage));
			}
		};

		socket.onmessage = (e) => {
			// setMessages([...messages, JSON.parse(e.data)]);
			let receivedMessage: Message = JSON.parse(e.data);

			console.log(receivedMessage);

			receivedMessage.Id = messages.length + 1;
			receivedMessage.Timestamp = new Date().toLocaleTimeString();
			messages.push(receivedMessage);
		};

		const handleSend = () => {
			if (inputText.trim() === '') {
				return;
			}

			const newMessage: Message = {
				Id: messages.length + 1,
				Content: inputText,
				Config: '',
				Direction: C2A,
				Password: '1234',
				Sender: 'CoolAfone',
				Timestamp: new Date().toLocaleTimeString()
			};

			if (socket && socket.readyState === WebSocket.OPEN) {
				socket.send(JSON.stringify(newMessage));
			}

			messages.push(newMessage);
		};
	});
</script>

{#each messages as message}
	{message.Content}
{/each}
