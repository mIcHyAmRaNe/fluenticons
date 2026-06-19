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
    <path :fill="fill" :fill-opacity="opacity" d="M9 3.75A.75.75 0 0 1 9.75 3h4.5a.75.75 0 0 1 .75.75V5h3a4 4 0 0 1 4 4h.25a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75H22v2.5a4 4 0 0 1-4 4h-1.546a4 4 0 0 1-2.163-.635l-2.156-1.386a.25.25 0 0 0-.27 0l-2.156 1.386a4 4 0 0 1-2.164.635H6a4 4 0 0 1-4-4V14h-.25a.75.75 0 0 1-.75-.75v-3.5A.75.75 0 0 1 1.75 9H2a4 4 0 0 1 4-4h3zM12 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-6 2.25c0 .414.336.75.75.75h2.5a.75.75 0 0 0 0-1.5h-2.5a.75.75 0 0 0-.75.75m8.75-.75a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledHeadsetVr',
  mixins: [icon]
};
</script>
