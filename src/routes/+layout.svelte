<script lang="ts">
	import '../app.css';

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

<div class="flex w-full flex-row sm:min-h-screen sm:flex-row">
    <div class="fixed z-50 group my-4 mx-4 border-red-400 border-0">
        <a class={`flex flex-col w-full ${currentActiveIdx === 0 ? " " : " "}`} href={homeLink.link} on:click={() => {updateCurrActive(0)}}>
            <img class="w-10 rotate-0 group-hover:rotate-180 duration-300" src={homeLink.icon} alt={homeLink.alt} />
        </a>
    </div>
	<div class="group z-50 fixed flex flex-col justify-end mt-24 py-4 w-24 border-0 border-green-400">
		<div class="flex flex-col justify-center gap-2 -ml-16 py-2 h-full items-center w-[4.5rem] group-hover:ml-2 group-hover:border-stone-600 group-hover:border-[1px] duration-300 backdrop-blur-[1px] backdrop-saturate-0 border-[1px] border-stone-600 rounded-xl">
			{#each sidebarLinks as link, idx}
				<a class={`flex flex-col w-full rounded-lg bottom-0 duration-[400ms] py-[4px] items-center gap-[2px] ${currentActiveIdx === idx+1 ? " bg-pink-400 bg-opacity-30 " : " "}`} href={link.link} on:click={() => {updateCurrActive(idx+1)}}>
					<img class="w-9" src={link.icon} alt={link.alt} />
					<span class="text-[14px] text-slate-200">{link.title}</span>
				</a>
			{/each}
		</div>
	</div>
	<div class="w-full">
		<slot />
	</div>
</div>
