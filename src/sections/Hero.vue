<script setup>
import { ArrowDown, ArrowUpRight, Github, Linkedin } from 'lucide-vue-next'
import Terminal from '../components/Terminal.vue'
import { profile, githubUrl, isConfiguredLink } from '../data/profile'
</script>

<template>
  <section id="inicio" class="hero-section section-anchor">
    <div class="hero-grid container">
      <div class="hero-copy reveal">
        <p class="hero-kicker"><span class="status-dot"></span> DESENVOLVIMENTO DE SOFTWARE <span class="kicker-line"></span> CURITIBA, BR</p>
        <h1>{{ profile.shortName }}<span class="name-period">.</span></h1>
        <p class="hero-role"><span class="role-prefix">/</span> {{ profile.title }}</p>
        <p class="hero-description">Desenvolvendo soluções, resolvendo problemas e transformando café em código.</p>
        <div class="hero-stack" aria-label="Tecnologias principais">
          <span>PHP</span><i>·</i><span>Laravel</span><i>·</i><span>Vue.js</span><i>·</i><span>Linux</span><i>·</i><span>MySQL</span>
        </div>
        <div class="hero-actions">
          <a class="button button-primary" href="#projetos">Ver projetos <ArrowDown :size="15" aria-hidden="true" /></a>
          <a v-if="githubUrl()" class="button button-secondary" :href="githubUrl()" target="_blank" rel="noreferrer"><Github :size="16" aria-hidden="true" /> GitHub <ArrowUpRight :size="14" aria-hidden="true" /></a>
          <span v-else class="button button-secondary button-disabled" title="Configure githubUsername em src/data/profile.js"><Github :size="16" aria-hidden="true" /> GitHub</span>
          <a v-if="isConfiguredLink(profile.links.linkedin)" class="button button-secondary" :href="profile.links.linkedin" target="_blank" rel="noreferrer"><Linkedin :size="16" aria-hidden="true" /> LinkedIn <ArrowUpRight :size="14" aria-hidden="true" /></a>
          <span v-else class="button button-secondary button-disabled" title="Configure links.linkedin em src/data/profile.js"><Linkedin :size="16" aria-hidden="true" /> LinkedIn</span>
        </div>
      </div>
      <div class="hero-terminal reveal reveal-delay-1">
        <div class="terminal-orbit" aria-hidden="true"></div>
        <Terminal />
        <div class="terminal-caption"><span class="caption-mark">↳</span> um pouco sobre como as coisas funcionam por aqui</div>
      </div>
      <a class="hero-scroll" href="#sobre" aria-label="Rolar para a seção Sobre"><span>SCROLL TO EXPLORE</span><ArrowDown :size="14" aria-hidden="true" /></a>
      <span class="hero-coordinate" aria-hidden="true">25°25' S &nbsp; 49°16' W</span>
    </div>
  </section>
</template>
