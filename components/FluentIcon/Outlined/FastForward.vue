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
    <path :fill="fill" :fill-opacity="opacity" d="M11.5 5.503c0-1.28 1.498-1.971 2.472-1.142l7.41 6.306a1.75 1.75 0 0 1 0 2.665l-7.41 6.306c-.974.83-2.472.137-2.472-1.142v-3.987l-6.028 5.13C4.498 20.468 3 19.776 3 18.497V5.504c0-1.28 1.498-1.972 2.472-1.143l6.028 5.13zm0 5.958-7-5.957v12.993l7-5.957zm8.91.348L13 5.503v12.993l7.41-6.306a.25.25 0 0 0 0-.38" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedFastForward',
  mixins: [icon]
};
</script>
