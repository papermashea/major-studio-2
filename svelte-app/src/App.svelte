<script>
<<<<<<< HEAD
	export let name;
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	import { Router, Link, Route } from "svelte-routing";
	import { onMount, onDestroy } from 'svelte';
	import BarChart from './BarChart.svelte'
	import Forecast from './Forecast.svelte'

	const API_URL = "https://api.weather.gov/gridpoints/OKX/33,37/forecast";
	const MAX_SVG_WIDTH = 600;

	let forecast = {
		properties: {
			periods: []
		}
	};

	let width = MAX_SVG_WIDTH;
	let url = "/forecast"

	const onResize = () => {
		width = Math.min(MAX_SVG_WIDTH, window.innerWidth);
	}

	onMount(async () => {
		const res = await fetch(API_URL);
		forecast = await res.json();

		window.addEventListener("resize", onResize)
	});

	onDestroy(() => window.removeEventListener("resize", onResize));
</script>

<main>
<<<<<<< HEAD
	<h4>This week's temperature chart</h4>
	<BarChart data={forecast.properties.periods} height={400} width={600} />
	<div class='app-body'>
		<Forecast periods={forecast.properties.periods} />
		<BarChart data={forecast.properties.periods} height={400} width={width} />
	</div>
=======
	<Router url="{url}">
		<nav>
			<Link to="/cards">Forecast Cards</Link>
			<Link to="/bars">Bar Chart</Link>
		</nav>
		<h4>This week's temperature chart</h4>
		<div class='app-body'>
			<Route path="cards">
				<Forecast periods={forecast.properties.periods} />
			</Route>
			<Route path="bars">
				<BarChart data={forecast.properties.periods} height={400} width={width} />
			</Route>
		</div>
	</Router>
>>>>>>> bad5687d08a71e4482dc3d950ec95d9b2b8068d9
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
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
	.app-body {
		display: grid;
		grid-template: 1fr / 1fr 1fr;
	}
	@media (max-width: 1200px) {
        .app-body {
            display: grid;
            grid-template: 1fr 1fr / 1fr;
        }
    }
