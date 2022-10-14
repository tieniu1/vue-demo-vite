<template>
  <div class="c-nav">
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
<style></style>
