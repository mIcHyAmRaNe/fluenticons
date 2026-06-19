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
    <path :fill="fill" :fill-opacity="opacity" d="M6.75 2a.75.75 0 0 0-.75.75v7a5.75 5.75 0 0 0 5 5.701v5.057L8.753 20.5a.75.75 0 0 0-.006 1.5l3 .011h.005l3.5-.011a.75.75 0 0 0-.004-1.5l-2.748.009v-5.053A6.25 6.25 0 0 0 18 9.25v-6.5a.75.75 0 0 0-.75-.75zm.75 5V3.5h9V7zm8.183 2.707a3.73 3.73 0 0 1-1.159 2.066 3.75 3.75 0 0 1-1.754.898.5.5 0 0 1-.205-.979 2.74 2.74 0 0 0 1.286-.658 2.76 2.76 0 0 0 .85-1.515.5.5 0 0 1 .982.188" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledDrinkWine',
  mixins: [icon]
};
</script>
