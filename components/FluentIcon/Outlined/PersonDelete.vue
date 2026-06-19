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
    <path :fill="fill" :fill-opacity="opacity" d="M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m-5.477 2a6.5 6.5 0 0 0-.709 1.5h-7.06a.75.75 0 0 0-.75.75v.907c0 .656.286 1.28.783 1.707C5.545 19.945 7.441 20.5 10 20.5q.9 0 1.688-.09c.25.5.563.963.93 1.38Q11.413 22 10 22c-2.89 0-5.128-.656-6.69-2a3.75 3.75 0 0 1-1.306-2.844v-.907A2.25 2.25 0 0 1 4.254 14zm3.07.966-.069.058-.058.07a.5.5 0 0 0 0 .568l.058.07 1.77 1.769-1.767 1.767-.058.069a.5.5 0 0 0 0 .569l.058.069.069.058a.5.5 0 0 0 .569 0l.069-.058 1.767-1.767 1.769 1.77.069.057a.5.5 0 0 0 .569 0l.069-.058.058-.07a.5.5 0 0 0 0-.568l-.058-.069-1.77-1.77 1.773-1.768.058-.07a.5.5 0 0 0 0-.568l-.058-.07-.07-.057a.5.5 0 0 0-.568 0l-.07.057-1.771 1.77-1.77-1.77-.069-.057a.5.5 0 0 0-.492-.044zM10 2.005a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedPersonDelete',
  mixins: [icon]
};
</script>
