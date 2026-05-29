<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <nav class="fixed bottom-0 left-0 right-0 flex bg-nav-bg backdrop-blur-xl border-t border-nav-border z-10">
    <router-link
      to="/about"
      class="flex-1 text-center py-4 px-8 text-[0.95rem] font-medium tracking-wide text-text-secondary border-r border-nav-border transition-all duration-200 hover:text-accent hover:scale-105"
      :class="{ '!text-accent !font-bold': route.name === 'about' }"
    >
      about
    </router-link>
    <router-link
      to="/work"
      class="flex-1 text-center py-4 px-8 text-[0.95rem] font-medium tracking-wide text-text-secondary transition-all duration-200 hover:text-accent hover:scale-105"
      :class="{ '!text-accent !font-bold': route.name === 'work' }"
    >
      work
    </router-link>
  </nav>
</template>
