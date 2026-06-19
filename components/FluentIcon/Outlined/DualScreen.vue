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
    <path :fill="fill" :fill-opacity="opacity" d="m12.748 4-.001.002h7.498c.967 0 1.75.784 1.75 1.75v12.496a1.75 1.75 0 0 1-1.75 1.75h-8.997l-.001-.003H3.75A1.75 1.75 0 0 1 2 18.245V5.75C2 4.784 2.784 4 3.75 4zm7.497 1.502h-7.497v12.996h7.497a.25.25 0 0 0 .25-.25V5.752a.25.25 0 0 0-.25-.25M11.248 5.5H3.75a.25.25 0 0 0-.25.25v12.495c0 .138.112.25.25.25h7.498zm3.49 9.999h1.5a.75.75 0 0 1 .102 1.493l-.101.007h-1.5a.75.75 0 0 1-.102-1.493zh1.5zm-6.997 0h1.502a.75.75 0 0 1 .102 1.493l-.102.007H7.74a.75.75 0 0 1-.102-1.493zh1.502z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedDualScreen',
  mixins: [icon]
};
</script>
