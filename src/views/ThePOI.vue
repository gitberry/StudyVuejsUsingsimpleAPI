<template>
  <suspense>
  <div class="baudy">
    <h2 class="scrn-small">
      <a v-bind:href="poidata.previd" class="nav-button nav-back"><span class="arrow left"></span></a>
      Stop # {{ poidata.id }}
      <a v-bind:href="poidata.nextid" class="nav-button nav-forward"><span class="arrow right"></span></a>
    </h2>
    <h2 class="scrn-small">{{ poidata.title }}</h2>
    <h2 class="scrn-wide"># {{ poidata.id }} - {{ poidata.title }}</h2>
    <div v-html="poidata.blurbhtml"></div>          
  <div class="nav-footer">
    <a v-bind:href="poidata.previd" class="nav-button nav-back"><span class="arrow left"></span>back</a>
    <a href="/kristiapi/" class="nav-button nav-home">main</a>
    <a v-bind:href="poidata.nextid" class="nav-button nav-forward">next<span class="arrow right"></span></a>     
  </div>
  </div>
  <template #fallback>
    <div>..Loading..</div>
  </template>
</suspense>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRoute } from 'vue-router'

const poidata = ref([]);

const loading = ref(true);
const rowt = useRoute();
const apiURLcall = "https://northberry.ca/api_kristiCA/poi/" + rowt.params.id;
axios.get(apiURLcall)
.then(({ data }) => {
  loading.value = false;
  poidata.value = data;
})
</script>
