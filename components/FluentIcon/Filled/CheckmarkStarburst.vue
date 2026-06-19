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
    <path :fill="fill" :fill-opacity="opacity" d="M6.347 3.752a2.75 2.75 0 0 1 3.818-1.582l1.283.632a1.25 1.25 0 0 0 1.104 0l1.283-.632a2.75 2.75 0 0 1 3.682 1.253l.073.162.063.167.46 1.353c.125.368.414.657.782.782l1.353.46a2.75 2.75 0 0 1 1.581 3.818l-.63 1.282a1.25 1.25 0 0 0 0 1.105l.63 1.283a2.75 2.75 0 0 1-1.581 3.818l-1.354.46a1.25 1.25 0 0 0-.78.782l-.46 1.353a2.75 2.75 0 0 1-3.82 1.581l-1.282-.632a1.25 1.25 0 0 0-1.104 0l-1.283.632a2.75 2.75 0 0 1-3.818-1.581l-.46-1.354a1.25 1.25 0 0 0-.782-.78l-1.353-.46a2.75 2.75 0 0 1-1.582-3.819l.632-1.283a1.25 1.25 0 0 0 0-1.105l-.632-1.282a2.75 2.75 0 0 1 1.582-3.818l1.353-.46a1.25 1.25 0 0 0 .782-.782zM16.28 8.97a.75.75 0 0 0-1.06 0l-4.47 4.47-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5-5a.75.75 0 0 0 0-1.06" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledCheckmarkStarburst',
  mixins: [icon]
};
</script>
