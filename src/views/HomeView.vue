<script setup>
import { kApp, kPage, kNavbar, kBlock, kLink, kButton } from "konsta/vue";
import { useMainMenu } from "../composables/useMainMenu";
import { useRouter } from "vue-router";
import { onMounted, computed} from 'vue'

const router = useRouter();


const matchedRoute = computed(() => {
    debugger
    return router?.currentRoute?.value?.matched.find(route => route.name === 'tabs')
  })

  onMounted(() => {
    if (matchedRoute.value) {
      console.log(matchedRoute.value.components.default.name) // Output: "View1Component"
    }
  })
</script>

<template>
  <!-- <k-page> -->
    <!-- <k-navbar title="My App">
      <template #left>
        <k-link navbar @click="() => toggleMenu()"> Menu </k-link>
      </template>
    </k-navbar> -->
    <div class="p-8" >
      <div class="text-2xl m-2">Here comes my app</div>
      <k-button class="!w-32" @click="router.push('/tabs/home-detail')"
        >Button</k-button
      >
    </div>
  <!-- </k-page> -->
</template>
