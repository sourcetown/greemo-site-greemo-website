<template>
  <section class="s"><div class="wrap"><div class="grid2" style="gap:56px;align-items:start">
    <div class="steps"><div v-for="(s, i) in d.steps || []" :key="i" class="step"><div><h3>{{ s.title }}</h3><Rich v-if="s.text" tag="p" :text="s.text" /><CodeBlock v-if="s.code" :code="s.code" /></div></div></div>
    <div><Visual :visual="d.visual" :url="d.visualUrl" :alt="d.alt" /><div style="margin-top:12px"><Badge :kind="d.visualKind" /></div></div>
  </div><Src :text="d.source" /></div></section>
</template>
<script setup>
import { useSectionBlock } from '../../utils/sectionBlock'
import Rich from '../../components/Rich.vue'
import CodeBlock from '../../components/CodeBlock.vue'
import Visual from '../../components/Visual.vue'
import Badge from '../../components/Badge.vue'
import Src from '../../components/Src.vue'
defineOptions({ inheritAttrs: false })
const props = defineProps({ data: Object, page: Object })
// Block fields, with a linked dataset (__dataset__) underneath
const { d } = useSectionBlock(props)
</script>
