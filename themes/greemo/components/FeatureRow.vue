<!-- Stacked feature row: large full-width interface graphic, then the copy in two columns (mockup .frow.stacked). -->
<template>
  <div class="frow stacked" :class="{ rev }" :id="anchor || null">
    <div class="fvis"><Visual :visual="f.visual" :url="f.visualUrl" :alt="f.alt || f.eyebrow" /></div>
    <div class="fcopy">
      <div><span class="eyebrow">{{ f.eyebrow }}</span><Badge :kind="f.visualKind" /><h2>{{ f.title }}</h2><Rich tag="p" :text="f.text" /></div>
      <div><Ticks :items="f.ticks" /><Src :text="f.source ? `Source: ${f.source}` : ''" /></div>
    </div>
  </div>
</template>
<script setup>
import Visual from './Visual.vue'
import Badge from './Badge.vue'
import Rich from './Rich.vue'
import Ticks from './Ticks.vue'
import Src from './Src.vue'
defineProps({ f: Object, rev: Boolean, anchor: String })
</script>
