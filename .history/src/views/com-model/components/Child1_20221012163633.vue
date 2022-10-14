<template>
  <div>
    <input type="text" v-model="modelValue" />
  </div>
  {{ modelValue }}
</template>
<script setup>
const props = defineProps({
  modelValue: {
    type: String,
  },
});

const emit = defineEmits(['update:modelValue']);
</script>
<style></style>
