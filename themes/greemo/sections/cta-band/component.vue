<template>
  <section class="s"><div class="wrap"><div class="cta">
    <div><h2>{{ d.title }}</h2><p v-html="text"></p>
      <div class="ctas"><ALink v-for="(c, i) in d.ctas || []" :key="i" class="btn" :class="i ? 'btn-ghost' : 'btn-green'" :to="c.path">{{ c.label }}</ALink></div></div>
    <CodeBlock :code="d.code" />
  </div></div></section>
</template>
<script setup>
import { useSectionBlock } from '../../utils/sectionBlock'
import { computed } from 'vue'
import ALink from '../../components/ALink.vue'
import CodeBlock from '../../components/CodeBlock.vue'
import { rich } from '../../utils/text'
defineOptions({ inheritAttrs: false })
const props = defineProps({ data: Object, page: Object })
// Block fields, with a linked dataset (__dataset__) underneath
const { d } = useSectionBlock(props)
const text = computed(() => rich(d.value.text).replace(/<code>/g, '<code style="background:rgba(255,255,255,.1);border:0;color:#fff">'))
</script>
