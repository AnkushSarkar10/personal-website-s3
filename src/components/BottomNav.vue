<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <nav class="bottom-nav">
    <router-link to="/about" class="nav-link" :class="{ active: route.name === 'about' }">
      about
    </router-link>
    <router-link to="/work" class="nav-link" :class="{ active: route.name === 'work' }">
      work
    </router-link>
  </nav>
</template>

<style scoped>
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 0;
  background: var(--nav-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-top: 1px solid var(--nav-border);
  z-index: 10;
}

.nav-link {
  flex: 1;
  text-align: center;
  padding: 1rem 2rem;
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: var(--text-secondary);
  transition: color 0.2s ease, transform 0.2s ease;
  border-right: 1px solid var(--nav-border);
}

.nav-link:last-child {
  border-right: none;
}

.nav-link:hover {
  color: var(--accent);
  transform: scale(1.05);
}

.nav-link.active {
  color: var(--accent);
  font-weight: 700;
}
</style>
