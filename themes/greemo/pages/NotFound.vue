<template>
  <section class="hero page-hero"><div class="wrap">
    <span class="pill"><i></i>404</span>
    <h1>Page not found</h1>
    <p class="lead">The page you were looking for does not exist.</p>
    <div class="ctas" style="display:flex;gap:12px;margin-top:28px"><router-link class="btn btn-green" to="/">Back to home</router-link><router-link class="btn btn-ghost" to="/features">See all features</router-link></div>
  </div></section>
</template>
<script setup>
document.title = 'Page not found | Greemo'
</script>
