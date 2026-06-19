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
    <path :fill="fill" :fill-opacity="opacity" d="M6.08 9.02A6.001 6.001 0 0 1 18 10h-2.25a1.75 1.75 0 0 0-.25 3.482v1.713a1 1 0 0 1-.132.496L14.051 18H6.5a4.5 4.5 0 0 1-.42-8.98M16.5 12.5h-.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 0 1.5h-.75v2.697a2 2 0 0 0 .263.992l.463.811h-5.453l.464-.814c.172-.302.263-.643.263-.991zm-2.3 7.257L15.201 18h6.595l1.002 1.757A1.5 1.5 0 0 1 21.497 22h-5.995a1.5 1.5 0 0 1-1.303-2.243" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledCloudBeaker',
  mixins: [icon]
};
</script>
