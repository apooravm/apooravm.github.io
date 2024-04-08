<script lang="ts">
	let reqStatus: number = 0;
	let reqStatusStr = '';

	let username = '';
	let password = '';
	let email = '';

	type ServerResponse = {
		code: string;
		message: string;
	};

	const submitForm = () => {
		const payload = {
			username: username,
			email: email,
			password: password
		};

		if (!payload.username || !payload.email || !payload.password) {
			return;
		}

		reqStatus = -1;

		fetch('https://multi-serve.onrender.com/api/user/register', {
			method: 'POST',
			body: JSON.stringify(payload),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((res): void => {
				res.json().then((obj: ServerResponse) => {
					reqStatus = res.status;
					reqStatusStr = obj.message;
				});
			})
			.catch((error) => {
				reqStatus = 500;
				reqStatusStr = `Error: ${error.message}`;
			});
	};
</script>

<div class="flex flex-col justify-center items-center h-full font-yanone">
	<!-- Req hasnt been sent -->
	{#if reqStatus === 0}
		<div class="flex flex-col border-[1px] border-gray-200 p-8 rounded-lg gap-2">
            <input class="rounded-sm px-2 py-1 text-gray-900 tracking-wide" autocomplete="off" type="text" bind:value={username} placeholder="username">
            <input class="rounded-sm px-2 py-1 text-gray-900 tracking-wide" autocomplete="off" type="email" bind:value={email} placeholder="email">
            <input class="rounded-sm px-2 py-1 text-gray-900 tracking-wide" autocomplete="off" type="password" bind:value={password} placeholder="password">
            <button class="border-[1px] border-gray-200 rounded-sm py-1 tracking-wide hover:bg-neutral-700 hover:bg-opacity-70" on:click={submitForm}>register</button>
        </div>
	{/if}

	{#if reqStatus === -1}
        <div class="text-xl tracking-wide">
            Working...
        </div>
	{/if}

    <!-- Req Success -->
    {#if reqStatus >= 200 && reqStatus < 300}
        <div class="text-xl tracking-wide">
            User was successfully registered 🎉
        </div>
    {/if}

    <!-- Req Failed -->
    {#if reqStatus >= 400}
        <div class="text-xl tracking-wide text-center">
            <h1>Something went wrong! 😓</h1>

            {#if reqStatus < 500}
                <span>{reqStatusStr}</span>
            {/if}

            {#if reqStatus >= 500}
                <span>Server is Offline</span>
            {/if}
        </div>
    {/if}
</div>
