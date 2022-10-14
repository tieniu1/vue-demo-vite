<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Todo</RouterLink>
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>
<script setup>
import { RouterLink, RouterView, useRouter } from "vue-router";
let router = useRouter();
console.log(router);
</script>
<style scoped></style>
