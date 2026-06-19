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
    <path :fill="fill" :fill-opacity="opacity" d="M4 5.25A2.25 2.25 0 0 1 6.25 3h9.5A2.25 2.25 0 0 1 18 5.25V14h4v3.75A3.25 3.25 0 0 1 18.75 21h-7.26q.01-.123.01-.25v-6c0-.698-.409-1.3-1-1.582V13q0-.255-.035-.5h3.285a.75.75 0 0 0 0-1.5H9.873A3.496 3.496 0 0 0 5.75 9.73 3.5 3.5 0 0 0 4 9.535zM18 19.5h.75a1.75 1.75 0 0 0 1.75-1.75V15.5H18zM7.5 7.75c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0-.75.75m-6.5 7a.75.75 0 0 1 .75-.75H2v-1a2.5 2.5 0 0 1 3.75-2.165A2.5 2.5 0 0 1 9.5 13v1h.25a.75.75 0 0 1 .75.75v6A2.25 2.25 0 0 1 8.25 23h-5A2.25 2.25 0 0 1 1 20.75zM7 13v1h1v-1a1 1 0 0 0-1.2-.98c.129.3.2.632.2.98m-1.5 1v-1a1 1 0 0 0-2 0v1z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledReceiptBag',
  mixins: [icon]
};
</script>
