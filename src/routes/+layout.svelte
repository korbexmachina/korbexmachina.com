<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p class="slugs">
			<strong class="slugs">Go Slugs!</strong>
		</p>
		<p>
			<a class='email' href = "mailto: contact@korbexmachina.com">Email</a> ---
			<a href="https://github.com/Korbexmachina/korbexmachina.com" target="_blank" rel="noopener noreferrer">GitHub</a>
		</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: normal;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}

	p.slugs {
		align-self: center;
	}

	strong.slugs {
		color: #f9e2af;
	}
</style>
