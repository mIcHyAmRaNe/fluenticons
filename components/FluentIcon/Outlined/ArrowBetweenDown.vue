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
    <path :fill="fill" :fill-opacity="opacity" d="M6 1.75a.75.75 0 0 0-1.5 0v.5A2.25 2.25 0 0 0 6.75 4.5h10A2.25 2.25 0 0 0 19 2.25v-.5a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 1-.75.75h-10A.75.75 0 0 1 6 2.25zM11.75 6a.75.75 0 0 1 .75.75v8.69l3.72-3.72a.75.75 0 1 1 1.06 1.06l-5 5a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 1 1 1.06-1.06L11 15.44V6.75a.75.75 0 0 1 .75-.75M4.5 21.75a2.25 2.25 0 0 1 2.25-2.25h10A2.25 2.25 0 0 1 19 21.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 0-.75-.75h-10a.75.75 0 0 0-.75.75v.5a.75.75 0 0 1-1.5 0z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedArrowBetweenDown',
  mixins: [icon]
};
</script>
