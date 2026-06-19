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
    <path :fill="fill" :fill-opacity="opacity" d="m9.798 3.237 1.495 1.495-6.561 6.56-1.495-1.494a3.25 3.25 0 0 1 0-4.596l1.965-1.965a3.25 3.25 0 0 1 4.596 0M14.2 20.762l-1.494-1.495 6.56-6.56 1.495 1.494a3.25 3.25 0 0 1 0 4.597l-1.964 1.964a3.25 3.25 0 0 1-4.596 0m-10.964-6.56a3.25 3.25 0 0 0 0 4.596l1.965 1.964a3.25 3.25 0 0 0 4.596 0L20.762 9.798a3.25 3.25 0 0 0 0-4.596l-1.964-1.965a3.25 3.25 0 0 0-4.596 0zM12.75 9a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M9 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m3 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m3.75-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M12 15.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledPatch',
  mixins: [icon]
};
</script>
