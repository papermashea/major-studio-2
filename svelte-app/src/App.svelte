<script>
	import { onMount } from 'svelte';
	import Forecast from './Forecast.svelte'

	let data = null;

	const API_URL = "https://api.weather.gov/gridpoints/OKX/33,37/forecast";

	let isMounted = false;
	// alternative solution: initialize `let forecast = { properties: periods: [] }`
	// so the Forecast component gets an empty array until API data returns
	let forecast = null;

	onMount(async () => {
		const res = await fetch(API_URL);
		forecast = await res.json();
		isMounted = true;
	});

</script>

<main>
	<h1>My weather app</h1>
	<p>Forecast from <a href="https://www.weather.gov/documentation/services-web-api">US weather service</a> API.</p>
	{#if isMounted}
		<Forecast periods={forecast.properties.periods} />
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
