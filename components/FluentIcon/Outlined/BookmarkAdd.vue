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
    <path :fill="fill" :fill-opacity="opacity" d="M23 6.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0M18 7v2.504a.5.5 0 1 1-1 0V7h-2.505a.5.5 0 0 1 0-1H17V3.5a.5.5 0 0 1 1 0V6h2.496a.5.5 0 0 1 0 1zm-.5 12.782V13a6.5 6.5 0 0 0 1.5-.174v8.42a.75.75 0 0 1-1.188.608l-5.81-4.181-5.812 4.18a.75.75 0 0 1-1.188-.608V6.25A3.25 3.25 0 0 1 8.252 3h3.77a6.5 6.5 0 0 0-.709 1.5H8.252a1.75 1.75 0 0 0-1.75 1.75v13.533l5.061-3.642a.75.75 0 0 1 .876 0z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedBookmarkAdd',
  mixins: [icon]
};
</script>
