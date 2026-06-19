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
    <path :fill="fill" :fill-opacity="opacity" d="M18 4.25A2.25 2.25 0 0 0 15.75 2h-7.5A2.25 2.25 0 0 0 6 4.25v15.5A2.25 2.25 0 0 0 8.25 22h2.837l.456-1.5H8.25a.75.75 0 0 1-.75-.75V4.25a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 .75.75v6.827a6.6 6.6 0 0 1 1.5-.058zm3 9.006A5.48 5.48 0 0 0 17.501 12a5.5 5.5 0 0 0-4.812 8.169l-.666 2.186a.5.5 0 0 0 .624.625l2.187-.666A5.501 5.501 0 0 0 21 13.256M15.5 17a.5.5 0 1 1 0-1h4.002a.5.5 0 1 1 0 1zm2.001 2h-2a.5.5 0 1 1 0-1h2a.5.5 0 1 1 0 1" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedPhoneChat',
  mixins: [icon]
};
</script>
