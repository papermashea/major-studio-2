<script>
    import Card, {Media, MediaContent, Content} from '@smui/card';
    import '../node_modules/@smui/card/bare.css';
	export let periods

    function getTempColor(temp) {
        if (temp > 80){
            return 'red'
        }
        if (temp > 65) {
            return 'pink'
        }
        if (temp > 50){
            return 'lightseagreen'
        }
        if (temp >= 32) {
            return 'lightblue'
        }
        if (temp < 32) {
            return 'blue'
        }
    }
</script>

<main>
	<div class="flex">
        {#each periods as period}
        <div class="card-container">
            <Card class="card-media-16x9" style="background-color: {getTempColor(period.temperature)}">
                <Content>
                    <div style="width: 80px; font-size: 10px;">{period.name}</div>
                </Content>
                <Media aspectRatio="square" class="card-media">
                    <MediaContent>
                        <img src={period.icon} alt="forecast-icon" />
                    </MediaContent>
                </Media>
                <Content>
                    <div>{period.temperature}</div>
                </Content>
            </Card>
        </div>
        {/each}
    </div>
</main>

<style>
    .card-container {
        margin: 10px;
    }

    @media (max-width: 800px) {
        .mdc-card .img {
            display: none;
        }
    }
    .flex {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>
