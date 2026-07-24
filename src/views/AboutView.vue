<script setup lang="ts">
import { ref } from 'vue'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'

type LichessSpeed = 'bullet' | 'blitz' | 'rapid'

interface LichessProfile {
  username: string
  perfs: Partial<Record<LichessSpeed, { rating: number }>>
  count: {
    all: number
    draw: number
    loss: number
    win: number
  }
}

const speeds: LichessSpeed[] = ['bullet', 'blitz', 'rapid']
const lichessProfile = ref<LichessProfile>()
const lichessLoading = ref(false)
const lichessError = ref(false)

async function loadLichessProfile(open: boolean) {
  if (!open || lichessProfile.value || lichessLoading.value) return

  lichessLoading.value = true
  lichessError.value = false

  try {
    const response = await fetch('https://lichess.org/api/user/blaze_kush10')
    if (!response.ok) throw new Error('Unable to load Lichess profile')
    lichessProfile.value = await response.json()
  } catch {
    lichessError.value = true
  } finally {
    lichessLoading.value = false
  }
}
</script>

<template>
  <div class="relative max-w-[560px] w-full">
    <div class="flex flex-col gap-3 text-sm leading-relaxed text-text sm:gap-5 sm:text-lg">
      <p>
        i am a software engineer with a passion for building intuitive web and mobile applications.
      </p>
      <p>
        i primarily work with <strong class="text-accent font-bold">TypeScript</strong>, <strong class="text-accent font-bold">Vuejs</strong> and <strong class="text-accent font-bold">React Native</strong>.
      </p>
      <p>
        i graduated from <strong class="text-accent font-bold">McMaster University</strong> in 2026 with a B.Sc. in computer science.
      </p>
      <p>
        i previously interned <strong class="text-accent font-bold">@Hitachi Rail</strong> in north york, ontario where i worked on automatic train supervision software.
      </p>
      <p>
        my areas of interest are web and mobile app development.
      </p>
      <p>
        my core strength lies in putting myself in the shoes of the user and creating good user experiences.
      </p>
      <p>
        i love to play
        <HoverCard @update:open="loadLichessProfile">
          <HoverCardTrigger as-child>
            <a
              class="text-accent font-bold underline decoration-accent/50 underline-offset-4 transition-colors hover:decoration-accent"
              href="https://lichess.org/@/blaze_kush10"
              target="_blank"
              rel="noopener noreferrer"
            >chess</a>
          </HoverCardTrigger>
          <HoverCardContent
            side="top"
            :side-offset="8"
            class="w-72 border-nav-border bg-bg text-sm text-text shadow-lg"
          >
            <div class="flex items-center justify-between border-b border-nav-border pb-3">
              <div>
                <p class="font-bold text-text">@blaze_kush10</p>
                <p class="text-xs text-text-secondary">lichess.org</p>
              </div>
            </div>

            <p v-if="lichessLoading" class="py-4 text-center text-text-secondary">
              loading profile...
            </p>
            <p v-else-if="lichessError" class="py-4 text-center text-text-secondary">
              profile preview unavailable
            </p>
            <template v-else-if="lichessProfile">
              <div class="grid grid-cols-3 gap-2 py-4 text-center">
                <div v-for="speed in speeds" :key="speed">
                  <p class="font-bold text-text">
                    {{ lichessProfile.perfs[speed]?.rating ?? '-' }}
                  </p>
                  <p class="text-xs text-text-secondary">{{ speed }}</p>
                </div>
              </div>
              <div class="flex justify-between border-t border-nav-border pt-3 text-xs text-text-secondary">
                <span>{{ lichessProfile.count.all }} games</span>
                <span>{{ lichessProfile.count.win }}W</span>
                <span>{{ lichessProfile.count.draw }}D</span>
                <span>{{ lichessProfile.count.loss }}L</span>
              </div>
            </template>
          </HoverCardContent>
        </HoverCard>
      </p>
    </div>
  </div>
</template>
