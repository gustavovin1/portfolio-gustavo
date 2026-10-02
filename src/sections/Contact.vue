<script setup>
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-vue-next'
import { profile, githubUrl, isConfiguredLink } from '../data/profile'
</script>

<template>
  <section id="contato" class="section section-contact section-anchor">
    <div class="container contact-layout">
      <div class="contact-heading reveal">
        <p class="section-label"><span>07</span> / CONTATO</p>
        <h2>Vamos<br /><em>conversar?</em></h2>
        <p>Uma ideia, uma oportunidade ou uma boa conversa sobre software. Estou por aqui.</p>
      </div>
      <div class="contact-list reveal reveal-delay-1">
        <div class="contact-row"><span class="contact-icon"><MapPin :size="17" aria-hidden="true" /></span><div><span class="contact-label">LOCALIZAÇÃO</span><p>{{ profile.location }}</p></div></div>
        <a v-if="githubUrl()" class="contact-row contact-row-link" :href="githubUrl()" target="_blank" rel="noreferrer"><span class="contact-icon"><Github :size="17" aria-hidden="true" /></span><div><span class="contact-label">GITHUB</span><p>{{ profile.githubUsername }}</p></div><ArrowUpRight :size="16" class="contact-arrow" aria-hidden="true" /></a>
        <div v-else class="contact-row"><span class="contact-icon"><Github :size="17" aria-hidden="true" /></span><div><span class="contact-label">GITHUB</span><p>Configure em src/data/profile.js</p></div></div>
        <a v-if="isConfiguredLink(profile.links.linkedin)" class="contact-row contact-row-link" :href="profile.links.linkedin" target="_blank" rel="noreferrer"><span class="contact-icon"><Linkedin :size="17" aria-hidden="true" /></span><div><span class="contact-label">LINKEDIN</span><p>Perfil profissional</p></div><ArrowUpRight :size="16" class="contact-arrow" aria-hidden="true" /></a>
        <div v-else class="contact-row"><span class="contact-icon"><Linkedin :size="17" aria-hidden="true" /></span><div><span class="contact-label">LINKEDIN</span><p>Configure em src/data/profile.js</p></div></div>
        <a v-if="isConfiguredLink(profile.links.email)" class="contact-row contact-row-link" :href="`mailto:${profile.links.email}`"><span class="contact-icon"><Mail :size="17" aria-hidden="true" /></span><div><span class="contact-label">EMAIL</span><p>{{ profile.links.email }}</p></div><ArrowUpRight :size="16" class="contact-arrow" aria-hidden="true" /></a>
        <div v-else class="contact-row"><span class="contact-icon"><Mail :size="17" aria-hidden="true" /></span><div><span class="contact-label">EMAIL</span><p>Configure em src/data/profile.js</p></div></div>
      </div>
    </div>
  </section>
</template>
