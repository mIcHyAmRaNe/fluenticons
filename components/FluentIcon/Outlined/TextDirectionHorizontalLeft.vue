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
    <path :fill="fill" :fill-opacity="opacity" d="M18.25 4a.75.75 0 0 1 .75.75V8h1.25a.75.75 0 0 1 0 1.5H19v3.75a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 .75-.75M9.5 5.75a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .747.682c.194 2.135-1.141 5.97-5.531 7.286a.75.75 0 0 1-.431-1.436c3.132-.94 4.298-3.398 4.46-5.032H10.25a.75.75 0 0 1-.75-.75m-4.28.47a.75.75 0 0 1 1.06 1.06L5.56 8h2.19a.75.75 0 0 1 0 1.5H5.56l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06zm0 8a.75.75 0 0 1 1.06 1.06l-.72.72h14.69a.75.75 0 0 1 0 1.5H5.56l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTextDirectionHorizontalLeft',
  mixins: [icon]
};
</script>
