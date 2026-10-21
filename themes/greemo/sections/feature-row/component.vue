<!-- One feature row. Links to the features collection with a key, or takes its fields straight from the annotation. -->
<template>
  <section class="s" :class="{ alt: d.tint }" :id="d.anchor || null"><div class="wrap">
    <FeatureRow :f="d" :rev="!!d.rev" />
  </div></section>
</template>
<script setup>
import { useSectionBlock } from '../../utils/sectionBlock'
import FeatureRow from '../../components/FeatureRow.vue'
defineOptions({ inheritAttrs: false })
const props = defineProps({ data: Object, page: Object })
// Block fields, with a linked dataset (__dataset__) underneath
const { d } = useSectionBlock(props)
</script>
