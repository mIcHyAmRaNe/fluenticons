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
    <path :fill="fill" :fill-opacity="opacity" d="M12 2.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M13.25 9a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0m-6.246 3.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5m4.996 0c.297 0 .57.104.784.277a6.5 6.5 0 0 0-1.336 2.095A1.25 1.25 0 0 1 12 12.75m4.996-5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M8.254 9a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0m9.992-5a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0M7.004 2.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m0 7.751a.625.625 0 1 0 0 1.249.625.625 0 0 0 0-1.249m0-5.877c-1.048 0-1.864.817-1.854 1.954a.5.5 0 0 0 1-.01c-.005-.578.36-.944.854-.944.472 0 .853.392.853.95 0 .192-.055.342-.224.561l-.094.116-.099.113-.265.29-.136.157c-.384.457-.535.793-.535 1.31a.5.5 0 0 0 1 0c0-.203.058-.358.239-.59l.085-.104.1-.115.266-.29.135-.156c.378-.45.528-.783.528-1.292 0-1.104-.822-1.95-1.853-1.95" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedDialpadQuestionMark',
  mixins: [icon]
};
</script>
