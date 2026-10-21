<template><ul class="ticks"><li v-for="(t, i) in items" :key="i" v-html="rich(typeof t === 'string' ? t : t.value)"></li></ul></template>
<script setup>
import { rich } from '../utils/text'
defineProps({ items: { type: Array, default: () => [] } })
</script>
