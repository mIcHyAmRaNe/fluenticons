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
    <path :fill="fill" :fill-opacity="opacity" d="M19.8 2.008V2H7.75A3.25 3.25 0 0 0 4.5 5.25V15.5H2.75A1.75 1.75 0 0 0 1 17.25v1.825C1 20.765 2.377 22 4 22h11.02v-.008q.115.008.234.008c1.76 0 3.256-1.355 3.277-3.113V8.5h3.265C22.46 8.5 23 7.96 23 7.295v-2.31a2.984 2.984 0 0 0-3.2-2.977M7.75 3.5h9.676a2.97 2.97 0 0 0-.394 1.484V18.85c0 .875-.76 1.65-1.778 1.65s-1.777-.775-1.777-1.65v-2.1c0-.69-.56-1.25-1.25-1.25H6V5.25c0-.966.784-1.75 1.75-1.75m-5 13.5h9.227v1.85c0 .61.178 1.174.483 1.65H4c-.862 0-1.5-.63-1.5-1.425V17.25a.25.25 0 0 1 .25-.25M21.5 4.984V7h-2.968V4.984a1.484 1.484 0 1 1 2.968 0" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedScript',
  mixins: [icon]
};
</script>
