<script setup>
import { ref } from 'vue'
import { Github, Linkedin, Menu, X } from 'lucide-vue-next'
import { profile, githubUrl, isConfiguredLink } from '../data/profile'
import { useActiveSection } from '../composables/useActiveSection'

const isOpen = ref(false)
const activeSection = useActiveSection(['inicio', ...profile.nav.map((item) => item.id)])

function closeMenu() {
  isOpen.value = false
}
</script>

<template>
  <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
  <header class="site-header">
    <nav class="nav-shell container" aria-label="Navegação principal">
      <a class="brand" href="#inicio" @click="closeMenu">
        <span class="brand-mark" aria-hidden="true">g<span>.</span></span>
        <span>{{ profile.shortName }}</span>
      </a>

      <button
        class="icon-button menu-toggle"
        type="button"
        :aria-expanded="isOpen"
        aria-controls="primary-navigation"
        :aria-label="isOpen ? 'Fechar menu' : 'Abrir menu'"
        @click="isOpen = !isOpen"
      >
        <X v-if="isOpen" :size="19" aria-hidden="true" />
        <Menu v-else :size="19" aria-hidden="true" />
      </button>

      <div id="primary-navigation" class="nav-content" :class="{ 'is-open': isOpen }">
        <div class="nav-links">
          <a
            v-for="item in profile.nav"
            :key="item.id"
            :href="`#${item.id}`"
            :class="{ active: activeSection === item.id }"
            :aria-current="activeSection === item.id ? 'location' : undefined"
            @click="closeMenu"
          >{{ item.label }}</a>
        </div>
        <div class="nav-socials" aria-label="Redes sociais">
          <a v-if="githubUrl()" class="icon-button" :href="githubUrl()" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github :size="17" aria-hidden="true" />
          </a>
          <a v-if="isConfiguredLink(profile.links.linkedin)" class="icon-button" :href="profile.links.linkedin" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin :size="17" aria-hidden="true" />
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>
