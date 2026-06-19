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
    <path :fill="fill" :fill-opacity="opacity" d="M15 15.505c0-.527.09-1.032.256-1.501H6.253a2.25 2.25 0 0 0-2.25 2.25v.92c0 .572.18 1.13.511 1.596C6.056 20.935 8.58 22.008 12 22.008q2.267 0 4-.63v-3.044a4.5 4.5 0 0 1-1-2.83m-3-13.5a5 5 0 0 1 5 5.001 5 5 0 1 1-5-5.002m11 13.5a3.5 3.5 0 1 1-7.001 0 3.5 3.5 0 0 1 7.001 0m-1 3.743a4.5 4.5 0 0 1-2.5.758c-.925 0-1.785-.28-2.5-.758v3.506c0 .201.226.32.392.206l2.108-1.453 2.108 1.453a.25.25 0 0 0 .392-.206z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledPersonRibbon',
  mixins: [icon]
};
</script>
