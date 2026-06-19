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
    <path :fill="fill" :fill-opacity="opacity" d="M5.454 6.515 2.22 3.28a.75.75 0 1 1 1.06-1.06l18.5 18.5a.75.75 0 0 1-1.06 1.06L17 18.06v3.19a.75.75 0 0 1-1.093.668l-.09-.055L12 19.176l-3.816 2.687a.75.75 0 0 1-1.175-.508L7 21.25l-.002-7.352A6.98 6.98 0 0 1 5 9c0-.875.16-1.713.454-2.485M15.499 16.56l-1.014-1.014A7 7 0 0 1 12 16c-1.275 0-2.47-.34-3.5-.936v4.74l3.067-2.159a.75.75 0 0 1 .763-.06l.1.06 3.07 2.16zm-2.211-2.211L6.652 7.712a5.5 5.5 0 0 0 6.636 6.636M17.5 9c0 1.473-.579 2.81-1.521 3.797l1.06 1.061A7 7 0 0 0 7.142 3.96l1.062 1.061A5.5 5.5 0 0 1 17.5 9" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedRibbonOff',
  mixins: [icon]
};
</script>
