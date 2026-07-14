<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BottomNav from './components/BottomNav.vue'
import AnimBorder from './components/AnimBorder.vue'

const route = useRoute()
const showHomeLink = computed(() => ['about', 'work', 'contact', 'blog'].includes(String(route.name)))
</script>

<template>
  <div class="relative flex flex-col min-h-dvh overflow-hidden bg-bg text-text font-aldrich antialiased">
    <!-- <AnimBorder /> -->

    <router-link
      v-if="showHomeLink"
      to="/"
      class="fixed top-5 left-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-nav-border text-text-secondary transition-colors hover:border-accent hover:text-accent"
      aria-label="Home"
    >
      <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V10.5Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linejoin="round"
        />
      </svg>
    </router-link>

    <div
      v-if="route.name === 'home'"
      class="fixed top-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 text-text-secondary"
      aria-label="Social links"
    >
      <a
        href="https://github.com/AnkushSarkar10"
        target="_blank"
        rel="noopener noreferrer"
        class="flex h-12 w-12 items-center justify-center rounded-full border border-nav-border transition-colors hover:border-accent hover:text-accent"
        aria-label="GitHub"
      >
        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
        </svg>
      </a>
      <a
        href="https://x.com/TheBlazeGuy10"
        target="_blank"
        rel="noopener noreferrer"
        class="flex h-12 w-12 items-center justify-center rounded-full border border-nav-border transition-colors hover:border-accent hover:text-accent"
        aria-label="X"
      >
        <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.963 6.817H1.684l7.73-8.835L1.254 2.25h6.826l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/ankush-sarkar-a55a5b213/"
        target="_blank"
        rel="noopener noreferrer"
        class="flex h-12 w-12 items-center justify-center rounded-full border border-nav-border transition-colors hover:border-accent hover:text-accent"
        aria-label="LinkedIn"
      >
        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.94v5.666H9.351V9h3.414v1.561h.047c.476-.9 1.637-1.852 3.369-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288ZM5.337 7.433a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126Zm1.777 13.019H3.558V9h3.556v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
        </svg>
      </a>
    </div>

    <main class="flex-1 flex items-center justify-center p-8 pb-20">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <BottomNav />
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
