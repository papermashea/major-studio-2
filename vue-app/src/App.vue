<template>
  <div>
    <h1>Making decisions based on the weather forecast</h1>
    <h3>Next daytime temperature: {{ firstDaytimePeriod.temperature }}</h3>
    <BikeRecommender :recommendation="recommendation" />
  </div>
</template>

<script>
import BikeRecommender from "./components/BikeRecommender.vue";

const API_URL = "https://api.weather.gov/gridpoints/OKX/33,37/forecast";

export default {
  name: "App",
  components: {
    BikeRecommender,
  },
  data() {
    return {
      forecast: null,
    };
  },
  computed: {
    firstDaytimePeriod() {
      if (!this.forecast) {
        return {};
      }
      console.log(this.forecast);
      const daytimePeriod = this.forecast.properties.periods.find(
        (d) => d.isDaytime
      );
      return daytimePeriod || {};
    },
    recommendation() {
      const { temperature } = this.firstDaytimePeriod;
      if (temperature === undefined) {
        return null;
      }
      return temperature >= 45 && temperature < 80;
    },
  },
  mounted() {
    fetch(API_URL)
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
