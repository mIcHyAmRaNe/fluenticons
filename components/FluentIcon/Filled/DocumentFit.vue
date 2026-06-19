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
    <path :fill="fill" :fill-opacity="opacity" d="M6.25 2A2.25 2.25 0 0 0 4 4.25v15.5A2.25 2.25 0 0 0 6.25 22h11.5A2.25 2.25 0 0 0 20 19.75V4.25A2.25 2.25 0 0 0 17.75 2zM9 6.5a.5.5 0 0 0-.5.5v1.25a.75.75 0 0 1-1.5 0V7a2 2 0 0 1 2-2h1.25a.75.75 0 0 1 0 1.5zm0 11h1.25a.75.75 0 0 1 0 1.5H9a2 2 0 0 1-2-2v-1.25a.75.75 0 0 1 1.5 0V17a.5.5 0 0 0 .5.5M15.5 7a.5.5 0 0 0-.5-.5h-1.25a.75.75 0 0 1 0-1.5H15a2 2 0 0 1 2 2v1.25a.75.75 0 0 1-1.5 0zM15 17.5a.5.5 0 0 0 .5-.5v-1.25a.75.75 0 0 1 1.5 0V17a2 2 0 0 1-2 2h-1.25a.75.75 0 0 1 0-1.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledDocumentFit',
  mixins: [icon]
};
</script>
