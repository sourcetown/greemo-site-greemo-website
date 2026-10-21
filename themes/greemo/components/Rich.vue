<template><component :is="tag" v-html="rich(text)" /></template>
<script setup>
import { rich } from '../utils/text'
defineProps({ text: { type: String, default: '' }, tag: { type: String, default: 'span' } })
</script>
