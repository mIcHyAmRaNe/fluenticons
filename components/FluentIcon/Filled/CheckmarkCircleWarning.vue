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
    <path :fill="fill" :fill-opacity="opacity" d="M12 2c5.523 0 10 4.477 10 10 0 1.042-.16 2.047-.455 2.992l-.804-1.609c-.921-1.844-3.553-1.844-4.474 0l-3.996 7.998a2.5 2.5 0 0 0-.216.619H12C6.477 22 2 17.523 2 12S6.477 2 12 2m3.22 6.97-4.47 4.47-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5-5a.75.75 0 1 0-1.06-1.06m1.941 4.86c.553-1.107 2.133-1.107 2.686 0l3.997 7.998A1.5 1.5 0 0 1 22.5 24h-7.994a1.5 1.5 0 0 1-1.343-2.172zm1.843 2.666a.5.5 0 0 0-1 0v3.001a.5.5 0 0 0 1 0zm-.5 5.503a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledCheckmarkCircleWarning',
  mixins: [icon]
};
</script>
