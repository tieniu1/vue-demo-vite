<template>
  <div>
    <input
      type="text"
      :value="modelValue"
      @input="(event) => $emit('update:modelValue', event.target.value)"
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
