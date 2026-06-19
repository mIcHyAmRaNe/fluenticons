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
    <path :fill="fill" :fill-opacity="opacity" d="M11 15.5c0-.563.186-1.082.5-1.5H5.253a2.25 2.25 0 0 0-2.25 2.25v.577c0 .892.32 1.756.9 2.435 1.565 1.834 3.952 2.74 7.097 2.74h.05A2.5 2.5 0 0 1 11 21.5v-.999c-2.738 0-4.704-.745-5.957-2.213a2.25 2.25 0 0 1-.54-1.461v-.578a.75.75 0 0 1 .75-.749zm0-13.495a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7m6.51 15.422-5.49-3.203A2 2 0 0 1 14 14h7a2 2 0 0 1 2 1.97zm.227 1.014 5.264-2.834V21a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-4.13l5.248 3.062a.5.5 0 0 0 .489.009" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedPersonMail',
  mixins: [icon]
};
</script>
