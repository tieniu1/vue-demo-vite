<template>
  <div b w-50 p-4 mb-3>
    <h4>子组件</h4>
    <Grandson v-bind="attrs"></Grandson>
  </div>
</template>
<script setup>
import Grandson from './Grandson.vue';
</script>
<style lang="less" scoped></style>
