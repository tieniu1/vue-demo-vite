<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink
          v-for="route in allRoutes"
          :key="route.path"
          :to="route.path"
          ><button style="margin: 0 5px">{{ route.name }}</button></RouterLink
        >
      </nav>
    </div>
  </header>
  <RouterView />
</template>
<script setup>
import { RouterLink, RouterView, useRouter } from "vue-router";
let router = useRouter();
let allRoutes = router.options.routes;
</script>
<style scoped></style>
