import { ref } from "vue";
import { useRouter } from "vue-router";
const menuOpenRef = ref(false);
const selectedRef = ref("home");

export const useMainMenu = () => {
  const router = useRouter();

  /**
   * toggle menu state
   */
  const toggleMenu = () => {
    menuOpenRef.value = !menuOpenRef.value;
  };

  /**
   * sets the selected menuitem and optionally closes the
   * menu
   * 
   * @param selected 
   * @param closeMenu 
   */
  const setSelected = (selected, closeMenu = true) => {
    selectedRef.value = selected;
    closeMenu && (menuOpenRef.value = false);
    router.replace(`/${selected}`);
  };
  return {
    // props
    menuOpen: menuOpenRef,
    selected: selectedRef,
    // methods
    toggleMenu,
    setSelected,
  };
};