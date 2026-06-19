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
    <path :fill="fill" :fill-opacity="opacity" d="M3.5 6a.5.5 0 0 1 .5-.5h6.5v13H4a.5.5 0 0 1-.5-.5zM12 18.5v-13h2V10a2 2 0 0 0 2 2h4.5v6a.5.5 0 0 1-.5.5zm3.5-11.878 3.879 3.878H16a.5.5 0 0 1-.5-.5zm5.914 3.793-5.828-5.829A2 2 0 0 0 14.172 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6.172a2.05 2.05 0 0 0-.586-1.413" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedDocumentLandscapeSplit',
  mixins: [icon]
};
</script>
