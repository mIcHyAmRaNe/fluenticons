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
    <path :fill="fill" :fill-opacity="opacity" d="M11.678.005C5.303.17.166 5.308 0 11.683zM2.39 19.193a12 12 0 0 1-1.752-3.31L15.878.642a12 12 0 0 1 3.31 1.751zM23.356 8.125 8.12 23.36a12 12 0 0 1-3.312-1.75L21.606 4.813c.746.996 1.34 2.11 1.75 3.312m.635 4.201-11.67 11.67c6.37-.17 11.5-5.301 11.67-11.67" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedPresenceTentative',
  mixins: [icon]
};
</script>
