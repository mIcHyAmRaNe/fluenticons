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
    <path :fill="fill" :fill-opacity="opacity" d="M5.5 2.25A2.5 2.5 0 0 1 7.885 4h8.865l.219.006a4.25 4.25 0 0 1-.219 8.494h-9.5a2.75 2.75 0 1 0 0 5.5h8.865a2.5 2.5 0 1 1 0 1.5H7.25a4.25 4.25 0 0 1 0-8.5h9.5a2.75 2.75 0 0 0 .281-5.485L16.75 5.5H7.885A2.5 2.5 0 1 1 5.5 2.25" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedFlowDot',
  mixins: [icon]
};
</script>
