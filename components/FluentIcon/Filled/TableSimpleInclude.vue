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
    <path :fill="fill" :fill-opacity="opacity" d="M21 11.25h-.155a3.24 3.24 0 0 0-2.345-1h-5q-.389 0-.75.087V3h5A3.25 3.25 0 0 1 21 6.25zM10.25 13.5q0-.389.087-.75H3v5A3.25 3.25 0 0 0 6.25 21h5v-.155a3.24 3.24 0 0 1-1-2.345zm.905-2.25q.046-.048.095-.095V3h-5A3.25 3.25 0 0 0 3 6.25v5zm.095 2.25a2.25 2.25 0 0 1 2.25-2.25h5a2.25 2.25 0 0 1 2.25 2.25v5a2.25 2.25 0 0 1-2.25 2.25h-5a2.25 2.25 0 0 1-2.25-2.25z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTableSimpleInclude',
  mixins: [icon]
};
</script>
