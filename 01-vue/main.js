/* global Vue */
import * as d3 from "https://cdn.skypack.dev/d3@7";
/**
 * in theory we could import vue here as well
 * instead of in a script tag in index.html
 * but as of this writing https://cdn.skypack.dev/vue@3/ was returning an error
 */

const INDEXES = [0, 1, 2, 3, 4];

const App = {
  data() {
    return {
      target: "CHART",
      guesses: [],
      currentGuess: "",
      tileDimension: 50,
      badGuess:
        show: false
    };
  },
  methods: {
    addGuess() {
      const newGuess = this.currentGuess;
      this.guesses.push(newGuess.toUpperCase());
      this.currentGuess = "";
    },
    resetGame() {
      this.guesses = [];
      this.currentGuess = "";
    }
  },
  computed: {
    gridData() {
      return this.guesses.map((guess) => guess.split(""));
    },
    svgWidth() {
      return this.tileDimension * 5;
    },
    svgHeight() {
      return Math.max(100, this.guesses.length * this.tileDimension);
    },
    xScale() {
      return d3.scaleBand().domain(INDEXES).range([0, this.svgWidth]);
    },
    yScale() {
      return d3
        .scaleLinear()
        .domain([0, this.guesses.length])
        .range([0, this.svgHeight]);
    },
  },
};

Vue.createApp(App).mount("#app");
