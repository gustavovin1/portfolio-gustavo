<script setup>
import Navbar from './components/Navbar.vue'
import BackToTop from './components/BackToTop.vue'
import Hero from './sections/Hero.vue'
import About from './sections/About.vue'
import Skills from './sections/Skills.vue'
import Projects from './sections/Projects.vue'
import Experience from './sections/Experience.vue'
import Workflow from './sections/Workflow.vue'
import GithubSection from './sections/GithubSection.vue'
import Contact from './sections/Contact.vue'
import SiteFooter from './sections/SiteFooter.vue'
import { useScrollReveal } from './composables/useScrollReveal'

useScrollReveal()
</script>

<template>
  <Navbar />
  <main id="conteudo">
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Workflow />
    <GithubSection />
    <Contact />
  </main>
  <SiteFooter />
  <BackToTop />
</template>
