<script setup>
import { ArrowUpRight, Github, LockKeyhole } from 'lucide-vue-next'
import { isConfiguredLink } from '../data/profile'

defineProps({
  project: { type: Object, required: true },
})
</script>

<template>
  <article class="project-card" :class="{ 'project-card-featured': project.featured }">
    <div class="project-visual" :class="`visual-${project.visual}`" aria-hidden="true">
      <div v-if="project.featured" class="visual-api">
        <div class="api-topline"><span></span><span></span><span></span><b>expeditions.api</b></div>
        <div class="api-row"><span class="api-method">POST</span><span>/api/expeditions</span><span class="api-status">201</span></div>
        <div class="api-code"><i>{</i><span>"protocol"</span>: <em>"8f2a...c41d"</em><br /><span>"status"</span>: <strong>"authorized"</strong><br /><i>}</i></div>
      </div>
      <div v-else class="project-glyph"><span>{{ project.name.slice(0, 1) }}</span><i></i><i></i><i></i></div>
      <span class="visual-index">{{ project.featured ? 'API / 001' : project.id.slice(0, 3).toUpperCase() + ' / 00' }}</span>
    </div>

    <div class="project-card-content">
      <div class="project-heading">
        <div>
          <span v-if="project.featured" class="featured-label"><span></span> Projeto em destaque</span>
          <p v-else class="eyebrow">{{ project.category }}</p>
          <h3>{{ project.name }}</h3>
        </div>
        <span class="project-arrow" aria-hidden="true"><ArrowUpRight :size="18" /></span>
      </div>
      <p class="project-description">{{ project.description }}</p>
      <ul v-if="project.features.length" class="project-features">
        <li v-for="feature in project.features" :key="feature">{{ feature }}</li>
      </ul>
      <div class="project-bottom">
        <div class="tag-list" aria-label="Tecnologias">
          <span v-for="technology in project.technologies" :key="technology" class="tech-tag">{{ technology }}</span>
          <span v-if="!project.technologies.length" class="tech-tag pending-tag">Tecnologias a detalhar</span>
        </div>
        <div class="project-actions">
          <a v-if="isConfiguredLink(project.github)" class="text-link" :href="project.github" target="_blank" rel="noreferrer">
            <Github :size="15" aria-hidden="true" /> GitHub
          </a>
          <span v-else class="text-link is-unavailable" title="Configure o link do repositório em src/data/projects.js">
            <LockKeyhole :size="14" aria-hidden="true" /> Repositório privado ou não informado
          </span>
          <a v-if="isConfiguredLink(project.demo)" class="project-visit" :href="project.demo" target="_blank" rel="noreferrer" aria-label="Ver projeto">
            <span>Ver projeto</span><ArrowUpRight :size="16" aria-hidden="true" />
          </a>
          <span v-else class="project-visit project-visit-disabled" title="Adicione a URL de demonstração em src/data/projects.js">
            <span>Ver projeto</span><LockKeyhole :size="13" aria-hidden="true" />
          </span>
        </div>
      </div>
    </div>
  </article>
</template>
