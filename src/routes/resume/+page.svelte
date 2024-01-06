<script>
	let serverOnline = false;
	fetch('https://multi-serve.onrender.com/api/cronping')
		.then((res) => {
			serverOnline = true;
		})
		.catch((err) => {
			serverOnline = false;
		});
</script>

<div class="resume-container">
	{#if serverOnline}
		<iframe
			id="resume-main"
			src="https://multi-serve.onrender.com/api/resume/html"
			frameborder="0"
			title="Resume"
		/>
	{/if}

	{#if !serverOnline}
		<div class="server-offline">
			Server Offline
		</div>
	{/if}
</div>

<style>
	.resume-container {
		width: 100%;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	#resume-main {
		width: 100%;
		height: 100vh;
	}

	#resume-main::-webkit-scrollbar {
		overflow: hidden;
	}

	iframe {
		overflow: hidden;
	}
</style>
