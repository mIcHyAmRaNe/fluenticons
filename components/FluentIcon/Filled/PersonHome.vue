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
    <path :fill="fill" :fill-opacity="opacity" d="M16.524 12.36a1.5 1.5 0 0 1 1.952 0l4 3.427c.332.285.524.7.524 1.139V22a1 1 0 0 1-1 1h-1.667a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1h-1.666a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H13a1 1 0 0 1-1-1v-5.074a1.5 1.5 0 0 1 .524-1.139zm-4.65 2.667A2.5 2.5 0 0 0 11 16.926v5.039c-2.916-.194-5.098-1.253-6.485-3.2a2.75 2.75 0 0 1-.511-1.596v-.92A2.25 2.25 0 0 1 6.253 14h6.82zM12 2.005a5 5 0 1 1 0 10 5 5 0 0 1 0-10" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledPersonHome',
  mixins: [icon]
};
</script>
