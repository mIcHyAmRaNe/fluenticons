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
    <path :fill="fill" :fill-opacity="opacity" d="M4.5 5.385A9.98 9.98 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12q0-.717.098-1.407A.7.7 0 0 1 2.802 10c.476 0 .826.446.766.919A8.5 8.5 0 1 0 5.518 6.5H7.25a.75.75 0 0 1 0 1.5h-3.5A.75.75 0 0 1 3 7.25v-3.5a.75.75 0 0 1 1.5 0zm6.728 2.805A1.5 1.5 0 0 0 9 9.501V14.5a1.5 1.5 0 0 0 2.228 1.311l4.499-2.498a1.5 1.5 0 0 0 0-2.623z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledReplay',
  mixins: [icon]
};
</script>
