<template>
  <section class="s alt"><div class="wrap"><div class="grid2" style="align-items:start">
    <div v-for="(c, i) in d.cards || []" :key="i" class="card"><div class="ico"><Icon :name="c.icon" /></div><h3>{{ c.title }}</h3><Rich tag="p" :text="c.text" /><CodeBlock :code="c.code" /></div>
  </div><Src :text="d.source" /></div></section>
</template>
<script setup>
import { useSectionBlock } from '../../utils/sectionBlock'
import Icon from '../../components/Icon.vue'
import Rich from '../../components/Rich.vue'
import CodeBlock from '../../components/CodeBlock.vue'
import Src from '../../components/Src.vue'
defineOptions({ inheritAttrs: false })
const props = defineProps({ data: Object, page: Object })
// Block fields, with a linked dataset (__dataset__) underneath
const { d } = useSectionBlock(props)
</script>
