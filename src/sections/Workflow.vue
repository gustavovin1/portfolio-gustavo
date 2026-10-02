<script setup>
import { Search, ScanSearch, Code2, Check, Rocket } from 'lucide-vue-next'
import { workflow } from '../data/workflow'

const icons = { search: Search, scan: ScanSearch, code: Code2, check: Check, rocket: Rocket }
</script>

<template>
  <section class="section section-workflow">
    <div class="container">
      <div class="section-heading section-heading-row reveal">
        <div><p class="section-label"><span>05</span> / COMO EU TRABALHO</p><h2>Do primeiro sintoma<br />ao <em>deploy.</em></h2></div>
        <p class="section-aside">Um processo claro para entender o problema e chegar a uma solução sustentável.</p>
      </div>
      <ol class="workflow-list">
        <li v-for="(step, index) in workflow" :key="step.number" class="workflow-step reveal" :class="{ 'reveal-delay-1': index > 1 }">
          <div class="workflow-icon"><component :is="icons[step.icon]" :size="19" stroke-width="1.7" aria-hidden="true" /></div>
          <span class="workflow-number">{{ step.number }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
          <span v-if="index < workflow.length - 1" class="workflow-connector" aria-hidden="true"></span>
        </li>
      </ol>
    </div>
  </section>
</template>
