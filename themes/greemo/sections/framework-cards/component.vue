<template>
  <section class="s"><div class="wrap">
    <div class="fw"><div v-for="f in d.items || []" :key="f.key" class="card"><div class="logo" :style="{ color: f.colour }">{{ f.name }}</div><Ticks :items="f.bullets" /></div></div>
    <Src :text="d.source" />
    <FeatureRow v-if="d.row" :f="d.row" />
  </div></section>
</template>
<script setup>
import { useSectionBlock } from '../../utils/sectionBlock'
import Ticks from '../../components/Ticks.vue'
import Src from '../../components/Src.vue'
import FeatureRow from '../../components/FeatureRow.vue'
defineOptions({ inheritAttrs: false })
const props = defineProps({ data: Object, page: Object })
// Block fields, with a linked dataset (__dataset__) underneath
const { d } = useSectionBlock(props)
</script>
