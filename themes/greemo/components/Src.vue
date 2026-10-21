<!-- Source note: which greemo repo file backs the copy. Shown when company.showSourceNotes is true. -->
<template><span v-if="text && company.showSourceNotes !== false" class="src" v-html="rich(text)"></span></template>
<script setup>
import { collections } from '../utils/greemo'
const company = collections.company || {}
import { rich } from '../utils/text'
defineProps({ text: String })
</script>
