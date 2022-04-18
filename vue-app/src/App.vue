<template>
    <router-link class="margin-x" to="/">Home</router-link>
    <router-link class="margin-x" to="/methodology">Methodology</router-link>
    <router-link class="margin-x" to="/chart">Chart</router-link>
    <router-view></router-view>
</template>

<script>
const API_URL = "https://api.weather.gov/gridpoints/OKX/33,37/forecast";
const MAX_SVG_WIDTH = 600;


export default {
  name: "App",
  components: {
  },
  methods: {
    onResize() {
      this.width = Math.min(MAX_SVG_WIDTH, window.innerWidth);
      console.log(this.width)
    },
  },
  mounted() {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        this.forecast = data;
      });

    window.addEventListener("resize", this.onResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
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
  background-color: rgba(0,0,255,.1);
  padding: 1%;
}
.recommendation-group {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

@media (max-width: 768px) {
  .recommendation-group {
    flex-direction: column;
    align-items: center;
  }
}

.card {
  width: 300px;
}

.margin-x {
  margin: 0px 5px;
  text-decoration: none;
}

.margin-x:hover {
      text-decoration: underline;
      color: red;
    }

</style>
