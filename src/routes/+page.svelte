<script lang="ts">
	const contactLinks = [
		{
			title: 'Github Profile',
			alt: 'github-logo',
			icon: '/logo-github-bgwhite.svg',
			link: 'http://github.com/apooravm'
		},
		{
			title: 'LinkedIn Profile',
			alt: 'linkedin-logo',
			icon: '/logo-linkedin-square-bgwhite.svg',
			link: 'https://www.linkedin.com/in/apoorav-medal-276409234/'
		}
	];
</script>

<div class="home-container">
	<div class="absolute z-40 w-full flex flex-row justify-end">
		<div class="flex flex-row m-2 px-1 py-1 rounded-lg gap-[6px] border-2 border-stone-600 hover:border-stone-300 duration-300">
			{#each contactLinks as link, idx}
				<a href={link.link} title={link.title} target="_blank">
					<img class="w-8" src={link.icon} alt={link.alt} />
				</a>
			{/each}
		</div>
	</div>
	<div class="main-hero">
		<div class="main-hero-welcome text-white">
			Hey 👋 this is <div class="main-hero-welcome-name">Apoorav Medal</div>
		</div>
	</div>
	<div class="about-text text-white">Work In Progress 👷‍♂️</div>
	<div class="text-green-400" />
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
		justify-content: flex-end;
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

	.about-text {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		/* height: 100%; */
		font-size: 110%;
		font-weight: bolder;
	}

	.main-hero {
		display: flex;
		flex-direction: row;

		height: 20rem;

		/* border: 1px solid red; */
	}

	.main-hero-welcome {
		display: flex;
		align-items: center;
		font-family: Poppins;

		margin-left: 5rem;
		font-size: 200%;
		font-weight: 500;

		/* border: 1px solid #ccc;
		box-shadow: 0 0 0px rgba(0, 0, 0, 0.1);

		background-color: rgb(255, 255, 255); */

		/* border: 1px solid red; */
	}

	.main-hero-welcome-name {
		padding-left: 0.5rem;
		font-weight: 700;
	}

	@media only screen and (min-width: 600px) {
		.home-header {
			min-height: 3rem;
		}

		.home-header-links {
			gap: 0.8rem;

			margin-right: 10px;
			/* max-height: 2.9rem; */
			min-width: 5.5rem;
			border-radius: 10px;
			padding-block: 0.3rem;

			border: 1px solid #ccc;
			box-shadow: 0 0 0px rgba(0, 0, 0, 0.1);
		}

		.home-header-links img {
			max-height: 1.8rem;

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

		.main-hero-welcome {
			display: flex;
			align-items: center;
			font-family: Poppins;
			width: 100%;

			justify-content: center;

			margin-left: 0rem;
			font-size: 100%;
			font-weight: 500;

			/* border: 1px solid #ccc;
		box-shadow: 0 0 0px rgba(0, 0, 0, 0.1);

		background-color: rgb(255, 255, 255); */

			/* border: 1px solid red; */
		}

		.main-hero-welcome-name {
			padding-left: 0.6rem;
			font-weight: 700;
		}
	}
</style>
