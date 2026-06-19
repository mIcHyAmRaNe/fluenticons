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
    <path :fill="fill" :fill-opacity="opacity" d="m14.436 15.497 6.283 6.284a.75.75 0 0 0 1.061-1.061L3.28 2.22a.75.75 0 1 0-1.06 1.06L5.939 7l-1.836 5.153a1.75 1.75 0 0 0 1.642 2.337l1.568.006-1.269 5.669c-.33 1.477 1.487 2.459 2.541 1.371zm5.21-5.377-3.122 3.222-9.47-9.47.37-1.041A1.25 1.25 0 0 1 8.602 2h6.453a1.25 1.25 0 0 1 1.186 1.645L14.79 8h3.958c1.104 0 1.666 1.327.898 2.12" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledFlashOff',
  mixins: [icon]
};
</script>
