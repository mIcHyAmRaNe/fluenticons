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
    <path :fill="fill" :fill-opacity="opacity" d="M12 2a6 6 0 0 0-5.92 5.02A4.5 4.5 0 0 0 6.5 16h6.68l.133-.507a3 3 0 0 1 2.487-2.214 3.75 3.75 0 0 1 6.153-1.128q.047-.32.047-.651a4.5 4.5 0 0 0-4.08-4.48A6 6 0 0 0 12 2m7.25 11.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5m-3.034 2.25h.471a2.751 2.751 0 1 0-.142-1.5h-.33a2 2 0 0 0-1.934 1.495l-1.013 3.881a.5.5 0 0 1-.484.374h-.795a2.75 2.75 0 1 0-.289 1.5h1.084a2 2 0 0 0 1.935-1.495l1.013-3.881a.5.5 0 0 1 .484-.374M8 20.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledCloudFlow',
  mixins: [icon]
};
</script>
