<template>
  <section class="s alt"><div class="wrap">
    <div style="display:flex;justify-content:space-between;align-items:end;gap:24px;flex-wrap:wrap">
      <div><span class="eyebrow">{{ d.eyebrow }}</span><h2 class="h">{{ d.title }}</h2></div>
      <ALink v-if="d.cta" class="btn btn-dark" :to="d.cta.path">{{ d.cta.label }}</ALink>
    </div>
    <div class="teaser mt">
      <router-link v-for="(c, i) in d.cards || []" :key="i" class="tcard" :class="{ wide: c.wide }" :to="c.path">
        <div v-if="c.code" class="thumb" style="background:var(--teal-900);padding:18px"><CodeBlock :code="c.code" /></div>
        <div v-else-if="c.visual?.startsWith('shot:')" class="thumb"><img :src="`/media/shots/${c.visual.slice(5)}`" :alt="c.alt || c.title"></div>
        <div v-else class="thumb"><div class="mini"><Visual :visual="c.visual" raw /></div></div>
        <div class="body"><h3>{{ c.title }}</h3><Rich tag="p" :text="c.text" /></div>
      </router-link>
    </div>
  </div></section>
</template>
<script setup>
import { useSectionBlock } from '../../utils/sectionBlock'
import ALink from '../../components/ALink.vue'
import Rich from '../../components/Rich.vue'
import CodeBlock from '../../components/CodeBlock.vue'
import Visual from '../../components/Visual.vue'
defineOptions({ inheritAttrs: false })
const props = defineProps({ data: Object, page: Object })
// Block fields, with a linked dataset (__dataset__) underneath
const { d } = useSectionBlock(props)
</script>
