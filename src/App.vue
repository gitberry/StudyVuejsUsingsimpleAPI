<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <h1 class="header"><a href="/kristiapi/" class="headerlink">Kristi&nbsp;Lake Nature&nbsp;Trail</a></h1>
  <RouterView />
  <div class="footer">
    Web Brochure maintained by C.R. - volunteer, skiier, hiker, biker and more of this lovely place.
  </div>
</template>

<script>
export default {
  name: 'App'
    };
</script>
