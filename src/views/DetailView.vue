<script setup>
import { kApp, kPage, kNavbar, kBlock, kNavbarBackLink } from "konsta/vue";
import { useMainMenu } from "../composables/useMainMenu";
import { useRouter } from "vue-router";
import { useTabs } from "../composables/useTabs";

//
const { toggleMenu } = useMainMenu();
const { selected } = useTabs()
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
      <p>Selected Tab: {{ selected  }}</p>
    </k-block>
  </k-page>
</template>
