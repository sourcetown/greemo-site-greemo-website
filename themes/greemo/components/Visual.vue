<!-- Renders an interface graphic by key: ui-* / vis-* recreations (components/ui) or shot:<file> real screenshots (/media/shots). -->
<template>
  <div v-if="visual === 'sites-combo'" class="stack">
    <Frame :url="url"><UiSites /></Frame>
    <div class="over"><Frame url="localhost:2211"><img class="shot" src="/media/shots/real-dashboard-choose-project.webp" alt="Greemo dashboard: Choose a project"></Frame></div>
  </div>
  <Frame v-else-if="shotFile" :url="url"><img class="shot" :src="`/media/shots/${shotFile}`" :alt="alt || 'Greemo editor screenshot'"></Frame>
  <component v-else-if="bare" :is="comp" />
  <Frame v-else-if="comp" :url="url"><component :is="comp" /></Frame>
</template>
<script setup>
import { computed } from 'vue'
import Frame from './Frame.vue'
import UiImport from './ui/UiImport.vue'
import UiLayoutEditor from './ui/UiLayoutEditor.vue'
import UiBlockEditor from './ui/UiBlockEditor.vue'
import UiMarkdown from './ui/UiMarkdown.vue'
import UiAi from './ui/UiAi.vue'
import UiAiCompact from './ui/UiAiCompact.vue'
import UiSites from './ui/UiSites.vue'
import UiAukPreview from './ui/UiAukPreview.vue'
import VisImport from './ui/VisImport.vue'
import VisPerf from './ui/VisPerf.vue'
import VisData from './ui/VisData.vue'
import VisLocal from './ui/VisLocal.vue'
const props = defineProps({ visual: String, url: { type: String, default: 'localhost:2211' }, alt: String, raw: Boolean })
const map = {
  'ui-import': UiImport, 'ui-layout': UiLayoutEditor, 'ui-blocks': UiBlockEditor, 'ui-markdown': UiMarkdown,
  'ui-ai': UiAi, 'ui-ai-compact': UiAiCompact, 'ui-sites': UiSites, 'ui-auk-preview': UiAukPreview,
  'vis-import': VisImport, 'vis-perf': VisPerf, 'vis-data': VisData, 'vis-local': VisLocal
}
const shotFile = computed(() => props.visual?.startsWith('shot:') ? props.visual.slice(5) : '')
const comp = computed(() => map[props.visual])
const bare = computed(() => props.raw || props.visual?.startsWith('vis-'))
</script>
