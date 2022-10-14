<template>
  <div class="c-nav">
    <div v-for="(value, key) in slotConfig" :key="value.name">
      <slot :name="value.name"></slot>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue';

let slotConfig = reactive({
  'c-left': {
    name: 'left',
  },
  'c-center': {
    name: 'center',
  },
  'c-right': {
    name: 'right',
  },
});
</script>
<style></style>
