<template>
  <section class="hero page-hero"><div class="wrap">
    <span class="pill"><i></i>{{ d.pill }}</span><h1>{{ d.title }}</h1>
    <p class="lead" v-html="lead"></p>
    <div v-if="d.ctas?.length" class="ctas" style="display:flex;gap:12px;margin-top:28px;flex-wrap:wrap">
      <ALink v-for="(c, i) in d.ctas" :key="i" class="btn" :class="i ? 'btn-ghost' : 'btn-green'" :to="c.path">{{ c.label }}</ALink>
    </div>
  </div></section>
</template>
<script setup>
import { useSectionBlock } from '../../utils/sectionBlock'
import { computed } from 'vue'
import ALink from '../../components/ALink.vue'
import { rich } from '../../utils/text'
defineOptions({ inheritAttrs: false })
const props = defineProps({ data: Object, page: Object })
// Block fields, with a linked dataset (__dataset__) underneath
const { d } = useSectionBlock(props)
const lead = computed(() => rich(d.value.lead).replace(/<code>/g, '<code style="background:rgba(255,255,255,.08);padding:2px 6px;border-radius:5px">'))
</script>
