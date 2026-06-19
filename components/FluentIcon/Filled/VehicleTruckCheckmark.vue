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
    <path :fill="fill" :fill-opacity="opacity" d="M12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M5.854 8.854l4-4a.5.5 0 0 0-.708-.708L5.5 7.793 3.854 6.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0M6.5 13a6.5 6.5 0 0 0 5.478-10h2.272a2.25 2.25 0 0 1 2.25 2.25V6h1.55c.87 0 1.662.501 2.034 1.287l1.7 3.587c.142.301.216.63.216.963v5.413a2.25 2.25 0 0 1-2.25 2.25h-1.791a3 3 0 0 1-5.917 0H9.958a3 3 0 0 1-5.92-.01A2.25 2.25 0 0 1 2 17.25v-6.06A6.48 6.48 0 0 0 6.5 13m14 2.5h-1.25a.75.75 0 1 0 0 1.5h1.25zm-.317-4.5L18.73 7.929a.75.75 0 0 0-.678-.429H16.5V11zM7 20.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m9.5-1.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledVehicleTruckCheckmark',
  mixins: [icon]
};
</script>
