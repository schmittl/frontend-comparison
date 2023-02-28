<script lang="ts">
    import { examples } from './examples'
    import { embedStackblitz } from './stackblitz'

    function embed() {
        const example = examples[0]
        embedStackblitz({ id: 'embed1', example, framework: 'angular' })
        embedStackblitz({ id: 'embed2', example, framework: 'svelte' })
    }
</script>

<main>
    <h1>Open a GitHub repo with the StackBlitz SDK</h1>

    <button on:click={embed}> Select example </button>

    <div id="embed1" />
    <div id="embed2" />
</main>
