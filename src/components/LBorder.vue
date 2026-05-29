<template>
  <div class="l-border" aria-hidden="true">
    <div class="l-border__vertical"></div>
    <div class="l-border__horizontal"></div>
  </div>
</template>

<style scoped>
.l-border {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.l-border__vertical {
  position: absolute;
  left: 1.5rem;
  top: 1.5rem;
  bottom: 4.5rem;
  width: 3px;
  background-color: var(--accent);
  border-radius: 2px;
}

.l-border__horizontal {
  position: absolute;
  left: 1.5rem;
  bottom: 4.5rem;
  width: 40%;
  height: 3px;
  background-color: var(--accent);
  border-radius: 2px;
}
</style>
