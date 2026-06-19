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
    <path :fill="fill" :fill-opacity="opacity" d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l1.263 1.264A3.24 3.24 0 0 0 3 6.25v11.5c0 .626.177 1.21.483 1.706l6.926-6.926c.186-.186.396-.332.62-.44l1.49 1.49a.75.75 0 0 0-1.05.011l-6.925 6.926c.496.306 1.08.483 1.706.483h11.5c.626 0 1.21-.177 1.706-.483l1.263 1.264a.75.75 0 0 0 1.061-1.061zM21 17.75v.068L6.182 3H17.75A3.25 3.25 0 0 1 21 6.25zM16.5 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledImageOff',
  mixins: [icon]
};
</script>
