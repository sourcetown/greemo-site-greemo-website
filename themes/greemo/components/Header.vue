<template>
  <header class="nav">
    <div class="wrap">
      <router-link class="logo" to="/" @click="open = false"><img :src="company.logo" :alt="company.name"></router-link>
      <ul :class="{ open }">
        <li v-for="item in links" :key="item.id"><ALink :to="item.path" :class="{ on: isOn(item.path) }" @click="open = false">{{ item.label }}</ALink></li>
        <li v-for="item in cta" :key="`m-${item.id}`" class="cta-li"><ALink class="btn btn-green" :to="item.path" @click="open = false">{{ item.label }}</ALink></li>
      </ul>
      <ALink v-for="item in cta" :key="item.id" class="btn btn-green" :to="item.path">{{ item.label }}</ALink>
      <button class="burger" type="button" :aria-expanded="open" aria-label="Menu" @click="open = !open"><span></span></button>
    </div>
  </header>
</template>
<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import ALink from './ALink.vue'
import { computed, inject } from 'vue'
import { menuFrom, siteData } from '../utils/greemo'
// In the editor Greemo provides the open site's collections, with media paths resolved.
const provided = inject('greemoCollections', null)
const bag = () => {
  const extra = provided?.value
  if (extra && Object.keys(extra).length) return { ...siteData(), ...extra }
  return siteData()
}
const company = computed(() => bag().company || {})
const menuItems = (location) => menuFrom(bag().menu, location)
const links = computed(() => menuItems('header'))
const cta = computed(() => menuItems('header-cta'))
const route = useRoute()
const open = ref(false)
const isOn = path => route.path === path
</script>
