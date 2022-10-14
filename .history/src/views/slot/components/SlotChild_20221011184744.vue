<template>
  <div class="c-nav" b p2>
    <div v-for="(value, key) in slotConfig" :key="key" :class="key">
      <slot :name="value.name">{{ value.name }}</slot>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const props = defineProps({
  slotConfig: {
    type: Object,
  },
});
</script>
<style>
.c-nav {
  display: flex;
  width: 300px;
}
.c-nav》div {
  padding: 5px;
  border: 1px solid;
  margin: 0 5px;
}
</style>
