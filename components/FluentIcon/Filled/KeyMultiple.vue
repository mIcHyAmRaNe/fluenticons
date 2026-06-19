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
    <path :fill="fill" :fill-opacity="opacity" d="M12.908 2.082a5 5 0 0 0-5.833 5.783L2.22 12.72a.75.75 0 0 0-.22.53v4c0 .414.336.75.75.75h3.5a.75.75 0 0 0 .75-.75V15.5h2.25a.75.75 0 0 0 .75-.75v-1.69l1.458-1.457A6.47 6.47 0 0 1 10 7.5a6.5 6.5 0 0 1 2.908-5.418M11 7.5a5.5 5.5 0 1 1 8.5 4.61v2.58l1.276 1.28a.75.75 0 0 1 0 1.06l-.967.97.967.97a.75.75 0 0 1-.046 1.102l-3.245 2.75a.75.75 0 0 1-.99-.017l-2.75-2.5a.75.75 0 0 1-.245-.555v-7.64A5.5 5.5 0 0 1 11 7.5m6.5-1a1 1 0 1 0-2 0 1 1 0 0 0 2 0" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledKeyMultiple',
  mixins: [icon]
};
</script>
