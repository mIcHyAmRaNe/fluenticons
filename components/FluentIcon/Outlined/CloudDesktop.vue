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
    <path :fill="fill" :fill-opacity="opacity" d="M22 13a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-3v1.5h.25a.75.75 0 0 1 .746.824l.004.051c0 .276-.349.625-.625.625h-3.75c-.276 0-.625-.349-.625-.625q0-.026.004-.05L15 22.25a.75.75 0 0 1 .75-.75H16V20h-3a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1zM12 4a6 6 0 0 1 5.92 5.02A4.5 4.5 0 0 1 21.744 12h-1.65a3 3 0 0 0-2.594-1.5h-.256a.75.75 0 0 1-.749-.715 4.5 4.5 0 0 0-8.99 0 .75.75 0 0 1-.75.715H6.5a3 3 0 1 0 0 6H11V18H6.5a4.5 4.5 0 0 1-.42-8.98A6 6 0 0 1 12 4" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedCloudDesktop',
  mixins: [icon]
};
</script>
