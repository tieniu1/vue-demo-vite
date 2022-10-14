<template>
  <div>
    <div mb-5 flex>
      <button @click="changeListAddress">修改数组内存地址</button>
      <button @click="changeListPush">数组push</button>
      <button mr-10 @click="changeListShift">数组shift</button>
    </div>
    <div b w-min p2>
      {{ list }}
    </div>
  </div>
  <div mt10 b w100>
    <div b p2>
      <button @click="changeItem1">数据源1</button>
      <button @click="changeItem2Tool">数据源2 方法</button>
      <button @click="changeItem2Address">数据源2 地址</button>
      <button @click="changeItem3">数据源3</button>
    </div>
    <div b p2>
      <div>1：{{ item1 }}</div>
      <div>2：{{ item2 }}</div>
      <div>3：{{ item3 }}</div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref, watch } from "vue";

const list = ref([]);

const changeListAddress = () => {
  list.value = ["修改内存地址成功！！！"];
};
const changeListPush = () => {
  list.value.push("1");
};
const changeListShift = () => {
  list.value.shift("2");
};

watch(list, () => {
  // 只能侦听到数组的内存地址变化
  console.log("内存地址变化了");
});

watch(list.value, () => {
  // 只能侦听到数组方法，不能侦听内存地址变化
  console.log("数组方法修改了数组");
});

//TODO 通杀方法
watch(
  list,
  () => {
    console.log("通杀啦！！！");
  },
  {
    deep: true,
  }
);
// -------------------------
const item1 = ref(0);
const item2 = ref([1]);
const item3 = reactive({
  a: 1,
});

const changeItem1 = () => {
  item1.value++;
};

const changeItem2Tool = () => {
  item2.value.push(1);
};
const changeItem2Address = () => {
  item2.value = ["修改地址"];
};
const changeItem3 = () => {
  item3.b = 2;
};
// 和上面的监听一致，ref数组只能监听到方法的修改
watch([item1, item2.value, item3], (value, oldValue) => {
  console.log("侦听1---------");
  console.log(value);
  console.log(oldValue);
});
// ref数组只能监听到地址的修改
watch([item1, item2, item3], (value, oldValue) => {
  console.log("侦听2---------");
  console.log(value);
  console.log(oldValue);
});
//TODO 通杀方法
watch(
  [item1, item2, item3],
  () => {
    console.log("通杀啦！！！");
  },
  {
    deep: true,
  }
);
</script>
<style></style>
