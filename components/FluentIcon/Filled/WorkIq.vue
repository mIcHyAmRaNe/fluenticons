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
    <path :fill="fill" :fill-opacity="opacity" d="M12 3c5.523 0 10 4.477 10 10 0 2.507-1.42 4.68-3.5 5.764V14a4 4 0 1 0-4 4h.25a.75.75 0 0 0 0-1.5h-.25A2.5 2.5 0 1 1 17 14v5a2.506 2.506 0 0 0 2.5 2.5h.25a.75.75 0 0 1 0 1.5h-.25a4 4 0 0 1-3.969-3.501l-.031.001h-1a5.48 5.48 0 0 1-3.773-1.5H6.5A4.5 4.5 0 0 1 2 13.5V13C2 7.477 6.477 3 12 3" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledWorkIq',
  mixins: [icon]
};
</script>
