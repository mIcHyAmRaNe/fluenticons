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
    <path :fill="fill" :fill-opacity="opacity" d="M11.364 1.852a.75.75 0 0 1 1.272 0l1.249 1.996a.75.75 0 0 1-.636 1.147h-.499V13.5l3.207-3.054A1.75 1.75 0 0 0 16.5 9.18V8.5h-.25a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-.75.75H18v.679c0 .89-.365 1.74-1.009 2.353l-3.698 3.522c-.347.33-.543.788-.543 1.267v1.825a2 2 0 1 1-1.509.003 1.75 1.75 0 0 0-.534-1.095l-3.698-3.522A3.25 3.25 0 0 1 6 11.18v-.85A1.748 1.748 0 0 1 6.75 7a1.75 1.75 0 0 1 .75 3.33v.849c0 .479.196.937.543 1.267L11.25 15.5V4.995h-.499a.75.75 0 0 1-.636-1.147z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedUsb',
  mixins: [icon]
};
</script>
