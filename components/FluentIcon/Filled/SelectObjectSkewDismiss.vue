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
    <path :fill="fill" :fill-opacity="opacity" d="M18.586 6.414a2 2 0 0 0 1.9.527 2 2 0 1 0-1.923-.55zM2 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0M6.586 6.414a2 2 0 0 0 1.9.527A2.004 2.004 0 0 0 10 5a2 2 0 1 0-3.437 1.39zM6.26 7.445l-2.445 8.56Q3.906 16 4 16c.648 0 1.248.206 1.739.555l2.446-8.56a3 3 0 0 1-1.923-.55M17.171 6h-6.342a3 3 0 0 0 0-2h6.342a3 3 0 0 0 0 2m-5.673 14a6.5 6.5 0 0 1-.48-2H6.83a3 3 0 0 1 0 2zm8.687-12.006-.928 3.246a6.5 6.5 0 0 0-2.013-.235l1.017-3.56a3 3 0 0 0 1.924.55M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-7.146-2.354a.5.5 0 0 0-.708.708l1.647 1.646-1.647 1.646a.5.5 0 0 0 .708.708l1.646-1.647 1.646 1.647a.5.5 0 0 0 .708-.708L18.207 17.5l1.647-1.646a.5.5 0 0 0-.708-.708L17.5 16.793z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledSelectObjectSkewDismiss',
  mixins: [icon]
};
</script>
