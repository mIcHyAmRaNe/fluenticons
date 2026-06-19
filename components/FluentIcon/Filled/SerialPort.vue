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
    <path :fill="fill" :fill-opacity="opacity" d="M2.231 10.386a2.75 2.75 0 0 1 2.676-3.387H19.09a2.75 2.75 0 0 1 2.675 3.388l-1.074 4.502A2.75 2.75 0 0 1 18.017 17H5.978a2.75 2.75 0 0 1-2.675-2.113zM7 11.5A.75.75 0 1 0 7 10a.75.75 0 0 0 0 1.5m3.25-.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0m-2 3.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m3.25-.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m3.25-.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0M12 11.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m3.25-.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledSerialPort',
  mixins: [icon]
};
</script>
