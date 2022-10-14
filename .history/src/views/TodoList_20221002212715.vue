<template>
  <div>
    <nav>
      <input type="text" :value="message" @keyup.enter="handleAdd" />
      <button @click="handleAdd">添加</button>
    </nav>
    <ul>
      <li v-for="item in list" :key="item.id" @click="handleCheckItem(item)">
        {{ item.message }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
let list = ref([]);
let message = ref("");

function handleAdd() {
  console.log(132);
  list.value.push({
    id: Math.random() * 1000,
    message: message,
  });
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
