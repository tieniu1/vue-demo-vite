<template>
  <div>
    <nav>
      <input type="text" v-model="message" @keyup.enter="handleAdd" />
      <button @click="handleAdd">添加</button>
    </nav>
    <ul>
      <li v-for="item in list" :key="item.id" @click="handleCheckItem(item)">
        {{ item.message }}
        <button @click="handleRemove">删除</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
let list = ref([]);
let message = ref("");

function handleAdd() {
  console.log(message);
  list.value.push({
    id: Math.random() * 1000,
    message: message.value,
  });
}
function handleRemove(id) {
  list.value.splice(list.value.findIndex((v) => v.id === id));
}
</script>

<style>
ul {
  border: 1px solid;
  width: 300px;
  min-height: 300px;
  padding: 20px;
  margin: 20px;
}
</style>
