<template>
  <footer>
    <div class="wrap">
      <div class="fgrid">
        <div><img :src="company.logo" :alt="company.name"><p style="max-width:300px">{{ company.strapline }}</p></div>
        <div v-for="col in columns" :key="col.loc">
          <h4>{{ col.title }}</h4>
          <ul>
            <li v-if="col.loc === 'footer-company' && company.maker">{{ company.maker }}</li>
            <li v-for="item in menuItems(col.loc)" :key="item.id"><ALink :to="item.path">{{ item.label }}</ALink></li>
          </ul>
        </div>
      </div>
      <div class="base"><span>{{ company.name }}, also known as {{ company.aka }}.</span><span>{{ company.maker }}</span></div>
    </div>
  </footer>
</template>
<script setup>
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
const columns = [{ loc: 'footer-product', title: 'Product' }, { loc: 'footer-developers', title: 'Developers' }, { loc: 'footer-company', title: 'Company' }]
</script>
