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
    <path :fill="fill" :fill-opacity="opacity" d="M6.75 7.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zM6 11.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75m.75 2.25a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zM5.25 4h11.5a3.25 3.25 0 0 1 3.245 3.066L20 7.25v8.5a3.25 3.25 0 0 1-3.066 3.245L16.75 19H5.25a3.25 3.25 0 0 1-3.245-3.066L2 15.75v-8.5a3.25 3.25 0 0 1 3.066-3.245zM3.5 7.2v8.55a1.75 1.75 0 0 0 1.606 1.744l.144.006h11.5a1.75 1.75 0 0 0 1.744-1.607l.006-.143V7.2a1.75 1.75 0 0 0-1.75-1.7H5.25a1.75 1.75 0 0 0-1.744 1.606l-.004.094zm17.5.311a3.25 3.25 0 0 1 1.5 2.739v6c0 2.9-2.35 5.25-5.25 5.25h-9A3.25 3.25 0 0 1 5.511 20H17.25A3.75 3.75 0 0 0 21 16.25z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedSlideTextMultiple',
  mixins: [icon]
};
</script>
