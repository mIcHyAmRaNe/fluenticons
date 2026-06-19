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
    <path :fill="fill" :fill-opacity="opacity" d="M8.5 11a5.5 5.5 0 0 1 5.5 5.5A5.5 5.5 0 1 1 8.5 11m1.295-6.66a1.5 1.5 0 0 1 1.76-.103l3.618 2.318 1.145.726a1.5 1.5 0 0 1 .334 2.244L14.525 12h4.476a1.5 1.5 0 0 1 1.48 1.747l-1.001 6a1.5 1.5 0 0 1-2.96-.494L17.23 15h-1.893a7.01 7.01 0 0 0-4.656-5.152l1.434-1.69-1.174-.752L9.915 8.41a1.5 1.5 0 0 1-2.096-2.146L9.7 4.427zM18.5 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledWheelchairAccess',
  mixins: [icon]
};
</script>
