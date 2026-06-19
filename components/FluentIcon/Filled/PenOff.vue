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
    <path :fill="fill" :fill-opacity="opacity" d="m14 15.06 6.72 6.72a.75.75 0 0 0 1.06-1.06L3.28 2.22a.75.75 0 0 0-1.06 1.06L8.94 10l-5 4.999a3.1 3.1 0 0 0-.825 1.476L2.02 21.077a.75.75 0 0 0 .904.903l4.601-1.096a3.1 3.1 0 0 0 1.477-.825zm4.995-2.53-1.642 1.642 1.061 1.06 1.642-1.641a3.25 3.25 0 0 0 .005-4.592l.891-.891a3.578 3.578 0 0 0-5.06-5.06l-4.832 4.83 5.061 5.061L19 10.06a1.75 1.75 0 0 1-.005 2.471" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledPenOff',
  mixins: [icon]
};
</script>
