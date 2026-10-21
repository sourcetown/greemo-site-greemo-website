<!-- The five key features: feature 01 large with its interface graphic, 02 to 05 alternating with smaller visuals. -->
<template>
  <section class="s key" id="key"><div class="wrap">
    <div v-if="d.title" class="center" style="margin-bottom:56px"><span class="eyebrow">{{ d.eyebrow }}</span><h2 class="h">{{ d.title }}</h2></div>
    <div v-if="first" class="key1">
      <div class="fvis"><Visual :visual="first.visual" :url="first.visualUrl" /></div>
      <div class="fcopy">
        <div><span class="eyebrow">Key feature {{ num(first) }}</span><Badge :kind="first.visualKind" /><h2>{{ first.title }}</h2><Rich tag="p" :text="first.text" /></div>
        <div><Ticks :items="first.ticks" /><Src :text="first.source" /></div>
      </div>
    </div>
    <div v-for="(f, i) in rest" :key="f.key" class="krow" :class="{ rev: i % 2 }">
      <div><Visual :visual="f.visual" :url="f.visualUrl" /></div>
      <div class="fcopy"><span class="eyebrow">Key feature {{ num(f) }}</span><h2>{{ f.title }}</h2><Rich tag="p" :text="f.text" /><Ticks :items="f.ticks" /><Src :text="f.source" /></div>
    </div>
  </div></section>
</template>
<script setup>
import { useSectionBlock } from '../../utils/sectionBlock'
import { computed } from 'vue'
import Visual from '../../components/Visual.vue'
import Badge from '../../components/Badge.vue'
import Rich from '../../components/Rich.vue'
import Ticks from '../../components/Ticks.vue'
import Src from '../../components/Src.vue'
defineOptions({ inheritAttrs: false })
const props = defineProps({ data: Object, page: Object })
// Block fields, with a linked dataset (__dataset__) underneath
const { d } = useSectionBlock(props)
const items = computed(() => [...(d.value.items || [])].sort((a, b) => (a.order || 0) - (b.order || 0)))
const first = computed(() => items.value[0])
const rest = computed(() => items.value.slice(1))
const num = f => String(f.order || items.value.indexOf(f) + 1).padStart(2, '0')
</script>
