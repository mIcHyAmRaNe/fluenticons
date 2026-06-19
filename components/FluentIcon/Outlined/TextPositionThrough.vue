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
    <path :fill="fill" :fill-opacity="opacity" d="M3.75 4a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5zM3 8.25a.75.75 0 0 1 .75-.75h4.68A5 5 0 0 0 7.415 9H3.75A.75.75 0 0 1 3 8.25M15.465 9a4 4 0 0 0-1.527-1.5A4 4 0 0 0 12 7c-.703 0-1.364.181-1.938.5A4 4 0 0 0 8.535 9 4 4 0 0 0 8 11v4.75a.75.75 0 0 0 .75.75.75.75 0 0 0 .75-.75V11A2.496 2.496 0 0 1 12 8.5a2.496 2.496 0 0 1 2.5 2.5v4.75a.747.747 0 0 0 .75.75.75.75 0 0 0 .75-.75V11c0-.729-.195-1.412-.535-2M3.75 11H7v1.5H3.75a.75.75 0 0 1 0-1.5m0 3.5H7v1.25q0 .127.018.25H3.75a.75.75 0 0 1 0-1.5m9.75 1.25q0 .127.018.25h-3.036q.018-.123.018-.25V14.5h3zm6.75-3.25H17V11h3.25a.75.75 0 0 1 0 1.5M17 15.75q0 .127-.018.25h3.268a.75.75 0 0 0 0-1.5H17zm-3.5-3.25h-3V11h3zm2.07-5A5 5 0 0 1 16.585 9h3.666a.75.75 0 0 0 0-1.5zM3.75 18a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTextPositionThrough',
  mixins: [icon]
};
</script>
