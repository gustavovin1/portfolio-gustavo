<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowUp } from 'lucide-vue-next'

const visible = ref(false)
const update = () => { visible.value = window.scrollY > 560 }

onMounted(() => window.addEventListener('scroll', update, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', update))
</script>

<template>
  <a v-if="visible" class="back-to-top icon-button" href="#inicio" aria-label="Voltar ao topo">
    <ArrowUp :size="17" aria-hidden="true" />
  </a>
</template>
