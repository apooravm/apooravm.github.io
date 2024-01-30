<script>
	import { T, useTask } from '@threlte/core';
	import { interactivity, OrbitControls } from '@threlte/extras';
	import { spring } from 'svelte/motion';
	import { AxesHelper } from 'three';

	interactivity();
	const scale = spring(1);

	let rotation = 0;
	useTask((delta) => {
		rotation += delta;
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

<T.AxesHelper args={[2]}/>

<T.Mesh
	position.y={1}
	rotation.y={rotation}
	scale={$scale}
	on:pointerenter={() => scale.set(1.5)}
	on:pointerleave={() => scale.set(1)}
	castShadow
>
	<T.BoxGeometry args={[1, 1, 1]} />
	<T.MeshStandardMaterial color="hotpink" wireframe={true}/>
</T.Mesh>

<T.PointLight position.y={1} intensity={5}/>

<T.Mesh position.y={Math.sin(rotation)*5} position.x={Math.cos(rotation)*5} receiveShadow>
	<T.SphereGeometry args={[2, 25, 25]}/>
	<T.MeshStandardMaterial color="white" side={2}/>
</T.Mesh>


<T.Mesh position.y={Math.sin(rotation)*5 + Math.sin(rotation*1.5)*4} position.x={Math.cos(rotation)*5 + Math.cos(rotation*1.5)*4} receiveShadow>
	<T.SphereGeometry args={[1, 25, 25]}/>
	<T.MeshStandardMaterial color="white" side={2}/>
</T.Mesh>