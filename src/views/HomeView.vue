<template>
  <div class="flex flex-col items-center justify-center">
    <img
      src="@/assets/@.png"
      alt=""
      class="hidden md:block w-16 h-16 object-contain"
    />
    <h1 class="text-[clamp(3rem,3vw,6rem)] font-bold -tracking-wide text-text select-none">
      ankush<span class="inline-block text-accent animate-pulse">&nbsp;.</span>
    </h1>
    <router-link
      to="/blog"
      class="hidden md:inline-block mt-4 px-6 py-2 text-sm font-medium tracking-wide text-text-secondary border border-nav-border rounded-lg hover:text-accent hover:border-accent hover:bg-accent/10 transition-colors"
    >
      blog
    </router-link>
  </div>
</template>
