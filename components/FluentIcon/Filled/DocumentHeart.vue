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
    <path :fill="fill" :fill-opacity="opacity" d="M12 2v6a2 2 0 0 0 2 2h6v10a2 2 0 0 1-2 2H9.49l3.17-3.17a4.467 4.467 0 0 0-5.645-6.87A4.47 4.47 0 0 0 4 11.235V4a2 2 0 0 1 2-2zm1.5.5V8a.5.5 0 0 0 .5.5h5.5zM7.015 22.75a.75.75 0 0 1-.53-.22l-4.41-4.408a3.467 3.467 0 1 1 4.904-4.903l.036.036.036-.036a3.467 3.467 0 1 1 4.902 4.903L7.545 22.53a.75.75 0 0 1-.53.22" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledDocumentHeart',
  mixins: [icon]
};
</script>
