<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const projects = [
  { id: 'slackfish-cloud', name: 'slackfish.cloud' },
  { id: 'habits-together', name: 'habits together' },
  { id: 'yt-shorts-auto-scroll', name: 'yt shorts auto scroll' },
  { id: 'slicc', name: 'slicc' },
  { id: 'new-tab', name: 'new tab' },
]
</script>

<template>
  <div class="relative max-w-140 w-full">
    <Accordion type="single" collapsible class="w-full">
      <AccordionItem
        v-for="project in projects"
        :key="project.id"
        :value="project.id"
        class="border-nav-border"
      >
        <AccordionTrigger class="text-base font-bold text-text-secondary hover:text-accent hover:no-underline">
          {{ project.name }}
        </AccordionTrigger>
        <AccordionContent class="text-text-secondary">
          wip
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>
