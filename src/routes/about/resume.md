<script>
    import Skills from './Skills.svelte';
</script>

# Summary

<p class='about'>As a dedicated computer science student, I have a passion for full-stack development. Through my coursework and personal projects, I have worked with various different technologies, including Java, Python, Git, Linux, and Django. I am constantly seeking new challenges and opportunities to grow, and am currently studying RISC-V Assembly and C. My ability to learn quickly and solve complex problems makes me a valuable asset to any team.</p>

# Skills

<div class='pos'>
    <Skills>
        <p>Java</p>
        <p>Python</p>
        <p>Javascript</p>
        <p>Typescript</p>
        <p>HTML</p>
        <p>CSS</p>
        <p>Svelte</p>
        <p>C</p>
    </Skills>

    <Skills>
        <p>Git</p>
        <p>Linux</p>
        <p>Django</p>
        <p>OOP</p>
        <p>Data Structures</p>
        <p>Data Analysis</p>
        <p>Algorithms</p>
        <p>Markdown</p>
    </Skills>

</div>

<style>
    p {
        text-align: center;
    }

    p.about {
        margin: 0.8em;
        text-align: left;
    }

    div.pos {
        position: relative;
        align-self: center;
        display: flex;
        flex-direction: row;
    }
</style>
