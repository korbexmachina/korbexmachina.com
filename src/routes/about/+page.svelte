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
	strong.name {
		color: #f38ba8;
	}

	p.slugs {
		align-self: center;
	}

	strong.slugs {
		color: #f9e2af;
	}

	ul.hobbies {
		list-style: -moz-radial-gradient(#f9e2af, #f38ba8);
		list-style: -webkit-radial-gradient(#f9e2af, #f38ba8);
		list-style: -o-radial-gradient(#f9e2af, #f38ba8);
	}
</style>
