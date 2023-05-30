<template>
  <MyNav />
  <router-view />
</template>
<script setup>
import MyNav from "@/components/MyNav.vue";
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #000000;
  color: #f6f1f1;
}
</style>
