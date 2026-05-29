<template>
  <div class="home">
    <h1 class="logo">
      Kush<span class="dot">.</span>
    </h1>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  font-size: clamp(3rem, 10vw, 6rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--text);
  user-select: none;
}

.dot {
  display: inline-block;
  color: var(--accent);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(1.3);
  }
}
</style>
