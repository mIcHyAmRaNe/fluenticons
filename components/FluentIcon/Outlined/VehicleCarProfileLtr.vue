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
    <path :fill="fill" :fill-opacity="opacity" d="M5.374 6.026A2.75 2.75 0 0 1 8.028 4h4.83a2.75 2.75 0 0 1 2.368 1.352l2.508 4.246 2.183.546A2.75 2.75 0 0 1 22 12.812V14.5a2.75 2.75 0 0 1-1.585 2.492 3.251 3.251 0 0 1-6.258.258H9.343a3.251 3.251 0 0 1-6.32-.61A2.75 2.75 0 0 1 2 14.5v-2.25a2.75 2.75 0 0 1 2.422-2.73zm8.664 9.724a3.25 3.25 0 0 1 6.274-.591c.12-.191.188-.417.188-.659v-1.688a1.25 1.25 0 0 0-.947-1.213L17.156 11H4.75c-.69 0-1.25.56-1.25 1.25v2.267a3.25 3.25 0 0 1 5.962 1.233zM11 9.5h4.934l-2-3.386a1.25 1.25 0 0 0-1.076-.614H11zm-1.5-4H8.028a1.25 1.25 0 0 0-1.206.921L5.982 9.5H9.5zm-3.25 9a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m9.25 1.75a1.75 1.75 0 1 0 3.5 0 1.75 1.75 0 0 0-3.5 0" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedVehicleCarProfileLtr',
  mixins: [icon]
};
</script>
