<template>
  <ul>
    <li v-for="route in router.options.routes" :key="route.name">
      <router-link :to="{ name: route.name }">{{
        route.meta.title
      }}</router-link>
    </li>
  </ul>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<style scoped lang="scss">
ul {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #19a7ce;
  li {
    padding: 10px 15px;
    background-color: #19a7ce;
    a {
      display: block;
      color: #f6f1f1;
      text-decoration: none;
      opacity: 0.5;
      transition: 0.3s;
      background-color: #19a7ce;
      &.router-link-active {
        opacity: 1;
      }
    }
  }
}
</style>
