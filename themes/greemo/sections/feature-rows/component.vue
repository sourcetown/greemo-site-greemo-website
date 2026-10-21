<template>
  <section><div class="wrap">
    <div class="center" style="padding-top:88px"><span class="eyebrow">{{ d.eyebrow }}</span><h2 class="h">{{ d.title }}</h2></div>
    <FeatureRow v-for="(f, i) in items" :key="f.key" :f="f" :rev="i % 2 === 1" :anchor="f.key" />
  </div></section>
</template>
<script setup>
import { useSectionBlock } from '../../utils/sectionBlock'
import { computed } from 'vue'
import FeatureRow from '../../components/FeatureRow.vue'
defineOptions({ inheritAttrs: false })
const props = defineProps({ data: Object, page: Object })
// Block fields, with a linked dataset (__dataset__) underneath
const { d } = useSectionBlock(props)
const items = computed(() => [...(d.value.items || [])].sort((a, b) => (a.order || 0) - (b.order || 0)))
</script>
