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
    <path :fill="fill" :fill-opacity="opacity" d="M3 6.75A.75.75 0 0 1 3.75 6h3.257A3.75 3.75 0 0 1 9.66 7.098l2.95 2.95a3.25 3.25 0 0 0 2.298.952h4.53L15.72 7.28a.75.75 0 1 1 1.06-1.06l4.999 5a.75.75 0 0 1 0 1.06l-4.999 5a.75.75 0 1 1-1.06-1.06l3.718-3.72h-4.47a3.25 3.25 0 0 0-2.357 1.012l-2.68 2.82A3.75 3.75 0 0 1 7.212 17.5H3.75a.75.75 0 0 1 0-1.5h3.462a2.25 2.25 0 0 0 1.631-.7l2.68-2.822q.388-.406.853-.709a4.8 4.8 0 0 1-.828-.66l-2.95-2.95a2.25 2.25 0 0 0-1.59-.659H3.75A.75.75 0 0 1 3 6.75" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedMerge',
  mixins: [icon]
};
</script>
