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
    <path :fill="fill" :fill-opacity="opacity" d="M12 3.5a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1A.75.75 0 0 1 12 3.5M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10m0-1.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7m7.75-2.75a.75.75 0 0 0 0-1.5h-1a.75.75 0 0 0 0 1.5zM12 18a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1A.75.75 0 0 1 12 18m-6.75-5.25a.75.75 0 0 0 0-1.5h-1a.75.75 0 0 0 0 1.5zm.97-6.53a.75.75 0 0 1 1.06 0l.5.5a.75.75 0 0 1-1.06 1.06l-.5-.5a.75.75 0 0 1 0-1.06m1.06 11.56a.75.75 0 0 1-1.06-1.06l.5-.5a.75.75 0 0 1 1.06 1.06zm10.5-11.56a.75.75 0 0 0-1.06 0l-.5.5a.75.75 0 0 0 1.06 1.06l.5-.5a.75.75 0 0 0 0-1.06m-1.06 11.56a.75.75 0 1 0 1.06-1.06l-.5-.5a.75.75 0 1 0-1.06 1.06z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedBrightnessLow',
  mixins: [icon]
};
</script>
