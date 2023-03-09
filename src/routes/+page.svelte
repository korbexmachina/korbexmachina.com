<script lang="ts">
	import AboutMe from './About-me.svelte';
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

	<hr class="solid" />

	<h2 class="subheading">Computer Science BS</h2>

	<h2 class="subheading">UCSC '25</h2>

	<AboutMe />

	<h3 class="links">Links</h3>

	<div class="links">
		<a class="button" href='https://www.linkedin.com/in/korbentompkin/'><p>LinkedIn</p></a>
		<a class="button" href='https://github.com/Korbexmachina'><p>GitHub</p></a>
		<a class="button" href='https://universeodon.com/@korbexmachina'><p>Mastodon</p></a>
	</div>
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
		color: #74c7ec;
		text-transform: uppercase;
		animation: flip 5s infinite;
		animation-delay: calc(0.01s * var(--i));
	}
	@keyframes flip {
		0%,
		80% {
			transform: rotateY(360deg);
		}
	}
	@keyframes textclip {
		to {
			background-position: 200% center;
		}
	}

	/* Solid border divider */
	hr.solid {
		border-top: 3px solid #bbb;
		border-radius: 8px;
		border-color: #6c7086;
		width: 50%;
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

	h3.links {
		font-weight: normal;
		padding: 0;
		margin: 0;
	}

	p {
		color: #cdd6f4;
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	.subheading {
		padding: 0;
		margin: 0;
	}

	.links {
		display: flex;
		flex-wrap: wrap;
		position: relative;
		justify-content: center;
	}

	a.button {
		flex: 1;
		border: 2px solid transparent;
		text-decoration: none;
	}

	.links:first-child {
		margin-right: 20px;
	}

	.button {
		font-size: inherit;
		font-family: inherit;
		border-radius: 8px;
		border: 1px solid transparent;
		padding: 0.6em 1.6em;
		font-weight: 500;
		background-color: #313244;
		cursor: pointer;
		transition: border-color 0.25s;
		position: relative;
		right: 0;
		margin-right: 10px;
		margin-left: 10px;
		margin-top: 10px;
		margin-bottom: 10px;
		width: 130px;
		max-width: 33%;
		text-align: center;
	}

	.button:hover {
		border-color: #cba6f7;
	}

	.button:focus,
	.button:focus-visible {
		outline: 4px auto -webkit-focus-ring-color;
	}
</style>
