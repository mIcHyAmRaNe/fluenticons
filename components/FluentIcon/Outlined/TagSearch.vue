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
    <path :fill="fill" :fill-opacity="opacity" d="M22 4.25A2.25 2.25 0 0 0 19.75 2h-5.466a3.25 3.25 0 0 0-2.299.953l-8.5 8.51a3.25 3.25 0 0 0 .004 4.596l4.462 4.455a3.255 3.255 0 0 0 4.596-.001l.094-.094a5.5 5.5 0 0 1-.922-1.199l-.232.232a1.755 1.755 0 0 1-2.477 0l-4.46-4.454a1.75 1.75 0 0 1-.015-2.462l8.512-8.523a1.75 1.75 0 0 1 1.239-.513h5.465a.75.75 0 0 1 .75.75v5.462c0 .464-.184.91-.513 1.237l-.768.769a5.5 5.5 0 0 1 1.199.922l.63-.63A3.25 3.25 0 0 0 22 9.712zm-3.5 2.752a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m1.668 12.105a4.5 4.5 0 1 0-1.06 1.06l2.612 2.613a.75.75 0 1 0 1.06-1.06zM19.5 16.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTagSearch',
  mixins: [icon]
};
</script>
