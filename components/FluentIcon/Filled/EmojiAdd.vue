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
    <path :fill="fill" :fill-opacity="opacity" d="M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11M12 1.997c5.524 0 10.002 4.478 10.002 10.002q0 .395-.03.782a6.502 6.502 0 0 0-10.88 3.626 4.5 4.5 0 0 1-2.63-1.625.75.75 0 0 0-1.179.928 6 6 0 0 0 3.73 2.21c.1 1.564.755 2.98 1.77 4.05Q12.395 22 12 22c-5.524.001-10.002-4.477-10.002-10C1.998 6.476 6.476 1.998 12 1.998m5.5 12-.09.008a.5.5 0 0 0-.402.402l-.008.09v2.5L14.498 17l-.09.008a.5.5 0 0 0-.402.402l-.008.09.008.09a.5.5 0 0 0 .402.402l.09.008H17v2.504l.008.09a.5.5 0 0 0 .402.401l.09.009.09-.009a.5.5 0 0 0 .402-.402l.008-.09v-2.504l2.503.001.09-.008a.5.5 0 0 0 .402-.402l.009-.09-.008-.09a.5.5 0 0 0-.403-.402l-.09-.008H18v-2.5l-.008-.09a.5.5 0 0 0-.402-.403zM9 8.75a1.25 1.25 0 1 0 0 2.499A1.25 1.25 0 0 0 9 8.75m6 0a1.25 1.25 0 1 0 0 2.499 1.25 1.25 0 0 0 0-2.499" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledEmojiAdd',
  mixins: [icon]
};
</script>
