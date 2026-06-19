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
    <path :fill="fill" :fill-opacity="opacity" d="M14 3H6.25A3.25 3.25 0 0 0 3 6.25V8.5h11zm1.5 5.5H21V6.25A3.25 3.25 0 0 0 17.75 3H15.5zM10 10v4h2.022a6.5 6.5 0 0 1 5.478-3 6.47 6.47 0 0 1 3.5 1.022V10zm-7 5.5h8.314a6.5 6.5 0 0 0-.314 2 6.47 6.47 0 0 0 1.022 3.5H6.25A3.25 3.25 0 0 1 3 17.75zM8.5 10H3v4h5.5zM23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-5 .5.001 2.503a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.497a.5.5 0 0 1 0 1z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTableOffsetAdd',
  mixins: [icon]
};
</script>
