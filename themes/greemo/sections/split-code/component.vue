<!-- Copy (with optional ticks and a code block) beside a code block. -->
<template>
  <section class="s" :class="{ alt: d.tint }" :id="d.anchor || null"><div class="wrap"><div class="grid2" :style="`gap:56px;align-items:${d.align || 'start'}`">
    <div><span class="eyebrow">{{ d.eyebrow }}</span><h2 class="h">{{ d.title }}</h2><Rich tag="p" class="sub" :text="d.text" />
      <Ticks v-if="d.ticks?.length" :items="d.ticks" /><CodeBlock v-if="d.code" :code="d.code" /></div>
    <CodeBlock :code="d.aside" />
  </div><Src :text="d.source" /></div></section>
</template>
<script setup>
import { useSectionBlock } from '../../utils/sectionBlock'
import Rich from '../../components/Rich.vue'
import Ticks from '../../components/Ticks.vue'
import CodeBlock from '../../components/CodeBlock.vue'
import Src from '../../components/Src.vue'
defineOptions({ inheritAttrs: false })
const props = defineProps({ data: Object, page: Object })
// Block fields, with a linked dataset (__dataset__) underneath
const { d } = useSectionBlock(props)
</script>
