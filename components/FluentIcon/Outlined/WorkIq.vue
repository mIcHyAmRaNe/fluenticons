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
    <path :fill="fill" :fill-opacity="opacity" d="M12 3c5.523 0 10 4.477 10 10a6.5 6.5 0 0 1-3.5 5.766V19a2.5 2.5 0 0 0 2.5 2.5h.25a.75.75 0 0 1 0 1.5H21a4 4 0 0 1-3.986-3.68c-.486.116-.993.18-1.514.18h-1a4 4 0 1 1 4-4v1.499a4.99 4.99 0 0 0 2-3.999 8.5 8.5 0 0 0-17 0v.5a3 3 0 0 0 3 3h1.75a.75.75 0 0 1 0 1.5H6.5A4.5 4.5 0 0 1 2 13.5V13C2 7.477 6.477 3 12 3m2.5 10a2.5 2.5 0 0 0 0 5h1c.523 0 1.026-.08 1.5-.23V15.5a2.5 2.5 0 0 0-2.5-2.5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedWorkIq',
  mixins: [icon]
};
</script>
