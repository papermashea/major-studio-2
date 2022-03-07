<script>
	import { onMount } from 'svelte';
	import BarChart from './BarChart.svelte'
	import Forecast from './Forecast.svelte'

	const API_URL = "https://api.weather.gov/gridpoints/OKX/33,37/forecast";

	let forecast = {
		properties: {
			periods: []
		}
	};

	onMount(async () => {
		const res = await fetch(API_URL);
		forecast = await res.json();
	});
</script>

<main>
	<h4>This week's temperature chart</h4>
	<Forecast periods={forecast.properties.periods} />
	<BarChart data={forecast.properties.periods} height={400} width={600} />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
