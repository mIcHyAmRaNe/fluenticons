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
    <path :fill="fill" :fill-opacity="opacity" d="M3 17.5v-4.088L4.488 14.9a3 3 0 0 0 4.243 0l1.37-1.37c-.062.265-.101.55-.101.845C10 16.232 11.394 18 13.5 18s3.5-1.768 3.5-3.625c0-.693-.214-1.32-.433-1.798a8 8 0 0 0-.77-1.3 11 11 0 0 0-.713-.891l-.008-.01-.325-.35-.014-.013a1.74 1.74 0 0 0-1.047-.503 3 3 0 0 0-.717-3.096L11.56 5h7.94A1.5 1.5 0 0 1 21 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedColorBackgroundAccent',
  mixins: [icon]
};
</script>
