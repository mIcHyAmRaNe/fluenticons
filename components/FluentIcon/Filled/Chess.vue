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
    <path :fill="fill" :fill-opacity="opacity" d="M7.5 6a3.5 3.5 0 0 1 2.448 6h.552a1.5 1.5 0 0 1 0 3h-.37c.38 1.791 1.498 2.996 2.138 3.558.417.366.732.917.732 1.552A1.89 1.89 0 0 1 11.11 22H3.89A1.89 1.89 0 0 1 2 20.11c0-.635.315-1.186.732-1.552.64-.562 1.758-1.767 2.137-3.558H4.5a1.5 1.5 0 0 1 0-3h.552A3.5 3.5 0 0 1 7.5 6M13 2a1 1 0 0 1 1 1v1.25a.75.75 0 0 0 1.5 0V3a1 1 0 1 1 2 0v1.25a.75.75 0 0 0 1.5 0V3a1 1 0 0 1 1-1h.25a.75.75 0 0 1 .75.75V7a2 2 0 0 1-2 2h-.22c.26 5.454 2.163 8.726 2.826 9.712.236.35.394.78.394 1.247 0 1.127-.914 2.04-2.041 2.041h-6.666c.44-.507.707-1.166.707-1.89 0-.973-.48-1.783-1.073-2.303a6 6 0 0 1-.647-.665c.797-1.651 1.76-4.377 1.94-8.142H14a2 2 0 0 1-2-2V2.75a.75.75 0 0 1 .75-.75z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledChess',
  mixins: [icon]
};
</script>
