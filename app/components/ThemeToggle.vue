<script setup lang="ts">
type Mode = 'auto' | 'light' | 'dark'

const mode = ref<Mode>('auto')

const apply = (value: Mode) => {
  mode.value = value
  const root = document.documentElement
  if (value === 'auto') root.removeAttribute('data-theme')
  else root.setAttribute('data-theme', value)
  try {
    if (value === 'auto') localStorage.removeItem('theme')
    else localStorage.setItem('theme', value)
  } catch {}
}

onMounted(() => {
  try {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') mode.value = saved
  } catch {}
})

const options: { id: Mode; label: string }[] = [
  { id: 'auto', label: 'Auto' },
  { id: 'light', label: 'Claro' },
  { id: 'dark', label: 'Escuro' }
]
</script>

<template>
  <div class="theme" role="group" aria-label="Tema">
    <button v-for="o in options" :key="o.id" :aria-pressed="mode === o.id" @click="apply(o.id)">{{ o.label }}</button>
  </div>
</template>
