<script lang='ts'>
    export let title: string;
</script>

<body>
    <div class="title-box">
        <h1 class='title'>{title}</h1>
    </div>
</body>

<style>

    body {
        align-items: center;
        align-self: center;
        text-align: left;
    }
    div.title-box {
        height: auto;
        max-width: 33%;
        background-color: #11111b;
    }

    h1.title {
        color: #74c7ec;
    }
</style>