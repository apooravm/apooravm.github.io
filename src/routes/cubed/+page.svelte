<script lang="ts">
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';

	let width: number = 1;
	let height: number = 1;
	let depth: number = 1;

	let spin: number = 0;
	SC.onFrame(() => {
		spin += 0.01;
	});
</script>

<div class="canvas-container">
	<SC.Canvas
		antialias
		background={new THREE.Color('black')}
		fog={new THREE.FogExp2('black', 0.05)}
		shadows
	>
		<!-- <SC.Mesh geometry={new THREE.BoxGeometry()} /> -->
		<SC.PerspectiveCamera position={[3, 3, 5]} />
		<SC.OrbitControls enableZoom={true} />
		<SC.Mesh
			geometry={new THREE.BoxGeometry()}
			material={new THREE.MeshStandardMaterial({ color: 0xff2f6a })}
			scale={[width, height, depth]}
			position={[0, 0.01, 0]}
			rotation={[0, spin, 0]}
			castShadow
		/>

		<SC.Group position={[0, -height / 2, 0]}>
			<SC.Mesh
				geometry={new THREE.PlaneGeometry(30, 30)}
				material={new THREE.MeshStandardMaterial({ color: 0x3f6300, side: THREE.DoubleSide })}
				rotation={[-Math.PI / 2, 0, 0]}
				receiveShadow
			/>

			<!-- <SC.Primitive
            object={new THREE.GridHelper(50, 50, 0x444444, 0x555555)}
            position={[0, 0.001, 0]} 
        /> -->
		</SC.Group>

		<SC.AmbientLight intensity={0.6} />
		<SC.DirectionalLight intensity={0.6} position={[-2, 3, 2]} shadow={{ mapSize: [2048, 2048] }} />
	</SC.Canvas>
</div>

<div class="controls">
	<label><input type="range" bind:value={width} min={0.05} max={3} step={0.01} />width</label>
	<label><input type="range" bind:value={height} min={0.05} max={3} step={0.01} />height</label>
	<label><input type="range" bind:value={depth} min={0.5} max={3} step={0.01} />depth</label>
</div>

<style>
	.controls {
		position: absolute;
	}

    .canvas-container {
        position: relative;
        height: 500px;
        width: 100%;
    }
</style>
