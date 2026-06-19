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
    <path :fill="fill" :fill-opacity="opacity" d="m16.5 17.56 4.22 4.22a.75.75 0 0 0 1.06-1.06L3.28 2.22a.75.75 0 1 0-1.06 1.06l8.56 8.56-4.516 3.839a.75.75 0 1 0 .972 1.143l3.764-3.2v7.628a.75.75 0 0 0 1.28.53zm-3.594-3.593L15.44 16.5l-2.94 2.94v-5.818zm4.33-5.646-3.099 2.634-1.064-1.064 2.572-2.186L12.5 4.561v4.757l-1.5-1.5V2.75a.75.75 0 0 1 1.28-.53l5 5a.75.75 0 0 1-.044 1.101" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedBluetoothDisabled',
  mixins: [icon]
};
</script>
