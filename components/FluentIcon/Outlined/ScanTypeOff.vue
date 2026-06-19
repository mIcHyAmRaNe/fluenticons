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
    <path :fill="fill" :fill-opacity="opacity" d="M2.483 3.544A3.24 3.24 0 0 0 2 5.25v3a.75.75 0 0 0 1.5 0v-3q.002-.31.101-.588L7 8.06V9a.75.75 0 0 0 1.366.427l2.884 2.884V15.5h-1.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 .716-.973l4.372 4.372a1.8 1.8 0 0 1-.588.101h-3a.75.75 0 0 0 0 1.5h3c.626 0 1.21-.177 1.706-.483l.263.264a.75.75 0 0 0 1.061-1.061L3.28 2.22a.75.75 0 1 0-1.06 1.06zm11.99 11.99a.8.8 0 0 0-.223-.034h-1.5v-1.69zM10.182 7l2.568 2.568V8.5h2.75V9A.75.75 0 0 0 17 9V7.75a.75.75 0 0 0-.75-.75zM20.5 17.318l1.5 1.5V15.75a.75.75 0 0 0-1.5 0zM5.183 2.001 6.682 3.5H8.25a.75.75 0 0 0 0-1.5zm.067 18.5a1.75 1.75 0 0 1-1.75-1.75v-3a.75.75 0 0 0-1.5 0v3A3.25 3.25 0 0 0 5.25 22h3a.75.75 0 0 0 0-1.5zM20.5 5.25a1.75 1.75 0 0 0-1.75-1.75h-3a.75.75 0 0 1 0-1.5h3A3.25 3.25 0 0 1 22 5.25v3a.75.75 0 0 1-1.5 0z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedScanTypeOff',
  mixins: [icon]
};
</script>
