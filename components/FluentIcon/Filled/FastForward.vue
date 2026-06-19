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
    <path :fill="fill" :fill-opacity="opacity" d="M13.97 4.363c-.974-.83-2.472-.137-2.472 1.142v3.988L5.47 4.363c-.974-.829-2.472-.136-2.472 1.143v12.993c0 .878.707 1.48 1.465 1.502h.087c.318-.01.64-.122.92-.36l6.028-5.13v3.987c0 1.279 1.498 1.971 2.472 1.142l7.41-6.306a1.75 1.75 0 0 0 0-2.665z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledFastForward',
  mixins: [icon]
};
</script>
