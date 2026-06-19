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
    <path :fill="fill" :fill-opacity="opacity" d="M4.5 6.25c0-.966.784-1.75 1.75-1.75a.75.75 0 0 0 0-1.5A3.25 3.25 0 0 0 3 6.25a.75.75 0 0 0 1.5 0M9.75 3a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zM4.5 9.75a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0zm0 8a.75.75 0 0 0-1.5 0A3.25 3.25 0 0 0 6.25 21a.75.75 0 0 0 0-1.5 1.75 1.75 0 0 1-1.75-1.75m5.25 1.75a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zm5-16.5a.75.75 0 0 0-.75.75v16.5c0 .414.336.75.75.75h3A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zm.75 16.5v-15h2.25c.966 0 1.75.784 1.75 1.75v11.5a1.75 1.75 0 0 1-1.75 1.75z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedLayoutColumnOneThirdRightHint',
  mixins: [icon]
};
</script>
