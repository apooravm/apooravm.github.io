<script lang="ts">
	import '../app.css';

	const randomNum = (lowerRange: number, upperRange: number) => {
		return Math.floor(Math.random() * 100);
	};

	const homeLink = {
		title: 'Hey',
		icon: '/sidebar-logo-lifebuoy.svg',
		alt: 'home-icon',
		link: '/'
	};

	let sidebarLinks = [
		{
			title: 'Notes',
			icon: '/sidebar-file.svg',
			alt: 'notes-icon',
			link: '/notes'
		},
		{
			title: 'Chat',
			icon: '/sidebar-chat.svg',
			alt: 'chat-icon',
			link: '/chat'
		},
		{
			title: 'Resume',
			icon: '/sidebar-resume.svg',
			alt: 'resume-icon',
			link: '/resume'
		},
		{
			title: 'Cubed',
			icon: '/sidebar-brush.svg',
			alt: 'cubed-icon',
			link: '/cubed'
		},
		{
			title: 'Journal',
			icon: '/sidebar-ribbon.svg',
			alt: 'journal-icon',
			link: '/journal'
		},
		{
			title: 'Register',
			icon: '/sidebar-user.svg',
			alt: 'user-icon',
			link: '/register'
		}
	];

	let currentActiveIdx = 0;

	const updateCurrActive = (newIdx: number) => {
		currentActiveIdx = newIdx;
	};

	let divW = [60, 40, 40, 60];

	const updateDivW = (currIdx: number) => {
		const val = 10;
		switch (currIdx % 2 === 0) {
			// Even idx
			case true:
				divW[currIdx + 1] -= val;
				divW[currIdx] += val;
				break;

			// Odd idx
			case false:
				divW[currIdx - 1] -= val;
				divW[currIdx] += val;
				break;

			default:
				break;
		}
	};
</script>

<title>{'Hey'}</title>
<!-- <img class="w-8 duration-300" src={link.icon} alt={link.alt}> -->
<!-- 
<div class="fixed hover:rotate-180">
    <a class="" href={sidebarLinks[0].link}>
        <img
            class="w-12"
            src={sidebarLinks[0].icon}
            alt={sidebarLinks[0].alt}
        />
    </a>
    -ml-12
    -ml-16
    drop-shadow-[0_15px_15px_rgba(235,52,140,0.9)]
</div> -->

<div class="flex w-full flex-row min-h-screen sm:min-h-screen sm:flex-row">
	<div class="w-full border-[0.5rem] sm:border-[1rem] border-stone-200 m-2 sm:m-6 flex flex-col max-h-full text-white">
        <slot />
	</div>
</div>

<style>
</style>
