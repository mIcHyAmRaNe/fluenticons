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
    <path :fill="fill" :fill-opacity="opacity" d="M12 2a1 1 0 0 1 1 1v2.551l1.707-1.706a1 1 0 1 1 1.414 1.414L13 8.379V11h2.62l3.121-3.12a1 1 0 1 1 1.414 1.413L18.45 11H21a1 1 0 1 1 0 2h-2.551l1.706 1.707a1 1 0 0 1-1.414 1.414L15.621 13H13v2.62l3.12 3.121a1 1 0 0 1-1.413 1.414L13 18.45V21a1 1 0 1 1-2 0v-2.551l-1.707 1.706a1 1 0 0 1-1.414-1.414L11 15.621V13H8.38l-3.121 3.12a1 1 0 0 1-1.414-1.413L5.55 13H3a1 1 0 1 1 0-2h2.551L3.845 9.293A1 1 0 1 1 5.259 7.88L8.379 11H11V8.38L7.88 5.259a1 1 0 0 1 1.413-1.414L11 5.55V3a1 1 0 0 1 1-1" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledWeatherSnowflake',
  mixins: [icon]
};
</script>
