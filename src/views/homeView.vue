<template>
  <main>
    <div b b-red w-min mb1 p2>
      <button @click="changeV1">changeV1</button
      ><button @click="changeMessage">changeMessage</button>
      <button @click="changeReactive1">changeReactive1</button>
    </div>
    <div b b-red w-100 c-blue-500 p2>
      <div b m-2 p-2 id="mes">
        {{ message }}
      </div>
      <div b m-2 p-2>{{ reactive1 }}</div>
    </div>
  </main>
</template>
<script setup>
import {
  ref,
  computed,
  reactive,
  watch,
  watchEffect,
  watchPostEffect,
} from "vue";

const message = ref([]);
const v1 = ref(0);
const res = computed(() => v1.value + message.value);
const reactive1 = reactive({
  a: { b: 0 },
});

const changeMessage = () => {
  message.value = [1, 2];
};
const changeV1 = () => {
  v1.value += 10;
};
const changeReactive1 = () => {
  reactive1.b = 10;
  reactive1.a = { a: 1 };
};
//  监听计算属性
// watch(res, (value, oldValue) => {
//   console.log("value:::", value);
//   console.log("oldValue:::", oldValue);
// });
// 监听ref 数组
watch(
  message,
  (value, oldValue) => {
    // DOM 更新后执行
    console.log("innerText::::", document.querySelector("#mes").innerText);
  },
  {
    deep: true, // 监听数组变换
    flush: "post", // DOM 更新之后再执行侦听器回调，如果用watchEffect的话可以用这个属性，也可以 使用 watchPostEffect 方法
  }
);
watchPostEffect(reactive1, (value, oldValue) => {
  // DOM 更新后执行
  console.log("value:::", value);
  console.log("oldValue:::", oldValue);
});
// 监听reactive
watch(reactive1, (value, oldValue) => {
  console.log("value:::", value);
  console.log("oldValue:::", oldValue);
});
// 使用 getter 侦听 reactive中的某个属性
watch(
  () => reactive1.a,
  (value, oldValue) => {
    console.log("value:::", value);
    console.log("oldValue:::", oldValue);
  }
);

// const url1 = ref("http://");
// const data1 = ref(null);

// // 使用 watch
// // async function fetchData() {
// //   const response = await fetch(url1.value);
// //   data1.value = await response.json();
// // }
// // fetchData();
// // watch(url1, fetchData);

// //  使用 watchEffect 简化代码
// watchEffect(async () => {
//   const response = await fetch(url1.value);
//   data1.value = await response.json();
// });

/*   关闭侦听器 */
// 同步语句创建的侦听器会自动绑定到宿主组件实例上，组件卸载时自动停止
// 异步回调创建的侦听器，不会绑定到当前组件上，需要手动停止。

//  同步语句创建
const unWatch = watch(
  () => reactive1.a,
  (value, oldValue) => {
    console.log("value:::", value);
    console.log("oldValue:::", oldValue);
  }
);
// 异步回调创建
// 两秒后手动关闭
let unWatchTimeOut = null;
setTimeout(() => {
  console.log("异步回调侦听器");
  unWatchTimeOut = watchEffect(
    () => reactive1.a,
    (value, oldValue) => {
      console.log("value:::", value);
      console.log("oldValue:::", oldValue);
    }
  );
}, 10);

setTimeout(() => {
  if (typeof unWatchTimeOut === "function") {
    console.log("关闭-异步回调侦听器");

    unWatchTimeOut();
  }
}, 200);
</script>
