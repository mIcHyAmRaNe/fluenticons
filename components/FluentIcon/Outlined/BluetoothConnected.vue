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
    <path :fill="fill" :fill-opacity="opacity" d="M11.463 2.057a.75.75 0 0 1 .817.163l5 5a.75.75 0 0 1-.044 1.101L12.908 12l4.328 3.679a.75.75 0 0 1 .044 1.101l-5 5a.75.75 0 0 1-1.28-.53v-7.628l-3.764 3.2a.75.75 0 0 1-.972-1.143L10.592 12 6.264 8.321a.75.75 0 0 1 .972-1.142l3.764 3.2V2.75a.75.75 0 0 1 .463-.693M12.5 13.622v5.817l3.145-3.144zm0-3.244 3.145-2.673L12.5 4.561zM20 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedBluetoothConnected',
  mixins: [icon]
};
</script>
