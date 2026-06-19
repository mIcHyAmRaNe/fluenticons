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
    <path :fill="fill" :fill-opacity="opacity" d="M12.728 2.216a.75.75 0 0 1 .544-.212 9 9 0 0 1 8.724 8.724.75.75 0 0 1-.75.772H13.25a.75.75 0 0 1-.75-.75V2.754a.75.75 0 0 1 .228-.538M14 3.566V10h6.434A7.504 7.504 0 0 0 14 3.566m-3 1.199a.75.75 0 0 0-.817-.747 9 9 0 1 0 9.779 9.801.75.75 0 0 0-.747-.819H13.25A2.25 2.25 0 0 1 11 10.75zM3.5 12.98a7.5 7.5 0 0 1 6-7.35v5.119a3.75 3.75 0 0 0 3.75 3.75h5.096A7.5 7.5 0 0 1 3.5 12.981" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedDataPie',
  mixins: [icon]
};
</script>
