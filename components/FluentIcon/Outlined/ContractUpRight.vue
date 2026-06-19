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
    <path :fill="fill" :fill-opacity="opacity" d="M6.25 3A3.25 3.25 0 0 0 3 6.25v4a.75.75 0 0 0 1.5 0v-4c0-.966.784-1.75 1.75-1.75H12v5.25A2.25 2.25 0 0 0 14.25 12h5.25v5.75a1.75 1.75 0 0 1-1.75 1.75h-4a.75.75 0 0 0 0 1.5h4A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zm7.25 6.75V4.5h4.25c.966 0 1.75.784 1.75 1.75v4.25h-5.25a.75.75 0 0 1-.75-.75m-10.5 4c0 .414.336.75.75.75h4.69l-5.22 5.22a.75.75 0 1 0 1.06 1.06l5.22-5.22v4.69a.75.75 0 0 0 1.5 0v-6.5a.75.75 0 0 0-.75-.75h-6.5a.75.75 0 0 0-.75.75" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedContractUpRight',
  mixins: [icon]
};
</script>
