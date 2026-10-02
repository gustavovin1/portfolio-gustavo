<script setup>
import { ArrowUpRight, Github, GitBranch } from 'lucide-vue-next'
import { profile, githubUrl } from '../data/profile'
</script>

<template>
  <section id="github" class="github-section section-anchor">
    <div class="container github-layout reveal">
      <div class="github-mark"><Github :size="28" stroke-width="1.5" aria-hidden="true" /></div>
      <div class="github-copy">
        <p class="section-label"><span>06</span> / CÓDIGO ABERTO</p>
        <h2>Código fala.<br /><em>Veja por você.</em></h2>
        <p>Projetos e experimentos publicados no GitHub. Sem números inventados; só o código e o que estou construindo.</p>
      </div>
      <div class="github-action">
        <div class="github-path"><GitBranch :size="15" aria-hidden="true" /><span>github.com/{{ githubUrl() ? profile.githubUsername : 'seu-usuario' }}</span></div>
        <a v-if="githubUrl()" class="button button-primary" :href="githubUrl()" target="_blank" rel="noreferrer">Acessar GitHub <ArrowUpRight :size="15" aria-hidden="true" /></a>
        <span v-else class="button button-secondary button-disabled" title="Substitua SEU_USUARIO_GITHUB em src/data/profile.js"><Github :size="16" aria-hidden="true" /> Configure seu GitHub</span>
      </div>
      <div class="github-gridline" aria-hidden="true"></div>
    </div>
  </section>
</template>
