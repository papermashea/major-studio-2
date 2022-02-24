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
<<<<<<< HEAD
      badGuess:
        show: false
=======
      badGuess: {
        show: false,
        reason: ''
      }
>>>>>>> 5b33aa31 ([medium] reject a guess that is longer than 5 letters or has already been made)
    };
  },
  methods: {
    addGuess() {
      const newGuess = this.currentGuess.toUpperCase();
      const indexOfNewGuess = this.guesses.indexOf(newGuess)
      if (newGuess.length < 5) {
        this.badGuess.show = true;
        this.badGuess.reason = 'guess too short'
      } else if (newGuess.length > 5) {
        this.badGuess.show = true;
        this.badGuess.reason = 'guess too long'
      } else if (indexOfNewGuess !== -1) {
        this.badGuess.show = true;
        this.badGuess.reason = 'already guessed'
      } else {
        this.guesses.push(newGuess);
        this.currentGuess = ""; 
      }
    },
    clearBadGuess() {
      if (this.badGuess.show) {
        this.badGuess.show = false;
      }
    },
    resetGame() {
      this.guesses = [];
      this.currentGuess = "";
      this.clearBadGuess();
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
