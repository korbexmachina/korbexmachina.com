<svelte:head>
	<title>About</title>
	<meta name="description" content="About me" />
</svelte:head>

<div class="text-column">
	<h1>About me</h1>

	<p>
		Hi, my name is <strong class='name'>Korben</strong>! I'm a full stack developer, currently studying at UC Santa Cruz.
	</p>

	<div>
		<p>In addition to software development, my hobbies include:</p>
		<ul class='hobbies'>
			<li>Mountain Biking</li>
			<li>Improv Comedy</li>
			<li>Drumming</li>
			<li>Hiking</li>
			<li>And much more...</li>
		</ul>
	</div>

	<p>
		<strong class='slugs'>Go Slugs!</strong>
	</p>
</div>

<style>
	strong.name {
		color: #f38ba8;
	}

	strong.slugs {
		color: #f9e2af;
	}

	ul.hobbies {
		list-style:-moz-radial-gradient(#f9e2af, #f38ba8);
		list-style:-webkit-radial-gradient(#f9e2af, #f38ba8);
		list-style:-o-radial-gradient(#f9e2af, #f38ba8);
	}
</style>