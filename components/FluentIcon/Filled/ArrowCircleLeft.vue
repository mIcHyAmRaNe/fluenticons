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
    <path :fill="fill" :fill-opacity="opacity" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m.28 14.53a.75.75 0 0 1-.976.073l-.085-.072-4-4.001a.75.75 0 0 1-.073-.977l.073-.084 4.001-4a.75.75 0 0 1 1.133.977l-.072.084-2.722 2.72h6.692a.75.75 0 0 1 .743.649L17 12a.75.75 0 0 1-.648.743l-.102.007H9.56l2.72 2.72a.75.75 0 0 1 .073.977z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledArrowCircleLeft',
  mixins: [icon]
};
</script>
