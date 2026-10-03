<script setup>
import { ArrowDownRight, Coffee } from 'lucide-vue-next'
</script>

<template>
  <section id="sobre" class="section section-about section-anchor">
    <div class="container">
      <div class="section-heading reveal">
        <p class="section-label"><span>01</span> / SOBRE</p>
        <h2>Construir bem começa<br />por <em>entender.</em></h2>
      </div>
      <div class="about-layout">
        <div class="about-aside reveal">
          <div class="about-stamp"><Coffee :size="18" aria-hidden="true" /><span>GENTE, CÓDIGO<br />E CAFÉ</span></div>
          <span class="about-aside-note">Curitiba, Paraná<br />Brasil</span>
        </div>
        <div class="about-text reveal reveal-delay-1">
          <p>Atuo na manutenção de sistemas legados desenvolvidos em PHP nativo 5.3 e na implementação de funcionalidades em aplicações atuais com Laravel. Também trabalho com correção de bugs, melhorias e sustentação de sistemas.</p>
          <p>Possuo experiência com ambientes Linux e Windows, utilizando Bash, PowerShell e SSH para suporte, configuração e diagnóstico de sistemas.</p>
          <p>Tenho interesse constante em desenvolvimento backend, frontend e infraestrutura. Também utilizo ferramentas de Inteligência Artificial como apoio no desenvolvimento de software, análise de problemas, debugging, pesquisa técnica, documentação e produtividade.</p>
          <p>Busco constantemente aprender novas tecnologias e melhorar a qualidade das soluções que desenvolvo.</p>
          <a class="inline-link" href="#skills">Conheça minhas ferramentas <ArrowDownRight :size="16" aria-hidden="true" /></a>
        </div>
      </div>
    </div>
  </section>
</template>
