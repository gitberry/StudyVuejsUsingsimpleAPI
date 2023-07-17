<template>
  <suspense>
    <div class="baudy">
    <h1><center>Enterpretive Stops</center></h1>
    <div v-for="poi in poilist" :key="poi.id">
      <p :style="'color:' + poi.buttoncolor + ''" class="p-enterp-button">
        <RouterLink
          :style="'color:' + poi.buttoncolor + ''"
          class="ref-enterp-button"          
          :to="'/' + poi.id"
        >
          Stop {{ poi.id }} - {{ poi.title }}</RouterLink
        >
      </p>
    </div>
  </div>
  <template #fallback>
    <div>..Loading List..</div>
  </template>
</suspense>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const poilist = ref([]);

const loading = ref(true);
const apiURLcall = "https://northberry.ca/api_kristiCA/list";
axios.get(apiURLcall)
.then(({ data }) => {
  loading.value = false;
  poilist.value = data;
})
</script>

