<script>
    import { scaleLinear, scaleBand } from 'd3-scale'
    import { min, max } from 'd3-array'

	export let data = [];
    export let height;
    export let width;
    const margin = 20;

    $: yScale = scaleLinear()
        .domain([Math.min(
            0,
            min(data, d => d.temperature)
        ), max(data, d => d.temperature)])
        .range([0, height - margin])
    $: xScale = scaleBand()
        .padding(0.1)
        .domain(data.map(d => d.name))
        .range([0, width])

    $: rectWidth = xScale.bandwidth()
</script>

<main>
    <svg height={height} width={width}>
        {#each data as d}
            <rect
                height={yScale(d.temperature)}
                width={rectWidth}
                y={height - yScale(d.temperature)}
                x={xScale(d.name)}
            ></rect>
        {/each}
        {#each data as d}
            <text
                y={height + rectWidth}
                x={xScale(d.name)}
                transform={`rotate(-90 ${xScale(d.name)} ${height})`}
            >{d.name}</text>
            <text
                class="middle-anchor"
                y={height - yScale(d.temperature) - 5}
                x={xScale(d.name) + rectWidth / 2}
            >{d.temperature}</text>
        {/each}
    </svg>
</main>

<style>
    rect {
        fill: lightblue;
    }
    text.middle-anchor {
        text-anchor: middle;
    }
</style>
