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
    <path :fill="fill" :fill-opacity="opacity" d="M16.51 3a.75.75 0 0 1 .697.5l5.5 15.5a.75.75 0 0 1-1.414.5l-1.42-4h-7.117l-1.557 4.02a.75.75 0 1 1-1.398-.54l6-15.5a.75.75 0 0 1 .71-.48m-.04 2.907L13.335 14h6.005zM5.5 10.5l.287.01c1.96.098 3.128 1.226 3.209 3.045L9 13.76v5.5a.75.75 0 0 1-.648.743l-.102.007a.75.75 0 0 1-.743-.648L7.5 19.26l-.001-.104c-.988.565-1.901.854-2.749.854-1.838 0-3.25-1.294-3.25-3.25 0-1.724 1.188-3.005 3.16-3.244a7.5 7.5 0 0 1 2.839.21c-.01-1.108-.556-1.655-1.786-1.717-.962-.047-1.639.088-2.035.365a.75.75 0 1 1-.861-1.228c.658-.461 1.554-.665 2.683-.645m2 4.823-.303-.09a6.1 6.1 0 0 0-2.356-.193c-1.232.15-1.84.805-1.84 1.756 0 1.096.712 1.75 1.75 1.75.68 0 1.518-.315 2.501-.964l.248-.169z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTextChangeCase',
  mixins: [icon]
};
</script>
