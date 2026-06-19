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
    <path :fill="fill" :fill-opacity="opacity" d="M13.025 15.5a5 5 0 0 1 .391-1.5H6.253a2.25 2.25 0 0 0-2.25 2.25v.577c0 .892.32 1.756.9 2.435 1.565 1.834 3.952 2.74 7.097 2.74q1.764 0 3.205-.38l-.295-1.474q-1.274.353-2.91.353c-2.738 0-4.704-.745-5.957-2.213a2.25 2.25 0 0 1-.54-1.461v-.578a.75.75 0 0 1 .75-.749zM17 7.005a5 5 0 1 0-10 0 5 5 0 0 0 10 0m-8.5 0a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M22 16c0 1.38-.699 2.598-1.763 3.317l-.136.683h-4.2l-.137-.683A4 4 0 1 1 22 16m-5.9 5 .16.794A1.5 1.5 0 0 0 17.73 23h.54a1.5 1.5 0 0 0 1.472-1.206L19.9 21z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedPersonLightbulb',
  mixins: [icon]
};
</script>
