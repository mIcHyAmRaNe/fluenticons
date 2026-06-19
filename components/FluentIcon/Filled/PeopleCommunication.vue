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
    <path :fill="fill" :fill-opacity="opacity" d="M13.11 13.611a5.5 5.5 0 0 1 7.779 7.779.75.75 0 0 1-1.06-1.06 4 4 0 1 0-5.658 0 .75.75 0 0 1-1.06 1.06 5.5 5.5 0 0 1 0-7.779M11.75 13q.261 0 .506.058A6.48 6.48 0 0 0 10.5 17.5c0 .721.12 1.414.336 2.063C10.084 19.83 9.153 20 8 20c-6 0-6-4.5-6-4.5v-.25A2.25 2.25 0 0 1 4.25 13zm3.136 2.379a3 3 0 0 1 4.243 4.242.75.75 0 0 1-1.062-1.06 1.5 1.5 0 1 0-2.12 0 .75.75 0 0 1-1.061 1.06 3 3 0 0 1 0-4.242M8 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8m9 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledPeopleCommunication',
  mixins: [icon]
};
</script>
