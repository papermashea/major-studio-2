<script>

    // based on this example: https://observablehq.com/@mbostock/u-s-state-map

    import us from './states-albers-10m.json'
    import { feature } from 'topojson-client'
    import { geoPath, geoIdentity } from 'd3'

    const states = feature(us, us.objects.states).features
    const path = geoPath(geoIdentity().scale(0.6))

    export let callback;
    export let list = [];

</script>

<svg height={400} width={600}>
    {#each states as state}
        <path
            class:selected={list.includes(state.properties.name)}
            on:click={() => callback(state.properties.name)}
            d={path(state)}
        />
    {/each}
</svg>

<style>
path {
    fill: white;
    stroke: black;
    stroke-width: 2px;
    cursor: pointer;
}
path.selected {
    fill: lightblue;
}
</style>
