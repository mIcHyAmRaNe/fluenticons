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
    <path :fill="fill" :fill-opacity="opacity" d="M16.274 7.554a.5.5 0 0 1 .452 0l3.5 1.769a.5.5 0 0 1 .274.446v4.465a.5.5 0 0 1-.274.446l-3.5 1.77a.5.5 0 0 1-.452 0l-3.5-1.77a.5.5 0 0 1-.274-.446V9.77a.5.5 0 0 1 .274-.446zm1.128-1.339a2 2 0 0 0-1.804 0l-3.5 1.77A2 2 0 0 0 11 9.768v4.465a2 2 0 0 0 1.098 1.785l3.5 1.77a2 2 0 0 0 1.804 0l3.5-1.77A2 2 0 0 0 22 14.234V9.77a2 2 0 0 0-1.098-1.785zM4 7.745a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75m-2 4a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75m2.75 3.25a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zm8.832-4.59a.75.75 0 0 1 1.008-.328l1.91.971 1.91-.972a.75.75 0 1 1 .68 1.337l-1.84.937v1.902a.75.75 0 0 1-1.5 0V12.35l-1.84-.937a.75.75 0 0 1-.328-1.008" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedCubeQuick',
  mixins: [icon]
};
</script>
