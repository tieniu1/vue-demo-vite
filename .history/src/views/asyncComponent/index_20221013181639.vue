<template>
  <div>
    <Child></Child>
    <Child1></Child1>
  </div>
</template>
<script setup>
import { defineAsyncComponent } from 'vue';
import LoadingComponent from './components/LoadingComponent.vue';
import ErrorComponent from './components/ErrorComponent.vue';

const Child = defineAsyncComponent(() => import('./components/Child.vue'));
//  高级写法，处理加载失败状态
const Child1 = defineAsyncComponent({
  //  加载函数
  loader: () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import('./components/Child1.vue'));
      }, 1000);
    }),
  // 加载异步组件时使用的组件
  loadingComponent: LoadingComponent,
  // 展示加载组件前的延迟时间，默认未200ms
  delay: 200,
  // 加载失败后展示的组件
  errorComponent: ErrorComponent,
  // 如果提供了 timeout 时间限制，并超时了
  // 会显示加载失败组件，默认值是：Infinity
  timeout: 10,
});
</script>
<style lang="less" scoped></style>
