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
    <path :fill="fill" :fill-opacity="opacity" d="M10 5.039v.778l3.027 1.202h2.119l-1.25-2.808C13.002 2.202 10 2.841 10 5.039m2.72 2.935L8.5 6.297v-1.54c0-1.738-2.259-2.414-3.213-.961l-1.91 2.908a2.304 2.304 0 0 0 1.039 3.39l3.503 1.464-2.045 1.898c-1.627 1.511-.004 4.165 2.082 3.405l6.761-2.464 3.463 1.446A2.036 2.036 0 0 0 21 13.965v-1.23a4.715 4.715 0 0 0-4.715-4.716h-3.326a.6.6 0 0 1-.238-.045M3 20.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledAirplaneLanding',
  mixins: [icon]
};
</script>
