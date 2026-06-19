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
    <path :fill="fill" :fill-opacity="opacity" d="M16.25 3.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m2.5 1c0 1.12-.736 2.067-1.75 2.386V9.25a2.25 2.25 0 0 0 4.5 0V9h-1.25a.75.75 0 0 1-.53-1.28l2-2a.75.75 0 0 1 1.28.53v3a3.75 3.75 0 1 1-7.5 0V6.886A2.501 2.501 0 1 1 18.75 4.5M12.785 4H5.25l-.186.005a3.25 3.25 0 0 0-3.048 2.919L12 12.154l2.733-1.432A4.8 4.8 0 0 1 14.5 9.25V7.532A3.5 3.5 0 0 1 12.785 4m2.632 8.057-3.069 1.607a.75.75 0 0 1-.696 0L2 8.608v8.142l.005.184A3.25 3.25 0 0 0 5.25 20h13.5l.184-.005A3.25 3.25 0 0 0 22 16.75v-3.627a4.73 4.73 0 0 1-2.75.877 4.74 4.74 0 0 1-3.833-1.944" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledMailFishHook',
  mixins: [icon]
};
</script>
