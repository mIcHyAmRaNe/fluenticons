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
    <path :fill="fill" :fill-opacity="opacity" d="M2.22 2.22a.75.75 0 0 1 1.06 0l18.5 18.5a.75.75 0 0 1-1.06 1.06l-8.334-8.334a1.5 1.5 0 0 1-.388.054 1.5 1.5 0 0 1-1.447-1.889l-1.86-1.86a4 4 0 0 0 .48 5.077 1 1 0 0 1-1.414 1.414A6 6 0 0 1 7.26 8.32L5.837 6.897a8 8 0 0 0 .506 10.76 1.001 1.001 0 0 1-1.414 1.414c-3.727-3.727-3.896-9.663-.51-13.592l-2.2-2.199a.75.75 0 0 1 0-1.06m15.436 2.709a1 1 0 0 1 1.414 0c3.358 3.358 3.825 8.508 1.409 12.369l-1.461-1.461a8 8 0 0 0-1.362-9.494 1 1 0 0 1 0-1.414m-2.829 2.828a1 1 0 0 1 1.414 0 6 6 0 0 1 1.282 6.585l-1.595-1.595a4 4 0 0 0-1.1-3.576 1 1 0 0 1 0-1.414" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledLiveOff',
  mixins: [icon]
};
</script>
