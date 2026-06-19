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
    <path :fill="fill" :fill-opacity="opacity" d="M7.182 7.519a1 1 0 0 1 .05 1.413L5.301 11H10a1 1 0 1 1 0 2H5.301l1.93 2.068a1 1 0 0 1-1.462 1.364L2.27 12.685A1 1 0 0 1 2 12a1 1 0 0 1 .27-.684l3.5-3.748a1 1 0 0 1 1.413-.049m9.636 0a1 1 0 0 0-.05 1.413L18.699 11H14a1 1 0 1 0 0 2h4.699l-1.93 2.068a1 1 0 0 0 1.462 1.364l3.498-3.747a1 1 0 0 0 .149-.205 1 1 0 0 0-.148-1.163l-3.499-3.75a1 1 0 0 0-1.413-.048" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledArrowFit',
  mixins: [icon]
};
</script>
