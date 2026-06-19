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
    <path :fill="fill" :fill-opacity="opacity" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12a9.98 9.98 0 0 1 3.855-7.888C6.34 3.735 7 4.108 7 4.722a.84.84 0 0 1-.322.651 8.5 8.5 0 1 0 6.072-1.839V5.25a.75.75 0 0 1-1.5 0V2.722l.003-.034.002-.026A.704.704 0 0 1 11.94 2zM6.887 7.861c-.259-.603.371-1.233.974-.974l.13.07 1.57 1.038c.584.388 1.201.801 1.778 1.193.576.39 1.114.76 1.536 1.061.404.288.745.543.89.688a2 2 0 0 1-2.828 2.829c-.145-.146-.4-.487-.688-.891-.3-.422-.67-.96-1.06-1.537A308 308 0 0 1 6.955 7.99z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedGaugeRotate315',
  mixins: [icon]
};
</script>
