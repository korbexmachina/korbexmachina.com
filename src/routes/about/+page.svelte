<script>
	import Resume from './resume.md';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About me" />
</svelte:head>

<div class="text-column">
	<Resume />
</div>

<style>
	div.text-column {
		position: relative;
		align-self: center;
	}
</style>
