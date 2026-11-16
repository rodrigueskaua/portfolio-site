<script setup lang="ts">
import { profile } from '~/data/content'

const sections = [
  { id: 'resumo', label: 'Sobre' },
  { id: 'timeline', label: 'Linha do tempo' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'formacao', label: 'Formação' },
  { id: 'contato', label: 'Contato' }
]

const active = ref('resumo')
const items = ref<Record<string, HTMLElement>>({})
const bar = reactive({ top: 0, height: 0, ready: false })

const setItem = (id: string, el: unknown) => {
  if (el instanceof HTMLElement) items.value[id] = el
}

const moveBar = () => {
  const el = items.value[active.value]
  if (!el) return
  bar.top = el.offsetTop
  bar.height = el.offsetHeight
  bar.ready = true
}

let frame = 0

const spy = () => {
  const line = window.innerHeight * 0.35
  let current = sections[0]!.id
  for (const s of sections) {
    const el = document.getElementById(s.id)
    if (el && el.getBoundingClientRect().top <= line) current = s.id
  }
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
  if (atBottom) current = sections[sections.length - 1]!.id
  active.value = current
}

const onScroll = () => {
  if (frame) return
  frame = requestAnimationFrame(() => {
    frame = 0
    spy()
  })
}

watch(active, () => nextTick(moveBar))

onMounted(() => {
  spy()
  nextTick(moveBar)
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', moveBar)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', moveBar)
  if (frame) cancelAnimationFrame(frame)
})
</script>

<template>
  <a class="skip" href="#conteudo">Ir para o conteúdo</a>
  <div class="shell">
    <aside class="side">
      <nav class="toc" aria-label="Seções">
        <span class="toc-bar" :class="{ ready: bar.ready }" :style="{ transform: `translateY(${bar.top}px)`, height: `${bar.height}px` }" />
        <a
          v-for="s in sections"
          :key="s.id"
          :ref="(el) => setItem(s.id, el)"
          :href="`#${s.id}`"
          :class="{ on: active === s.id }"
          :aria-current="active === s.id ? 'true' : undefined"
        >{{ s.label }}</a>
      </nav>
      <div class="side-foot">
        <ThemeToggle />
        <div class="social">
          <a :href="profile.github">GitHub</a>
          <a :href="profile.linkedin">LinkedIn</a>
          <a :href="`mailto:${profile.email}`">E-mail</a>
        </div>
      </div>
    </aside>

    <div class="col">
      <div class="mobile-bar">
        <a href="#resumo" class="name">Kauã Rodrigues</a>
        <nav>
          <a href="#projetos">Projetos</a>
          <a :href="profile.cv" download>CV</a>
        </nav>
      </div>
      <NuxtPage />
    </div>
  </div>
</template>
