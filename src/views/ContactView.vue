<script setup lang="ts">
import { ref } from 'vue'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'

interface GitHubProfile {
  avatar_url: string
  bio: string | null
  followers: number
  following: number
  public_repos: number
}

const githubProfile = ref<GitHubProfile>()
const githubLoading = ref(false)
const githubError = ref(false)

async function loadGitHubProfile(open: boolean) {
  if (!open || githubProfile.value || githubLoading.value) return

  githubLoading.value = true
  githubError.value = false

  try {
    const response = await fetch('https://api.github.com/users/AnkushSarkar10')
    if (!response.ok) throw new Error('Unable to load GitHub profile')
    githubProfile.value = await response.json()
  } catch {
    githubError.value = true
  } finally {
    githubLoading.value = false
  }
}
</script>

<template>
  <div class="relative flex w-full max-w-[560px] flex-col items-start gap-5 text-left">
    <a
      href="mailto:ankush.sarkar2002@gmail.com"
      class="group flex w-full flex-col items-start gap-1 border-b border-nav-border py-4 text-left text-lg text-text-secondary transition-colors hover:border-accent hover:text-accent"
    >
      <span>email</span>
      <span class="font-bold text-accent">ankush.sarkar2002@gmail.com</span>
    </a>
    <a
      href="https://calendly.com/ankush-sarkar2002/15min"
      target="_blank"
      rel="noopener noreferrer"
      class="group flex w-full flex-col items-start gap-1 border-b border-nav-border py-4 text-left text-lg text-text-secondary transition-colors hover:border-accent hover:text-accent"
    >
      <span>15 min call</span>
      <span class="font-bold text-accent">calendly</span>
    </a>
    <div class="flex gap-4 text-sm text-text-secondary">
      <HoverCard>
        <HoverCardTrigger as-child>
          <a
            href="https://x.com/TheBlazeGuy10"
            target="_blank"
            rel="noopener noreferrer"
            class="font-bold text-text-secondary underline decoration-text-secondary/40 underline-offset-4 transition-colors hover:text-accent"
          >
            twitter
          </a>
        </HoverCardTrigger>
        <HoverCardContent side="bottom" :side-offset="8" class="w-72 border-nav-border bg-bg text-sm text-text shadow-lg">
          <div class="flex gap-3">
            <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-text text-lg font-bold text-bg">
              X
            </div>
            <div class="min-w-0">
              <p class="font-bold text-text">ankush sarkar</p>
              <p class="text-xs text-text-secondary">@TheBlazeGuy10</p>
            </div>
          </div>
          <p class="mt-3 text-sm leading-relaxed text-text">
            frontend developer | cs @mcmasteru
          </p>
          <div class="mt-3 flex justify-between border-t border-nav-border pt-3 text-xs text-text-secondary">
            <span>canada</span>
            <span class="font-bold text-accent">ankushsarkar.dev</span>
          </div>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger as-child>
          <a
            href="https://www.linkedin.com/in/ankush-sarkar-a55a5b213/"
            target="_blank"
            rel="noopener noreferrer"
            class="font-bold text-text-secondary underline decoration-text-secondary/40 underline-offset-4 transition-colors hover:text-accent"
          >
            linkedin
          </a>
        </HoverCardTrigger>
        <HoverCardContent side="bottom" :side-offset="8" class="w-72 border-nav-border bg-bg text-sm text-text shadow-lg">
          <div class="flex gap-3">
            <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#0a66c2] text-base font-bold text-white">
              in
            </div>
            <div class="min-w-0">
              <p class="font-bold text-text">Ankush Sarkar</p>
              <p class="text-xs text-text-secondary">linkedin.com/in/ankush-sarkar</p>
            </div>
          </div>
          <p class="mt-3 text-sm leading-relaxed text-text">frontend engineer, prev intern @HitachiRail</p>
          <div class="mt-3 border-t border-nav-border pt-3 text-xs text-text-secondary">
            McMaster University, Computer Science
          </div>
        </HoverCardContent>
      </HoverCard>

      <HoverCard @update:open="loadGitHubProfile">
        <HoverCardTrigger as-child>
          <a
            href="https://github.com/AnkushSarkar10"
            target="_blank"
            rel="noopener noreferrer"
            class="font-bold text-text-secondary underline decoration-text-secondary/40 underline-offset-4 transition-colors hover:text-accent"
          >
            github
          </a>
        </HoverCardTrigger>
        <HoverCardContent side="bottom" :side-offset="8" class="w-72 border-nav-border bg-bg text-sm text-text shadow-lg">
          <p v-if="githubLoading" class="py-4 text-center text-text-secondary">
            loading profile...
          </p>
          <p v-else-if="githubError" class="py-4 text-center text-text-secondary">
            profile preview unavailable
          </p>
          <template v-else-if="githubProfile">
            <div class="flex gap-3">
              <img
                :src="githubProfile.avatar_url"
                alt="Ankush Sarkar's GitHub avatar"
                class="h-11 w-11 shrink-0 rounded-full border border-nav-border"
              >
              <div class="min-w-0">
                <p class="font-bold text-text">ankush sarkar</p>
                <p class="text-xs text-text-secondary">@AnkushSarkar10</p>
              </div>
            </div>
            <p class="mt-3 text-sm leading-relaxed text-text">
              {{ githubProfile.bio || 'frontend developer' }}
            </p>
            <div class="mt-3 flex justify-between border-t border-nav-border pt-3 text-xs text-text-secondary">
              <span>{{ githubProfile.public_repos }} repositories</span>
              <span>{{ githubProfile.followers }} followers</span>
              <span>{{ githubProfile.following }} following</span>
            </div>
          </template>
        </HoverCardContent>
      </HoverCard>
    </div>
  </div>
</template>
