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
    <path :fill="fill" :fill-opacity="opacity" d="M9 4.5v6.238c0 .375-.094.744-.273 1.074L7.539 14h4.482a6.52 6.52 0 0 1 3.094-2.549 2.3 2.3 0 0 1-.116-.713V4.5h1A.75.75 0 0 0 16 3H8a.75.75 0 0 0 0 1.5zm-2.275 11h4.588a6.5 6.5 0 0 0-.314 2 6.47 6.47 0 0 0 1.022 3.5h-5.34a1.75 1.75 0 0 1-1.539-2.585zM17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m.5 8.503V18h2.503a.5.5 0 1 0 0-1H18v-2.5a.5.5 0 1 0-1 0V17h-2.504a.5.5 0 0 0 0 1H17v2.503a.5.5 0 1 0 1 0" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledBeakerAdd',
  mixins: [icon]
};
</script>
