<template>
  <el-select v-model="value" clearable placeholder="Select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<script>
export default {
  name: "SelectWord",
  props: {
    recommendation: String,
  },
  computed: {
    recommendationText() {
      return this.recommendation === true
        ? "🚲 All clear to ride! 🚲"
        : this.recommendation === false
        ? "🚇 Better stick to the subway 🚇"
        : "🤷 TBD 🤷";
    },
  },
};

const options = [
  {
    value: 'rain',
    label: 'rain',
  },
  {
    value: 'snow',
    label: 'snow',
  }
]
</script>