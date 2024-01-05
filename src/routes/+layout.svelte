<script lang="ts">
	import { browser } from "$app/environment";

	let hoverCount = 0;
	let logo_text_all = 'Hey hows it going';
	let logo_text_split = logo_text_all.split(' ');
	let logo_text = 'Heyo';

	let currentRoute: string = "";

	if (browser) {
		const urlParts = window.location.href.split("/");
		currentRoute = urlParts[3]
	}

	const updateLogoText = () => {
		hoverCount += 1;
		if (hoverCount >= logo_text_split.length) {
			hoverCount = 0;
		}
		logo_text = logo_text_split[hoverCount];
	};

	const btnMap: { [key: string]: string } = {
		"notes": "sidebar-link-img-inactive",
		"cubed": "sidebar-link-img-inactive",
		"chat": "sidebar-link-img-inactive",
		"resume": "sidebar-link-img-inactive",
		"register": "sidebar-link-img-inactive"
	}

	const setActiveState = (buttonKey: string) => {
		for (const btn in btnMap) {
			btnMap[btn] = "sidebar-link-img-inactive"
		}
		if (buttonKey == "home") {
			return
		}
		btnMap[buttonKey] = "sidebar-link-img-active"
	}

	if (currentRoute != "") {
		setActiveState(currentRoute);
		console.log(currentRoute)
	}

	const currentDate = new Date();
	const hours = currentDate.getHours();
	const minutes = currentDate.getMinutes();
	const seconds = currentDate.getSeconds();

	const titleMessage = hours < 12 ? "Good Morning" : hours < 16 ? "Good Afternoon" : "Good Evening";

</script>

<title>{titleMessage}</title>

<div class="main-container">
	<div class="sidebar" role="presentation" on:mouseenter={updateLogoText} on:keypress={() => {}}>
		<ul class="sidebar-nav">
			<li class="sidebar-logo">
				<a class="sidebar-link" id="sidebar-logo-link" href="/" on:click={() => {setActiveState("home")}}>
					<img src="/sidebar-logo-lifebuoy.svg" alt="logo" srcset="" width="40rem" />
					<span class="sidebar-link-text">{logo_text}</span>
				</a>
			</li>
			<li class="sidebar-item">
				<a class="sidebar-link" href="/notes" on:click={() => {setActiveState("notes")}}>
					<img class={btnMap["notes"]} src="/sidebar-file.svg" alt="chat" srcset="" width="40rem" />
					<span class="sidebar-link-text">Notes</span>
				</a>
			</li>
			<li class="sidebar-item">
				<a class="sidebar-link" href="/cubed" on:click={() => {setActiveState("cubed")}}>
					<img class={btnMap["cubed"]} src="/sidebar-brush.svg" alt="chat" srcset="" width="40rem" />
					<span class="sidebar-link-text">Cubed</span>
				</a>
			</li>
			<li class="sidebar-item">
				<a class="sidebar-link" href="/chat" on:click={() => {setActiveState("chat")}}>
					<img class={btnMap["chat"]} src="/sidebar-chat.svg" alt="chat" srcset="" width="40rem" />
					<span class="sidebar-link-text">Chat</span>
				</a>
			</li>
			<li class="sidebar-item">
				<a class="sidebar-link" href="/resume" on:click={() => {setActiveState("resume")}}>
					<img class={btnMap["resume"]} src="/sidebar-resume.svg" alt="resume" srcset="" width="40rem" />
					<span class="sidebar-link-text">Resume</span>
				</a>
			</li>
			<li class="sidebar-item">
				<a class="sidebar-link" href="/register" on:click={() => {setActiveState("register")}}>
					<img class={btnMap["register"]} src="/sidebar-user.svg" alt="home" srcset="" width="40rem" />
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

	.sidebar {
		position: fixed;

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

	.sidebar-link {
		display: flex;
		align-items: center;
		height: 5rem;
		color: var(--text-primary);

		text-decoration: none;

		/* filter: grayscale(100%) opacity(0.7); */
	}

	.sidebar-link:hover {
		filter: grayscale(0%) opacity(1);
		background: var(--bg-secondary);
		color: var(--text-secondary);
	}

	.sidebar-link-img-inactive {
		filter: grayscale(100%) opacity(0.7);
	}

	.sidebar-link-img-active {
		filter: grayscale(0%) opacity(1);
	}

	.sidebar-link img {
		min-width: 2rem;
		margin: 0 1.5rem;
	}

	.sidebar-logo {	
		color: var(--text-secondary);

		background: var(--bg-secondary);
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

	/* Large Screens */
	@media only screen and (min-width: 600px) {
		.main-app {
			margin-left: 5rem;
			/* padding-block: 1rem; */
			padding-inline: 0rem;
		}

		.sidebar-item:last-child {
			margin-top: auto;
		}

		.sidebar {
			position: fixed;
			width: 5rem;
			height: 100vh;
			position: fixed;

			overflow-x: hidden;
			overflow-y: auto;

			background-color: var(--bg-primary);
			transition: width var(--transition-speed) ease;

			z-index: 3;

			font-family: monospace;
		}

		.sidebar::-webkit-scrollbar {
			width: 0.15rem;
		}

		.sidebar::-webkit-slider-thumb {
			background-color: rgb(231, 88, 88);
		}

		.sidebar::-webkit-scrollbar-track {
			background-color: rgb(65, 98, 145);
		}

		.sidebar:hover {
			width: 12rem;
			transition: var(--transition-speed);
		}

		.sidebar:hover .sidebar-link-text {
			display: block;
		}

		.sidebar:hover {
			width: 12rem;
			transition: var(--transition-speed);
		}

		.sidebar-logo {
			font-weight: bold;
			/* text-transform: uppercase; */
			margin-bottom: 1rem;
			text-align: center;
			font-size: 1.5rem;
			letter-spacing: 0ch;

			width: 100%;
		}
	}

	/* Small Screens */
	@media only screen and (max-width: 600px) {
		.main-container {
			display: flex;
			flex-direction: column;
			height: 100vh;
		}

		.main-app {
			margin-left: 0rem;
			/* padding-block: 1rem; */
			padding-inline: 0rem;
			padding-bottom: 3rem;
		}

		.sidebar {
			position: relative;
			bottom: 0;
			width: 100vw;
			height: 3rem;
			position: fixed;

			padding-bottom: 10px;
			padding-top: 10px;
			/* margin-inline: 5px;
			margin-inline-end: 10px; */

			border-top-right-radius: 0px;
			border-top-left-radius: 0px;

			overflow-y: hidden;
			overflow-x: auto;
		}

		.sidebar-link-text {
			display: none;
		}

		.sidebar:hover .sidebar-link-text {
			display: none;
		}

		.sidebar-logo {
			display: block;
			font-size: 0rem;
		}
	
		.sidebar-link img {
			min-width: 1rem;
			width: 2rem;

			margin: 0 1rem;
		}

		.sidebar-nav {
			flex-direction: row;
			align-items: center;
		}

		.sidebar-link {
			justify-content: center;
		}

		.main-app {
			margin: 0;
		}
	}
</style>
