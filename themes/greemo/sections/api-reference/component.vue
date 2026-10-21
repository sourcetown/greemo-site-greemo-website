<template>
  <section class="s" id="api"><div class="wrap"><span class="eyebrow">{{ d.eyebrow }}</span><h2 class="h">{{ d.title }}</h2>
    <Rich tag="p" class="sub" :text="d.intro" />
    <div class="grid2 mt" style="align-items:start">
      <table class="t"><tr><th>{{ d.endpoint || 'Endpoint' }}</th><th>{{ d.action || 'Action' }}</th></tr>
        <tr v-for="e in d.items || []" :key="e.key"><td><span class="method" :class="e.method">{{ e.method }}</span><code>{{ e.path }}</code></td><td>{{ e.action }}</td></tr></table>
      <div><CodeBlock v-for="(c, i) in d.examples || []" :key="i" :code="c" /><Rich v-if="d.note" tag="p" class="src" :text="d.note" /></div>
    </div>
    <Src :text="d.source" />
  </div></section>
</template>
<script setup>
import { useSectionBlock } from '../../utils/sectionBlock'
import Rich from '../../components/Rich.vue'
import CodeBlock from '../../components/CodeBlock.vue'
import Src from '../../components/Src.vue'
defineOptions({ inheritAttrs: false })
const props = defineProps({ data: Object, page: Object })
// Block fields, with a linked dataset (__dataset__) underneath
const { d } = useSectionBlock(props)
</script>
