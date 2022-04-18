<template>
  <div>
    <h1>Making decisions based on the weather forecast</h1>
    <h3>Methodology</h3>
    <el-slider v-model="bikeTempRange" range :min="20" :max="90" />

  </div>
</template>

<script>
export default {
  name: "Methodology",
};
</script>

<style></style>
