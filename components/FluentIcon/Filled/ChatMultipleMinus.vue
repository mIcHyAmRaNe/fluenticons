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
    <path :fill="fill" :fill-opacity="opacity" d="M2 10.5a7.5 7.5 0 1 1 4.411 6.836c-1.258.29-2.613.54-3.236.652a.996.996 0 0 1-1.153-1.17c.118-.61.38-1.918.681-3.143A7.5 7.5 0 0 1 2 10.5m4.5-.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zM14.562 21a7.48 7.48 0 0 1-5.1-2h.1c.718 0 1.415-.089 2.08-.256.865.482 1.86.756 2.92.756.96 0 1.866-.225 2.67-.625l.243-.121.264.063c.922.22 1.966.446 2.74.61-.175-.751-.414-1.756-.642-2.651l-.07-.276.13-.253a6 6 0 0 0 .665-2.747 6 6 0 0 0-2.747-5.042 8.4 8.4 0 0 0-.8-2.047 7.503 7.503 0 0 1 4.344 10.263c.253 1.008.509 2.1.671 2.803a1.244 1.244 0 0 1-1.467 1.5 133 133 0 0 1-2.913-.64 7.5 7.5 0 0 1-3.088.663" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledChatMultipleMinus',
  mixins: [icon]
};
</script>
