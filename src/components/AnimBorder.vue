<template>
  <div class="fixed inset-0 bottom-14 pointer-events-none z-1" aria-hidden="true">
    <svg class="w-full h-full overflow-visible" preserveAspectRatio="none">
      <rect
        x="1.5"
        y="1.5"
        rx="0"
        ry="0"
        width="calc(100% - 3px)"
        height="calc(100% - 3px)"
        class="anim-border-rect"
        pathLength="100"
      />
    </svg>
  </div>
</template>

<style>
.anim-border-rect {
  fill: none;
  stroke: var(--color-accent);
  stroke-width: 3;
  stroke-linecap: round;
  stroke-dasharray: 20 13.33;
  animation: border-orbit 25s linear infinite;
}

@keyframes border-orbit {
  to {
    stroke-dashoffset: -100;
  }
}
</style>
