<script lang="ts">
    const siteRoutes = [
        {
            title: "notes",
            link: "/notes",
        },
        {
            title: "journal",
            link: "/journal",
        },
        {
            title: "threlte",
            link: "/threlte",
        },
        {
            title: "echows",
            link: "/echows",
        },
    ]

    const contactLinks = [
        {
            title: "github",
            link: "http://www.github.com/apooravm",
        },
        {
            title: "linkedin",
            link: "https://www.linkedin.com/in/apoorav-medal-276409234/",
        },
        {
            title: "resume",
            link: "/resume",
        },
        // {
        //     title: "mail",
        //     link: "medal.apoorav@gmail.com"
        // }
    ]
</script>

<div class="flex flex-row w-full h-full font-yanone main-cont">
	<div class="flex flex-col p-8 select-none justify-between w-full">
		<div class="flex flex-row justify-between w-full">
            <div class="flex flex-col">
                <span class="font-thin text-6xl">Apoorav Medal</span>
                <span class="font-thin">Developer & learner</span>
            </div>
            <div class="flex flex-col">
                <span>contact</span>
                {#each contactLinks as link}
                    <a class="font-thin underline" href={link.link}>{link.title}</a>
                {/each}
            </div>
        </div>
        <div class="flex flex-col">
            <span>stuff</span>
            {#each siteRoutes as link}
                <a class="font-thin underline" href={link.link}>{link.title}</a>
            {/each}
        </div>
	</div>
</div>
