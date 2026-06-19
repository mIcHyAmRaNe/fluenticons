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
    <path :fill="fill" :fill-opacity="opacity" d="m16.94 18.002 3.78 3.779a.75.75 0 0 0 1.06-1.061L3.28 2.22a.75.75 0 1 0-1.06 1.06l.409.41C2.239 4.093 2 4.643 2 5.25v10.502l.005.154a2.25 2.25 0 0 0 2.245 2.096h4.249V20.5H6.75l-.102.007A.75.75 0 0 0 6.75 22h10.5l.102-.007a.75.75 0 0 0-.102-1.493h-1.751v-2.498zm5.06-2.25c0 .83-.45 1.556-1.12 1.946l-4.869-4.87A6.52 6.52 0 0 0 22 11.193zM11 6.5q.002.77.172 1.49L6.182 3h5.84A6.47 6.47 0 0 0 11 6.5m12 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-5-3a.5.5 0 0 0-1 0v4.793l-1.646-1.647a.5.5 0 0 0-.708.708l2.5 2.5a.5.5 0 0 0 .708 0l2.5-2.5a.5.5 0 0 0-.708-.708L18 8.293zm-4.002 14.502.001 2.498h-4l-.001-2.498z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledDesktopArrowDownOff',
  mixins: [icon]
};
</script>
