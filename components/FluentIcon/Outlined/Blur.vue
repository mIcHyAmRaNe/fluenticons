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
    <path :fill="fill" :fill-opacity="opacity" d="M3 12a9 9 0 0 1 13.977-7.5H12a7.5 7.5 0 1 0 0 15V18h6.708A9 9 0 0 1 3 12m15.225-6.5H12V7h7.485a9 9 0 0 0-1.26-1.5M12 8h8.064q.358.717.584 1.5H12zm8.876 2.5H12V12h9q-.001-.767-.124-1.5M12 13h8.945a9 9 0 0 1-.297 1.5H12zm8.294 2.5H12V17h7.485a9 9 0 0 0 .81-1.5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedBlur',
  mixins: [icon]
};
</script>
