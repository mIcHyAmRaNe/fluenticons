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
    <path :fill="fill" :fill-opacity="opacity" d="M18 16.663a3.5 3.5 0 0 1-2-3.163 3.5 3.5 0 1 1 4.5 3.355V17l1.146 1.146a.5.5 0 0 1 0 .708L20.5 20l1.161 1.161a.5.5 0 0 1 .015.692l-1.823 1.984a.5.5 0 0 1-.722.015l-.985-.984a.5.5 0 0 1-.146-.354zM20.5 13a1 1 0 1 0-2 0 1 1 0 0 0 2 0M17 17.242v3.69c-1.36.714-3.031 1.07-5 1.07-3.42 0-5.944-1.073-7.486-3.237a2.75 2.75 0 0 1-.51-1.596v-.92a2.25 2.25 0 0 1 2.249-2.25h8.775A4.5 4.5 0 0 0 17 17.243M12 2.005a5 5 0 1 1 0 10 5 5 0 0 1 0-10" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledPersonPasskey',
  mixins: [icon]
};
</script>
