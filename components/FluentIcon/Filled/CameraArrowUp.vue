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
    <path :fill="fill" :fill-opacity="opacity" d="M13.925 2.503a2.25 2.25 0 0 1 1.94 1.11L16.679 5h2.071A3.25 3.25 0 0 1 22 8.25v4.56A6.48 6.48 0 0 0 17.5 11q-.625.002-1.218.114A4.502 4.502 0 0 0 7.5 12.5c0 2.151 1.51 3.95 3.528 4.395Q11 17.193 11 17.5a6.47 6.47 0 0 0 1.022 3.5H5.25A3.25 3.25 0 0 1 2 17.75v-9.5A3.25 3.25 0 0 1 5.25 5h2.08l.875-1.424a2.25 2.25 0 0 1 1.917-1.073zM12 9.5a3 3 0 0 1 2.85 2.063 6.52 6.52 0 0 0-3.512 3.864A3.001 3.001 0 0 1 12 9.5m11 8a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-6 3a.5.5 0 0 0 1 0v-4.793l1.646 1.647a.5.5 0 0 0 .708-.708l-2.5-2.5a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 0 0 .708.708L17 15.707z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledCameraArrowUp',
  mixins: [icon]
};
</script>
