<script setup>
import { ArrowUpRight } from 'lucide-vue-next'
import { experience } from '../data/experience'
</script>

<template>
  <section id="experiencia" class="section section-experience section-anchor">
    <div class="container experience-layout">
      <div class="section-heading experience-intro reveal">
        <p class="section-label"><span>04</span> / EXPERIÊNCIA</p>
        <h2>Resolver.<br /><em>Sustentar.</em><br />Evoluir.</h2>
        <p class="experience-note">Atuação em desenvolvimento e sustentação de software, com atenção ao contexto de cada aplicação.</p>
      </div>
      <div class="experience-list">
        <article v-for="item in experience" :key="item.number" class="experience-item reveal">
          <span class="experience-number">{{ item.number }}</span>
          <div class="experience-item-copy">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <ul class="tag-list" :aria-label="`Áreas relacionadas a ${item.title}`"><li v-for="tag in item.tags" :key="tag" class="tech-tag">{{ tag }}</li></ul>
          </div>
          <ArrowUpRight class="experience-arrow" :size="17" aria-hidden="true" />
        </article>
      </div>
    </div>
  </section>
</template>
