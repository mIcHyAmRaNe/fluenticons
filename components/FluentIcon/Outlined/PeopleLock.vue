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
    <path :fill="fill" :fill-opacity="opacity" d="M8 4.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4 7a4 4 0 1 1 8 0 4 4 0 0 1-8 0m13-.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M14 8a3 3 0 1 1 4.446 2.63 3.5 3.5 0 0 0-2.437.202A3 3 0 0 1 14 8m-.298 6.13A2.25 2.25 0 0 0 11.75 13h-7.5A2.25 2.25 0 0 0 2 15.25v.278a2 2 0 0 0 .014.208 4.5 4.5 0 0 0 .778 2.07C3.61 18.974 5.172 20 8 20c1.803 0 3.091-.417 4-1.022v-2.063l-.02.03C11.485 17.65 10.421 18.5 8 18.5s-3.486-.85-3.98-1.555a3 3 0 0 1-.513-1.359l-.007-.079v-.257a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 .72.54c.303-.42.732-.742 1.232-.91m.798.87h.5v-1a2.5 2.5 0 0 1 5 0v1h.5a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-5a1.5 1.5 0 0 1 1.5-1.5m2-1v1h2v-1a1 1 0 1 0-2 0m2 5a1 1 0 1 0-2 0 1 1 0 0 0 2 0" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedPeopleLock',
  mixins: [icon]
};
</script>
