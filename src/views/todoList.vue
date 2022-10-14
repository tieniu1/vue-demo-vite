<template>
  <div>
    <nav>
      <input type="text" v-model="message" @keyup.enter="handleAdd" />
      <button @click="handleAdd">添加</button>
    </nav>
    <ul>
      <li v-for="item in list" :key="item.id">
        {{ item.message }}
        <button @click="handleRemove">删除</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useToDoList } from "../hook/useTodoList";
import { useTitle } from "../hook/useTitle";
const { handleAdd, handleRemove, list, message } = useToDoList();
const { title } = useTitle();
title.value = "测试";
</script>

<style>
ul {
  border: 1px solid;
  width: 300px;
  min-height: 300px;
  padding: 20px;
  margin: 20px;
}
li {
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
}
</style>
