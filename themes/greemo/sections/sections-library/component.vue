<template>
  <section class="s"><div class="wrap"><span class="eyebrow">{{ d.eyebrow }}</span><h2 class="h">{{ d.title }}</h2>
    <Rich tag="p" class="sub" :text="d.intro" />
    <div class="chips"><span v-for="s in d.items || []" :key="s.key" class="chip">{{ s.name }}</span></div>
    <div class="grid2 mt" style="align-items:start"><Visual :visual="d.visual" :url="d.visualUrl" :alt="d.alt" /><CodeBlock :code="d.code" /></div>
    <Src :text="d.source" />
  </div></section>
</template>
<script setup>
import { useSectionBlock } from '../../utils/sectionBlock'
import Rich from '../../components/Rich.vue'
import Visual from '../../components/Visual.vue'
import CodeBlock from '../../components/CodeBlock.vue'
import Src from '../../components/Src.vue'
defineOptions({ inheritAttrs: false })
const props = defineProps({ data: Object, page: Object })
// Block fields, with a linked dataset (__dataset__) underneath
const { d } = useSectionBlock(props)
</script>
