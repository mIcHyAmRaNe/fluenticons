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
    <path :fill="fill" :fill-opacity="opacity" d="M13.209 3.102c-.495-1.003-1.926-1.003-2.421 0L8.43 7.88l-5.273.766c-1.107.16-1.55 1.522-.748 2.303l3.815 3.719-.9 5.25c-.15.871.54 1.579 1.325 1.582.21.001.426-.048.635-.158L9 20.44l2.998-1.577 4.716 2.479c.99.52 2.148-.32 1.96-1.423l-.902-5.251 3.816-3.72c.8-.78.359-2.141-.748-2.302l-5.273-.766zM9 18.744V9.282a1.35 1.35 0 0 0 .74-.668l2.258-4.575 2.259 4.575a1.35 1.35 0 0 0 1.016.739l5.05.734-3.654 3.562a1.35 1.35 0 0 0-.388 1.195l.862 5.029-4.516-2.375a1.35 1.35 0 0 0-1.257 0z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedStarOneQuarter',
  mixins: [icon]
};
</script>
