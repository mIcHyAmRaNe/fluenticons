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
    <path :fill="fill" :fill-opacity="opacity" d="M18.75 15A2.25 2.25 0 0 1 21 17.25v2.5A2.25 2.25 0 0 1 18.75 22H5.25A2.25 2.25 0 0 1 3 19.75v-2.5A2.25 2.25 0 0 1 5.25 15zM15 2a1 1 0 0 1 1 1v3h1a1 1 0 1 1 0 2h-1v4a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1m-4 1a1 1 0 0 1 1 1c0 3.17-1.42 5.187-2.86 6.388a8.7 8.7 0 0 1-1.943 1.222 6.4 6.4 0 0 1-.926.352q-.005.003-.006.002h-.003l-.001.002a1.001 1.001 0 0 1-.522-1.932h.002l.022-.007.122-.04c.11-.039.277-.102.48-.195a6.7 6.7 0 0 0 1.494-.94C8.77 8.094 9.69 6.894 9.935 5H6a1 1 0 0 1 0-2z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTextColor',
  mixins: [icon]
};
</script>
