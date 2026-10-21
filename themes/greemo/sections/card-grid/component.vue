<template>
  <section class="s" :class="{ alt: d.tint }" :id="d.anchor || null"><div class="wrap"><span class="eyebrow">{{ d.eyebrow }}</span><h2 class="h">{{ d.title }}</h2>
    <div class="grid3 mt"><div v-for="(c, i) in d.cards || []" :key="i" class="card"><div class="ico"><Icon :name="c.icon" /></div><h3>{{ c.title }}</h3><Rich tag="p" :text="c.text" /></div></div>
    <Src :text="d.source" />
  </div></section>
</template>
<script setup>
import { useSectionBlock } from '../../utils/sectionBlock'
import Icon from '../../components/Icon.vue'
import Rich from '../../components/Rich.vue'
import Src from '../../components/Src.vue'
defineOptions({ inheritAttrs: false })
const props = defineProps({ data: Object, page: Object })
// Block fields, with a linked dataset (__dataset__) underneath
const { d } = useSectionBlock(props)
</script>
