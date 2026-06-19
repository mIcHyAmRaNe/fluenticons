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
    <path :fill="fill" :fill-opacity="opacity" d="M11.55 3.5a4.11 4.11 0 0 0-4.03 3.304 1 1 0 0 0 1.96.392A2.11 2.11 0 0 1 11.55 5.5h.2a2.25 2.25 0 0 1 0 4.5H3a1 1 0 1 0 0 2h8.75a4.25 4.25 0 0 0 0-8.5zm7.27 6a3.19 3.19 0 0 0-3.019 2.184 1 1 0 0 0 1.898.632c.162-.487.62-.816 1.122-.816.65 0 1.179.528 1.179 1.18v.07c0 .69-.56 1.25-1.25 1.25H3a1 1 0 1 0 0 2h11.75c.69 0 1.25.56 1.25 1.25v.07a1.18 1.18 0 0 1-1.18 1.18c-.501 0-.959-.33-1.121-.816a1 1 0 0 0-1.898.632 3.19 3.19 0 0 0 3.02 2.184A3.18 3.18 0 0 0 18 17.32v-.07a3.2 3.2 0 0 0-.25-1.25h1A3.25 3.25 0 0 0 22 12.75v-.07a3.18 3.18 0 0 0-3.18-3.18M4 6.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M10.25 20a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M19 7.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledWeatherBlowingSnow',
  mixins: [icon]
};
</script>
