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
    <path :fill="fill" :fill-opacity="opacity" d="M4 5.25A2.25 2.25 0 0 1 6.25 3h9.5A2.25 2.25 0 0 1 18 5.25V14h4v3.75A3.25 3.25 0 0 1 18.75 21h-5.8q.05-.243.05-.5v-4a2.5 2.5 0 0 0-2.5-2.5H4zM18 19.5h.75a1.75 1.75 0 0 0 1.75-1.75V15.5H18zM7.5 7.75c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0-.75.75M8.25 11a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zM2.5 15A1.5 1.5 0 0 0 1 16.5v4A1.5 1.5 0 0 0 2.5 22h8a1.5 1.5 0 0 0 1.5-1.5v-4a1.5 1.5 0 0 0-1.5-1.5zm7.5 1a1 1 0 0 0 1 1v1a2 2 0 0 1-2-2zm-1 5a2 2 0 0 1 2-2v1a1 1 0 0 0-1 1zm-7-4a1 1 0 0 0 1-1h1a2 2 0 0 1-2 2zm0 2a2 2 0 0 1 2 2H3a1 1 0 0 0-1-1zm4.5-2.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledReceiptMoney',
  mixins: [icon]
};
</script>
