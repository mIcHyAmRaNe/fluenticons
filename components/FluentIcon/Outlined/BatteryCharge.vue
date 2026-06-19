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
    <path :fill="fill" :fill-opacity="opacity" d="M7.642 7.116a1.3 1.3 0 0 0-.124.384H5a1.5 1.5 0 0 0-1.493 1.355L3.5 9v6a1.5 1.5 0 0 0 1.355 1.493L5 16.5h11.998a1.5 1.5 0 0 0 1.493-1.355l.007-.145V9a1.5 1.5 0 0 0-1.355-1.493l-.145-.007H15.05l.31-.611c.148-.293.172-.605.103-.889H17a3 3 0 0 1 3 3v1h1.001a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H20v1a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h3.207zm3.6-4.893c.19-.376.757-.24.757.18V6H14.2a.3.3 0 0 1 .268.436l-2.71 5.345c-.19.376-.756.24-.756-.18V8.004H8.801a.3.3 0 0 1-.268-.436z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedBatteryCharge',
  mixins: [icon]
};
</script>
