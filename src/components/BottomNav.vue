<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <nav class="fixed bottom-0 left-0 right-0 z-10" aria-label="Primary">
    <div class="relative flex items-stretch border-t border-nav-border bg-nav-bg backdrop-blur-xl">
      <router-link
        to="/work"
        class="flex flex-1 items-center justify-center py-4 pl-8 pr-4 text-[0.95rem] font-medium tracking-wide text-text-secondary transition-colors hover:text-accent"
        :class="{ '!text-accent !font-bold': route.name === 'work' }"
      >
        projects
      </router-link>

      <div
        class="w-px shrink-0 self-stretch bg-nav-border"
        aria-hidden="true"
      />

      <router-link
        to="/about"
        class="flex flex-1 items-center justify-center py-4 pl-4 pr-8 text-[0.95rem] font-medium tracking-wide text-text-secondary transition-colors hover:text-accent"
        :class="{ '!text-accent !font-bold': route.name === 'about' }"
      >
        whoami
      </router-link>

      <router-link
        to="/"
        class="absolute left-1/2 top-0 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-nav-border bg-bg text-text-secondary transition-colors hover:border-accent hover:text-accent hover:scale-105"
        :class="{ '!border-accent !text-accent': route.name === 'home' }"
        aria-label="Home"
      >
        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V10.5Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linejoin="round"
          />
        </svg>
      </router-link>
    </div>
  </nav>
</template>
