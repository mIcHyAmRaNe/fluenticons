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
    <path :fill="fill" :fill-opacity="opacity" d="M6.25 3A2.25 2.25 0 0 0 4 5.25v13.5A2.25 2.25 0 0 0 6.25 21h2.5A2.25 2.25 0 0 0 11 18.75V5.25A2.25 2.25 0 0 0 8.75 3zM5.5 5.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1-.75-.75zM15.25 3A2.25 2.25 0 0 0 13 5.25v13.5A2.25 2.25 0 0 0 15.25 21h2.5A2.25 2.25 0 0 0 20 18.75V5.25A2.25 2.25 0 0 0 17.75 3zm-.75 2.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1-.75-.75z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedPause',
  mixins: [icon]
};
</script>
