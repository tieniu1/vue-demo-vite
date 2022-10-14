<template>
  <div>
    {{ counter }}
    <button @click="add">+</button>
  </div>
</template>
<script setup>
import {
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
  onUpdated,
  onErrorCaptured,
  onRenderTriggered,
  onRenderTracked,
  onActivated,
  onDeactivated,
  onServerPrefetch,
  ref,
} from "vue";

// setup 中没有beforeCreate、beforeCreated， 因为setup在这两个声明周期之前执行，
onBeforeMount(() => {
  console.log("onBeforeMount----渲染前触发");
});
onMounted(() => {
  console.log("onMounted----渲染完成触发");
});
onBeforeUpdate(() => {
  console.log("onBeforeUpdate----数据修改，更新Dom时触发");
});
onBeforeUnmount(() => {
  // 卸载前触发
  console.log("onBeforeUnmount----卸载前触发");
});
onUnmounted(() => {
  // 组件卸载时触发
  console.log("onUnmounted----卸载完成触发");
});
onUpdated(() => {
  console.log("onUpdated----数据修改，更新Dom完成时触发");
});
onErrorCaptured(() => {
  console.log("onErrorCaptured");
});

onActivated(() => {
  console.log("onActivated----keepAlive");
});
onDeactivated(() => {
  console.log("onDeactivated-----keepAlive");
});
/* TODO 开发时钩子调试用 */
onRenderTriggered(() => {
  console.log("onRenderTriggered");
});
/* TODO 开发时钩子调试用 */
onRenderTracked(() => {
  console.log("onRenderTracked");
});
/* TODO 仅服务端可用 */
onServerPrefetch(() => {
  console.log("onServerPrefetch");
});

let counter = ref(0);
const add = () => {
  counter.value++;
};
</script>
<style></style>
