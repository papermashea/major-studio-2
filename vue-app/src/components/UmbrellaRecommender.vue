<template>
  <el-card
    shadow="always"
    :body-style="{
      backgroundColor: recommendation ? 'lightblue' : 'lightgray',
    }"
  >
    {{ recommendationText }}
  </el-card>
</template>

<script>
export default {
  name: "UmbrellaRecommender",
  props: {
    recommendation: Boolean,
  },
  computed: {
    recommendationText() {
      return this.recommendation === true
        ? "☂️ Better carry an umbrella ☂️"
        : "No guarantees, but you should be OK without an umbrella";
    },
  },
};
</script>

<style></style>
