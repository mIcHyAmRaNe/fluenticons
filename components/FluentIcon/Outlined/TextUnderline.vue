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
    <path :fill="fill" :fill-opacity="opacity" d="M17.25 18.5a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1 0-1.5zm-1-14.5a.75.75 0 0 1 .75.75v11a.75.75 0 0 1-1.5 0V5.5h-7v10.25a.75.75 0 0 1-1.5 0v-11A.75.75 0 0 1 7.75 4z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTextUnderline',
  mixins: [icon]
};
</script>
