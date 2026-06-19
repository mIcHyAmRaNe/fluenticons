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
    <path :fill="fill" :fill-opacity="opacity" d="M21 22.3a.7.7 0 0 1-1.195.495L18.5 21.49l-1.305 1.305A.7.7 0 0 1 16 22.3v-3.058a4.5 4.5 0 0 0 2.5.758 4.5 4.5 0 0 0 2.5-.758zM12 1a5 5 0 0 1 5 5v2.01a3.25 3.25 0 0 1 3 3.24v.007a4.5 4.5 0 0 0-5 7.072V22H7.25A3.25 3.25 0 0 1 4 18.75v-7.5a3.25 3.25 0 0 1 3-3.24V6a5 5 0 0 1 5-5m6.5 11a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7M12 13.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M12 2.5A3.5 3.5 0 0 0 8.5 6v2h7V6A3.5 3.5 0 0 0 12 2.5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledLockClosedRibbon',
  mixins: [icon]
};
</script>
