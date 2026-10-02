<script setup>
import { ArrowUpRight } from 'lucide-vue-next'
import { profile } from '../data/profile'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-inner">
      <a class="footer-brand" href="#inicio">{{ profile.shortName }}<span>.</span><small>{{ profile.title }}</small></a>
      <p class="footer-signoff">Built with Vue.js and too much coffee.<span> © {{ year }}</span></p>
      <a class="footer-top" href="#inicio" aria-label="Voltar ao início"><ArrowUpRight :size="15" aria-hidden="true" /></a>
    </div>
  </footer>
</template>
