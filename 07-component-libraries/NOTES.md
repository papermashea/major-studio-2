Kind of boring library
https://element-plus.org/en-US/component/button.html#basic-usage

show-input/show-stops
- just remove to hide

background color
- #app in app.vue for background color
- can you tie it to a recommendation?

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

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const options = [
  {
    value: 'Rain',
    label: 'Rain',
  },
  {
    value: 'Snow',
    label: 'Snow',
  }
]
</script>

