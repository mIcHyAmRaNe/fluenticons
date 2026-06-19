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
    <path :fill="fill" :fill-opacity="opacity" d="M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11M12 1.997c5.524 0 10.002 4.478 10.002 10.002q0 .395-.03.782a6.5 6.5 0 0 0-1.475-1.052 8.501 8.501 0 1 0-8.765 8.767c.28.54.635 1.036 1.05 1.474Q12.397 22 12 22c-5.524.001-10.002-4.477-10.002-10C1.998 6.476 6.476 1.998 12 1.998m5.5 12-.09.008a.5.5 0 0 0-.402.402l-.008.09v2.5L14.498 17l-.09.008a.5.5 0 0 0-.402.402l-.008.09.008.09a.5.5 0 0 0 .402.402l.09.008H17v2.504l.008.09a.5.5 0 0 0 .402.401l.09.009.09-.009a.5.5 0 0 0 .402-.402l.008-.09v-2.504l2.503.001.09-.008a.5.5 0 0 0 .402-.402l.009-.09-.008-.09a.5.5 0 0 0-.403-.402l-.09-.008H18v-2.5l-.008-.09a.5.5 0 0 0-.402-.403zm-9.038.785a4.5 4.5 0 0 0 2.63 1.626 6.5 6.5 0 0 0-.079 1.51 5.98 5.98 0 0 1-3.73-2.208.75.75 0 1 1 1.179-.928M9 8.75a1.25 1.25 0 1 1 0 2.499A1.25 1.25 0 0 1 9 8.75m6 0a1.25 1.25 0 1 1 0 2.499 1.25 1.25 0 0 1 0-2.499" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedEmojiAdd',
  mixins: [icon]
};
</script>
