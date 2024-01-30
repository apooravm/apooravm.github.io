<script>
	import { T, useTask } from '@threlte/core';
	import { interactivity } from '@threlte/extras';
	import { spring } from 'svelte/motion';

	interactivity();
	const scale = spring(1);

	let rotation = 0;
	useTask((delta) => {
		console.log(delta);
		rotation += delta;
	});
</script>

<T.PerspectiveCamera
	makeDefault
	position={[10, 10, 10]}
	on:create={({ ref }) => {
		ref.lookAt(0, 0, 0);
	}}
/>

<T.DirectionalLight position={[0, 10, 10]} castShadow />

<T.Mesh
	position.y={1}
	rotation.y={rotation}
	scale={$scale}
	on:pointerenter={() => scale.set(1.5)}
	on:pointerleave={() => scale.set(1)}
	castShadow
>
	<T.BoxGeometry args={[1, 1, 1]} />
	<T.MeshStandardMaterial color="hotpink" wireframe={true} />
</T.Mesh>

<T.Mesh rotation.x={-Math.PI / 2} receiveShadow>
	<T.CircleGeometry args={[4, 40]} />
	<T.MeshStandardMaterial color="white" />
</T.Mesh>
