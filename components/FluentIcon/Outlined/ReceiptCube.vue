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
    <path :fill="fill" :fill-opacity="opacity" d="M4 5.25A2.25 2.25 0 0 1 6.25 3h9.5A2.25 2.25 0 0 1 18 5.25V14h4v3.75A3.25 3.25 0 0 1 18.75 21h-7.083c.214-.372.333-.8.333-1.247V19.5h4.5V5.25a.75.75 0 0 0-.75-.75h-9.5a.75.75 0 0 0-.75.75v5.8q-.32.066-.618.214l-.882.44zm9.75 7.25H9.59l-2.04-1.02a.75.75 0 0 1 .7-.48h5.5a.75.75 0 0 1 0 1.5m4.25 7h.75a1.75 1.75 0 0 0 1.75-1.75V15.5H18zM8.25 7a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zm1.92 6.908-3.5-1.75a1.5 1.5 0 0 0-1.34 0l-3.5 1.75A1.5 1.5 0 0 0 1 15.25v4.503a1.5 1.5 0 0 0 .83 1.342l3.5 1.75a1.5 1.5 0 0 0 1.34 0l3.5-1.75a1.5 1.5 0 0 0 .83-1.342V15.25a1.5 1.5 0 0 0-.83-1.342m-7.617 1.368a.5.5 0 0 1 .67-.223L6 16.44l2.776-1.388a.5.5 0 1 1 .448.894L6.5 17.31v3.19a.5.5 0 1 1-1 0v-3.19l-2.724-1.363a.5.5 0 0 1-.223-.67" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedReceiptCube',
  mixins: [icon]
};
</script>
