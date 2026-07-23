<template>
  <div class="flex flex-col items-center justify-center">
    <h1 class="whitespace-nowrap text-center font-black-ops-one text-[clamp(2.25rem,7vw,10rem)] leading-none tracking-normal text-accent select-none">
      Ankush Sarkar
    </h1>
    <p class="font-lobster-two pt-0 text-4xl leading-tight tracking-normal text-[#888888] md:text-5xl">
      frontend developer
    </p>
    <div class="flex flex-wrap justify-center gap-3 pt-5">
      <router-link
        to="/contact"
        class="inline-flex w-36 items-center justify-center gap-2 rounded-lg border border-nav-border px-4 py-2.5 text-base font-medium tracking-wide text-text-secondary transition-colors hover:border-accent hover:bg-accent/10 hover:text-accent"
      >
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M20 11.5a7.5 7.5 0 0 1-8 7.48 8.8 8.8 0 0 1-3.35-.75L4 20l1.43-3.8A7.25 7.25 0 0 1 4 11.5a8 8 0 0 1 16 0Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        connect
      </router-link>
      <button
        type="button"
        class="inline-flex w-36 items-center justify-center gap-2 rounded-lg border border-nav-border px-4 py-2.5 text-base font-medium tracking-wide text-text-secondary transition-colors hover:border-accent hover:bg-accent/10 hover:text-accent"
      >
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        resume
      </button>
    </div>
  </div>
</template>
