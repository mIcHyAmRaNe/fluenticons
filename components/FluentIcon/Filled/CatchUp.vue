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
    <path :fill="fill" :fill-opacity="opacity" d="M11.372 7.269c-.666-1.701-3.076-1.692-3.73.013l-1.207 3.149a.5.5 0 0 1-.466.32H4.562a2 2 0 1 0 .292 2H5.97a2.5 2.5 0 0 0 2.334-1.605L9.51 7.998l3.22 8.227c.638 1.628 2.91 1.712 3.666.136l1.597-3.326a.5.5 0 0 1 .45-.283h.703a2 2 0 1 0 .292-2h-.994a2.5 2.5 0 0 0-2.254 1.418l-1.597 3.326z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledCatchUp',
  mixins: [icon]
};
</script>
