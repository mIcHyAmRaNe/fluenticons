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
    <path :fill="fill" :fill-opacity="opacity" d="M16.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m-1.146-8.354a.5.5 0 0 1 0 .708l-.647.646h2.043A3.25 3.25 0 0 1 20 19.25v.25a.5.5 0 0 1-1 0v-.25A2.25 2.25 0 0 0 16.75 17h-2.043l.647.646a.5.5 0 0 1-.708.708l-1.5-1.5a.5.5 0 0 1 0-.708l1.5-1.5a.5.5 0 0 1 .708 0m.537-11.598a3.578 3.578 0 1 1 5.061 5.06L20.06 9 15 3.94zM13.94 5l-10 9.999a3.1 3.1 0 0 0-.825 1.477L2.02 21.077a.75.75 0 0 0 .904.903l4.601-1.095a3.1 3.1 0 0 0 1.477-.826l1.151-1.15a6.5 6.5 0 0 1 7.754-7.756L19 10.06z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledEditArrowBack',
  mixins: [icon]
};
</script>
