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
    <path :fill="fill" :fill-opacity="opacity" d="M17.75 3H6.25A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3M4.5 17.75V6.25c0-.966.784-1.75 1.75-1.75H9v5.25a.75.75 0 0 0 .988.711l3.513-1.171v5.419l-3.513-1.171a.75.75 0 0 0-.988.711v5.25H6.25A1.75 1.75 0 0 1 4.5 17.75m15 0a1.75 1.75 0 0 1-1.75 1.75H10.5v-4.209l3.513 1.171a.75.75 0 0 0 .988-.711v-7.5a.75.75 0 0 0-.988-.711L10.5 8.711V4.502h7.25c.966 0 1.75.784 1.75 1.75v11.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedSquareDovetailJoint',
  mixins: [icon]
};
</script>
