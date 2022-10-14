<template>
  <div>
    <input
      type="text"
      :value="title"
      @input="$emit('update:title', $event.target.value)"
    />
    <input type="text" />
  </div>
</template>

<script setup>
defineProps(['title', 'msg']);
defineEmits(['update:title', 'update:msg']);
</script>

<style scoped></style>
