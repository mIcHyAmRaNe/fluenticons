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
    <path :fill="fill" :fill-opacity="opacity" d="M13.001 4.752a1.75 1.75 0 0 0-1.75-1.75h-6.5a1.75 1.75 0 0 0-1.75 1.75v4.5c0 .966.784 1.75 1.75 1.75h6.5a1.75 1.75 0 0 0 1.75-1.75zM8.99 14.734a1.75 1.75 0 0 0-1.75-1.75H4.75A1.75 1.75 0 0 0 3 14.734v4.514c0 .967.784 1.75 1.75 1.75h2.49a1.75 1.75 0 0 0 1.75-1.75zm12.014.014a1.75 1.75 0 0 0-1.75-1.75h-6.5a1.75 1.75 0 0 0-1.744 1.607l-.006.143v4.5c0 .967.783 1.75 1.75 1.75h6.5a1.75 1.75 0 0 0 1.75-1.75zm0-9.996a1.75 1.75 0 0 0-1.75-1.75h-2.5a1.75 1.75 0 0 0-1.75 1.75v4.5c0 .966.783 1.75 1.75 1.75h2.5a1.75 1.75 0 0 0 1.75-1.75z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledGlanceHorizontal',
  mixins: [icon]
};
</script>
