<template>
  <section class="s alt" id="cli"><div class="wrap"><span class="eyebrow">{{ d.eyebrow }}</span><h2 class="h" v-html="title"></h2>
    <Rich tag="p" class="sub" :text="d.intro" />
    <div class="grid2 mt" style="align-items:start">
      <table class="t"><tr><th>{{ d.area || 'Area' }}</th><th>{{ d.commands || 'Commands' }}</th></tr>
        <tr v-for="row in d.items || []" :key="row.key"><td>{{ row.area }}</td><td><template v-for="c in row.commands" :key="c"><code>{{ c }}</code>{{ " " }}</template></td></tr></table>
      <div><CodeBlock v-for="(c, i) in d.examples || []" :key="i" :code="c" /></div>
    </div>
    <Src :text="d.source" />
  </div></section>
</template>
<script setup>
import { useSectionBlock } from '../../utils/sectionBlock'
import { computed } from 'vue'
import Rich from '../../components/Rich.vue'
import CodeBlock from '../../components/CodeBlock.vue'
import Src from '../../components/Src.vue'
import { rich } from '../../utils/text'
defineOptions({ inheritAttrs: false })
const props = defineProps({ data: Object, page: Object })
// Block fields, with a linked dataset (__dataset__) underneath
const { d } = useSectionBlock(props)
const title = computed(() => rich(d.value.title).replace('<code>', '<code style="font-size:.8em">'))
</script>
