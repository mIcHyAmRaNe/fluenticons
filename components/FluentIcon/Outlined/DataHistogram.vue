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
    <path :fill="fill" :fill-opacity="opacity" d="M13.25 3a2.25 2.25 0 0 1 2.25 2.25V7h3.25A2.25 2.25 0 0 1 21 9.25v11a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75v-8A2.25 2.25 0 0 1 5.25 10H8.5V5.25A2.25 2.25 0 0 1 10.75 3zm-8 8.5a.75.75 0 0 0-.75.75v7.25h4v-8zm5.5-7a.75.75 0 0 0-.75.75V19.5h4V5.25a.75.75 0 0 0-.75-.75zm4.75 15h4V9.25a.75.75 0 0 0-.75-.75H15.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedDataHistogram',
  mixins: [icon]
};
</script>
