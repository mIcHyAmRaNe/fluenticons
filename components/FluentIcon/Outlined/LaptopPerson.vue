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
    <path :fill="fill" :fill-opacity="opacity" d="M6.25 4A2.25 2.25 0 0 0 4 6.25v7.5A2.25 2.25 0 0 0 6.25 16h9.8a3.5 3.5 0 0 1-.905-1.5H6.25a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 .75.75V10c.537 0 1.045.12 1.5.337V6.25A2.25 2.25 0 0 0 17.75 4zm-3.5 13.5h10.558A2.76 2.76 0 0 0 13 18.772v.103q0 .063.002.125H2.75a.75.75 0 0 1 0-1.5m18.25-4a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m2 5.375C23 20.431 21.714 22 18.5 22S14 20.437 14 18.875v-.103c0-.98.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedLaptopPerson',
  mixins: [icon]
};
</script>
