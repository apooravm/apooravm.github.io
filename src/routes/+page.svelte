<script lang="ts">
    import Matter, { Engine, Render, MouseConstraint, Vector, Runner, Bodies, Composite, Svg, Body, Vertices, Mouse } from 'matter-js';
	import { onMount } from 'svelte';

    const A = 'M 18 114 46 114 70 37 81 74 57 74 51 94 87 94 93 114 121 114 81 7 57 7 z'
    const U = 'M 16 7 16 82 C 17 125 101 125 99 82 L 99 82 99 7 74 7 74 82 C 73 100 41 99 41 82 L 41 82 41 7 16 7 z'
    const W = 'M 6 7 29 114 56 114 70 53 84 114 111 114 134 7 108 7 96 74 81 7 59 7 44 74 32 7 6 7 z'
    const N = 'M 16 114 16 7 42 7 80 74 80 7 106 7 106 114 80 114 42 48 42 114 16 114 z'
    const P = 'M 20 8 20 114 46 114 46 28 66 28 C 83 28 83 59 66 58 L 66 58 46 58 46 78 67 78 C 116 78 116 7 65 8 L 65 8 z'
    const D = 'M 19 7 57 7 C 120 13 120 109 57 114 L 57 114 45 114 45 94 56 94 C 85 93 86 30 56 27 L 56 27 45 27 45 114 19 114 19 7 z'
    const O = 'M 13 59 C 9 -12 109 -12 107 59 L 107 59 80 59 C 84 14 34 14 39 59 L 39 59 C 33 107 86 107 80 59 L 80 59 107 59 C 109 133 9 133 13 59 L 13 59 z'
    const R = 'M 21 114 21 7 64 7 C 122 8 105 67 85 69 L 85 69 107 113 80 113 61 76 47 76 47 56 65 56 C 84 57 84 26 65 27 L 65 27 47 27 47 114 z'


	onMount(() => {
		const engine = Engine.create();
		const render = Render.create({
			element: document.getElementById('bruh')!,
			engine: engine
		});
        const canvasElm = document.getElementById('bruh')!;
		render.canvas.width = canvasElm.clientWidth;
		render.canvas.height = canvasElm.clientHeight;

        const mouse = Mouse.create(document.getElementById('bruh')!);
        const mConstraint = MouseConstraint.create(engine, {mouse: mouse});

        const G_W = render.canvas.width;
        const G_H = 20;

		const boxA = Bodies.rectangle(400, 200, 80, 80);
		const boxB = Bodies.rectangle(450, 50, 80, 80);
		const cirlce = Bodies.circle(500, 50, 20);

		const ground_b = Bodies.rectangle(0+(G_W/2), render.canvas.height-(G_H/2), G_W, G_H, { isStatic: true });
		const ground_t = Bodies.rectangle(0+(G_W/2), 0+(G_H/2), G_W, G_H, { isStatic: true });

        const ground_l = Bodies.rectangle(0+(G_H/2), render.canvas.height/2, G_H, G_W, { isStatic: true });
        const ground_r = Bodies.rectangle(render.canvas.width-(G_H/2), render.canvas.height/2, G_H, G_W, { isStatic: true, restitution: 0 });

		Composite.add(engine.world, [boxA, boxB, cirlce, ground_b, ground_t, ground_l, ground_r, mConstraint]);
		Render.run(render);

		const runner = Runner.create();
		Runner.run(runner, engine);
	});
</script>

<div class="flex flex-col w-full h-full font-yanone text-center">
	Hey there 👋
	<div class="">I'm Apoorav Medal.</div>
	<div class="">dev | learner</div>
	<div class="w-full border-2 border-red-500 flex justify-center h-full" id="bruh">
    </div>
</div>

<!-- const toVertices = path => {
    const pathEl = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path'
    )

    pathEl.setAttribute('d', path);
    return Svg.pathToVertices(pathEl, 2);
}

const toBody = (letter) => {
    const verts = toVertices(letter);

    return Bodies.fromVertices(0, 0, Vertices.scale(verts, 0.8, 0.8), {
        render: {
            fillStyle: "#fff",
            strokeStyle: "#fff",
            lineWidth: 1,
        }
    })
}

const bodiesUpward = [
    toBody(U),
    toBody(P),
    toBody(W),
    toBody(A),
    toBody(R),
    toBody(D),
]

const bodiesDownward = [
    toBody(D),
    toBody(O),
    toBody(W),
    toBody(N),
    toBody(W),
    toBody(A),
    toBody(R),
    toBody(D),
] -->
