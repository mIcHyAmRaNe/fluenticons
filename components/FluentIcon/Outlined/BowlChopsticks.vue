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
    <path :fill="fill" :fill-opacity="opacity" d="M6.4 2.376a.75.75 0 0 0-1.3.748L9.635 11H2.75a.75.75 0 0 0-.75.75V12c0 5.523 4.477 10 10 10s10-4.477 10-10v-.25a.75.75 0 0 0-.75-.75h-5.885L10.4 2.376a.75.75 0 0 0-1.3.748L13.635 11h-2.27zM4.788 16.5h14.424a8.5 8.5 0 0 1-7.212 4 8.5 8.5 0 0 1-7.212-4M4.045 15a8.5 8.5 0 0 1-.53-2.5h16.97a8.5 8.5 0 0 1-.53 2.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedBowlChopsticks',
  mixins: [icon]
};
</script>
