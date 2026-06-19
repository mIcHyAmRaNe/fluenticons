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
    <path :fill="fill" :fill-opacity="opacity" d="M11.75 2a.75.75 0 0 1 .75.75v3.155l2.133-2.134a.75.75 0 1 1 1.061 1.061L12.5 8.026V11h2.974l3.194-3.194a.75.75 0 0 1 1.06 1.06L17.596 11h3.155a.75.75 0 0 1 0 1.5h-3.155l2.134 2.133a.75.75 0 1 1-1.061 1.061L15.474 12.5H12.5v2.974l3.194 3.194a.75.75 0 0 1-1.06 1.06L12.5 17.596v3.155a.75.75 0 0 1-1.5 0v-3.155L8.867 19.73a.75.75 0 1 1-1.061-1.061L11 15.474V12.5H8.026l-3.194 3.194a.75.75 0 0 1-1.06-1.06L5.904 12.5H2.75a.75.75 0 0 1 0-1.5h3.155L3.77 8.867a.75.75 0 0 1 1.061-1.061L8.026 11H11V8.026L7.806 4.832a.75.75 0 1 1 1.06-1.06L11 5.904V2.75a.75.75 0 0 1 .75-.75" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedWeatherSnowflake',
  mixins: [icon]
};
</script>
