<template>
  <section class="hero"><div class="wrap"><div class="hero-grid">
    <div>
      <span class="pill"><i></i>{{ d.pill }}</span>
      <h1 v-html="inlineEm(d.title)"></h1>
      <p class="lead">{{ d.lead }}</p>
      <div class="ctas"><ALink v-for="(c, i) in d.ctas || []" :key="i" class="btn" :class="i ? 'btn-ghost' : 'btn-green'" :to="c.path">{{ c.label }}</ALink></div>
    </div>
    <div class="hero-vis"><Visual :visual="d.visual" :url="d.visualUrl" /><HeroTerm v-if="d.terminal !== false" /></div>
  </div></div></section>
</template>
<script setup>
import { useSectionBlock } from '../../utils/sectionBlock'
import ALink from '../../components/ALink.vue'
import Visual from '../../components/Visual.vue'
import HeroTerm from '../../components/ui/HeroTerm.vue'
import { inlineEm } from '../../utils/greemo'
defineOptions({ inheritAttrs: false })
const props = defineProps({ data: Object, page: Object })
// Block fields, with a linked dataset (__dataset__) underneath
const { d } = useSectionBlock(props)
</script>
