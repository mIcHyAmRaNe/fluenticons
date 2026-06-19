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
    <path :fill="fill" :fill-opacity="opacity" d="M4 8.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M5.5 5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7m7.713 3.224C12.5 9.026 12 10.274 12 12c0 1.727.501 2.974 1.213 3.776C13.919 16.573 14.892 17 16 17s2.081-.427 2.788-1.224q.25-.281.46-.636c.22-.371.597-.64 1.028-.64.7 0 1.209.675.891 1.3q-.368.723-.883 1.304C19.18 18.347 17.654 19 16 19s-3.18-.653-4.284-1.896C10.618 15.866 10 14.114 10 12s.618-3.866 1.716-5.104C12.82 5.653 14.346 5 16 5s3.18.653 4.284 1.896q.514.582.883 1.304c.318.625-.191 1.3-.891 1.3-.431 0-.809-.269-1.027-.64a4 4 0 0 0-.461-.636C18.08 7.427 17.108 7 16 7s-2.081.427-2.787 1.224" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTemperatureDegreeCelsius',
  mixins: [icon]
};
</script>
