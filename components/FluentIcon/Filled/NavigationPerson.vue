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
    <path :fill="fill" :fill-opacity="opacity" d="M3 17h13.337c.178.375.42.713.713 1h-.277a2.77 2.77 0 0 0-2.133 1H3a1 1 0 0 1-.117-1.993zm0-4 14.052-.002A3.5 3.5 0 0 1 19.5 12c.816 0 1.567.28 2.162.747a1 1 0 0 0-.662-1.75L3 11l-.117.007A1 1 0 0 0 3 13m0-8h18a1 1 0 0 1 .117 1.993L21 7H3a1 1 0 0 1-.117-1.993zm19 10.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m2 5.375C24 22.431 22.714 24 19.5 24S15 22.437 15 20.875v-.103c0-.98.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledNavigationPerson',
  mixins: [icon]
};
</script>
