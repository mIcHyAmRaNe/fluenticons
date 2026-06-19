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
    <path :fill="fill" :fill-opacity="opacity" d="M9 10.06v9.19a2.752 2.752 0 0 0 5.504 0v-3.685L16 17.06v2.189a2.752 2.752 0 0 0 4.396 2.207l.323.323a.75.75 0 0 0 1.061-1.06L3.28 2.22a.75.75 0 1 0-1.06 1.06zm7 2.758 5.504 5.504v-8.57a2.752 2.752 0 1 0-5.504 0zm-7-7 5.504 5.504v-6.57a2.752 2.752 0 1 0-5.504 0zM4.752 12a2.75 2.75 0 0 1 2.752 2.751v4.499a2.752 2.752 0 0 1-5.504 0v-4.5A2.75 2.75 0 0 1 4.752 12" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledPollOff',
  mixins: [icon]
};
</script>
