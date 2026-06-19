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
    <path :fill="fill" :fill-opacity="opacity" d="m16.957 10.207 2.5-2.5a1 1 0 0 0-1.414-1.414l-.793.793V4a1 1 0 1 0-2 0v3.086l-.793-.793a1 1 0 1 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0M4 6.5A2.5 2.5 0 0 1 6.5 4h4a1 1 0 1 1 0 2h-4a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h4a1 1 0 1 1 0 2h-4A2.5 2.5 0 0 1 4 17.5zm15.457 9.793-2.5-2.5a1 1 0 0 0-1.414 0l-2.5 2.5a1 1 0 0 0 1.414 1.414l.793-.793V20a1 1 0 1 0 2 0v-3.086l.793.793a1 1 0 0 0 1.414-1.414" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledArrowAutofitHeightIn',
  mixins: [icon]
};
</script>
