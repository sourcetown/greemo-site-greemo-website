<!-- Simple outline icons in the style of the heroicons used by Greemo's web app (same set as the approved mockups). -->
<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" v-html="paths[name] || ''"></svg>
</template>
<script setup>
defineProps({ name: String })
const paths = {
  stack: '<ellipse cx="12" cy="6" rx="7" ry="2.6"/><path d="M5 6v6c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V6"/><path d="M5 12v6c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6v-6"/>',
  sparkles: '<path d="M10 3l1.6 4.6L16 9.2l-4.4 1.6L10 15.4l-1.6-4.6L4 9.2l4.4-1.6zM17.5 13.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z"/>',
  term: '<rect x="3" y="4.5" width="18" height="15" rx="2"/><path d="M7 9.5l3 2.5-3 2.5M12.5 15h4.5"/>',
  api: '<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14"/>',
  export: '<path d="M12 15V3M7.5 7.5L12 3l4.5 4.5M5 13v7h14v-7"/>',
  data: '<path d="M4 6h16M4 12h16M4 18h10"/>',
  rocket: '<path d="M12 15l-3-3c1.5-4.5 5-8 10-8.5-.5 5-4 8.5-8.5 10z"/><path d="M9 12l-4 .5L4 15l4 1M12 15l-.5 4L9 20l-1-4"/>',
  paint: '<path d="M4 20c3 0 4.5-1.5 4.5-4a2.5 2.5 0 0 1 2.5-2.5l8-8.5-2-2-8.5 8A2.5 2.5 0 0 1 6 13.5C3.5 13.5 4 17 4 20z"/>',
  git: '<circle cx="6" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="9" r="2"/><path d="M6 8v8M18 11c0 4-6 3-11.5 5.5"/>'
}
</script>
