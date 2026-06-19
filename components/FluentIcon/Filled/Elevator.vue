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
    <path :fill="fill" :fill-opacity="opacity" d="M12.75 20h6A3.25 3.25 0 0 0 22 16.75v-9.5A3.25 3.25 0 0 0 18.75 4h-6zm3.97-5.22-1.75-1.75a.75.75 0 1 1 1.06-1.06l.47.47V9.5a.75.75 0 0 1 1.5 0v2.94l.47-.47a.75.75 0 1 1 1.06 1.06l-1.75 1.75a.75.75 0 0 1-1.06 0M11.25 4h-6A3.25 3.25 0 0 0 2 7.25v9.5A3.25 3.25 0 0 0 5.25 20h6zM7.28 8.97l1.75 1.75a.75.75 0 1 1-1.06 1.06l-.47-.47v2.94a.75.75 0 0 1-1.5 0v-2.94l-.47.47a.75.75 0 0 1-1.06-1.06l1.75-1.75a.75.75 0 0 1 1.06 0" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledElevator',
  mixins: [icon]
};
</script>
