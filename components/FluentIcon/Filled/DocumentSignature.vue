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
    <path :fill="fill" :fill-opacity="opacity" d="M12 8V2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4.35l-2.862 2.861a3.7 3.7 0 0 1-1.712.97l-1.83.457a2.08 2.08 0 0 1-2.29-.938H7.75a.75.75 0 0 1 0-1.5h3.293l.021-.093.458-1.83c.162-.648.497-1.24.97-1.712L16.355 10H14a2 2 0 0 1-2-2m6.695-.305q-.156.123-.301.267l-.538.538H14a.5.5 0 0 1-.5-.5V2.5zm.405.974-5.903 5.903a2.7 2.7 0 0 0-.706 1.247l-.458 1.831a1.087 1.087 0 0 0 1.319 1.318l1.83-.457a2.7 2.7 0 0 0 1.248-.707l5.902-5.902A2.286 2.286 0 0 0 19.1 8.669" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledDocumentSignature',
  mixins: [icon]
};
</script>
