<template>
  <div>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
  {{ modelValue }}
</template>
<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  setup() {
    return {};
  },
};
</script>
<style></style>
