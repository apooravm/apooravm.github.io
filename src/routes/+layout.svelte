<script>
	let hoverCount = 0;
	let logo_text_all = "hey hows it going";
	let logo_text_split = logo_text_all.split(" ");
	let logo_text = "Heyo";

	const updateLogoText = () => {
		hoverCount += 1;
		if (hoverCount >= logo_text_split.length) {
			hoverCount = 0;
		}
		logo_text = logo_text_split[hoverCount];
		console.log(hoverCount)
	}
</script>

<div class="sidebar" role="presentation" on:mouseenter={updateLogoText} on:keypress={() => {}}>
	<ul class="sidebar-nav">
		<li class="sidebar-logo">
			<a class="sidebar-link" id="sidebar-logo-link" href="/">
				<img src="/sidebar-logo-lifebuoy.svg" alt="logo" srcset="" width="40rem" />
				<span class="sidebar-link-text">{logo_text}</span>
			</a>
		</li>
		<li class="sidebar-item">
			<a class="sidebar-link" href="/notes">
				<img src="/sidebar-file.svg" alt="chat" srcset="" width="40rem" />
				<span class="sidebar-link-text">Notes</span>
			</a>
		</li>
		<li class="sidebar-item">
			<a class="sidebar-link" href="/cubed">
				<img src="/sidebar-brush.svg" alt="chat" srcset="" width="40rem" />
				<span class="sidebar-link-text">Cubed</span>
			</a>
		</li>
		<li class="sidebar-item">
			<a class="sidebar-link" href="/chat">
				<img src="/sidebar-chat.svg" alt="chat" srcset="" width="40rem" />
				<span class="sidebar-link-text">Chat</span>
			</a>
		</li>
		<li class="sidebar-item">
			<a class="sidebar-link" href="/resume">
				<img src="/sidebar-resume.svg" alt="resume" srcset="" width="40rem" />
				<span class="sidebar-link-text">Resume</span>
			</a>
		</li>
		<li class="sidebar-item">
			<a class="sidebar-link" href="/register">
				<img src="/sidebar-user.svg" alt="home" srcset="" width="40rem" />
				<span class="sidebar-link-text">User</span>
			</a>
		</li>
	</ul>
	<!-- 
	<a class="navbar-link" href="/notes">notes</a>
	<a class="navbar-link" href="/webmap">webmap</a>
	<a class="navbar-link" href="/cubed">cubed</a>
	<a class="navbar-link" href="/register">register</a>
	<a class="navbar-link" href="/chat">chat</a> 
	-->
</div>

<div class="main-app">
	<slot />
</div>

<style>
	:root {
		font-size: 20px;
		font-family: monospace;
		--text-primary: rgb(134, 134, 134);
		--text-secondary: rgb(252, 252, 252);

		--bg-primary: #23232e;
		--bg-secondary: #141418;

		--transition-speed: 300ms;
		--transition-speed-slow: 100ms;
	}

	:global(body)::-webkit-scrollbar {
		width: 0.25rem;
	}

	:global(body)::-webkit-scrollbar-thumb {
		background-color: rgb(97, 37, 154);
	}

	:global(body)::-webkit-scrollbar-track {
		background-color: #141418;
	}

	:global(html),
	:global(body) {
		height: 100%;
		margin: 0px;
		padding: 0px;
		font-family: 'monospace', sans-serif;
	}

	.main-app {
		margin-left: 5rem;
		/* padding-block: 1rem; */
		padding-inline: 0rem;
	}

	.sidebar {
		width: 5rem;
		height: 100vh;
		position: fixed;

		overflow: hidden;

		background-color: var(--bg-primary);
		transition: width var(--transition-speed) ease;

		z-index: 2;

		font-family: monospace;
	}

	.sidebar-nav {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
	}

	.sidebar-item {
		width: 100%;
	}

	.sidebar-item:last-child {
		margin-top: auto;
	}

	.sidebar-link {
		display: flex;
		align-items: center;
		height: 5rem;
		color: var(--text-primary);

		text-decoration: none;

		filter: grayscale(100%) opacity(0.7);
	}

	.sidebar-link:hover {
		filter: grayscale(0%) opacity(1);
		background: var(--bg-secondary);
		color: var(--text-secondary);
	}

	.sidebar-link-text {
		display: block;
		/* margin-left: 1rem; */
	}

	.sidebar-link img {
		min-width: 2rem;
		margin: 0 1.5rem;
	}

	.sidebar:hover {
		width: 12rem;
		transition: var(--transition-speed);
	}

	.sidebar:hover .sidebar-link-text {
		display: block;
	}

	.sidebar-logo {
		font-weight: bold;
		/* text-transform: uppercase; */
		margin-bottom: 1rem;
		text-align: center;
		color: var(--text-secondary);

		background: var(--bg-secondary);
		font-size: 1.5rem;
		letter-spacing: 0ch;

		width: 100%;
	}

	.sidebar-logo img {
		transform: rotate(0deg);
		transition: transform var(--transition-speed);
	}

	.sidebar:hover .sidebar-logo img {
		transform: rotate(-180deg);
	}

	.sidebar:hover #sidebar-logo-link {
		filter: grayscale(0%) opacity(1);
		background: var(--bg-secondary);
		color: var(--text-secondary);
	}
</style>
