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
    <path :fill="fill" :fill-opacity="opacity" d="M18.882 6.658a2 2 0 0 0 1.33.33 2 2 0 1 0-1.33-.33M2 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0M6.882 6.658a2 2 0 0 0 1.33.33A2.002 2.002 0 0 0 9.855 4.25a2 2 0 1 0-2.973 2.408m-2.805 9.343 2.404-8.414c.425.25.917.399 1.442.412L5.52 16.413A3 3 0 0 0 4.077 16M17.095 5.75h-6.19a3 3 0 0 0 0-1.5h6.19a3 3 0 0 0 0 1.5m-5.695 14a6.5 6.5 0 0 1-.357-1.5H6.905a3 3 0 0 1 0 1.5zm8.523-11.751-.908 3.179a6.5 6.5 0 0 0-1.51-.178l.976-3.413c.425.25.917.399 1.442.412M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-7.146-2.354a.5.5 0 0 0-.708.708l1.647 1.646-1.647 1.646a.5.5 0 0 0 .708.708l1.646-1.647 1.646 1.647a.5.5 0 0 0 .708-.708L18.207 17.5l1.647-1.646a.5.5 0 0 0-.708-.708L17.5 16.793z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedSelectObjectSkewDismiss',
  mixins: [icon]
};
</script>
