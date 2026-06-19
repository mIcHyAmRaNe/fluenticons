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
    <path :fill="fill" :fill-opacity="opacity" d="M6.75 3.5A2.25 2.25 0 0 0 4.63 5h12.62a3.25 3.25 0 0 1 3.25 3.25v8.537a.75.75 0 0 0 1.5-.037v-8.5a4.75 4.75 0 0 0-4.75-4.75zM2 8.25A2.25 2.25 0 0 1 4.25 6h13a2.25 2.25 0 0 1 2.25 2.25v11a.75.75 0 0 1-1.5 0V9.5H2zM2 11h9v6.75A2.25 2.25 0 0 1 8.75 20h-4.5A2.25 2.25 0 0 1 2 17.75zm3.25 2a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledDeskMultiple',
  mixins: [icon]
};
</script>
