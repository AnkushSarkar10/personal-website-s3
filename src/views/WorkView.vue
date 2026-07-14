<template>
  <div class="relative max-w-[560px] w-full">
    <div class="flex flex-col gap-5">
      <router-link
        to="/wip"
        class="border-b border-nav-border py-4 text-base text-text-secondary transition-colors hover:border-accent hover:text-accent"
      >
        <span class="font-bold">new tab</span>
        <span class="ml-2 text-xs">(browser extension)</span>
      </router-link>
      <router-link
        to="/wip"
        class="border-b border-nav-border py-4 text-base text-text-secondary transition-colors hover:border-accent hover:text-accent"
      >
        <span class="font-bold">yt shorts auto scroll</span>
        <span class="ml-2 text-xs">(browser extension)</span>
      </router-link>
      <router-link
        to="/wip"
        class="border-b border-nav-border py-4 text-base font-bold text-text-secondary transition-colors hover:border-accent hover:text-accent"
      >
        slackfish.cloud
      </router-link>
    </div>
  </div>
</template>
