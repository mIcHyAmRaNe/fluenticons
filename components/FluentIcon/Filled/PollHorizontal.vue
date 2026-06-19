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
    <path :fill="fill" :fill-opacity="opacity" d="M22 11.752a2.75 2.75 0 0 1-2.751 2.752h-14.5A2.752 2.752 0 1 1 4.75 9h14.5A2.75 2.75 0 0 1 22 11.752m-5 7a2.75 2.75 0 0 1-2.751 2.752h-9.5a2.752 2.752 0 1 1 0-5.504h9.5A2.75 2.75 0 0 1 17 18.752m-5-14a2.75 2.75 0 0 1-2.752 2.752H4.75A2.752 2.752 0 1 1 4.75 2h4.498A2.75 2.75 0 0 1 12 4.752" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledPollHorizontal',
  mixins: [icon]
};
</script>
