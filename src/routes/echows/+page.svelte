<script lang="ts">
	import { onMount } from 'svelte';

	let socket: WebSocket;
	let receivedArr: string[] = [];

    let socketStatus = "Disconnected";

	let url = 'wss://multi-serve.onrender.com/api/ws/echo';
    let userMessage = '';
	const url2 = 'ws://localhost:4000/api/ws/echo';
	onMount(() => {
		// socket = new WebSocket(url2);

		// socket.onopen = (ev) => {
		// 	socket.send('subscribe');
		// 	socket.send('subscribe1 subscribe1 subscribe1 subscribe1 subscribe1');
		// 	socket.send('subscribe4');
		// };
		// socket.onmessage = (e) => {
		// 	// Data returned is a string so...
		// 	// console.log(e.data);
		// 	receivedArr = [e.data, ...receivedArr];
		// };
	});

    const connectToServer = () => {
        socket = new WebSocket(url);
        socket.onopen = (ev) => {
            socket.send('subscribe');
            socketStatus = "Connected";
        };

        socket.onerror = (ev) => {
            socketStatus = "Error";
        }

        socket.onmessage = (e) => {
			// Data returned is a string so...
			// console.log(e.data);
			receivedArr = [e.data, ...receivedArr];
		};
    }

    const disconnectFromServer = () => {
        socket.close();
        socketStatus = "Disconnected";
    }

    const sendMessageToServer = () => {
        socket.send(userMessage);
        userMessage = "";
    }
</script>

<div class="overflow-hidden h-full flex flex-col sm:flex-row justify-center px-2 gap-2">
	<div class="flex flex-col border-0 border-red-500 font-sans justify-center">
		<div class="text-center py-3 px-2 sm:px-8 flex flex-col gap-2">
			<span class="text-center font-semibold text-lg sm:text-2xl">Echo test your apps with this dummy websocket server</span>
			<span class="text-center text-sm sm:text-base">Simply connect to the server url: <span class="cursor-pointer italic font-thin">wss://multi-serve.onrender.com/api/ws/echo</span>.</span>
            <span class="text-center text-sm sm:text-base">Send the message command <span class="italic font-thin">'subscribe'</span> to subscribe to the messages from the server.</span>
		</div>
		<div class="px-2 sm:px-8 border-[0px] border-stone-100 flex flex-col gap-2">
			<div class="flex flex-row justify-between items-center px-2 text-sm sm:text-base">
                <span class="">Try it out</span>
                <div class="flex flex-row items-center">
                    <span class="px-2">Status:</span>
                    <div class={`border-[1px] border-gray-600 text-stone-800 w-28 sm:w-36 py-1 rounded-lg px-2 sm:px-4 text-center font-semibold ${socketStatus === "Connected" ? " bg-green-500 " : socketStatus === "Disconnected" ? "bg-red-400" : " bg-yellow-400 "}`}>{socketStatus}</div>
                </div>
            </div>
            <div class="p-4 border-[1px] border-stone-100 rounded-lg flex flex-col gap-6 font-normal text-sm sm:text-base">
                <div class="flex flex-col gap-2">
                    <span>Server URL</span>
                    <input bind:value={url} class="text-black px-2 rounded-sm py-1" type="text" placeholder="Server URL">
                    <div class="flex flex-row gap-4">
                        <button on:click={connectToServer} class={`border-[1px] border-stone-500 text-neutral-800 w-1/2 rounded-md py-1 cursor-pointer bg-green-500 sm:bg-green-400 hover:bg-green-500 ${socketStatus === "Connected" ? " pointer-events-none opacity-80 " : " pointer-events-auto opacity-100"}`}>Connect</button>
                        <button on:click={disconnectFromServer} class={`border-[1px] border-stone-500 text-neutral-800 w-1/2 rounded-md py-1 cursor-pointer bg-red-500 sm:bg-red-400 hover:bg-red-500 ${socketStatus === "Disconnected" ? " pointer-events-none opacity-80 " : " pointer-events-auto opacity-100"}`}>Disconnect</button>
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <span>Send message</span>
                    <input bind:value={userMessage} class={`text-black px-2 rounded-sm py-1 ${socketStatus !== "Connected" ? " pointer-events-none opacity-80 " : " pointer-events-auto opacity-100"}`} type="text" placeholder="Your message" autocomplete="off">
                    <div class="flex flex-row gap-4">
                        <button on:click={sendMessageToServer} class={`border-[1px] border-stone-500 text-neutral-800 w-full rounded-md py-1 cursor-pointer bg-cyan-500 sm:bg-cyan-400 hover:bg-cyan-500 ${socketStatus !== "Connected" ? " pointer-events-none opacity-80 " : " pointer-events-auto opacity-100"}`}>Send</button>
                    </div>
                </div>
            </div>
		</div>
	</div>
	<div class="flex items-center">
        <div class="scrollbar flex right-0 flex-col-reverse border-[1px] border-gray-200 w-[20rem] pl-4 pr-8 h-[30rem] overflow-auto backdrop-blur-[1px]">
            {#each receivedArr as message}
                <div class="py-1 text-sm font-normal font-sans border-b-[0px] border-gray-100 w-max">
                    {'> ' + message}
                </div>
            {/each}
        </div>
    </div>
</div>
