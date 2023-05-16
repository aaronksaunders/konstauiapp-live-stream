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
        :tabbar="true"
        :link-props="{ to: '/tabs/home' }"
        component="router-link"
      >
        <template #label> Home </template>
        <template #icon>
          <k-icon>
            <EnvelopeFill class="w-7 h-7" />
          </k-icon>
        </template>
      </k-tabbar-link>
      <k-tabbar-link
        :active="selected === 'about'"
        @click="() => setSelected('about')"
        :tabbar="true"
        :link-props="{ to: '/tabs/about' }"
        component="router-link"
      >
        <template #label> About </template>
        <template #icon>
          <k-icon>
            <Calendar class="w-7 h-7" />
          </k-icon>
        </template>
      </k-tabbar-link>
    </k-tabbar>
    <router-view name="tabs"></router-view>
  </k-page>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { kPage, kNavbar, kTabbar, kTabbarLink, kIcon } from "konsta/vue";
import { EnvelopeFill, Calendar } from "framework7-icons/vue";
import { useTabs } from "../composables/useTabs.js";

const { selected, setSelected, pageTitle } = useTabs();
</script>
