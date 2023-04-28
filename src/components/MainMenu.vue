<template>
  <k-panel side="left" :opened="menuOpen" @backdropclick="() => toggleMenu()">
    <k-page>
      <k-navbar title="Left Panel">
        <template #right>
          <k-link navbar @click="() => toggleMenu()"> Close </k-link>
        </template>
      </k-navbar>

      <k-block>
        <k-menu-list>
          <k-menu-list-item
            title="Home"
            :active="selected === 'home'"
            @click="() => setSelected('home', true)"
          >
            <template #media> </template>
          </k-menu-list-item>

          <k-menu-list-item
            title="About"
            :active="selected === 'about'"
            @click="() => setSelected('about', true)"
          >
            <template #media> </template>
          </k-menu-list-item>
        </k-menu-list>
      </k-block>
    </k-page>
  </k-panel>
</template>
<script setup>
import { useMainMenu } from "../composables/useMainMenu";
import {
  kApp,
  kPage,
  kNavbar,
  kPanel,
  kLink,
  kMenuList,
  kMenuListItem,
  kBlock
} from "konsta/vue";

const { menuOpen, toggleMenu, selected, setSelected } = useMainMenu();
</script>
