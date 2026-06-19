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
    <path :fill="fill" :fill-opacity="opacity" d="M11.752 2a2.75 2.75 0 0 1 2.752 2.752V19.25a2.752 2.752 0 1 1-5.504 0V4.752A2.75 2.75 0 0 1 11.752 2m7 5a2.75 2.75 0 0 1 2.752 2.752v9.498a2.752 2.752 0 1 1-5.504 0V9.752A2.75 2.75 0 0 1 18.752 7m-14 5a2.75 2.75 0 0 1 2.752 2.752v4.498a2.752 2.752 0 0 1-5.504 0v-4.498A2.75 2.75 0 0 1 4.752 12" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledPoll',
  mixins: [icon]
};
</script>
