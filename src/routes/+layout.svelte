<div id="app">
	<nav>
		<a class="navbar-link" href="/">home</a>
		<a class="navbar-link" href="/notes">notes</a>
		<a class="navbar-link" href="/webmap">webmap</a>
		<a class="navbar-link" href="/cubed">cubed</a>
		<a class="navbar-link" href="/register">register</a>
		<a class="navbar-link" href="/chat">chat</a>
	</nav>

	<main>
		<slot />
	</main>

	<footer>
		<div class="footer-text">yo thanks for visiting 😪</div>
	</footer>
</div>

<!-- <style>
	:global(html),
	:global(body) {
	  height: 100%;
	  margin: 0;
	  padding: 0;
	  font-family: 'monospace', sans-serif;
	}
  
	#app {
	  display: flex;
	  flex-direction: column;
	  min-height: 100vh;
	}
  
	main {
	  flex: 1;
	}
  
	footer {
	  margin-top: auto;
	}
  
	/* Add any additional styling you need for your navbar, links, and footer-text here */
	nav {
	  background-color: #333;
	  padding: 1rem;
	  display: flex;
	  justify-content: space-around;
	  align-items: center;
	}
  
	.navbar-link {
	  color: white;
	  text-decoration: none;
	}
  
	.footer-text {
	  text-align: center;
	  padding: 1rem;
	  background-color: #333;
	  color: white;
	}
  </style> -->

<!-- slot tells svelte that this is where to insert the children? -->
<!-- layout wraps around any page further down the routes -->
<!-- Thus, anything above <slot /> is treated like a global component -->
<!-- Layout wraps a page and any subsequent pages -->
<!-- Content above doesnt get rerendered when pages change -->
<!-- If CSS is scoped and needed only in a certain file => write it in the same page file -->
<!-- Else if needed as globally, write in routes/styles.css and import in routes/+layout.svelte -->

<!-- lib dir -->
<!-- lib is an alias special dir uner src/ that can be referenced from any file through $lib -->
<!-- Can store any file/folders and have them be imported anywhere -->
<!-- Can create your own aliases -->

<!-- +page.ts/js => doing API related operations like fetching/loading data for +page.svelte -->
<!--  -->

<!-- <slot /> -->

<!-- :global(body) {
    background-color: #1b1b1b; /* Replace with your desired color */
    margin: 0; /* Remove default body margin */
} -->

<style>
	:global(html),
	:global(body) {
		height: 100%;
		margin: 0;
		padding: 0;
		font-family: 'monospace', monospace;
	}
	nav {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 10px;

		padding-block: 20px;

		border-bottom: 0px rgb(183, 255, 83) solid;
	}

	#app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
	}

	.navbar-link {
		font-size: 180%;
		font-weight: 550;
		font-family: monospace;

		text-align: center;

		width: 100px;

		text-decoration: none;
		color: rgb(169, 169, 169);

		transition: all 1s;
	}

	.navbar-link:hover {
		color: rgb(70, 70, 70);

		transition: all 0.1s;
	}

	footer {
		display: flex;
		flex-direction: row;
		justify-content: center;

		margin-top: auto;

		border-top: 0.1px rgb(41, 41, 41) solid;

		padding-block: 40px;
	}
</style>
