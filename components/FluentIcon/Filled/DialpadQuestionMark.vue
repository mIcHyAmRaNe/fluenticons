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
    <path :fill="fill" :fill-opacity="opacity" d="M12 2.75a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m1.5 6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m-6.496 3.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m4.996 0c.301 0 .582.089.817.242a6.5 6.5 0 0 0-1.526 2.58A1.5 1.5 0 0 1 12 12.75m4.996-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-8.492 1.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m9.992-5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M7.004 2.75a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-6.125 2.875a.625.625 0 1 1 1.25 0 .625.625 0 0 1-1.25 0m-1.229-4.547c-.01-1.136.806-1.954 1.854-1.954 1.031 0 1.853.846 1.853 1.95 0 .509-.15.841-.528 1.292l-.135.155-.265.29-.101.116-.085.104c-.18.232-.24.387-.24.59a.5.5 0 1 1-1 0c0-.517.152-.853.536-1.31l.136-.157.265-.29.1-.113.093-.116c.169-.22.224-.37.224-.561 0-.558-.38-.95-.853-.95-.494 0-.86.366-.854.945a.5.5 0 1 1-1 .01" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledDialpadQuestionMark',
  mixins: [icon]
};
</script>
