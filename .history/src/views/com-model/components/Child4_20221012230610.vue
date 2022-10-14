<template>
  <div b w-50 p-4 mb-3>
    <input type="text" :value="modelValue" @input="formatCapitalize" />
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
const emit = defineEmits(['update:modelValue', 'update:title']);
const formatCapitalize = (e) => {
  let value = e.target.value;

  emit('update:modelValue', value.charAt(0).toUpperCase() + value.slice(1));
};
const formatLower = (params) => {};
</script>

<style scoped></style>
