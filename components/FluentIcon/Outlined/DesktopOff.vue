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
    <path :fill="fill" :fill-opacity="opacity" d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l.409.41C2.239 4.093 2 4.643 2 5.25v10.502l.005.154a2.25 2.25 0 0 0 2.245 2.096h4.249V20.5H6.75l-.102.007A.75.75 0 0 0 6.75 22h10.5l.102-.007a.75.75 0 0 0-.102-1.493h-1.751v-2.498h1.442l3.778 3.779a.75.75 0 0 0 1.061-1.061zm12.16 14.282H4.25l-.102-.007a.75.75 0 0 1-.648-.743V5.25l.007-.102a.75.75 0 0 1 .183-.397zm4.309 0h-.066l1.196 1.196A2.25 2.25 0 0 0 22 15.752V5.25l-.005-.154A2.25 2.25 0 0 0 19.749 3H6.182l1.5 1.5h12.067l.102.006a.75.75 0 0 1 .648.744v10.502l-.007.102a.75.75 0 0 1-.743.648m-5.751 1.5.001 2.498h-4l-.001-2.498z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedDesktopOff',
  mixins: [icon]
};
</script>
