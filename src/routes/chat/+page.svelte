<script lang="ts">
	import { onMount } from 'svelte';

	let username = '';
	const password = '1234';
	let connectToServer = false;
	const username_key = 'tchat_username';
	let usernameExists = false;

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

	const url = 'wss://multi-serve.onrender.com/api/chat';
	const url2 = 'ws://localhost:4000/api/chat';
	const ur3 = 'wss://socketsbay.com/wss/v2/1/demo/';

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

	const chatBusiness = () => {
		// Ensure the WebSocket connection is established after component is mounted
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
	};

	const checkUsernameExists = () => {
		const decodedCookie = decodeURIComponent(document.cookie);
		const cookieArray = decodedCookie.split(';');
		for (const pair of cookieArray) {
			const pairSplit = pair.split('=');
			if (pairSplit.length === 2) {
				if (pairSplit[0] === username_key) {
					username = pairSplit[1];
					usernameExists = true;
					return;
				}
			}
		}
		return;
	};

	const addUsernameCookie = (newUsername: string) => {
		const d = new Date();
		const expirationDays = 10;
		d.setTime(d.getTime() + expirationDays * 20 * 60 * 60 * 1000);
		const expires = 'expires' + d.toUTCString();
		// path=/ means that the cookie is valid for the entire domain.
		document.cookie = username_key + '=' + username + ';' + expires + ';path=/chat';
	};

	onMount(() => {
		// checkUsernameExists();
	});

	const initChatSocket = () => {
		// if (!usernameExists) {
		// 	if (username.length === 0) {
		// 		return;
		// 	}
		// 	username = username.trim();
		// 	const d = new Date();
		// 	d.setTime(d.getTime() + 10 * 20 * 60 * 60 * 1000);
		// 	const expires = 'expires' + d.toUTCString();
		// 	document.cookie = username_key + '=' + username + ';' + expires + ';path=/chat';
		// }
		connectToServer = true;
		chatBusiness();
		if (username.length === 0) {
			return;
		}
		username = username.trim();
	};
</script>

<!-- Using col-reverse and ordering elements from the bottom keeps the scrollbar at the bottom -->
<div class="relative h-full w-full bg-black">
	<div
		class={`absolute flex flex-col justify-center items-center h-full w-full px-4 gap-2 ${
			connectToServer ? ' hidden ' : ' block '
		}`}
	>
		<input
			on:keypress={(e) => {
				e.key === 'Enter' ? initChatSocket() : '';
			}}
			class="rounded-lg px-2 text-black font-sans py-1 w-full sm:w-1/4"
			type="text"
			placeholder="chat as"
			bind:value={username}
		/>
		<button
			class="w-full sm:w-1/4 rounded-lg py-1 border-[1px] border-gray-400 hover:bg-stone-500 hover:bg-opacity-25"
			on:click={initChatSocket}>Go</button
		>
	</div>
	<div
		class={`h-full border-[0px] border-red-500 relative overflow-hidden font-sans ${
			!connectToServer
				? ' pointer-events-none opacity-35 blur-[2px]'
				: ' pointer-events-auto opacity-100 blur-0 '
		}`}
	>
		<div
			class="scrollbar absolute max-h-[calc(100%-4rem)] overflow-y-scroll w-full flex flex-col-reverse gap-0 pt-2 sm:px-4 px-2 z-10"
		>
			{#each messages as message}
				<div class="text-lime-400 text-xs font-bold font-mono">
					<span class="drop-shadow-xl"
						><span class="text-pink-400">{message.Sender}:</span>{` ${message.Content}`}</span
					>
				</div>
			{/each}
		</div>

		<div class="absolute bottom-0 flex flex-row w-full gap-2 px-2 py-2 z-40">
			<input
				id="user-input"
				type="text"
				placeholder="Your message"
				on:keypress={(e) => {
					e.key === 'Enter' ? handleSend() : '';
				}}
				bind:value={inputText}
				autocomplete="off"
				class="w-full rounded-lg py-2 pl-2 pr-4 text-black placeholder:text-stone-500"
			/>
			<button class="border-2 border-gray-200 px-6 rounded-lg py-1" on:click={handleSend}
				>Send</button
			>
		</div>
	</div>
</div>
