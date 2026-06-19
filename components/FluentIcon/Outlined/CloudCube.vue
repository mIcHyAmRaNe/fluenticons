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
    <path :fill="fill" :fill-opacity="opacity" d="M12 5.5a4.5 4.5 0 0 0-4.495 4.285.75.75 0 0 1-.75.715H6.5a3 3 0 1 0 0 6H12v1.253q0 .124.012.247H6.5a4.5 4.5 0 0 1-.42-8.98A6.001 6.001 0 0 1 17.917 9c-.355.012-.709.1-1.035.263l-.413.206A4.5 4.5 0 0 0 12 5.5m10.17 6.408-3.5-1.75a1.5 1.5 0 0 0-1.34 0l-3.5 1.75A1.5 1.5 0 0 0 13 13.25v4.503a1.5 1.5 0 0 0 .83 1.342l3.5 1.75a1.5 1.5 0 0 0 1.34 0l3.5-1.75a1.5 1.5 0 0 0 .83-1.342V13.25a1.5 1.5 0 0 0-.83-1.342m-7.617 1.368a.5.5 0 0 1 .67-.223L18 14.44l2.776-1.388a.5.5 0 1 1 .448.894L18.5 15.31v3.19a.5.5 0 1 1-1 0v-3.19l-2.724-1.363a.5.5 0 0 1-.223-.67" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedCloudCube',
  mixins: [icon]
};
</script>
