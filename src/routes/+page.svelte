<script lang="ts">
</script>

<div class="home-container">
	<div class="home-header">
		<div class="home-header-links">
			<a href="http://github.com/apooravm" target="_blank" title="Github Profile">
				<img src="/logo-github.svg" alt="github-logo" />
			</a>
			<a
				href="https://www.linkedin.com/in/apoorav-medal-276409234/"
				target="_blank"
				title="LinkedIn Profile"
			>
				<img src="/logo-linkedin-square.svg" alt="github-logo" />
			</a>
		</div>
	</div>
	<div class="title-txt" />
	<div class="about-text">Work In Progress 👷‍♂️</div>
</div>

<style>
	.home-container {
		display: flex;
		flex-direction: column;

		font-family: monospace;

		height: 100vh;
	}
	.home-header {
		position: fixed;
		top: 0;
		left: 0;

		display: flex;
		flex-direction: row;
		justify-content: end;
		align-items: center;

		width: 100%;

		/* border: 1px solid red; */
	}

	.home-header-links {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.home-header-links a {
		line-height: 0;
	}

	.title-txt {
		font-size: 200%;
	}

	.about-text {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		height: 100%;
		font-size: 110%;
		font-weight: bolder;
	}

	@media only screen and (min-width: 600px) {
		.home-header {
			min-height: 3rem;
		}

		.home-header-links {
			gap: 0.8rem;

			margin-right: 10px;
			/* max-height: 2.9rem; */
			min-width: 6rem;
			border-radius: 22px;
			padding-block: 0.3rem;

			border: 1px solid #ccc;
			box-shadow: 0 0 0px rgba(0, 0, 0, 0.1);

			background-color: rgb(255, 255, 255);
		}

		.home-header-links img {
			max-height: 1.9rem;

			/* margin-inline: 0.4rem; */
		}
	}

	@media only screen and (max-width: 600px) {
        .home-header {
			min-height: 3rem;
		}

		.home-header-links {
			gap: 0.4rem;

			margin-right: 3px;
			/* max-height: 2.9rem; */
			min-width: 5rem;
			border-radius: 8px;
			padding-block: 0.2rem;

			border: 1px solid #ccc;
			box-shadow: 0 0 0px rgba(0, 0, 0, 0.1);

			background-color: rgb(255, 255, 255);
		}

		.home-header-links img {
			max-height: 2rem;

			/* margin-inline: 0.4rem; */
		}
	}
</style>
