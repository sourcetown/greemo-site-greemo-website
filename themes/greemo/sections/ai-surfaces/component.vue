<template>
  <section class="s"><div class="wrap">
    <div class="center"><span class="eyebrow">{{ d.eyebrow }}</span><h2 class="h">{{ d.title }}</h2><Rich tag="p" class="sub" :text="d.intro" /></div>
    <div class="grid3 mt">
      <div v-for="s in d.items || []" :key="s.key" class="card ai-card">
        <div class="ico"><Icon :name="s.icon" /></div><h3>{{ s.title }}</h3><span class="tag">{{ s.tag }}</span>
        <Rich tag="p" :text="s.text" />
        <div v-if="s.exampleKind === 'prompt'" class="prompt"><Icon name="sparkles" />{{ s.example }}</div>
        <CodeBlock v-else :code="s.example" />
      </div>
    </div>
    <p v-if="d.link" class="center mt-s"><ALink class="more" :to="d.link.path">{{ d.link.label }}</ALink></p>
  </div></section>
</template>
<script setup>
import { useSectionBlock } from '../../utils/sectionBlock'
import ALink from '../../components/ALink.vue'
import Icon from '../../components/Icon.vue'
import Rich from '../../components/Rich.vue'
import CodeBlock from '../../components/CodeBlock.vue'
defineOptions({ inheritAttrs: false })
const props = defineProps({ data: Object, page: Object })
// Block fields, with a linked dataset (__dataset__) underneath
const { d } = useSectionBlock(props)
</script>
