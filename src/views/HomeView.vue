<script setup>
//import TheWelcome from '../components/TheWelcome.vue'
import POIList from '../components/POIList.vue'
</script>

<template>
  <div style="text-align: center; vertical-align: top">
    <a style="text-decoration: none !important">
      <span style="display: inline-flex; align-items: flex-start; padding: 5px">
        <img src="@/assets/MainGraphic.png" class="main-graphic" />
      </span>
    </a>
    <POIList/>
    <a
      href="KristiLakeNatureTrailBrochure.pdf"
      target="_blank"
      style="text-decoration: none !important"
    >
      <span style="display: inline-flex; align-items: flex-start; padding: 5px">
        <img src="@/assets/MainGraphicClick.png" class="main-graphic" />
      </span>
    </a>
  </div>
</template>
