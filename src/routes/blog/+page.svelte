<script>
	import Post0 from './posts/post0.md';
	import Post1 from './posts/post1.md';
	import Post2 from './posts/post2.md';
	import Post3 from './posts/post3.md';
	import Post4 from './posts/post4.md';
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="My blog" />
</svelte:head>

<body>
	<Post4 />
	<Post3 />
	<Post2 />
	<Post1 />
	<Post0 />
</body>

<style>
	body {
		margin: 0.8em;
	}
</style>
