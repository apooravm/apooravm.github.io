<script lang="ts">
    import Scene from "./threlte/Scene.svelte";
    import { Canvas } from "@threlte/core";

    const siteRoutes = [
        {
            title: "register",
            link: "/register",
        },
        {
            title: "notes",
            link: "/notes",
        },
        {
            title: "chat",
            link: "/chat",
        },
        {
            title: "journal",
            link: "/misc",
        },
        {
            title: "echows",
            link: "/echows",
        },
        {
            title: "threlte",
            link: "/threlte",
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
            link: "https://multi-serve.onrender.com/api/resume/html",
        },
        // {
        //     title: "mail",
        //     link: "medal.apoorav@gmail.com"
        // }
    ]
</script>

<div class="relative flex flex-row w-full h-full font-yanone">
    <div class="absolute w-full h-full pointer-events-none">
        <Canvas>
            <Scene />
        </Canvas>
    </div>
	<div class="flex flex-col sm:p-8 p-4 select-none justify-between w-full">
		<div class="flex flex-row justify-between w-full">
            <div class="flex flex-col">
                <span class="font-thin sm:text-6xl text-2xl"><span class="font-semibold">Apoorav</span> Medal</span>
                <span class="font-thin sm:text-base text-xs">Developer / learner</span>
            </div>
            <div class="flex flex-col sm:text-base text-sm">
                <span>contact</span>
                {#each contactLinks as link}
                    <a class="font-thin underline underline-offset-4 decoration-1" target="_blank" href={link.link}>{link.title}</a>
                {/each}
            </div>
        </div>
        <div class="flex flex-col sm:text-base text-sm w-max">
            <span class="font-semibold">stuff</span>
            {#each siteRoutes as link}
                <a class="font-thin underline underline-offset-4 decoration-1" href={link.link}>{link.title}</a>
            {/each}
        </div>
	</div>
</div>
