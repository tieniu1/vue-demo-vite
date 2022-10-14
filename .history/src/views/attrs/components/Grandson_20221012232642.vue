<template>
  <div b p-4 mb-3>
    <h5>孙组件</h5>
    <div>标题：{{ title }}</div>
    <div>内容：{{ msg }}</div>
  </div>
</template>
<script setup>
defineProps(['title', 'msg']);
</script>
<style lang="less" scoped>
.child {
  color: blue;
}
</style>
