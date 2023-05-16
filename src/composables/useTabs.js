import { computed, onMounted, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
const selectedTabRef = ref("home");
const pageTitleRef = ref("home");

const router = useRouter();

export const useTabs = () => {
  const setSelected = (tab) => {
    selectedTabRef.value = tab;
  };


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
