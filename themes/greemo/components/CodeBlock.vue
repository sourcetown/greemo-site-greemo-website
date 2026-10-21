<template><pre class="code" v-html="highlight(code)"></pre></template>
<script setup>
import { highlight } from '../utils/text'
defineProps({ code: { type: String, default: '' } })
</script>
