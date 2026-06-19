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
    <path :fill="fill" :fill-opacity="opacity" d="M16 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2M8 9.5a3 3 0 0 1 3-3 3.75 3.75 0 0 1 3.75 3.75 4.5 4.5 0 0 1-4.5 4.5.75.75 0 1 0 0 1.5 6 6 0 0 0 6-6C16.25 7.35 13.9 5 11 5a4.5 4.5 0 0 0-4.5 4.5 3.75 3.75 0 0 0 3.75 3.75 3 3 0 0 0 3-3A2.25 2.25 0 0 0 11 8a1.5 1.5 0 0 0-1.5 1.5.75.75 0 0 0 1.5 0 .75.75 0 0 1 .75.75 1.5 1.5 0 0 1-1.5 1.5A2.25 2.25 0 0 1 8 9.5m11.5-5.25a.75.75 0 0 1 .75.75v.75H21a.75.75 0 0 1 0 1.5h-.75V8a.75.75 0 0 1-1.5 0v-.75H18a.75.75 0 0 1 0-1.5h.75V5a.75.75 0 0 1 .75-.75m-14 8.5a.75.75 0 0 0-1.166-.624l-3 2a.75.75 0 1 0 .832 1.248L4 14.151v4.599A3.25 3.25 0 0 0 7.25 22h9.5A3.25 3.25 0 0 0 20 18.75v-4.599l1.834 1.223a.75.75 0 1 0 .832-1.248l-3-2a.75.75 0 0 0-1.166.624v6a1.75 1.75 0 0 1-1.75 1.75h-9.5a1.75 1.75 0 0 1-1.75-1.75z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedGiftOpen',
  mixins: [icon]
};
</script>
