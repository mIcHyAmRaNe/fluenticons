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
    <path :fill="fill" :fill-opacity="opacity" d="M4 6.25A2.25 2.25 0 0 1 6.25 4h11.5A2.25 2.25 0 0 1 20 6.25v4.087A3.5 3.5 0 0 0 16.05 16h-9.8A2.25 2.25 0 0 1 4 13.75zm9 12.522c0-.459.111-.891.308-1.272H2.75a.75.75 0 0 0 0 1.5h10.252L13 18.875zm8-5.272a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m2 5.375C23 20.431 21.714 22 18.5 22S14 20.437 14 18.875v-.103c0-.98.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledLaptopPerson',
  mixins: [icon]
};
</script>
