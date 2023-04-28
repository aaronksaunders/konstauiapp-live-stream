<script setup>
import { kApp, kPage, kNavbar, kBlock, kLink, kButton } from "konsta/vue";
import { useMainMenu } from "../composables/useMainMenu";
import { useRouter } from "vue-router";
const { toggleMenu } = useMainMenu();
const router = useRouter();
</script>

<template>
  <k-page>
    <k-navbar title="My App">
      <template #left>
        <k-link navbar @click="() => toggleMenu()"> Menu </k-link>
      </template>
    </k-navbar>
    <k-block class="p-8" >
      <div class="text-2xl m-2">Here comes my app</div>
      <k-button class="!w-32" @click="router.push('/detail')"
        >Button</k-button
      >
    </k-block>
  </k-page>
</template>
