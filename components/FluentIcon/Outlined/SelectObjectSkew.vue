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
    <path :fill="fill" :fill-opacity="opacity" d="M18.882 6.658a2 2 0 0 0 1.33.33 2 2 0 1 0-1.33-.33M14 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0M4 21a2 2 0 1 1 0-4 2 2 0 0 1 0 4M6.882 6.658a2 2 0 0 0 1.33.33A2.002 2.002 0 0 0 9.855 4.25a2 2 0 1 0-2.973 2.408m-.401.93L4.077 16a3 3 0 0 1 1.442.412l2.404-8.414a3 3 0 0 1-1.442-.412M17.095 5.75h-6.19a3 3 0 0 0 0-1.5h6.19a3 3 0 0 0 0 1.5m-4 14a3 3 0 0 1 0-1.5h-6.19a3 3 0 0 1 0 1.5zm2.982-3.749 2.404-8.414c.425.25.917.399 1.442.412l-2.404 8.414A3 3 0 0 0 16.077 16" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedSelectObjectSkew',
  mixins: [icon]
};
</script>
