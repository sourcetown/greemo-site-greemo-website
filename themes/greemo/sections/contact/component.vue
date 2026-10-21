<!-- Contact section. Details come from the company collection. The form posts to company.formAction when one is set;
     until then it only shows a not-connected message and sends nothing. -->
<template>
  <section class="s" id="contact"><div class="wrap"><div class="grid2" style="gap:56px;align-items:start">
    <div><span class="eyebrow">{{ d.eyebrow }}</span><h2 class="h">{{ d.title }}</h2><Rich tag="p" class="sub" :text="d.intro" />
      <ul class="ticks"><li>Email: <span v-html="rich(d.contactEmail)"></span></li><li>Response time: <span v-html="rich(d.responseTime)"></span></li></ul></div>
    <form class="form" :action="d.formAction || null" method="post" @submit="onSubmit">
      <div class="row"><div><label for="cf-name">{{ d.name || 'Name' }}</label><input id="cf-name" name="name" placeholder="Your name" required></div>
        <div><label for="cf-email">{{ d.email || 'Email' }}</label><input id="cf-email" name="email" type="email" placeholder="you@company.com" required></div></div>
      <div><label for="cf-company">{{ d.company || 'Company' }}</label><input id="cf-company" name="company" placeholder="Company or site name"></div>
      <div><label for="cf-message">{{ d.message || 'Message' }}</label><textarea id="cf-message" name="message" placeholder="How can we help?" required></textarea></div>
      <button class="btn btn-green" type="submit">{{ d.sendMessage || 'Send message' }}</button>
      <p v-if="notConnected" class="sent" role="status">This form is not connected yet, so your message was not sent. Please use the email address on this page instead.</p>
      <p class="fine">Messages go to <span v-html="rich(d.formDestination)"></span>.</p>
    </form>
  </div></div></section>
</template>
<script setup>
import { useSectionBlock } from '../../utils/sectionBlock'
import { ref } from 'vue'
import Rich from '../../components/Rich.vue'
import { rich } from '../../utils/text'
defineOptions({ inheritAttrs: false })
const props = defineProps({ data: Object, page: Object })
// Block fields, with a linked dataset (__dataset__) underneath
const { d } = useSectionBlock(props)
const notConnected = ref(false)
function onSubmit(e) {
  if (!d.value.formAction) { e.preventDefault(); notConnected.value = true }
}
</script>
