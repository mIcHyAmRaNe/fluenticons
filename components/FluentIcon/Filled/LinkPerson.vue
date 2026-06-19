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
    <path :fill="fill" :fill-opacity="opacity" d="M10 6a1 1 0 0 0-1-1H7l-.217.005A5 5 0 0 0 7 15h2l.117-.007A1 1 0 0 0 9 13H7l-.176-.005A3 3 0 0 1 7 7h2l.117-.007A1 1 0 0 0 10 6m12 4a5 5 0 0 0-5-5h-2l-.117.007A1 1 0 0 0 15 7h2l.176.005a3 3 0 0 1 2.338 4.632 3.5 3.5 0 0 1 1.265 1.637A4.98 4.98 0 0 0 22 10m-5-1H7l-.117.007A1 1 0 0 0 7 11h10l.117-.007A1 1 0 0 0 17 9m3 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m2 5.375C22 21.431 20.714 23 17.5 23S13 21.437 13 19.875v-.103c0-.98.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledLinkPerson',
  mixins: [icon]
};
</script>
