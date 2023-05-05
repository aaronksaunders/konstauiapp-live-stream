import { computed, onMounted, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
const selectedTabRef = ref("home");
const pageTitleRef = ref("home");

const router = useRouter();

export const useTabs = () => {
  const setSelected = (tab) => {
    selectedTabRef.value = tab;
  };

  const matchedRoute = computed(() => {
    debugger
    return router?.currentRoute?.value?.matched.find(route => route.name === 'tabs')
  })

  onMounted(() => {
    if (matchedRoute.value) {
      console.log(matchedRoute.value.components.default.name) // Output: "View1Component"
    }
  })

  watch(
    () => selectedTabRef.value,
    (newValue, oldValue) => {
      if (selectedTabRef.value === "home") {
        pageTitleRef.value = "Home";
      } else if (selectedTabRef.value === "about") {
        pageTitleRef.value = "About";
      }
    }
  );

  return {
    // props
    selected: selectedTabRef,
    pageTitle: pageTitleRef,
    // methods
    setSelected,
  };
};
