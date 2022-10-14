<template>
  <div>
    <input
      type="text"
      :modelValue="child1Value1"
      @update:modelValue="(newValue) => (child1Value1 = newValue)"
    />
  </div>
  {{ modelValue }}
</template>
<script setup>
defineProps({
  modelValue: {
    type: String,
  },
});

defineEmits(['update:modelValue']);
</script>
<style></style>
