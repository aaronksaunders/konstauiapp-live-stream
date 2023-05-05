<template>
  <k-page>
    <k-navbar :title="pageTitle" />

    <k-tabbar
      :labels="isTabbarLabels"
      :icons="isTabbarIcons"
      class="left-0 bottom-0 fixed"
    >
      <k-tabbar-link
        :active="selected === 'home'"
        @click="() => setSelected('home')"
      >
        <template v-if="isTabbarLabels" #label> Home </template>
        <template v-if="isTabbarIcons" #icon>
          <k-icon>
            <template>
              <EnvelopeFill class="w-7 h-7" />
            </template>
          </k-icon>
        </template>
      </k-tabbar-link>
      <k-tabbar-link
        :active="selected === 'about'"
        @click="() => setSelected('about')"
      >
        <template v-if="isTabbarLabels" #label> About </template>
        <template v-if="isTabbarIcons" #icon>
          <k-icon>
            <template>
              <Calendar class="w-7 h-7" />
            </template>
          </k-icon>
        </template>
      </k-tabbar-link>
    </k-tabbar>
    <template v-if="selected === 'home'">
      <home-view />
    </template>
    <template v-if="selected === 'about'">
      <about-view />
    </template>
  </k-page>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import {
  kPage,
  kNavbar,
  kNavbarBackLink,
  kTabbar,
  kTabbarLink,
  kBlock,
  kIcon,
  kList,
  kListItem,
  kToggle,
} from "konsta/vue";
import { EnvelopeFill, Calendar } from "framework7-icons/vue";
import AboutView from "./AboutView.vue";
import HomeView from "./HomeView.vue";
import { useTabs } from "../composables/useTabs.js";

const { selected, setSelected, pageTitle } = useTabs();



const isTabbarLabels = ref(true);
const isTabbarIcons = ref(true);
</script>
