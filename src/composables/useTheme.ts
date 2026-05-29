import { ref, watchEffect } from 'vue'

type Theme = 'light' | 'dark'

const theme = ref<Theme>(
  (localStorage.getItem('theme') as Theme) ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
)

watchEffect(() => {
  const root = document.documentElement
  root.classList.toggle('dark', theme.value === 'dark')
  root.classList.toggle('light', theme.value === 'light')
  localStorage.setItem('theme', theme.value)
})

export function useTheme() {
  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }
  // remove
  // theme.value = 'light';
  // theme.value = 'dark';

  return { theme, toggleTheme }
}
