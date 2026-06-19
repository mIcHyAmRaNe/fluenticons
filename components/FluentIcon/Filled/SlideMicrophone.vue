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
    <path :fill="fill" :fill-opacity="opacity" d="M22.25 16a.75.75 0 0 1 .75.75 4.75 4.75 0 0 1-4 4.69v.81a.75.75 0 0 1-1.5 0v-.81a4.75 4.75 0 0 1-4-4.69.75.75 0 0 1 1.5 0 3.25 3.25 0 0 0 6.5 0 .75.75 0 0 1 .75-.75m-3.5-12a2.75 2.75 0 0 1 2.75 2.75v7.5a3.25 3.25 0 0 0-6.5 0v.92a1.75 1.75 0 0 0-2.5 1.58A5.7 5.7 0 0 0 13.506 20H4.25a2.75 2.75 0 0 1-2.75-2.75V6.75A2.75 2.75 0 0 1 4.25 4zm-.5 8a2.25 2.25 0 0 1 2.25 2.25v2.5a2.25 2.25 0 0 1-4.5 0v-2.5A2.25 2.25 0 0 1 18.25 12m-12 2a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zm0-3a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zm0-3a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledSlideMicrophone',
  mixins: [icon]
};
</script>
