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
    <path :fill="fill" :fill-opacity="opacity" d="M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11M8 21H6.25A3.25 3.25 0 0 1 3 17.75V16h5zm3.176-5a6.47 6.47 0 0 0 .849 5H9.5v-5zm8.678-.854a.5.5 0 0 0-.707 0L17.5 16.793l-1.646-1.646a.5.5 0 1 0-.707.707l1.646 1.646-1.646 1.646a.5.5 0 1 0 .707.707l1.646-1.646 1.646 1.646a.5.5 0 1 0 .707-.707L18.208 17.5l1.646-1.646a.5.5 0 0 0 0-.707M17.75 3A3.25 3.25 0 0 1 21 6.25v5.774a6.47 6.47 0 0 0-5-.848V9.5h3.5V6.25a1.75 1.75 0 0 0-1.75-1.75H6.25A1.75 1.75 0 0 0 4.5 6.25V9.5H8v5H3V6.25A3.25 3.25 0 0 1 6.25 3zm-3.25 8.733a6.53 6.53 0 0 0-2.767 2.767H9.5v-5h5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTableFreezeRowDismiss',
  mixins: [icon]
};
</script>
