<template>
  <section class="s alt"><div class="wrap"><span class="eyebrow">{{ d.eyebrow }}</span><h2 class="h">{{ d.title }}</h2>
    <div class="flow mt"><div v-for="(s, i) in d.steps || []" :key="i" class="card"><span class="n">{{ String(i + 1).padStart(2, '0') }}</span><h3>{{ s.title }}</h3><Rich tag="p" :text="s.text" /></div></div>
    <Src :text="d.source" />
  </div></section>
</template>
<script setup>
import { useSectionBlock } from '../../utils/sectionBlock'
import Rich from '../../components/Rich.vue'
import Src from '../../components/Src.vue'
defineOptions({ inheritAttrs: false })
const props = defineProps({ data: Object, page: Object })
// Block fields, with a linked dataset (__dataset__) underneath
const { d } = useSectionBlock(props)
</script>
