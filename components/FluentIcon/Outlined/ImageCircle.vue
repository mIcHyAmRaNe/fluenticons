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
    <path :fill="fill" :fill-opacity="opacity" d="M12 3.5a8.5 8.5 0 0 0-6.51 13.965l4.934-4.843a2.25 2.25 0 0 1 3.152 0l4.935 4.843A8.5 8.5 0 0 0 12 3.5m5.449 15.024-4.924-4.831a.75.75 0 0 0-1.05 0L6.55 18.524A8.47 8.47 0 0 0 12 20.5a8.47 8.47 0 0 0 5.449-1.976M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m13.25-2.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m0 1.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedImageCircle',
  mixins: [icon]
};
</script>
