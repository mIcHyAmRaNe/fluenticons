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
    <path :fill="fill" :fill-opacity="opacity" d="M6.5 3.25a1.25 1.25 0 1 1-2.498 0 1.25 1.25 0 0 1 2.499 0M6 6.75v14.5a.75.75 0 0 1-1.493.102l-.006-.102V6.75a.75.75 0 0 1 1.493-.102zm7-3.5a1.25 1.25 0 1 1-2.498 0 1.25 1.25 0 0 1 2.499 0m-.5 3.5v14.5a.75.75 0 0 1-1.493.102l-.006-.102V6.75a.75.75 0 0 1 1.493-.102zm7-3.5a1.25 1.25 0 1 1-2.498 0 1.25 1.25 0 0 1 2.499 0m-.5 3.5v14.5a.75.75 0 0 1-1.493.102l-.007-.102V6.75a.75.75 0 0 1 1.494-.102z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTextBulletListLtr90',
  mixins: [icon]
};
</script>
