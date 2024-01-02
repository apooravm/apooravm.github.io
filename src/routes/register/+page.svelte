<script lang="ts">
	let reqStatus: number = 0;
	let reqStatusStr = '';

	type ServerResponse = {
		code: string;
		message: string;
	};

	const submitForm = () => {
		const formElm = document.getElementById('registerForm') as HTMLFormElement;
		const formData: FormData = new FormData(formElm);

		const payload = {
			username: formData.get('username'),
			email: formData.get('email'),
			password: formData.get('password')
		};

		if (!payload.username || !payload.email || !payload.password) {
			return;
		}

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

{#if reqStatus === 0}
	<div class="form-container">
		<form id="registerForm">
			<input
				class="btn-inp"
				type="text"
				name="username"
				autocomplete="off"
				placeholder="username"
				required
			/>
			<input
				class="btn-inp"
				type="email"
				name="email"
				autocomplete="off"
				placeholder="email"
				required
			/>
			<input
				class="btn-inp"
				type="password"
				name="password"
				autocomplete="off"
				placeholder="password"
				required
			/>
			<button class="btn" type="button" on:click={submitForm}>Register</button>
		</form>
	</div>
{/if}

{#if reqStatus >= 200 && reqStatus < 300}
	<div class="form-container">
		<h1>Success 🎉</h1>
		<div class="res-text">The user has been registered successfully!</div>
	</div>
{/if}

{#if reqStatus >= 400}
	<div class="form-container">
		<h1>Something went wrong! 😓</h1>

		{#if reqStatus < 500}
			<div class="res-text">{reqStatusStr}</div>
		{/if}

		{#if reqStatus >= 500}
			<div class="res-text">Server is Offline</div>
		{/if}
	</div>
{/if}

<style>
	.form-container {
		display: flex;
		min-height: 100vh;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		/* padding-block: 50px; */

		font-family: monospace;
	}

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		width: 400px;

		padding-block: 80px;
		padding-inline: 80px;

		gap: 10px;

		background-color: rgb(255, 255, 255);
		border: 1px solid #ccc;
		border-radius: 8px;
		box-shadow: 0 0 0px rgba(0, 0, 0, 0.1);
	}

	.btn-inp {
		width: 300px;
		padding-block: 10px;
		border: 0px;
		border-bottom: 1px solid black;

		font-family: monospace;
		font-size: larger;

		outline: none;
	}

	.btn {
		width: 300px;
		padding-block: 10px;

		font-family: monospace;
		font-size: larger;
	}

	.res-text {
		font-size: 120%;
	}
</style>
