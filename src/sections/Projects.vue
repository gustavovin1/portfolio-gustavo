<script setup>
import { ArrowUpRight } from 'lucide-vue-next'
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data/projects'
</script>

<template>
  <section id="projetos" class="section section-projects section-anchor">
    <div class="container">
      <div class="section-heading section-heading-row reveal">
        <div><p class="section-label"><span>03</span> / PROJETOS</p><h2>Feito com intenção.<br /><em>Feito para funcionar.</em></h2></div>
        <a class="inline-link projects-index-link" href="#github">Acompanhe no GitHub <ArrowUpRight :size="15" aria-hidden="true" /></a>
      </div>
      <div class="projects-grid">
        <ProjectCard v-for="(project, index) in projects" :key="project.id" :project="project" :class="{ 'reveal-delay-1': index % 2 }" />
      </div>
    </div>
  </section>
</template>
