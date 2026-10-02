<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { TerminalSquare } from 'lucide-vue-next'

const commands = [
  { command: 'whoami', output: ['gustavo-cristofolini'] },
  { command: 'cat stack.txt', output: ['PHP  /  Laravel  /  Vue.js', 'Linux  /  MySQL  /  Git'] },
  { command: 'status', output: ['available_for_work'] },
]
const visible = ref([])
let cancelled = false
const wait = (duration) => new Promise((resolve) => window.setTimeout(resolve, duration))

onMounted(async () => {
  for (const item of commands) {
    if (cancelled) return
    visible.value.push({ command: '', output: [] })
    const current = visible.value[visible.value.length - 1]
    for (const character of item.command) {
      if (cancelled) return
      current.command += character
      await wait(22)
    }
    await wait(100)
    current.output = item.output
    await wait(170)
  }
})

onUnmounted(() => { cancelled = true })
</script>

<template>
  <div class="terminal-window" aria-label="Terminal com informações do perfil">
    <div class="terminal-titlebar">
      <div class="window-controls" aria-hidden="true"><i></i><i></i><i></i></div>
      <div class="terminal-title"><TerminalSquare :size="13" aria-hidden="true" /> profile.sh</div>
      <span class="terminal-live"><span></span> online</span>
    </div>
    <div class="terminal-body" aria-live="off">
      <div v-for="(line, index) in visible" :key="index" class="terminal-command">
        <div class="terminal-input"><span class="prompt">$</span><span>{{ line.command }}</span><i v-if="index === visible.length - 1 && !line.output.length" class="cursor"></i></div>
        <div v-for="output in line.output" :key="output" class="terminal-output">{{ output }}</div>
      </div>
      <div v-if="visible.length === commands.length && visible.at(-1)?.output.length" class="terminal-input terminal-final"><span class="prompt">$</span><i class="cursor"></i></div>
    </div>
  </div>
</template>
