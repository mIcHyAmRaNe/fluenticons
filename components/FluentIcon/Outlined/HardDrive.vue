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
    <path :fill="fill" :fill-opacity="opacity" d="M5.415 5.27A2.25 2.25 0 0 1 7.441 4h9.118c.863 0 1.65.493 2.026 1.27l3.09 6.388c.214.44.325.925.325 1.415v3.677A2.25 2.25 0 0 1 19.75 19H4.25A2.25 2.25 0 0 1 2 16.75v-3.677c0-.49.11-.974.324-1.415zm11.82.653a.75.75 0 0 0-.676-.423H7.441a.75.75 0 0 0-.676.423L4.31 11h15.382zM3.5 13.25v3.5c0 .414.336.75.75.75h15.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75H4.25a.75.75 0 0 0-.75.75M18 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedHardDrive',
  mixins: [icon]
};
</script>
