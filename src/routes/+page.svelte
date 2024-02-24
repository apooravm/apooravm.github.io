<script lang="ts">
    import Scene from "./threlte/Scene.svelte";
    import { Canvas } from "@threlte/core";

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

<div class="relative flex flex-row w-full h-full font-yanone">
    <div class="absolute w-full h-full">
        <Canvas>
            <Scene />
        </Canvas>
    </div>
	<div class="z-50 flex flex-col sm:p-8 p-4 select-none justify-between w-full">
		<div class="flex flex-row justify-between w-full">
            <div class="flex flex-col">
                <span class="font-thin sm:text-6xl text-2xl"><span class="font-semibold">Apoorav</span> Medal</span>
                <span class="font-thin sm:text-base text-xs">Developer & learner</span>
            </div>
            <div class="flex flex-col sm:text-base text-sm">
                <span>contact</span>
                {#each contactLinks as link}
                    <a class="font-thin underline" href={link.link}>{link.title}</a>
                {/each}
            </div>
        </div>
        <div class="flex flex-col sm:text-base text-sm">
            <span class="font-semibold">stuff</span>
            {#each siteRoutes as link}
                <a class="font-thin underline" href={link.link}>{link.title}</a>
            {/each}
        </div>
	</div>
</div>
