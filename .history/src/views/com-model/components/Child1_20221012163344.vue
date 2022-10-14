<template>
  <div>
    <input type="text" v-model="child1Value1" />
  </div>
  {{ child1Value1 }}
</template>
<script setup>
const props = defineProps({
  child1Value1: {
    type: String,
  },
});
const emit = defineEmits(['update:child1Value1']);
</script>
<style></style>
