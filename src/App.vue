<script setup>
import { RouterLink, RouterView } from "vue-router";
import { kApp, kProvider, kNavbar, kBlock } from "konsta/vue";
import MainMenu from "./components/MainMenu.vue";
import './index.css'
</script>

<template>
  <k-provider>
    <k-app  theme="ios" safe-area >
      <main-menu></main-menu>
      <RouterView  />
    </k-app>
  </k-provider>
</template>

<style scoped></style>
