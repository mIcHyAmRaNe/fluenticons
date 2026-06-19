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
    <path :fill="fill" :fill-opacity="opacity" d="M3 2a1 1 0 0 1 1 1v2.5h3V3.002a1 1 0 1 1 2 0v6.993a1 1 0 1 1-2 0V7.5H4V10a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1m14.557 3.462a.75.75 0 0 1 .693-.463h3.002a.75.75 0 0 1 .53 1.28l-1.5 1.501a.75.75 0 0 1-1.062 0l-1.5-1.5a.75.75 0 0 1-.163-.818M3 19a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2zm-1-4a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m11-5c0 .55.45 1 1 1s1-.45 1-1V3a1.004 1.004 0 0 0-1.89-.46c-.5 1-1.53 1.55-1.56 1.56-.49.25-.69.85-.44 1.34a.99.99 0 0 0 1.394.42c.092-.05.275-.15.496-.3z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTextHeader1LinesCaret',
  mixins: [icon]
};
</script>
