<template>
  <div b w-50 p-4 mb-3>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    {{ modelValue }}
    <input
      type="text"
      :value="title"
      @input="$emit('update:title', $event.target.value)"
    />
    {{ title }}
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
