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
    <path :fill="fill" :fill-opacity="opacity" d="M22.453 1.923a.75.75 0 0 1 0 1.06L16.14 9.296a6.8 6.8 0 0 0-1.068-1.053l6.32-6.32a.75.75 0 0 1 1.061 0M15.03 9.347a5.75 5.75 0 0 0-8.132 0l-.244.244 8.132 8.132.244-.244a5.75 5.75 0 0 0 0-8.132M1.885 12.966l3.613-2.409 8.32 8.321-2.408 3.613a.75.75 0 0 1-1.154.115L1.77 14.12a.75.75 0 0 1 .115-1.154" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledBroom',
  mixins: [icon]
};
</script>
