<template>
  <section class="s" style="padding-top:0"><div class="wrap"><div class="case">
    <div><span class="eyebrow" style="color:var(--green)">{{ d.eyebrow }}</span><h2 class="h" style="color:#fff">{{ d.title }}</h2>
      <p>{{ d.text }}</p>
      <dl><template v-for="(f, i) in d.facts || []" :key="i"><dt>{{ f.label }}</dt>
        <dd v-if="f.swatches"><template v-for="(c, j) in f.swatches" :key="c"><span class="sw" :style="{ background: c, marginLeft: j ? '10px' : null }"></span>{{ c }} </template></dd>
        <dd v-else>{{ f.value }}</dd></template></dl>
      <span v-if="d.source && company.showSourceNotes !== false" class="src" style="color:#6f9993">{{ d.source }}</span>
    </div>
    <Visual :visual="d.visual" :url="d.visualUrl" />
  </div></div></section>
</template>
<script setup>
import { useSectionBlock } from '../../utils/sectionBlock'
import Visual from '../../components/Visual.vue'
import { collections } from '../../utils/greemo'
const company = collections.company || {}
defineOptions({ inheritAttrs: false })
const props = defineProps({ data: Object, page: Object })
// Block fields, with a linked dataset (__dataset__) underneath
const { d } = useSectionBlock(props)
</script>
