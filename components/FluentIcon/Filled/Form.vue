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
    <path :fill="fill" :fill-opacity="opacity" d="M8.25 10a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m-.75 6.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75zm3 4.5a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0M8.25 14a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M12 10.75c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0-.75.75m.75 4.75a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zM6 6.25c0 .414.336.75.75.75h10.5a.75.75 0 0 0 0-1.5H6.75a.75.75 0 0 0-.75.75" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledForm',
  mixins: [icon]
};
</script>
