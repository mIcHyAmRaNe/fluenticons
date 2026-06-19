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
    <path :fill="fill" :fill-opacity="opacity" d="M16.75 4h-9.5A2.75 2.75 0 0 0 4.5 6.75V8a3.5 3.5 0 0 1 3.465 3h8.07A3.5 3.5 0 0 1 19.5 8V6.75A2.75 2.75 0 0 0 16.75 4m.25 7.5a2.5 2.5 0 0 1 5 0v2.75a2.75 2.75 0 0 1-2.5 2.739v1.261a.75.75 0 0 1-1.5 0V17H6v1.25a.75.75 0 0 1-1.5 0v-1.261A2.75 2.75 0 0 1 2 14.25V11.5a2.5 2.5 0 0 1 5 0 .5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledCouch',
  mixins: [icon]
};
</script>
