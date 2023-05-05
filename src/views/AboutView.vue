<script setup>
import { kApp, kPage, kNavbar, kBlock, kLink } from "konsta/vue";
import { useMainMenu } from "../composables/useMainMenu";
const { toggleMenu } = useMainMenu();
</script>

<template>
    <!-- <k-navbar title="My App : About">
      <template #left>
          <k-link navbar @click="() => toggleMenu()">
            Menu
          </k-link>
        </template>
    </k-navbar> -->
    <k-block>
      <p>This is the acout page</p>
    </k-block>
</template>
