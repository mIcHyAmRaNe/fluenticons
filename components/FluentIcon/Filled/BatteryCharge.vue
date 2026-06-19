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
    <path :fill="fill" :fill-opacity="opacity" d="M7.64 7.116v.001A1.3 1.3 0 0 0 8.8 9.004H10V11.6c0 1.474 1.983 1.945 2.648.632l2.71-5.344.07-.163c.086-.244.09-.494.035-.726H17a3 3 0 0 1 3 3v1h1.001a.996.996 0 0 1 1 1v2a1 1 0 0 1-1 1H20v1a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h3.206zm3.602-4.893c.19-.376.757-.24.757.18V6H14.2a.3.3 0 0 1 .268.437l-2.71 5.344c-.19.376-.757.24-.757-.18V8.004H8.8a.3.3 0 0 1-.268-.436z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledBatteryCharge',
  mixins: [icon]
};
</script>
