<script setup lang="ts">
import BottomNav from './components/BottomNav.vue'
import LBorder from './components/LBorder.vue'
</script>

<template>
  <div class="relative flex flex-col min-h-dvh overflow-hidden bg-bg text-text font-ubuntu antialiased">
    <LBorder />
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
a {
  color: inherit;
  text-decoration: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
