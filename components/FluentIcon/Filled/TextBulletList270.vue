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
    <path :fill="fill" :fill-opacity="opacity" d="M16.5 20.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m.5-4V2.995a1 1 0 0 1 1.993-.117l.007.117V16.5a1 1 0 0 1-1.993.117zm-6.5 4a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m.5-4V2.995a1 1 0 0 1 1.993-.117l.007.117V16.5a1 1 0 0 1-1.993.117zm-6.492 4a1.5 1.5 0 1 1 2.999 0 1.5 1.5 0 0 1-3 0m.493-4V2.995a1 1 0 0 1 1.993-.117L7 2.995V16.5a1 1 0 0 1-1.993.117z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTextBulletList270',
  mixins: [icon]
};
</script>
