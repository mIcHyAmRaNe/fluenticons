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
    <path :fill="fill" :fill-opacity="opacity" d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h7.604a6.5 6.5 0 0 1-1.122-1.5H6.25a1.75 1.75 0 0 1-1.75-1.75V8.5h15v2.685c.42.31.933.613 1.5.79V6.25A3.25 3.25 0 0 0 17.75 3zM19.5 7h-15v-.75c0-.966.784-1.75 1.75-1.75h11.5c.966 0 1.75.784 1.75 1.75zm-1.51 4.195c.652.65 1.907 1.685 3.449 1.898.308.042.561.285.561.589v2.838c0 3.816-3.58 5.201-4.353 5.456a.46.46 0 0 1-.293 0C16.58 21.721 13 20.336 13 16.52v-2.838c0-.304.253-.547.561-.59 1.542-.212 2.797-1.247 3.45-1.898a.714.714 0 0 1 .979 0" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedWindowShield',
  mixins: [icon]
};
</script>
