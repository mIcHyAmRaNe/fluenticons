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
    <path :fill="fill" :fill-opacity="opacity" d="M20.952 3.047a3.58 3.58 0 0 0-5.06 0L3.94 15a3.1 3.1 0 0 0-.825 1.477l-1.095 4.6a.75.75 0 0 0 .904.903l4.601-1.095a3.1 3.1 0 0 0 1.477-.826l1.151-1.15a6.5 6.5 0 0 1-.127-1.995l-2.085 2.085c-.21.21-.474.358-.763.427l-3.416.813.813-3.416c.069-.289.217-.553.427-.763l11.95-11.952a2.078 2.078 0 1 1 2.94 2.94l-3.979 3.978a6.6 6.6 0 0 1 1.994.127l3.045-3.045a3.58 3.58 0 0 0 0-5.06M22 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-7.146-2.354a.5.5 0 0 0-.708.708l1.647 1.646-1.647 1.646a.5.5 0 0 0 .708.708l1.646-1.647 1.646 1.647a.5.5 0 0 0 .708-.708L17.207 17.5l1.647-1.646a.5.5 0 0 0-.708-.708L16.5 16.793z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedPenDismiss',
  mixins: [icon]
};
</script>
