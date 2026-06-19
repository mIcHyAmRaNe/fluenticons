<template>
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <linearGradient v-if="fill === 'url(#g1)'" id="g1" :gradientTransform="`rotate(${angle})`">
      <stop class="main-stop" offset="0%" :stop-color="start" />
      <stop class="alt-stop" offset="100%" :stop-color="end" />
    </linearGradient>
    <radialGradient v-if="fill === 'url(#g2)'" id="g2" cx = "50%" cy = "50%" r = "50%">
      <stop :stop-color="start" offset = "0%"/>
      <stop :stop-color="end" offset = "100%"/>
    </radialGradient>
    <path :fill="fill" :fill-opacity="opacity" d="M18.5 20.002a.5.5 0 0 1-.5.5H9v1.5h9a2 2 0 0 0 2-2V9.83c0-.53-.211-1.04-.586-1.414l-5.829-5.829A2.05 2.05 0 0 0 12.172 2H6a2 2 0 0 0-2 2v7.257a4.5 4.5 0 0 1 1.5-.256v-7a.5.5 0 0 1 .5-.5h6V8a2 2 0 0 0 2 2h4.5zm-5-15.38L17.378 8.5H14a.5.5 0 0 1-.5-.5zM9 15.501a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-6 3.742v3.044a.71.71 0 0 0 1.212.503L5.5 21.503l1.288 1.288A.71.71 0 0 0 8 22.288v-3.044a4.5 4.5 0 0 1-2.5.758 4.48 4.48 0 0 1-2.5-.758" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedDocumentRibbon',
  mixins: [icon]
};
</script>
