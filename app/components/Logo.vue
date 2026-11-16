<script setup lang="ts">
const props = defineProps<{ src?: string; initials: string; dark?: boolean; photo?: boolean; wide?: boolean; xwide?: boolean }>()
const asset = useAsset()
const src = computed(() => (props.src ? asset(props.src) : ''))
</script>

<template>
  <span class="logo" :class="{ dark, photo, wide, xwide }">
    <img v-if="src" :src="src" alt="">
    <span v-else>{{ initials }}</span>
  </span>
</template>
