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
    <path :fill="fill" :fill-opacity="opacity" d="M18.75 4A3.25 3.25 0 0 1 22 7.25v9.5A3.25 3.25 0 0 1 18.75 20H5.25A3.25 3.25 0 0 1 2 16.75v-9.5A3.25 3.25 0 0 1 5.25 4zm-8.744 4.545a.75.75 0 0 0-.961.45L7.5 13.242 5.955 8.994a.75.75 0 0 0-1.41.512L6.46 14.77a1.107 1.107 0 0 0 2.08 0l1.915-5.265a.75.75 0 0 0-.45-.961M12.25 8.5a.75.75 0 0 0-.75.75v5.5a.75.75 0 0 0 1.5 0v-5.5a.75.75 0 0 0-.75-.75m3 0a.75.75 0 0 0-.75.75v5.5a.75.75 0 0 0 1.5 0V13h1.25a2.25 2.25 0 0 0 0-4.5zm2 1.5a.75.75 0 0 1 0 1.5H16V10z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledVip',
  mixins: [icon]
};
</script>
