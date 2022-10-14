<template>
  <div b w-50 p-4 mb-3>
    <h3>多个model</h3>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    {{ modelValue }}
  </div>
</template>
<script setup>
defineProps(['modelValue']);
defineEmits(['update:modelValue']);
</script>
<style></style>
