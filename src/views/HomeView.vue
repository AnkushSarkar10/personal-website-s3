<template>
  <div class="flex flex-col items-center justify-center">
    <h1 class="font-black-ops-one text-[clamp(4.5rem,7vw,10rem)] leading-none tracking-normal text-accent select-none">
      Ankush
    </h1>
    <p class="font-ephesis pt-0 text-4xl leading-tight tracking-normal text-[#888888] md:text-5xl">
      software developer
    </p>
    <div class="hidden pt-5 md:block">
      <router-link
        to="/blog"
        class="inline-block px-7 py-2.5 text-base font-medium tracking-wide text-text-secondary border border-nav-border rounded-lg hover:text-accent hover:border-accent hover:bg-accent/10 transition-colors"
      >
        my blogs
      </router-link>
    </div>
  </div>
</template>
