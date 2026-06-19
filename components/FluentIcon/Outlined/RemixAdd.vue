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
    <path :fill="fill" :fill-opacity="opacity" d="M2 2.75A.75.75 0 0 1 2.75 2H12c5.523 0 10 4.477 10 10a9.98 9.98 0 0 1-3.385 7.5h-2.611A8.503 8.503 0 0 0 12 3.5H2.75A.75.75 0 0 1 2 2.75m8.362 19.116Q11.162 22 12 22h9.25a.75.75 0 0 0 0-1.5H12A8.496 8.496 0 0 1 3.5 12a8.5 8.5 0 0 1 4.496-7.5h-2.61A9.98 9.98 0 0 0 2 12c0 4.965 3.618 9.085 8.362 9.866M12 8a.75.75 0 0 1 .75.75v2.5h2.5a.75.75 0 0 1 0 1.5h-2.5v2.5a.75.75 0 0 1-1.5 0v-2.5h-2.5a.75.75 0 0 1 0-1.5h2.5v-2.5A.75.75 0 0 1 12 8" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedRemixAdd',
  mixins: [icon]
};
</script>
