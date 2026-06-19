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
    <path :fill="fill" :fill-opacity="opacity" d="M11.314 15.5a6.5 6.5 0 0 1 .708-1.5h-6.77a2.25 2.25 0 0 0-2.248 2.248v.578c0 .892.318 1.756.898 2.435C5.468 21.095 7.854 22 11 22q.9 0 1.717-.1a6.5 6.5 0 0 1-.994-1.419q-.352.018-.723.018c-2.738 0-4.704-.745-5.957-2.213a2.25 2.25 0 0 1-.54-1.461v-.578a.75.75 0 0 1 .75-.749zM11 2.003a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-9 0a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0-.5.5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedPersonSubtract',
  mixins: [icon]
};
</script>
