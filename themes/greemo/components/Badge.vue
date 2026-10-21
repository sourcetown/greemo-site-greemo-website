<!-- Labels every interface graphic honestly: real screenshot of the running editor, or an HTML recreation. -->
<template>
  <span v-if="kind === 'real' || kind === 'both'" class="badge real">Real screenshot</span>
  <span v-if="kind === 'recreation'" class="badge rec">Interface recreation</span>
  <span v-if="kind === 'both'" class="badge rec">+ recreation</span>
</template>
<script setup>defineProps({ kind: String })</script>
