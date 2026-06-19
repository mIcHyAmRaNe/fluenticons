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
    <path :fill="fill" :fill-opacity="opacity" d="M15.5 13.75a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75M3 5h.014A2.25 2.25 0 0 1 5.25 3h11.5A2.25 2.25 0 0 1 19 5.25v.837a3.25 3.25 0 0 1 2.5 3.163v8.5A3.25 3.25 0 0 1 18.25 21h-12A3.25 3.25 0 0 1 3 17.75zm15.25 2.5H4.5v10.25c0 .966.784 1.75 1.75 1.75h12A1.75 1.75 0 0 0 20 17.75v-8.5a1.75 1.75 0 0 0-1.75-1.75M17.5 6v-.75a.75.75 0 0 0-.75-.75H5.25a.75.75 0 0 0 0 1.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedWallet',
  mixins: [icon]
};
</script>
