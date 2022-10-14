<template>
  <div>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <input
      type="text"
      :value="title"
      @input="$emit('update:title', $event.target.value)"
    />
  </div>
</template>

<script setup>
defineProps({
  modelValue: String,
  modelModifiers: {
    default: () => ({}),
  },
  title: String,
  titleModifiers: {
    default: () => ({}),
  },
});
defineEmits(['update:modelValue', 'update:title']);
</script>

<style scoped></style>
