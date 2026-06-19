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
    <path :fill="fill" :fill-opacity="opacity" d="M14 5c0 .53-.206 1.012-.543 1.37l2.624 3.28a.25.25 0 0 0 .307.068l2.65-1.326A2.004 2.004 0 0 1 21 6a2 2 0 0 1 .444 3.95l-1.804 9.623A1.75 1.75 0 0 1 17.92 21H6.08a1.75 1.75 0 0 1-1.72-1.427L2.556 9.95a2 2 0 1 1 2.406-1.559l2.65 1.326a.25.25 0 0 0 .307-.068l2.624-3.28A2 2 0 1 1 14 5m-2 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledCrown',
  mixins: [icon]
};
</script>
