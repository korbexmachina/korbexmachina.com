<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1 class="name">
   		<span style="--i:17">K</span>
   		<span style="--i:12">o</span>
   		<span style="--i:23">r</span>
   		<span style="--i:14">b</span>
   		<span style="--i:35">e</span>
   		<span style="--i:26">n</span>
  	</h1>

  	<h1 class="name">
   		<span style="--i:18">T</span>
   		<span style="--i:39">o</span>
   		<span style="--i:21">m</span>
  		 <span style="--i:12">p</span>
   		<span style="--i:33">k</span>
   		<span style="--i:19">i</span>
   		<span style="--i:15">n</span>
  	</h1>

	<h2 class='subheading'>
		Computer Science BS
	</h2>

	<h2 class='subheading'>
		UCSC '26'
	</h2>

	<Counter />
</section>

<style>
	.name {
  		padding: 0;
  		margin: 0;
  		box-sizing: border-box;
		}
	.name {
		position: relative;
	}
	.name span {
		position: relative;
		display: inline-block;
		font-size: 40px;
		color: #6c6f85;
		text-transform: uppercase;
		animation: flip 5s infinite;
		animation-delay: calc(.01s * var(--i))
	}
	@keyframes flip {
		0%,80% {
			transform: rotateY(360deg) 
		}
	}
	@keyframes textclip {
		to {
			background-position: 200% center;
		}
	}
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.subheading {
		padding: 0;
		margin: 0;
	}
</style>
