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
    <path :fill="fill" :fill-opacity="opacity" d="M3.5 7.75a.75.75 0 0 0-1.5 0v13c0 .69.56 1.25 1.25 1.25h17.5c.69 0 1.25-.56 1.25-1.25v-13a.75.75 0 0 0-1.5 0V13h-2.498a6.5 6.5 0 0 0 .498-2.5c0-1.024-.462-1.94-1.058-2.7-.599-.765-1.378-1.431-2.127-1.973A19 19 0 0 0 12.38 4.1l-.053-.025-.015-.007-.004-.002h-.002a.75.75 0 0 0-.614 0h-.002l-.004.002-.015.007-.053.025q-.07.031-.194.093a19 19 0 0 0-2.74 1.634c-.749.542-1.528 1.208-2.127 1.972C5.962 8.56 5.5 9.476 5.5 10.5c0 .886.177 1.73.498 2.5H3.5zM16.331 13H7.67A5 5 0 0 1 7 10.5c0-.564.257-1.16.739-1.776.48-.612 1.137-1.184 1.826-1.682A17.3 17.3 0 0 1 12 5.58a17.3 17.3 0 0 1 2.435 1.46c.689.499 1.347 1.071 1.826 1.683.483.616.739 1.212.739 1.776 0 .91-.244 1.765-.669 2.5m4.169 7.5h-6v-2a2.5 2.5 0 0 0-5 0v2h-6v-6h17zm-9.5-2a1 1 0 1 1 2 0v2h-2zM3.75 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m17.5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedBuildingMosque',
  mixins: [icon]
};
</script>
