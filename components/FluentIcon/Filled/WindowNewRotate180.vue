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
    <path :fill="fill" :fill-opacity="opacity" d="M6.25 21A3.25 3.25 0 0 1 3 17.75v-8.5a3.25 3.25 0 0 1 3.01-3.24A3.25 3.25 0 0 1 9.25 3h6A5.75 5.75 0 0 1 21 8.75v6a3.25 3.25 0 0 1-3.009 3.241A3.25 3.25 0 0 1 14.75 21zM18 16.48a1.75 1.75 0 0 0 1.5-1.73v-6a4.25 4.25 0 0 0-4.25-4.25h-6c-.882 0-1.609.652-1.73 1.5h7.23A3.25 3.25 0 0 1 18 9.25zm-5.75.52a.75.75 0 0 0 0-1.5H9.56l4.22-4.22a.75.75 0 1 0-1.06-1.06L8.5 14.44v-2.69a.75.75 0 0 0-1.5 0v4.5c0 .414.336.75.75.75z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledWindowNewRotate180',
  mixins: [icon]
};
</script>
