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
    <path :fill="fill" :fill-opacity="opacity" d="M5.5 7a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0M8 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8m7.5 5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M17 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-5.25 8c.301 0 .588.06.851.166a2.5 2.5 0 0 0-1.393 1.334H4.25a.75.75 0 0 0-.75.75v.257l.007.08c.007.074.023.188.055.329.066.281.198.656.459 1.029C4.514 17.65 5.578 18.5 8 18.5c1.407 0 2.355-.287 3-.665v1.661c-.791.312-1.777.504-3 .504-2.828 0-4.39-1.025-5.208-2.195a4.5 4.5 0 0 1-.778-2.07A3 3 0 0 1 2 15.529v-.278A2.25 2.25 0 0 1 4.25 13zm.25 2.5a1.5 1.5 0 0 1 1.5-1.5h8a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-8a1.5 1.5 0 0 1-1.5-1.5zm1 .5v1a2 2 0 0 0 2-2h-1a1 1 0 0 1-1 1m9 1v-1a1 1 0 0 1-1-1h-1a2 2 0 0 0 2 2m-2 3h1a1 1 0 0 1 1-1v-1a2 2 0 0 0-2 2m-7-2v1a1 1 0 0 1 1 1h1a2 2 0 0 0-2-2m4.5 1.25a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedPeopleMoney',
  mixins: [icon]
};
</script>
