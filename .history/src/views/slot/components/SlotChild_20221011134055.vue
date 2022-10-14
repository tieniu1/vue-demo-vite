<template>
  <div class="c-nav">
    <div v-for="(value, key) in slotConfig" :key="item.name">
      <slot :name="item.name"></slot>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

let slotConfig = {
  'c-left': {
    name: 'left',
  },
  'c-center': {
    name: 'center',
  },
  'c-right': {
    name: 'right',
  },
};
</script>
<style></style>
