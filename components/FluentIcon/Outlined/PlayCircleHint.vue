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
    <path :fill="fill" :fill-opacity="opacity" d="M12 2c-.667 0-1.32.065-1.95.19a.75.75 0 0 0 .29 1.472 8.6 8.6 0 0 1 3.32 0 .75.75 0 0 0 .29-1.472A10 10 0 0 0 12 2M7.278 4.931a.75.75 0 0 0-.835-1.246 10 10 0 0 0-2.758 2.758.75.75 0 1 0 1.246.835A8.6 8.6 0 0 1 7.278 4.93m10.279-1.246a.75.75 0 0 0-.835 1.246 8.6 8.6 0 0 1 2.347 2.347.75.75 0 1 0 1.246-.835 10 10 0 0 0-2.758-2.758m4.253 6.364a.75.75 0 0 0-1.472.291 8.5 8.5 0 0 1 0 3.32.75.75 0 1 0 1.472.29 10 10 0 0 0 0-3.9m-18.148.291a.75.75 0 0 0-1.472-.29 10 10 0 0 0 0 3.9.75.75 0 0 0 1.472-.29 8.6 8.6 0 0 1 0-3.32m1.27 6.382a.75.75 0 0 0-1.247.835 10 10 0 0 0 2.758 2.758.75.75 0 0 0 .835-1.246 8.6 8.6 0 0 1-2.347-2.347m15.383.835a.75.75 0 0 0-1.246-.835 8.6 8.6 0 0 1-2.347 2.347.75.75 0 1 0 .835 1.246 10 10 0 0 0 2.758-2.758m-9.975 2.781a.75.75 0 1 0-.29 1.472 10 10 0 0 0 3.9 0 .75.75 0 0 0-.29-1.472 8.5 8.5 0 0 1-3.32 0M9 9.248a1.25 1.25 0 0 1 1.856-1.093l5.757 3.186a.75.75 0 0 1 0 1.311l-5.757 3.187A1.25 1.25 0 0 1 9 14.746z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedPlayCircleHint',
  mixins: [icon]
};
</script>
