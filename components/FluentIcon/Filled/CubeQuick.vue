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
    <path :fill="fill" :fill-opacity="opacity" d="M15.598 6.215a2 2 0 0 1 1.804 0l3.5 1.77A2 2 0 0 1 22 9.768v4.465a2 2 0 0 1-1.098 1.785l-3.5 1.77a2 2 0 0 1-1.804 0l-3.5-1.77A2 2 0 0 1 11 14.234V9.77a2 2 0 0 1 1.098-1.785zm-2.016 4.19a.75.75 0 0 0 .328 1.009l1.84.936v1.903a.75.75 0 1 0 1.5 0V12.35l1.84-.936a.75.75 0 0 0-.68-1.337l-1.91.972-1.91-.972a.75.75 0 0 0-1.008.328M4.75 6.995a.75.75 0 1 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zm-2 4a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zM4 15.745a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledCubeQuick',
  mixins: [icon]
};
</script>
