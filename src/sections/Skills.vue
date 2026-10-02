<script setup>
import { Code2, PanelsTopLeft, Server, Wrench, Sparkles } from 'lucide-vue-next'
import { skillGroups } from '../data/skills'

const icons = { backend: Code2, frontend: PanelsTopLeft, infrastructure: Server, tools: Wrench, ai: Sparkles }
</script>

<template>
  <section id="skills" class="section section-skills section-anchor">
    <div class="container">
      <div class="section-heading section-heading-row reveal">
        <div><p class="section-label"><span>02</span> / STACK</p><h2>Ferramentas para<br /><em>fazer acontecer.</em></h2></div>
        <p class="section-aside">Tecnologias que uso para investigar, construir e manter software no dia a dia.</p>
      </div>
      <div class="skills-grid">
        <article v-for="(group, index) in skillGroups" :key="group.id" class="skill-card reveal" :class="[`skill-card-${group.id}`, { 'reveal-delay-1': index % 2 }]">
          <div class="skill-card-top">
            <span class="skill-number">{{ group.number }}</span>
            <component :is="icons[group.id]" :size="18" stroke-width="1.6" aria-hidden="true" />
          </div>
          <h3>{{ group.title }}</h3>
          <p>{{ group.summary }}</p>
          <ul class="skill-badges" :aria-label="`Tecnologias de ${group.title}`">
            <li v-for="skill in group.skills" :key="skill">{{ skill }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
