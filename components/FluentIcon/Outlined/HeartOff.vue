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
    <path :fill="fill" :fill-opacity="opacity" d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l1.855 1.856a5.375 5.375 0 0 0-.5 8.044l7.895 7.896a.75.75 0 0 0 1.06 0l3.744-3.742 4.445 4.447a.75.75 0 0 0 1.061-1.061zm11.933 14.054L12 19.484 4.635 12.12a3.875 3.875 0 0 1 .512-5.912zm4.155-4.153-2.033 2.032 1.06 1.06 2.037-2.034a5.38 5.38 0 0 0-7.612-7.6l-.821.823-.823-.823A5.36 5.36 0 0 0 7.19 4.008l1.89 1.891c.374.183.724.43 1.034.74l1.358 1.358a.75.75 0 0 0 1.073-.013L13.88 6.64a3.88 3.88 0 0 1 5.49 0 3.876 3.876 0 0 1-.002 5.481" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedHeartOff',
  mixins: [icon]
};
</script>
