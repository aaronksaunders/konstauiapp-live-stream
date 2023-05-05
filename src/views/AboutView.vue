<script setup>
import { kApp, kPage, kNavbar, kBlock, kLink } from "konsta/vue";
import { onMounted, computed} from 'vue'
import { useRouter } from "vue-router";

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
