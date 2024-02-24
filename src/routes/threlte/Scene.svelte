<script lang="ts">
	import { T, useTask } from '@threlte/core';
	import { interactivity, OrbitControls } from '@threlte/extras';
	import { spring } from 'svelte/motion';
	import type { DoubleSide } from 'three';
    import { DirectionalLightHelper } from 'three';

	type Position = {
		x: number;
		y: number;
		z: number;
	};

	interactivity();
	const scale = spring(2);

	let rotation = 0;
	let mainSpherePos: Position = { x: 0, y: 0, z: 0 };
	let subSpherePos: Position = { x: 0, y: 0, z: 0 };

	const mainRevolutionRad = 8;
	const subRevolutionRad = 5;
	const speedA = 1;
	const speedB = 2;

	useTask((delta) => {
		rotation += delta;
		mainSpherePos.y = Math.sin(rotation * speedA) * mainRevolutionRad;
		mainSpherePos.z = Math.cos(rotation * speedA) * mainRevolutionRad;

		subSpherePos.y = mainSpherePos.y + Math.sin(rotation * speedB) * subRevolutionRad;
		subSpherePos.z = mainSpherePos.z + Math.cos(rotation * speedB) * subRevolutionRad;
	});
</script>

<T.PerspectiveCamera
	makeDefault
	position={[10, 10, 10]}
	on:create={({ ref }) => {
		ref.lookAt(0, 0, 0);
	}}
>
	<OrbitControls />
</T.PerspectiveCamera>

<T.DirectionalLight position={[0, 10, 10]} castShadow />

<!-- <T.AxesHelper args={[2]} /> -->

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

<T.PointLight position.y={1} intensity={5} castShadow />

<T.Mesh position.y={mainSpherePos.y} position.z={mainSpherePos.z} receiveShadow castShadow>
	<T.SphereGeometry args={[2, 25, 25]} />
	<T.MeshStandardMaterial color="white" />
</T.Mesh>

<T.Mesh position.y={subSpherePos.y} position.z={subSpherePos.z} receiveShadow castShadow>
	<T.SphereGeometry args={[1, 25, 25]} />
	<T.MeshStandardMaterial color="white" />
</T.Mesh>

