<script>
<<<<<<< HEAD
	export let name;
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
=======
	import { onMount } from 'svelte';
	import BarChart from './BarChart.svelte'

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
	<BarChart data={forecast.properties.periods} height={400} width={600} />
>>>>>>> 4902cc6b70c6dd6b96228ea9dbe71a53c4c9c24b
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

<<<<<<< HEAD
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

=======
>>>>>>> 4902cc6b70c6dd6b96228ea9dbe71a53c4c9c24b
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> 4902cc6b70c6dd6b96228ea9dbe71a53c4c9c24b
