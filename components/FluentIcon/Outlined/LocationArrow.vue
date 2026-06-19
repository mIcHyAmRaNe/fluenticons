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
    <path :fill="fill" :fill-opacity="opacity" d="M19.958 2.104c1.213-.467 2.405.725 1.938 1.938L15.36 21.038c-.522 1.36-2.48 1.252-2.85-.156l-1.845-7.011a.75.75 0 0 0-.535-.535l-7.01-1.845c-1.409-.37-1.516-2.328-.157-2.85zm.538 1.4L3.5 10.04l7.011 1.845a2.25 2.25 0 0 1 1.603 1.603l1.845 7.01z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedLocationArrow',
  mixins: [icon]
};
</script>
