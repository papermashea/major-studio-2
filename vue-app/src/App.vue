<template>
  <div>
    <h1>Making decisions based on the weather forecast</h1>
    <UmbrellaRecommender :recommendation="recommendation" />
  </div>
</template>

<script>
import UmbrellaRecommender from "./components/UmbrellaRecommender.vue";

export default {
  name: "App",
  data() {
    return {
      forecast: null,
    };
  },
  components: {
    UmbrellaRecommender,
  },
  computed: {
    umbrellaRecommendation() {
      if (
        !this.forecast ||
        !this.forecast.properties ||
        !this.forecast.properties.periods ||
        !this.forecast.properties.periods.length
      ) {
        return false;
      }
      const nextDaytimeForecast = this.forecast.properties.periods.find(
        (d) => d.isDaytime
      );
      if (!nextDaytimeForecast) {
        return false;
      }
      return nextDaytimeForecast.shortForecast.includes("Rain");
    },
  },
  mounted() {
    fetch("https://api.weather.gov/gridpoints/OKX/33,37/forecast")
      .then((res) => res.json())
      .then((data) => {
        this.forecast = data;
      });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
