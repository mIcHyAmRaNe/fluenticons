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
    <path :fill="fill" :fill-opacity="opacity" d="M8.5 21H6.25A3.25 3.25 0 0 1 3 17.75V15.5h5.5zM21 17.75A3.25 3.25 0 0 1 17.75 21H10v-5.5h11zM8.5 14H3V6.25A3.25 3.25 0 0 1 6.25 3H8.5zm9.25-11A3.25 3.25 0 0 1 21 6.25V14H10V3z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledLayoutDynamic',
  mixins: [icon]
};
</script>
