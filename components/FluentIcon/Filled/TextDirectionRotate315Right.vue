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
    <path :fill="fill" :fill-opacity="opacity" d="M11.5 2a1 1 0 1 0 0 2h.086L8.543 7.043a1 1 0 0 0 1.414 1.414L13 5.414V5.5a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1zM3.428 7.596a1 1 0 0 0-1.332 1.332l4.5 9.5a1 1 0 1 0 1.808-.856l-1.145-2.417 2.396-2.396 2.417 1.145a1 1 0 1 0 .856-1.808zm4.308 4.254L6.35 13.236l-1.248-2.634zM18.5 9a1 1 0 1 0 0 2h.086l-9.293 9.293a1 1 0 0 0 1.414 1.414L20 12.414v.086a1 1 0 1 0 2 0V10a1 1 0 0 0-1-1z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTextDirectionRotate315Right',
  mixins: [icon]
};
</script>
