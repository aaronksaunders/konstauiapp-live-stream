<script setup>
import { kApp, kPage, kNavbar, kBlock, kNavbarBackLink } from "konsta/vue";
import { useMainMenu } from "../composables/useMainMenu";
import { useRouter } from "vue-router";
const { toggleMenu } = useMainMenu();
const router = useRouter();

</script>

<template>
  <k-page>
    <k-navbar title="My App : Detail">
      <template #left>
        <k-navbar-back-link text="Back" @click="() => router.back()" />
        </template>
    </k-navbar>
    <k-block>
      <p>Here comes my app</p>
    </k-block>
  </k-page>
</template>
