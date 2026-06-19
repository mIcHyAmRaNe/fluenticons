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
    <path :fill="fill" :fill-opacity="opacity" d="M18.75 13a.75.75 0 0 1 .75.75v5.69l1.22-1.22a.75.75 0 1 1 1.06 1.06l-2.5 2.5a.75.75 0 0 1-.946.094l-.114-.094-2.5-2.5a.75.75 0 1 1 1.06-1.06L18 19.44v-5.69a.75.75 0 0 1 .75-.75m-8.5 4a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5zm4-6a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5zm4.5-9c.199 0 .39.08.53.22l2.5 2.5a.75.75 0 1 1-1.06 1.06L19.5 4.56v5.69a.75.75 0 0 1-1.5 0V4.56l-1.22 1.22a.75.75 0 1 1-1.06-1.06l2.5-2.5.114-.094A.75.75 0 0 1 18.75 2m-8.5 3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTextLineSpacing',
  mixins: [icon]
};
</script>
