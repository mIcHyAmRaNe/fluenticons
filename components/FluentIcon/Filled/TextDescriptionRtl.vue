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
    <path :fill="fill" :fill-opacity="opacity" d="M21 17H9a1 1 0 0 0-.117 1.993L9 19h12a1 1 0 0 0 .117-1.993zH9zm0-4H3a1 1 0 0 0-.117 1.993L3 15h18a1 1 0 0 0 .117-1.993zH3zm0-4H3a1 1 0 0 0-.117 1.993L3 11h18a1 1 0 0 0 .117-1.993zH3zm0-4H3a1 1 0 0 0-.117 1.993L3 7h18a1 1 0 0 0 .117-1.993zH3z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTextDescriptionRtl',
  mixins: [icon]
};
</script>
