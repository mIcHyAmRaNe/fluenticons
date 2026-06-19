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
    <path :fill="fill" :fill-opacity="opacity" d="M19.75 2A2.25 2.25 0 0 1 22 4.25v5.462a3.25 3.25 0 0 1-.952 2.298l-.026.026a6.5 6.5 0 0 0-9.028 8.92 3.256 3.256 0 0 1-4.043-.442L3.489 16.06a3.25 3.25 0 0 1-.004-4.596l8.5-8.51a3.25 3.25 0 0 1 2.3-.953zM17 5.502a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-6.125 3.005a.625.625 0 1 1 1.25 0 .625.625 0 0 1-1.25 0m-1.229-4.548c-.01-1.137.806-1.954 1.854-1.954 1.03 0 1.853.846 1.853 1.95 0 .566-.185.913-.663 1.447l-.266.29-.1.116c-.248.292-.324.462-.324.695a.5.5 0 0 1-1 0c0-.576.187-.926.67-1.468l.266-.29.1-.113c.242-.286.317-.453.317-.677 0-.558-.38-.95-.853-.95-.494 0-.86.366-.854.945a.5.5 0 0 1-1 .01" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTagQuestionMark',
  mixins: [icon]
};
</script>
