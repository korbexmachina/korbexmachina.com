<svelte:head>
	<title>About</title>
	<meta name="description" content="About me" />
</svelte:head>

<div class="text-column">
	<p>
		Hi, my name is <strong class="name">Korben</strong>! I'm a full stack developer, currently
		studying at UC Santa Cruz.
	</p>

	<div>
		<p>In addition to software development, my hobbies include:</p>
		<ul class="hobbies">
			<li>Mountain Biking</li>
			<li>Improv Comedy</li>
			<li>Drumming</li>
			<li>Hiking</li>
			<li>And much more...</li>
		</ul>
	</div>
</div>

<style>
	div.text-column {
		margin: 0.8em;
	}
	strong.name {
		color: #74c7ec;
	}

	ul.hobbies {
		list-style: -moz-radial-gradient(#f9e2af, #f38ba8);
		list-style: -webkit-radial-gradient(#f9e2af, #f38ba8);
		list-style: -o-radial-gradient(#f9e2af, #f38ba8);
	}
</style>
