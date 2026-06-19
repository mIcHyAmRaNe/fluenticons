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
    <path :fill="fill" :fill-opacity="opacity" d="M12 5.5a4.5 4.5 0 0 0-4.495 4.285.75.75 0 0 1-.75.715H6.5a3 3 0 1 0 0 6h2.668a1.76 1.76 0 0 0 0 1.5H6.5a4.5 4.5 0 0 1-.42-8.98 6.001 6.001 0 0 1 11.84 0 4.5 4.5 0 0 1 3.75 6.175l-1.21-1.209q.04-.237.04-.486a3 3 0 0 0-3-3h-.256a.75.75 0 0 1-.749-.715A4.5 4.5 0 0 0 12 5.5m1.78 9.78a.75.75 0 1 0-1.06-1.06l-2.5 2.5a.75.75 0 0 0 0 1.06l2.5 2.5a.75.75 0 1 0 1.06-1.06L12.56 18h6.88l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22h-6.88z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedCloudSwap',
  mixins: [icon]
};
</script>
