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
    <path :fill="fill" :fill-opacity="opacity" d="M7 3a1 1 0 0 1 1 1v13.586l.293-.293a1 1 0 0 1 1.414 1.414l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414l.293.293V4a1 1 0 0 1 1-1m8 12a1 1 0 1 1 2 0v2.586l.293-.293a1 1 0 0 1 1.414 1.414l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414l.293.293zm5-11a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0V9h1a1 1 0 1 0 0-2h-1zm-8 0a1 1 0 1 0 0 2h3v.25c0 .895-.184 1.87-.642 2.586C13.939 9.49 13.255 10 12 10a1 1 0 1 0 0 2c1.945 0 3.26-.864 4.042-2.086.742-1.158.958-2.56.958-3.664V5a1 1 0 0 0-1-1z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTextDirectionVertical',
  mixins: [icon]
};
</script>
