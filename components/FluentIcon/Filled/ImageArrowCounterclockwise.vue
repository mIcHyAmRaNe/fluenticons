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
    <path :fill="fill" :fill-opacity="opacity" d="M11.559 13.647a.75.75 0 0 1 .873-.007l.093.078 6.928 6.8A3.24 3.24 0 0 1 17.75 21H6.25a3.24 3.24 0 0 1-1.703-.481l6.928-6.801zM17.75 3A3.25 3.25 0 0 1 21 6.25v11.5a3.24 3.24 0 0 1-.485 1.709l-6.939-6.811-.129-.118a2.25 2.25 0 0 0-2.887-.006l-.136.124-6.939 6.811A3.24 3.24 0 0 1 3 17.75v-5.771A6.5 6.5 0 0 0 11.979 3zM6.5 1a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m9.252 5a2.252 2.252 0 1 0 0 4.504 2.252 2.252 0 0 0 0-4.504M6.501 3A3.5 3.5 0 0 0 4 4.05V3.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 0-1h-.999a2.5 2.5 0 1 1 .179 3.214A.64.64 0 0 0 4.222 8c-.41 0-.672.427-.409.742A3.5 3.5 0 1 0 6.501 3m9.251 4.5a.752.752 0 1 1 0 1.504.752.752 0 0 1 0-1.504" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledImageArrowCounterclockwise',
  mixins: [icon]
};
</script>
