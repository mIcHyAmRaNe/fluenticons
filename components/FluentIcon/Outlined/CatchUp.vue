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
    <path :fill="fill" :fill-opacity="opacity" d="M9.278 8.157a.25.25 0 0 1 .462-.001l3.236 7.766c.574 1.377 2.497 1.451 3.175.123l1.6-3.136a.75.75 0 0 1 .668-.41h.644a2 2 0 1 0 .205-1.5h-.85a2.25 2.25 0 0 0-2.004 1.228l-1.6 3.136a.25.25 0 0 1-.453-.018L11.124 7.58c-.6-1.441-2.644-1.434-3.235.011l-1.202 2.943a.75.75 0 0 1-.695.467h-1.26a2 2 0 1 0 .205 1.5h1.055a2.25 2.25 0 0 0 2.083-1.4z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedCatchUp',
  mixins: [icon]
};
</script>
