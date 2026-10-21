<!-- Pricing tiers from the plans collection. Every value is a [PLACEHOLDER] until plans are decided. -->
<template>
  <section class="s"><div class="wrap">
    <div v-if="d.note" class="note" v-html="rich(d.note)"></div>
    <div class="tiers mt">
      <div v-for="p in d.items || []" :key="p.key" class="tier" :class="{ pop: p.popular }">
        <span v-if="p.popular" class="flag">{{ d.popularLabel }}</span>
        <h3 v-html="rich(p.name)"></h3>
        <div class="price"><span v-html="rich(p.price)"></span><small>{{ p.period }}</small></div>
        <p class="desc" v-html="rich(p.description)"></p>
        <ul><li v-for="(f, i) in p.features" :key="i"><span v-html="rich(f)"></span></li></ul>
        <ALink class="btn" :class="p.popular ? 'btn-green' : 'btn-line'" :to="p.ctaPath">{{ p.cta }}</ALink>
      </div>
    </div>
    <table v-if="d.compareRows" class="t mt"><tr><th>{{ d.compare || 'Compare' }}</th><th v-for="p in d.items" :key="p.key" v-html="rich(p.name)"></th></tr>
      <tr v-for="r in d.compareRows" :key="r"><td v-html="rich(d.compareLabel)"></td><td v-for="p in d.items" :key="p.key" v-html="rich(d.compareValue)"></td></tr></table>
  </div></section>
</template>
<script setup>
import { useSectionBlock } from '../../utils/sectionBlock'
import ALink from '../../components/ALink.vue'
import { rich } from '../../utils/text'
defineOptions({ inheritAttrs: false })
const props = defineProps({ data: Object, page: Object })
// Block fields, with a linked dataset (__dataset__) underneath
const { d } = useSectionBlock(props)
</script>
