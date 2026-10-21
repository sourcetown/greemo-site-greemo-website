<template>
  <a v-if="external" :href="to" :target="to.startsWith('http') ? '_blank' : null" :rel="to.startsWith('http') ? 'noopener' : null"><slot /></a>
  <router-link v-else :to="to"><slot /></router-link>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({ to: { type: String, default: '/' } })
const external = computed(() => /^(https?:|mailto:|tel:)/.test(props.to))
</script>
